import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CourseDetailsSkeleton() {
  return (
    <div>
      {/* Header skeleton */}
      <div className="mb-8">
        <Skeleton className="mb-6 h-[300px] w-full rounded-xl" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-2/3">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <Skeleton className="mt-2 h-10 w-full max-w-md" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-2/3" />

            <div className="mt-4 flex items-center gap-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="mt-8">
        <div className="mb-6 flex gap-2">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Course content skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="mt-2 h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>

                <div className="mt-4 space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <div className="w-full">
                        <Skeleton className="h-5 w-full max-w-md" />
                        <Skeleton className="mt-1 h-3 w-2/3" />
                      </div>
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

