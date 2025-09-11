import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import cuid from "cuid";

const prisma = new PrismaClient();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 1️⃣ Seed Locations (PostGIS)
async function insertLocationData(locations: any[]) {
  for (const loc of locations) {
    try {
      await prisma.$executeRaw`
        INSERT INTO "Location" 
          ("id","country", "city", "state", "address", "postalCode", "coordinates") 
        VALUES (
          ${cuid()},
          ${loc.country}, 
          ${loc.city}, 
          ${loc.state}, 
          ${loc.address}, 
          ${loc.postalCode}, 
          ST_SetSRID(ST_GeomFromText(${loc.coordinates}), 4326)
        )
      `;
      console.log(`Inserted location for ${loc.city}`);
    } catch (error) {
      console.error(`Error inserting location for ${loc.city}:`, error);
    }
  }
}

// 2️⃣ Retrieve all Location IDs
async function getAllLocationIds(): Promise<string[]> {
  const locations = await prisma.location.findMany({ select: { id: true } });
  return locations.map((l) => l.id);
}

// Delete all data
async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) =>
    toPascalCase(path.basename(fileName, path.extname(fileName)))
  );

  for (const modelName of modelNames.reverse()) {
    const modelNameCamel = toCamelCase(modelName);
    const model = (prisma as any)[modelNameCamel];
    if (!model) continue;

    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "location.json", // No dependencies
    "user.json",     // Depends on location
    "car.json",      // No dependencies
    "carListing.json",  // Depends on car and user
  ];

  await deleteAllData(orderedFileNames);

  let locationIds: string[] = [];
  let carIds: string[] = [];

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = toPascalCase(path.basename(fileName, path.extname(fileName)));
    const modelNameCamel = toCamelCase(modelName);

    if (modelName === "Location") {
      await insertLocationData(jsonData);
      // Retrieve all IDs after seeding
      locationIds = await getAllLocationIds();
    } else if (modelName === "User") {
      const model = (prisma as any)[modelNameCamel];
      for (const item of jsonData) {
        const randomLocationId =
          locationIds[Math.floor(Math.random() * locationIds.length)];
        await model.create({
          data: {
            ...item,
            locationId: randomLocationId,
          },
        });
      }
      console.log("Seeded Users with random Location IDs");
    } else if (modelName === "Car") {
      const model = (prisma as any)[modelNameCamel];
      const createdCars: string[] = [];
      for (const item of jsonData) {
        const created = await model.create({ data: item });
        createdCars.push(created.id);
      }
      carIds = createdCars;
      console.log(`Seeded Cars`);
    } else if (modelName === "CarListing") {
      const model = (prisma as any)[modelNameCamel];
      for (const item of jsonData) {
        const randomCarId = carIds[Math.floor(Math.random() * carIds.length)];
        await model.create({
          data: {
            ...item,
            carId: randomCarId,
          },
        });
      }
      console.log(`Seeded CarListings with random Car`);
    } else {
      // Generic seeding for other models
      const model = (prisma as any)[modelNameCamel];
      for (const item of jsonData) {
        await model.create({ data: item });
      }
      console.log(`Seeded ${modelName}`);
    }

    await sleep(500);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
