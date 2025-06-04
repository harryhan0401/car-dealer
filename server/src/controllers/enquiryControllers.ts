import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getEnquiryBySellCarId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sellCarId } = req.params;

        if (!sellCarId) {
            res.status(400).json({ error: "Sell car ID is required." });
            return;
        }

        const enquiries = await prisma.enquiry.findMany({
            where: {
                sellCarId: Number(sellCarId),
            },
        });

        if (enquiries.length === 0) {
            res.status(404).json({ message: "No enquiries found for this sell car ID." });
            return;
        }

        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve enquiries." });
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

