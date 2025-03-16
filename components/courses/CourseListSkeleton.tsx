import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CourseListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="aspect-video w-full" />
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="mt-2 h-6 w-full" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-2/3" />
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

