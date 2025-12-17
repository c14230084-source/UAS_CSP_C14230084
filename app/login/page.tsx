import Link from 'next/link'
import { login } from './actions'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Login
        </h1>

        <form action={login} className="space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  )
}
