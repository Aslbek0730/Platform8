import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would normally come from an API
const featuredCourses = [
  {
    id: "1",
    title: "Digital Art for Beginners",
    description: "Learn the basics of digital art and create amazing illustrations",
    image: "/placeholder.svg?height=200&width=300",
    category: "Art & Drawing",
    level: "Beginner",
    lessons: 12,
  },
  {
    id: "2",
    title: "Music Production Fundamentals",
    description: "Create your own music with easy-to-use digital tools",
    image: "/placeholder.svg?height=200&width=300",
    category: "Music",
    level: "Beginner",
    lessons: 10,
  },
  {
    id: "3",
    title: "Coding for Kids: Build Your First Game",
    description: "Learn programming concepts while creating fun games",
    image: "/placeholder.svg?height=200&width=300",
    category: "Coding",
    level: "Intermediate",
    lessons: 15,
  },
  {
    id: "4",
    title: "Creative Crafts and DIY Projects",
    description: "Hands-on crafting projects using materials found at home",
    image: "/placeholder.svg?height=200&width=300",
    category: "Crafts",
    level: "Beginner",
    lessons: 8,
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <p className="mt-4 text-lg text-gray-600">Discover our most popular courses to start your creative journey</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
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
                <CardFooter>
                  <div className="text-sm text-gray-600">{course.lessons} lessons</div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            View All Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

