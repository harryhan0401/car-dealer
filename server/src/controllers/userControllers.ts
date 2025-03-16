import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            include: {
                favourites: {
                    select: { id: true }, // Only get the 'id' field from the favourites relation
                }
            }
        });

        if (user) {
            res.json(user)
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving user: ${error.message}` });
    }

}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId, firstName, lastName, email, phone, locationId } = req.body;
        const user = await prisma.user.create({
            data: {
                cognitoId,
                firstName,
                lastName,
                email,
                phone,
                locationId
            }
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating user: ${error.message}` });
    }
}

export const addFavourite = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params;
    const { saleCarId } = req.body;
    try {
        // Find the user by cognitoId
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            select: {
                favourites: {
                    select: { id: true }, // Only get the 'id' field from the favourites relation
                }
            }
        });

        if (user) {
            // Check if the car is already in the favourites array
            const isFavourite = user.favourites.map(fav => fav.id).includes(saleCarId);

            // If the car is already in favourites, remove it, otherwise add it
            const newUserFavourites = isFavourite
                ? user.favourites.filter(fav => fav.id !== saleCarId) // Remove the car
                : [...user.favourites, { id: saleCarId }]; // Add the car

            // Update the user's favourites field with the new array
            const updatedUser = await prisma.user.update({
                where: { cognitoId },
                data: {
                    favourites: {
                        set: newUserFavourites // Use 'set' to replace the favourites array
                    },
                },
                include: {
                    favourites: {
                        select: { id: true }, // Only get the 'id' field from the favourites relation
                    }
                },
            });

            // Return the updated user
            if (updatedUser)
                res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update favourites' });
    }
}
