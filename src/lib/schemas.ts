import z from "zod/v4";


const passwordValidation = z.string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, { message: "Password must have at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Password must have at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Password must have at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })

export const SignInFormSchema = z.object({
  email: z.email(),
  password: passwordValidation,
})
