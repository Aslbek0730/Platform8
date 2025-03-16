import Hero from "@/components/home/Hero"
import FeaturedCourses from "@/components/home/FeaturedCourses"
import Testimonials from "@/components/home/Testimonials"
import CallToAction from "@/components/home/CallToAction"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

