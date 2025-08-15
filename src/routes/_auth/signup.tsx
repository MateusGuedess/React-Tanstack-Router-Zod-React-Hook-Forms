import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signup')({
  component: Signup,
})

function Signup() {
  return <div>Hello "/auth/signup"!</div>
}
