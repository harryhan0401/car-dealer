import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getAllSaleCars = async (_req: Request, res: Response): Promise<void> => {
    try {
        const saleCars = await prisma.saleCar.findMany({
            orderBy: { "dateTimeUpdated": "desc" },
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
export const createSaleCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const files = req.files as Express.Multer.File[];
        let carId = -1;
        const {
            make,
            model,
            year,
            type,
            fuel,
            drive,
            transmission,
            vin,
            mileage,
            price,
            description,
            cognitoId,
        } = req.body;
        const query = Prisma.sql`
        SELECT * 
            FROM "Car" 
        WHERE LOWER("make" :: TEXT) = LOWER(${make}) 
            AND LOWER("model" :: TEXT) = LOWER(${model}) 
            AND "year" = ${parseInt(year)} 
            AND LOWER("type" :: TEXT) = LOWER(${type}) 
            AND LOWER("fuel" :: TEXT) = LOWER(${fuel}) 
            AND LOWER("drive" :: TEXT) = LOWER(${drive}) 
            AND LOWER("transmission" :: TEXT) = LOWER(${transmission})`
        const data = await prisma.$queryRaw(query);

        if (Array.isArray(data) && data.length > 0) {
            const firstCar = data[0];
            carId = firstCar.id;
        }
        else {
            const newCar = await prisma.car.create({
                data: {
                    make,
                    model,
                    year: parseInt(year),
                    type,
                    fuel,
                    drive,
                    transmission,
                }
            });
            carId = newCar.id
        }

        const newSaleCar = await prisma.saleCar.create({
            data: {
                vin,
                sellerCognitoId: cognitoId,
                carId,
                mileage: parseInt(mileage),
                price: parseInt(price),
                photoUrls: [],
                description
            },
            include: {
                seller: true,
                car: true,
            },
        })
        res.status(201).json(newSaleCar);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating sale car: ${error.message}` });

    }
}
