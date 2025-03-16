import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { getUserStats, getCourseStats } from "@/lib/api"
import AdminCourseList from "./AdminCourseList"
import AdminUserList from "./AdminUserList"
import AdminReports from "./AdminReports"

export default async function AdminDashboard() {
  const userStats = await getUserStats()
  const courseStats = await getCourseStats()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/courses/new">Add New Course</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              {userStats.newUsers > 0 ? "+" : ""}
              {userStats.newUsers} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16.5 9.4 7.5 4.21M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseStats.totalCourses}</div>
            <p className="text-xs text-muted-foreground">
              {courseStats.newCourses > 0 ? "+" : ""}
              {courseStats.newCourses} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseStats.totalEnrollments}</div>
            <p className="text-xs text-muted-foreground">
              {courseStats.newEnrollments > 0 ? "+" : ""}
              {courseStats.newEnrollments} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseStats.completedCourses}</div>
            <p className="text-xs text-muted-foreground">
              {courseStats.newCompletions > 0 ? "+" : ""}
              {courseStats.newCompletions} from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="mt-8">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-4">
          <AdminCourseList />
        </TabsContent>
        <TabsContent value="users" className="mt-4">
          <AdminUserList />
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <AdminReports />
        </TabsContent>
      </Tabs>
    </div>
  )
}

