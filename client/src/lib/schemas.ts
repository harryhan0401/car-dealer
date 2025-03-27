// schemas/saleCarSchema.ts
import { Fuel, Drive, Transmission, Type, Make } from "@/lib/constants";
import { z } from "zod";

export const saleCarSchema1 = z.object({
    vin: z.string().length(17, { message: "VIN must be 17 characters" }),
    mileage: z.coerce.number().min(0, { message: "Mileage must be a positive number" }),
    price: z.coerce.number().min(0, { message: "Price must be a positive number" }),
    description: z.string().refine(
        (value) => value.trim().split(/\s+/).length >= 10,
        { message: "Description must be at least 10 words" }
    ),
});
export type SaleCarData1 = z.infer<typeof saleCarSchema1>;


const imageSchema = z
    .instanceof(File, { message: "Invalid file type" });


export const baseSaleCarSchema2 = z.object({
    photo: z.array(imageSchema).min(1, { message: "Main photo is required" }),
    optionalPhoto1: z.array(imageSchema).optional(),
    optionalPhoto2: z.array(imageSchema).optional(),
    optionalPhoto3: z.array(imageSchema).optional(),
    optionalPhoto4: z.array(imageSchema).optional(),
    optionalPhoto5: z.array(imageSchema).optional()
})

export const saleCarSchema2 = baseSaleCarSchema2.superRefine((data, ctx) => {
    if (data.photo.length && data.photo[0].size > 5 * 1024 * 1024) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Photo size must be less than 5MB",
            path: ["photo"],
        });
    }
    const optionalPhotoKeys = Object.keys(data).filter(key => key.startsWith("optionalPhoto")) as (keyof typeof data)[];

    optionalPhotoKeys.forEach(optionalPhotoKey => {
        const optionalPhoto = data[optionalPhotoKey];
        if (optionalPhoto && optionalPhoto.length && optionalPhoto[0].size > 5 * 1024 * 1024) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Photo size must be less than 5MB",
                path: ["photo"], // Report error on the specific optional photo field
            });
        }
    });
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
});

export type CarData = z.infer<typeof carSchema>;

export const sellCarSchema = carSchema.extend(saleCarSchema1.shape).extend(baseSaleCarSchema2.shape).superRefine((data, ctx) => {
    if (data.photo.length && data.photo[0].size > 5 * 1024 * 1024) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Photo size must be less than 5MB",
            path: ["photo"],
        });
    }
    const optionalPhotoKeys = Object.keys(data).filter(key => key.startsWith("optionalPhoto")) as (keyof typeof data)[];

    optionalPhotoKeys.forEach(optionalPhotoKey => {
        const optionalPhoto = data[optionalPhotoKey] as File[];
        if (optionalPhoto && optionalPhoto.length && optionalPhoto[0].size > 5 * 1024 * 1024) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Photo size must be less than 5MB",
                path: ["photo"], // Report error on the specific optional photo field
            });
        }
    });
})

export type SellCarFormData = z.infer<typeof sellCarSchema>;
