import { Request, Response } from "express";

import { PrismaClient, Prisma, Location } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            include: {
                carSales: {
                    include: {
                        car: true,
                    }
                },
                favourites: {
                    include: {
                        car: true,
                        seller: true,
                    }
                },
                location: true
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
export const addUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params

        let locationId = -1;
        const { address, city, state, postalCode, country, longitude, latitude, ...userProfileData } = req.body;
        const query = Prisma.sql`
            SELECT id 
                FROM "Location" 
            WHERE "address" = ${address}
                AND "city"  = ${city}
                AND "state"  = ${state}
                AND "postalCode"  = ${postalCode}
                AND "country"  = ${country}`
        const data = await prisma.$queryRaw<Location[]>(query);
        if (data.length > 0) {
            const firstLocation = data[0];
            locationId = firstLocation.id;
        }
        else {
            const query = Prisma.sql`
                INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
                VALUES (${address}, ${city}, ${state}, ${country}, ${postalCode}, ST_SetSRID(ST_MakePoint(${parseFloat(longitude)}, ${parseFloat(latitude)}), 4326))
                RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates`
            const [location] = await prisma.$queryRaw<Location[]>(query);
            locationId = location.id;
        }

        const updatedUser = await prisma.user.update({
            where: { cognitoId: cognitoId },
            data: {
                ...userProfileData,
                locationId: locationId,
                isProfileSetup: true
            },
            include: {
                carSales: {
                    include: {
                        car: true,
                    }
                },
                favourites: {
                    select: { id: true },
                },
                location: true
            }
        })
        res.status(201).json(updatedUser);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: `Error updating user profile: ${error.message}` });
    }
}
export const addFavourite = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params;
    const { sellCarId } = req.body;
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
            const isFavourite = user.favourites.map(fav => fav.id).includes(sellCarId);

            // If the car is already in favourites, remove it, otherwise add it
            const newUserFavourites = isFavourite
                ? user.favourites.filter(fav => fav.id !== sellCarId) // Remove the car
                : [...user.favourites, { id: sellCarId }]; // Add the car

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

export const removeFavourite = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params;
    const { sellCarId } = req.body;
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
            const newUserFavourites = user.favourites.filter(fav => fav.id !== sellCarId) // Remove the car

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
