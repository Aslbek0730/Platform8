import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 py-16 sm:py-24">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover Your Creative Potential
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Fun, interactive courses designed to help children and young people develop creative skills and explore
              their talents.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
        <svg viewBox="0 0 1208 1024" className="h-[400px] w-[600px] opacity-10 text-white">
          <path d="M808 809.4c-15.4-5.4-31.4-10.4-50.2-11.8-38.2-2.8-79.4 7.4-116.8 7.4-37.4 0-78.6-10.2-116.8-7.4-18.8 1.4-34.8 6.4-50.2 11.8-15.4 5.4-30.2 12.8-30.2 25.6v38.8c0 17.6 14.4 32 32 32h330.4c17.6 0 32-14.4 32-32V835c0-12.8-14.8-20.2-30.2-25.6z" />
          <path d="M603.6 760.6c97.2 0 175.8-78.6 175.8-175.8V486.6c0-97.2-78.6-175.8-175.8-175.8S427.8 389.4 427.8 486.6v98.2c0 97.2 78.6 175.8 175.8 175.8z" />
        </svg>
      </div>
    </div>
  )
}

