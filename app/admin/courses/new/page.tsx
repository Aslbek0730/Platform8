import CourseForm from "@/components/admin/CourseForm"

export default function NewCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <CourseForm />
    </div>
  )
}

