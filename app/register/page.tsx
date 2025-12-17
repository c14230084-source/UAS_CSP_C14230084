import { register } from './actions'

export default function RegisterPage() {
  return (
    <form action={register} className="space-y-4">
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button>Register</button>
    </form>
  )
}
