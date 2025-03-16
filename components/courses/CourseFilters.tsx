"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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

export default function CourseFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [openCategory, setOpenCategory] = useState(false)
  const [openLevel, setOpenLevel] = useState(false)

  const currentCategory = searchParams.get("category") || ""
  const currentLevel = searchParams.get("level") || ""

  const selectedCategory = categories.find((c) => c.value === currentCategory)
  const selectedLevel = levels.find((l) => l.value === currentLevel)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)

    if (search) {
      params.set("search", search)
    } else {
      params.delete("search")
    }

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })
  }

  const handleCategorySelect = (value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category")
    }

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })

    setOpenCategory(false)
  }

  const handleLevelSelect = (value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set("level", value)
    } else {
      params.delete("level")
    }

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })

    setOpenLevel(false)
  }

  const clearFilters = () => {
    setSearch("")
    startTransition(() => {
      router.push("/courses")
    })
  }

  const hasFilters = currentCategory || currentLevel || search

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      <Accordion type="single" collapsible defaultValue="filters">
        <AccordionItem value="filters">
          <AccordionTrigger>Filters</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Popover open={openCategory} onOpenChange={setOpenCategory}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between" disabled={isPending}>
                      {selectedCategory ? selectedCategory.label : "Select category"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4 shrink-0 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search category..." />
                      <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem onSelect={() => handleCategorySelect("")} className="cursor-pointer">
                            <Check className={`mr-2 h-4 w-4 ${!currentCategory ? "opacity-100" : "opacity-0"}`} />
                            All Categories
                          </CommandItem>
                          {categories.map((category) => (
                            <CommandItem
                              key={category.value}
                              onSelect={() => handleCategorySelect(category.value)}
                              className="cursor-pointer"
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  currentCategory === category.value ? "opacity-100" : "opacity-0"
                                }`}
                              />
                              {category.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <Popover open={openLevel} onOpenChange={setOpenLevel}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between" disabled={isPending}>
                      {selectedLevel ? selectedLevel.label : "Select level"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4 shrink-0 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search level..." />
                      <CommandList>
                        <CommandEmpty>No level found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem onSelect={() => handleLevelSelect("")} className="cursor-pointer">
                            <Check className={`mr-2 h-4 w-4 ${!currentLevel ? "opacity-100" : "opacity-0"}`} />
                            All Levels
                          </CommandItem>
                          {levels.map((level) => (
                            <CommandItem
                              key={level.value}
                              onSelect={() => handleLevelSelect(level.value)}
                              className="cursor-pointer"
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${currentLevel === level.value ? "opacity-100" : "opacity-0"}`}
                              />
                              {level.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {hasFilters && (
                <Button variant="ghost" className="mt-2 w-full" onClick={clearFilters} disabled={isPending}>
                  Clear Filters
                </Button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

