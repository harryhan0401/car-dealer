import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            include: {
                favourites: true
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
        const { cognitoId, firstName, lastName, email, phone, address } = req.body;
        const user = await prisma.user.create({
            data: {
                cognitoId,
                firstName,
                lastName,
                email,
                phone,
                address
            }
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating user: ${error.message}` });
    }

}
