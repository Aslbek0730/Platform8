// This file would normally contain actual API calls to your backend
// For this example, we'll use mock data

import type { Course, UserStats, CourseStats } from "@/lib/types"

// Mock data
const mockCourses: Course[] = [
  {
    id: "1",
    title: "Digital Art for Beginners",
    description: "Learn the basics of digital art and create amazing illustrations",
    image: "/placeholder.svg?height=200&width=300",
    category: "Art & Drawing",
    level: "Beginner",
    lessons: 12,
    price: 0,
    isFree: true,
    published: true,
  },
  {
    id: "2",
    title: "Music Production Fundamentals",
    description: "Create your own music with easy-to-use digital tools",
    image: "/placeholder.svg?height=200&width=300",
    category: "Music",
    level: "Beginner",
    lessons: 10,
    price: 19.99,
    isFree: false,
    published: true,
  },
  {
    id: "3",
    title: "Coding for Kids: Build Your First Game",
    description: "Learn programming concepts while creating fun games",
    image: "/placeholder.svg?height=200&width=300",
    category: "Coding",
    level: "Intermediate",
    lessons: 15,
    price: 24.99,
    isFree: false,
    published: true,
  },
  {
    id: "4",
    title: "Creative Crafts and DIY Projects",
    description: "Hands-on crafting projects using materials found at home",
    image: "/placeholder.svg?height=200&width=300",
    category: "Crafts",
    level: "Beginner",
    lessons: 8,
    price: 0,
    isFree: true,
    published: true,
  },
  {
    id: "5",
    title: "Photography Basics for Kids",
    description: "Learn how to take amazing photos with any camera",
    image: "/placeholder.svg?height=200&width=300",
    category: "Photography",
    level: "Beginner",
    lessons: 6,
    price: 14.99,
    isFree: false,
    published: true,
  },
  {
    id: "6",
    title: "Creative Writing Workshop",
    description: "Develop storytelling skills and write your own stories",
    image: "/placeholder.svg?height=200&width=300",
    category: "Writing",
    level: "Intermediate",
    lessons: 10,
    price: 19.99,
    isFree: false,
    published: false,
  },
]

// API functions
export async function getCourses(filters?: {
  category?: string
  level?: string
  search?: string
}): Promise<Course[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredCourses = [...mockCourses]

  if (filters) {
    if (filters.category) {
      filteredCourses = filteredCourses.filter((course) =>
        course.category.toLowerCase().includes(filters.category!.toLowerCase()),
      )
    }

    if (filters.level) {
      filteredCourses = filteredCourses.filter((course) => course.level.toLowerCase() === filters.level!.toLowerCase())
    }

    if (filters.search) {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
          course.description.toLowerCase().includes(filters.search!.toLowerCase()),
      )
    }
  }

  return filteredCourses
}

export async function getCourse(id: string): Promise<Course | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const course = mockCourses.find((course) => course.id === id)

  return course || null
}

export async function getUserStats(): Promise<UserStats> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    totalUsers: 1245,
    newUsers: 32,
    activeUsers: 876,
  }
}

export async function getCourseStats(): Promise<CourseStats> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    totalCourses: mockCourses.length,
    newCourses: 2,
    totalEnrollments: 3567,
    newEnrollments: 128,
    completedCourses: 1432,
    newCompletions: 45,
  }
}

