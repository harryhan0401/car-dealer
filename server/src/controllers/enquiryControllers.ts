import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateReferenceCode } from "../utils/generateReferenceCode";

const prisma = new PrismaClient();


export const getEnquiries = async (req: Request, res: Response): Promise<void> => {
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
export const upsertEnquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sellCarId } = req.params;
        const { cognitoId, offer, listPrice, message } = req.body;
        // Try to find existing enquiry by composite key
        const existingEnquiry = await prisma.enquiry.findUnique({
            where: {
                enquiryId: {
                    sellCarId: +sellCarId,
                    buyerCognitoId: cognitoId,
                },
            },
        });

        if (existingEnquiry) {
            // Update existing enquiry
            const updatedEnquiry = await prisma.enquiry.update({
                where: {
                    enquiryId: {
                        sellCarId: +sellCarId,
                        buyerCognitoId: cognitoId,
                    },
                },
                data: {
                    offer: +offer,
                    message,
                },
            });
            res.status(200).json(updatedEnquiry);
        } else {
            //Create reference code
            const newCode = generateReferenceCode();
            // Create new enquiry
            const newEnquiry = await prisma.enquiry.create({
                data: {
                    sellCar: { connect: { id: +sellCarId } },
                    buyer: { connect: { cognitoId } },
                    referenceCode: newCode,
                    offer: +offer,
                    listPrice: +listPrice,
                    message,
                },
            });
            res.status(201).json(newEnquiry);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to upsert enquiry." });
    }
}

export async function deleteEnquiry(req: Request, res: Response): Promise<void> {
    try {
        const { referenceCode } = req.params;

        // First check if the sale car exists and belongs to the user
        const existingEnquiry = await prisma.enquiry.findUnique({
            where: {
                referenceCode
            },
        });

        if (!existingEnquiry) {
            res.status(404).json({ message: "Enquiry not found" });
            return;
        }

        // If checks pass, proceed with deletion
        const deletedEnquiry = await prisma.enquiry.delete({
            where: {
                referenceCode
            },
        });

        res.status(200).json(deletedEnquiry);
    } catch (error: any) {
        console.error("Error deleting sale car:", error);
        res.status(500).json({ message: `Error deleting sale car: ${error.message}` });
    }
}
