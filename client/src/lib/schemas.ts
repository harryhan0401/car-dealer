// schemas/sellCarSchema.ts
import { Fuel, Drive, Transmission, Type, Make, PreferContactMethods } from "@/lib/constants";
import { off } from "process";
import { z } from "zod";

const imageSchema = z
    .instanceof(File, { message: "Invalid file type" });

export const sellCarSchema1 = z.object({
    vin: z.string().length(17, { message: "VIN must be 17 characters" }),
    mileage: z.coerce.number().min(0, { message: "Mileage must be a positive number" }),
    price: z.coerce.number().min(0, { message: "Price must be a positive number" }),
    description: z.string().refine(
        (value) => value.trim().split(/\s+/).length >= 10,
        { message: "Description must be at least 10 words" }
    ),
});

export const baseSellCarSchema2 = z.object({
    photo: z.array(imageSchema).min(1, { message: "Main photo is required" }),
    optionalPhoto1: z.array(imageSchema).optional(),
    optionalPhoto2: z.array(imageSchema).optional(),
    optionalPhoto3: z.array(imageSchema).optional(),
    optionalPhoto4: z.array(imageSchema).optional(),
    optionalPhoto5: z.array(imageSchema).optional()
})

export const sellCarSchema2 = baseSellCarSchema2.superRefine((data, ctx) => {
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

export const sellCarSchema = carSchema.extend(sellCarSchema1.shape).extend(baseSellCarSchema2.shape).superRefine((data, ctx) => {
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

export const userSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number can't exceed 15 digits")
        .regex(/^\+?[0-9]+$/, "Phone number must contain only digits and an optional leading +"),
});

export const profileSchema = z.object(userSchema.shape).extend({
    preferredContactMethod: z.enum(Object.keys(PreferContactMethods) as [string, ...string[]], {
        invalid_type_error: "Preferred Contact Method must be selected"
    }),
});

export const enquirySchema = z.object({
    cognitoId: z.string().min(1, "Cognito ID is required"),
    offer: z.coerce.number().min(0, "Offer must be a positive number"),
    listPrice: z.coerce.number().min(0, "List Price must be a positive number"),
    message: z.string().min(10, "Message must be at least 10 characters"),
}).superRefine((data, ctx) => {
    if (data.listPrice > 0) {
        const pct = data.offer / data.listPrice;
        if (pct < 0.6) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Offer must be at least 60% of the list price",
                path: ["offer"],
            });
        }
    }
});

export const locationSchema = z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
    postalCode: z.string().min(1, "Postal Code is required"),
    latitude: z.number().optional().nullable().refine(
        (val) => val === null || (typeof val === 'number' && val >= -90 && val <= 90),
        {
            message: "Latitude must be a number between -90 and 90",
        }
    ),
    longitude: z.number().optional().nullable().refine(
        (val) => val === null || (typeof val === 'number' && val >= -180 && val <= 180),
        {
            message: "Longitude must be a number between -180 and 180",
        }
    ),
})

export const avatarSchema = z.object({
    avatarUrl: z.array(imageSchema).min(1, { message: "Avatar is required" }),
})

export type locationData = z.infer<typeof locationSchema>;
export type profileData = z.infer<typeof profileSchema>;
export type enquiryData = z.infer<typeof enquirySchema>;
export type avatarData = z.infer<typeof avatarSchema>;


export type SellCarData1 = z.infer<typeof sellCarSchema1>;
export type SellCarData2 = z.infer<typeof sellCarSchema2>;
export type CarData = z.infer<typeof carSchema>;
export type SellCarData = SellCarData1 & SellCarData2
export type SellCarFormData = z.infer<typeof sellCarSchema>;
