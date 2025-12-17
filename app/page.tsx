import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800">
          Employee Portal
        </h1>

        <p className="text-gray-600">
          Selamat datang di portal karyawan.
          <br />
          Silakan login atau daftar untuk melanjutkan.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  )
}
