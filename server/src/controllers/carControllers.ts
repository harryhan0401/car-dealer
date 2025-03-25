import { Request, Response } from "express";

import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            make,
            model,
            year,
            type,
            fuel,
            drive,
            transmission,
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
            res.status(200).json(firstCar);
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
            res.status(201).json(newCar)
        }
    } catch (err: any) {
        res.status(500).json({ message: `Error finding or creating car: ${err.message} ` });
    }
}

