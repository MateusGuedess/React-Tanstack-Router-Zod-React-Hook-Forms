import z from "zod/v4";
import { SignInFormSchema } from "../schemas";


export type SignInFormFieldProps = {
  fieldName: keyof z.infer<typeof SignInFormSchema>,
  fieldType: "email" | "password",
  fieldPlaceholder: string
}
