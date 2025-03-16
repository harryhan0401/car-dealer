import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getSaleCarsCount = async (_req: Request, res: Response): Promise<void> => {
    try {
        const noOfSaleCars = await prisma.saleCar.count();

        if (noOfSaleCars > 0) {
            res.json(noOfSaleCars);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving number of sale cars:", error);
        res.status(500).json({ message: `Error retrieving number of sale cars: ${error.message}` });
    }
}

export const getAllSaleCars = async (_req: Request, res: Response): Promise<void> => {
    try {
        const saleCars = await prisma.saleCar.findMany({
            orderBy: { "id": "desc" },
            include: {
                car: true,
                seller: {
                    include: {
                        location: true, // Include location object inside seller
                    },
                },
            },
        });


        if (saleCars) {
            res.json(saleCars);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving sale cars:", error);
        res.status(500).json({ message: `Error retrieving sale cars: ${error.message}` });
    }
}



export const getSaleCars = async (req: Request, res: Response): Promise<void> => {
    const take = parseInt(req.query.take as string) || 40;
    const skip = parseInt(req.query.skip as string) || 0;
    try {
        const saleCars = await prisma.saleCar.findMany({
            include: {
                car: true,
                seller: {
                    include: {
                        location: true // Include location object inside seller
                    }
                }
            }
            , take
            , skip
        });

        if (saleCars.length > 0) {
            res.json(saleCars);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving all sale cars:", error);
        res.status(500).json({ message: `Error retrieving all sale cars: ${error.message}` });
    }
}
export const getSaleCarById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { saleCarId } = req.params;
        const saleCar = await prisma.saleCar.findUnique({
            where: { id: +saleCarId },
            include: {
                car: true,
                seller: true,
            },
        });

        if (saleCar) {
            res.json(saleCar)
        }
        else {
            res.status(404).json({ message: "Sale car not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving sale car: ${error.message}` });
    }
}