"use client"

import { useState } from "react"
import type { Course } from "@/lib/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Mock lessons data - in a real app, this would come from the API
const generateMockLessons = (course: Course) => {
  return Array.from({ length: course.lessons }, (_, i) => ({
    id: `lesson-${i + 1}`,
    title: `Lesson ${i + 1}: ${i === 0 ? "Introduction to " + course.title : "Advanced Topic " + (i)}`,
    duration: Math.floor(Math.random() * 10) + 5, // 5-15 minutes
    type: i % 3 === 0 ? "video" : i % 3 === 1 ? "quiz" : "project",
    description: `Learn about ${course.category} concepts and techniques in this ${i % 3 === 0 ? "video" : i % 3 === 1 ? "interactive quiz" : "hands-on project"}.`,
    isPreview: i === 0, // First lesson is preview
  }))
}

export default function CourseContent({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState("content")
  const lessons = generateMockLessons(course)

  // Group lessons by module (for this example, we'll create 2-3 modules)
  const modules = [
    {
      id: "module-1",
      title: "Getting Started",
      lessons: lessons.slice(0, Math.ceil(lessons.length / 3)),
    },
    {
      id: "module-2",
      title: "Core Concepts",
      lessons: lessons.slice(Math.ceil(lessons.length / 3), Math.ceil((lessons.length * 2) / 3)),
    },
    {
      id: "module-3",
      title: "Advanced Techniques",
      lessons: lessons.slice(Math.ceil((lessons.length * 2) / 3)),
    },
  ]

  return (
    <div className="mt-8">
      <Tabs defaultValue="content" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Course Content</h2>
            <div className="text-sm text-gray-600">
              {course.lessons} lessons • {course.lessons * 15} minutes total
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={module.id}>
                <AccordionTrigger className="text-left">
                  <div>
                    <div className="font-medium">{module.title}</div>
                    <div className="text-sm text-gray-600">
                      {module.lessons.length} lessons •
                      {module.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)} minutes
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="rounded-md border p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {lesson.type === "video" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              ) : lesson.type === "quiz" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-yellow-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-green-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                  />
                                </svg>
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{lesson.title}</div>
                              <div className="text-sm text-gray-600">{lesson.description}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.isPreview && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                Preview
                              </span>
                            )}
                            <span className="text-sm text-gray-600">{lesson.duration} min</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="overview">
          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-xl font-semibold">About This Course</h2>
              <p className="mb-4 text-gray-700">{course.description}</p>
              <p className="mb-4 text-gray-700">
                This course is designed for {course.level.toLowerCase()} level students interested in{" "}
                {course.category.toLowerCase()}. Through a series of {course.lessons} lessons, you'll learn the
                fundamental concepts and techniques needed to excel in this creative field.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-semibold">What You'll Learn</h3>
              <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fundamental concepts of {course.category}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Practical techniques and methods</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creative problem-solving skills</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on projects and activities</span>
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-semibold">Requirements</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>No prior experience needed - suitable for beginners</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Basic supplies (details provided in first lesson)</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Enthusiasm and creativity!</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-xl font-semibold">Student Reviews</h2>
              <div className="mb-6 flex items-center gap-4">
                <div className="text-5xl font-bold text-primary">4.8</div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill={i < 5 ? "currentColor" : "none"}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Based on 24 reviews</div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Sample reviews */}
                <div className="border-b pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Alex Johnson</div>
                        <div className="text-xs text-gray-600">2 weeks ago</div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    My daughter absolutely loves this course! The instructor explains everything in a way that's easy
                    for kids to understand, and the projects are really fun. Highly recommended!
                  </p>
                </div>

                <div className="border-b pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-xs text-gray-600">1 month ago</div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill={i < 4 ? "currentColor" : "none"}
                          stroke={i < 4 ? "none" : "currentColor"}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    Great content and well-structured lessons. My son is really enjoying the hands-on projects. The only
                    suggestion would be to add more advanced challenges for kids who finish quickly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

