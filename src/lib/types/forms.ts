import z from "zod/v4";
import { SignInFormSchema } from "../schemas";

type signinFields = "Email" | "Password"

export type SignInFormFieldProps = {
  fieldName: keyof z.infer<typeof SignInFormSchema>,
  fieldType: "email" | "password",
  fieldPlaceholder: signinFields,
  fieldLabel: signinFields
}
