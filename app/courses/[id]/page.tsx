import { Suspense } from "react"
import { notFound } from "next/navigation"
import CourseHeader from "@/components/courses/CourseHeader"
import CourseContent from "@/components/courses/CourseContent"
import CourseDetailsSkeleton from "@/components/courses/CourseDetailsSkeleton"
import { getCourse } from "@/lib/api"

export default async function CourseDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  try {
    const courseId = params.id

    return (
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<CourseDetailsSkeleton />}>
          <CourseDetails id={courseId} />
        </Suspense>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

async function CourseDetails({ id }: { id: string }) {
  const course = await getCourse(id)

  if (!course) {
    notFound()
  }

  return (
    <>
      <CourseHeader course={course} />
      <CourseContent course={course} />
    </>
  )
}

