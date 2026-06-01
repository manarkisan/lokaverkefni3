import { z } from "zod";

export const LoginSchema  = z.object({
    email: z.string().min(5).email().toLowerCase().trim(),
    remember_me: z.boolean(),
    password: z.string().trim().min(6, { message: 'Password must be at least 6 characters' } ).max(12, { message: 'Password must be not more than 12 characters' })
})

// Create a type based of LoginSchema
export type LoginType = z.infer<typeof LoginSchema>