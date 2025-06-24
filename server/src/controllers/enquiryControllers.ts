import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export  const getEnquiries = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.body;

        const enquiries = await prisma.enquiry.findMany({
            where: { buyerCognitoId: cognitoId },
            include: {
                sellCar: {
                    include: {
                        car: true,
                        seller: true
                    }
                }
            },
        });
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch enquiries." });
    }
}
export const createEnquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sellCarId } = req.params;
        const { cognitoId, offerPrice, message } = req.body;

        // Ensure only one enquiry per user per car
        const existingEnquiry = await prisma.enquiry.findUnique({
            where: {
                enquiryId: {
                    sellCarId: +sellCarId,
                    buyerCognitoId: cognitoId,
                },
            },
        });

        if (existingEnquiry) {
            res.status(409).json({ error: "Enquiry already exists for this user and car." });
            return;
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                sellCarId: +sellCarId,
                buyerCognitoId: cognitoId,
                offerPrice: +offerPrice,
                message,
            },
        });

        res.status(201).json(enquiry);
    } catch (error) {
        res.status(500).json({ error: "Failed to create enquiry." });
    }
}

export const updateEnquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { enquiryId } = req.params;
        const { offerPrice, message } = req.body;

        const enquiry = await prisma.enquiry.update({
            where: { id: +enquiryId },
            data: {
                offerPrice: +offerPrice,
                message,
            },
        });

        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ error: "Failed to update enquiry." });
    }
}

