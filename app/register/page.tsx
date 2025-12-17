import Link from 'next/link'
import { register } from './actions'

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Register
        </h1>

        <form action={register} className="space-y-4">
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
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link
            href="/login"
            className="text-green-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  )
}
