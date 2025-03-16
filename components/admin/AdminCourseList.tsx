import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"
import { getCourses } from "@/lib/api"

export default async function AdminCourseList() {
  const courses = await getCourses()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={300}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="outline" className="mb-2">
                  {course.category}
                </Badge>
                <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1">{course.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={`/courses/${course.id}`} className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/courses/${course.id}/edit`} className="flex items-center">
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="text-sm text-muted-foreground">{course.lessons} lessons</div>
            <div className="flex items-center">
              {course.published ? (
                <Badge variant="default" className="bg-green-500">
                  Published
                </Badge>
              ) : (
                <Badge variant="outline">Draft</Badge>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

