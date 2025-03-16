import { Suspense } from "react"
import CourseFilters from "@/components/courses/CourseFilters"
import CourseList from "@/components/courses/CourseList"
import CourseListSkeleton from "@/components/courses/CourseListSkeleton"

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Courses</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <CourseFilters />
        </div>
        <div className="w-full md:w-3/4">
          <Suspense fallback={<CourseListSkeleton />}>
            <CourseList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

