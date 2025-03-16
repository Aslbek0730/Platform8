import { redirect } from "next/navigation"
import ProfileHeader from "@/components/profile/ProfileHeader"
import EnrolledCourses from "@/components/profile/EnrolledCourses"
import Certificates from "@/components/profile/Certificates"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader user={session.user} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <EnrolledCourses userId={session.user.id} />
        <Certificates userId={session.user.id} />
      </div>
    </div>
  )
}

