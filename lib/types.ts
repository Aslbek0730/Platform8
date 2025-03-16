export interface Course {
  id: string
  title: string
  description: string
  image: string
  category: string
  level: string
  lessons: number
  price: number
  isFree: boolean
  published: boolean
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
  role: "user" | "admin"
}

export interface UserStats {
  totalUsers: number
  newUsers: number
  activeUsers: number
}

export interface CourseStats {
  totalCourses: number
  newCourses: number
  totalEnrollments: number
  newEnrollments: number
  completedCourses: number
  newCompletions: number
}

