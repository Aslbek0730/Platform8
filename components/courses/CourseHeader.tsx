import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/types"

export default function CourseHeader({ course }: { course: Course }) {
  return (
    <div className="mb-8">
      <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-xl">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" priority />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              {course.category}
            </Badge>
            <Badge variant="outline">{course.level}</Badge>
            {course.isFree ? (
              <Badge variant="secondary">Free</Badge>
            ) : (
              <Badge variant="outline" className="bg-green-100 text-green-800">
                ${course.price}
              </Badge>
            )}
          </div>

          <h1 className="mt-2 text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 text-gray-600">{course.description}</p>

          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {course.lessons} lessons
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {course.lessons * 15} minutes
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="lg">{course.isFree ? "Enroll for Free" : `Enroll for $${course.price}`}</Button>
          <Button size="lg" variant="outline">
            Preview
          </Button>
        </div>
      </div>
    </div>
  )
}

