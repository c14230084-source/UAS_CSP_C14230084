import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from './logout'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: announcements } =
    await supabase.from('announcements').select()

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
        <form action={logout}>
          <button className="btn">Logout</button>
        </form>
      </div>

      <div className="grid gap-4">
        {announcements?.map((a) => (
          <div key={a.id} className="border p-4 rounded">
            <h2 className="font-semibold">{a.title}</h2>
            <p>{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
