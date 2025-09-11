import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();


export const getCarListings = async (_req: Request, res: Response): Promise<void> => {
    try {
        const carListings = await prisma.carListing.findMany({
            where: { "isPublic": true },
            orderBy: { "dateTimeUpdated": "desc" },
            include: {
                car: true,
                seller: {
                    include: {
                        location: true, // Include location object inside seller
                    },
                },
                enquiries: true

            },
        });
        // Attach coordinates to each carListing
        const carListingsWithCoordinates = await Promise.all(
            carListings.map(async (carListing) => {
                if (carListing.seller && carListing.seller.location) {
                    const coordinates = await prisma.$queryRaw<{ coordinates: string }[]>(
                        Prisma.sql`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${carListing.seller.location.id}`
                    );
                    if (coordinates.length > 0) {
                        const geoJSON: any = wktToGeoJSON(coordinates[0].coordinates);
                        return {
                            ...carListing,
                            longitude: geoJSON.coordinates[0],
                            latitude: geoJSON.coordinates[1],
                        };
                    }
                }
                return carListing;
            })
        );

        if (carListingsWithCoordinates) {
            res.json(carListingsWithCoordinates);
        } else {
            res.status(404).json({ message: "There is no available sale car" });
        }
    } catch (error: any) {
        console.error("Error retrieving sale cars:", error);
        res.status(500).json({ message: `Error retrieving sale cars: ${error.message}` });
    }
}

export const getCarListingById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { carListingId } = req.params;
        const carListing = await prisma.carListing.findUnique({
            where: { id: carListingId },
            include: {
                car: true,
                seller: true,
                enquiries: true
            },
        });

        if (carListing) {
            res.json(carListing)
        }
        else {
            res.status(404).json({ message: "Sale car not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving sale car: ${error.message}` });
    }
}
export const createCarListing = async (req: Request, res: Response): Promise<void> => {
    try {
        const files = req.files as Express.Multer.File[];
        let carId;
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

        const newCarListing = await prisma.carListing.create({
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
        res.status(201).json(newCarListing);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating sale car: ${error.message}` });

    }
}

export async function deleteCarListing(req: Request, res: Response): Promise<void> {
    try {
        const { carListingId } = req.params;

        // First check if the sale car exists and belongs to the user
        const carListing = await prisma.carListing.findUnique({
            where: { id: carListingId },
            include: { seller: true }
        });

        if (!carListing) {
            res.status(404).json({ message: "Sale car not found" });
            return;
        }

        if (carListing.sellerCognitoId !== req.user?.id) {
            res.status(403).json({ message: "Unauthorized: You can only delete your own listings" });
            return;
        }

        // If checks pass, proceed with deletion
        const deletedCarListings = await prisma.carListing.delete({
            where: { id: carListingId },
            include: { seller: true }
        });

        res.status(200).json(deletedCarListings.seller.id);
    } catch (error: any) {
        console.error("Error deleting sale car:", error);
        res.status(500).json({ message: `Error deleting sale car: ${error.message}` });
    }
}
