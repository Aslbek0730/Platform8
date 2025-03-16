import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Start Your Creative Journey?</h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of children and young people who are discovering their creative potential through our
              interactive courses.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" asChild>
                <Link href="/auth/register">Sign Up for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

