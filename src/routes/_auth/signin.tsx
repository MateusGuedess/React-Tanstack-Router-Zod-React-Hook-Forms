import { createFileRoute } from '@tanstack/react-router'
import { SignupForm } from '../../components/signup.form'

export const Route = createFileRoute('/_auth/signin')({
  component: Signin,
})

function Signin() {
  return <div className="w-full h-full flex justify-center items-center">
    <SignupForm />
  </div>
}
