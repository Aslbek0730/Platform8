import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCourses } from "@/lib/api"

export default async function CourseList({
  category = "",
  level = "",
  search = "",
}: {
  category?: string
  level?: string
  search?: string
}) {
  const courses = await getCourses({ category, level, search })

  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold">No courses found</h3>
        <p className="mt-2 text-gray-600">Try adjusting your filters or search term</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link href={`/courses/${course.id}`} key={course.id} className="transition-transform hover:scale-105">
          <Card className="h-full overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {course.category}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <CardTitle className="line-clamp-2 text-lg">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-sm text-gray-600">{course.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-600">{course.lessons} lessons</div>
              {course.isFree ? (
                <Badge variant="secondary">Free</Badge>
              ) : (
                <div className="font-semibold text-primary">${course.price}</div>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

