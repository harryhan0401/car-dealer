import { Request, Response } from "express";

import { PrismaClient, Prisma, Location } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

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
            if (user.location) {
                const coordinates: { coordinates: string }[] =
                    await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${user.location.id}`;

                const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
                const longitude = geoJSON.coordinates[0];
                const latitude = geoJSON.coordinates[1];

                const userWithCoordinates = {
                    ...user,
                    location: {
                        ...user.location,
                        coordinates: [
                            longitude,
                            latitude,
                        ],
                    },
                };
                res.json(userWithCoordinates);
            }
            else {
                res.json(user)
            }
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

        let locationId;
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
export const updateFavourite = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params;
    const { carListingId } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            select: {
                favourites: { select: { id: true } }
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const isFavourite = user.favourites.some(fav => fav.id === carListingId);

        const updatedUser = await prisma.user.update({
            where: { cognitoId },
            data: {
                favourites: isFavourite
                    ? { disconnect: { id: carListingId } }
                    : { connect: { id: carListingId } }
            },
            include: { favourites: { select: { id: true } } }
        });

        res.status(200).json({
            message: isFavourite ? "Removed from favourites!" : "Added to favourites!",
            user: updatedUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update favourites' });
    }
};

