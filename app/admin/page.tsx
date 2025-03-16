import { redirect } from "next/navigation"
import AdminDashboard from "@/components/admin/AdminDashboard"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/auth/login")
  }

  return <AdminDashboard />
}

