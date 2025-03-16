import { Suspense } from "react"
import AdminCourseList from "@/components/admin/AdminCourseList"
import AdminCourseListSkeleton from "@/components/admin/AdminCourseListSkeleton"
import AdminHeader from "@/components/admin/AdminHeader"

export default function AdminCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdminHeader title="Manage Courses" buttonText="Add New Course" buttonHref="/admin/courses/new" />
      <Suspense fallback={<AdminCourseListSkeleton />}>
        <AdminCourseList />
      </Suspense>
    </div>
  )
}

