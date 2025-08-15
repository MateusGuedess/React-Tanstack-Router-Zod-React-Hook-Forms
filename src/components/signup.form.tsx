import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignInFormSchema } from '../lib/schemas';
export const SignupForm = () => {
  const {
    register
  } = useForm({
    resolver: zodResolver(SignInFormSchema)
  })
  return (
    <form>

    </form>
  )
}
