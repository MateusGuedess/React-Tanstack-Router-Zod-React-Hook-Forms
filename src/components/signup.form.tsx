import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignInFormSchema } from '../lib/schemas';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { SignInFormFields } from '@/lib/_data';
import { z } from 'zod/v4';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {SignInFormFields.map(field => {

        return (
          <div key={field.fieldName} className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor={field.fieldName}>{field.fieldLabel}</Label>
            <Input {...register(field.fieldName)} type={field.fieldType} placeholder={field.fieldPlaceholder} />
            {errors[field.fieldName] && <span className="text-red-500">{errors[field.fieldName]?.message}</span>}
          </div>
        )
      })}
      <button type="submit">Submit</button>
    </form>
  )
}
