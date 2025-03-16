"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const categories = [
  { value: "art", label: "Art & Drawing" },
  { value: "music", label: "Music" },
  { value: "coding", label: "Coding" },
  { value: "crafts", label: "Crafts" },
  { value: "writing", label: "Writing" },
  { value: "photography", label: "Photography" },
]

const levels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
]

interface CourseFormProps {
  course?: {
    id: string
    title: string
    description: string
    category: string
    level: string
    price: number
    isFree: boolean
    published: boolean
    image: string
  }
}

export default function CourseForm({ course }: CourseFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: course?.title || "",
    description: course?.description || "",
    category: course?.category || "",
    level: course?.level || "",
    price: course?.price || 0,
    isFree: course?.isFree || false,
    published: course?.published || false,
    image: course?.image || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const url = course?.id ? `/api/courses/${course.id}` : "/api/courses"

      const method = course?.id ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to save course")
      }

      toast({
        title: course?.id ? "Course updated" : "Course created",
        description: course?.id
          ? "Your course has been updated successfully."
          : "Your course has been created successfully.",
      })

      router.push("/admin/courses")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
            <CardDescription>Enter the basic information about your course.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select value={formData.level} onValueChange={(value) => handleSelectChange("level", value)}>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing & Availability</CardTitle>
            <CardDescription>Set the pricing and availability of your course.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="isFree">Free Course</Label>
                <p className="text-sm text-muted-foreground">Make this course available for free</p>
              </div>
              <Switch
                id="isFree"
                checked={formData.isFree}
                onCheckedChange={(checked) => handleSwitchChange("isFree", checked)}
              />
            </div>

            {!formData.isFree && (
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="published">Published</Label>
                <p className="text-sm text-muted-foreground">Make this course visible to students</p>
              </div>
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => handleSwitchChange("published", checked)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/courses")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : course?.id ? "Update Course" : "Create Course"}
          </Button>
        </div>
      </div>
    </form>
  )
}

