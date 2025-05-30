import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();


export const getAllSellCars = async (_req: Request, res: Response): Promise<void> => {
    try {
        const sellCars = await prisma.sellCar.findMany({
            where: { "isPublic": true },
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
        // Attach coordinates to each sellCar
        const sellCarsWithCoordinates = await Promise.all(
            sellCars.map(async (sellCar) => {
                if (sellCar.seller && sellCar.seller.location) {
                    const coordinates = await prisma.$queryRaw<{ coordinates: string }[]>(
                        Prisma.sql`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${sellCar.seller.location.id}`
                    );
                    if (coordinates.length > 0) {
                        const geoJSON: any = wktToGeoJSON(coordinates[0].coordinates);
                        return {
                            ...sellCar,
                            longitude: geoJSON.coordinates[0],
                            latitude: geoJSON.coordinates[1],
                        };
                    }
                }
                return sellCar;
            })
        );

        if (sellCarsWithCoordinates) {
            res.json(sellCarsWithCoordinates);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving sale cars:", error);
        res.status(500).json({ message: `Error retrieving sale cars: ${error.message}` });
    }
}

export const getSellCars = async (req: Request, res: Response): Promise<void> => {
    const take = parseInt(req.query.take as string) || 40;
    const skip = parseInt(req.query.skip as string) || 0;
    try {
        const sellCars = await prisma.sellCar.findMany({
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

        if (sellCars.length > 0) {
            res.json(sellCars);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving all sale cars:", error);
        res.status(500).json({ message: `Error retrieving all sale cars: ${error.message}` });
    }
}
export const getSellCarById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sellCarId } = req.params;
        const sellCar = await prisma.sellCar.findUnique({
            where: { id: +sellCarId },
            include: {
                car: true,
                seller: true,
            },
        });

        if (sellCar) {
            res.json(sellCar)
        }
        else {
            res.status(404).json({ message: "Sale car not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving sale car: ${error.message}` });
    }
}
export const createSellCar = async (req: Request, res: Response): Promise<void> => {
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

        const newSellCar = await prisma.sellCar.create({
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
        res.status(201).json(newSellCar);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating sale car: ${error.message}` });

    }
}

export async function deleteSellCar(req: Request, res: Response): Promise<void> {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Unauthorized: User not found" });
            return;
        }
        const { sellCarId } = req.params;

        // First check if the sale car exists and belongs to the user
        const sellCar = await prisma.sellCar.findUnique({
            where: { id: +sellCarId },
            include: { seller: true }
        });

        if (!sellCar) {
            res.status(404).json({ message: "Sale car not found" });
            return;
        }

        if (sellCar.sellerCognitoId !== req.user?.id) {
            res.status(403).json({ message: "Unauthorized: You can only delete your own listings" });
            return;
        }

        // If checks pass, proceed with deletion
        const deletedSellCars = await prisma.sellCar.delete({
            where: { id: +sellCarId },
            include: { seller: true }
        });

        res.status(200).json(deletedSellCars.seller.id);
    } catch (error: any) {
        console.error("Error deleting sale car:", error);
        res.status(500).json({ message: `Error deleting sale car: ${error.message}` });
    }
}
