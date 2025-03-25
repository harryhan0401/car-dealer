// schemas/saleCarSchema.ts
import { Fuel, Drive, Transmission, Type, Make } from "@/lib/constants";
import { z } from "zod";

export const saleCarSchema1 = z.object({
    vin: z.string().length(17, { message: "VIN must be 17 characters" }),
    carId: z.coerce.number().optional(),
    mileage: z.coerce.number().min(0, { message: "Mileage must be a positive number" }),
    price: z.coerce.number().min(0, { message: "Price must be a positive number" }),
    description: z.string(),
});
export type SaleCarData1 = z.infer<typeof saleCarSchema1>;


const imageSchema = z
    .custom<File>((file) => file instanceof File, { message: "Invalid file type" }) // Must be a File object
    .refine((file) => file.type.startsWith("image/"), { message: "Only image files are allowed" }) // Check MIME type
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: "File size must be less than 5MB" }); // Limit file size

export const saleCarSchema2 = z.object({
    photoUrls: z.array(imageSchema).min(1, { message: "At least one car photo is required" }),
    isCompleted: z.boolean().default(false)
})
export type SaleCarData2 = z.infer<typeof saleCarSchema2>;


export type SaleCarData = SaleCarData1 & SaleCarData2

export const carSchema = z.object({
    make: z.enum(Object.keys(Make) as [string, ...string[]], {
        invalid_type_error: "Make must be selected"
    }),
    model: z.string().nonempty("Model must contain at least 1 character(s)"),
    year: z.coerce.number(),
    type: z.enum(Object.keys(Type) as [string, ...string[]], {
        invalid_type_error: "Type must be selected"
    }),
    fuel: z.enum(Object.keys(Fuel) as [string, ...string[]], {
        invalid_type_error: "Fuel must be selected"
    }),
    drive: z.enum(Object.keys(Drive) as [string, ...string[]], {
        invalid_type_error: "Drive must be selected"
    }),
    transmission: z.enum((Object.keys(Transmission) as [string, ...string[]]), {
        invalid_type_error: "Transmission must be selected"
    }),
    carSales: z.any().array().optional(), // Handling relations requires more complex logic, or omitted if not needed for the form.
});

export type CarData = z.infer<typeof carSchema>;