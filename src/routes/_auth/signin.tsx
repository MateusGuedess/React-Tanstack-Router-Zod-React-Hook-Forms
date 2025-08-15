import { createFileRoute } from '@tanstack/react-router'
import { SignupForm } from '../../components/signup.form'

export const Route = createFileRoute('/_auth/signin')({
  component: Signin,
})

function Signin() {
  return <div>
    <SignupForm />
  </div>
}
