import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignInFormSchema } from '../lib/schemas';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { SignInFormFields } from '@/lib/_data';
import { z } from 'zod/v4';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

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
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          Signin in our application
        </CardTitle>
        <CardDescription>
          Enter your email and password bellow to signin in your account
        </CardDescription>
      </CardHeader>

      <form className="w-full h-[350px]" onSubmit={handleSubmit(handleFormSubmit)}>
        <CardContent>
          {SignInFormFields.map(field => {

            return (
              <div key={field.fieldName} className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor={field.fieldName}>{field.fieldLabel}</Label>
                <Input {...register(field.fieldName)} type={field.fieldType} placeholder={field.fieldPlaceholder} />
                {errors[field.fieldName] && <span className="text-red-500">{errors[field.fieldName]?.message}</span>}
              </div>
            )
          })}
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-[16px]">
          <Button type="submit" className="w-full">
            Signin
          </Button>
          <Button variant="outline" className="w-full">
            Signin with Google
          </Button>
        </CardFooter>

      </form>
    </Card>
  )
}
