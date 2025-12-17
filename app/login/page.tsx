import { login } from './actions'

export default function LoginPage() {
  return (
    <form action={login} className="space-y-4 max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        name="email"
        type="email"
        required
        placeholder="Email"
      />

      <input
        name="password"
        type="password"
        required
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  )
}
