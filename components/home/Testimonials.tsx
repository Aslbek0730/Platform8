import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "My daughter loves the art classes! She's learned so many new techniques and is always excited to show us her latest creations.",
    author: "Sarah Johnson",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "The coding courses are fantastic! They make programming fun and accessible for kids. My son built his first game in just a few weeks.",
    author: "Michael Chen",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "I've tried many online platforms, but this one keeps my students engaged like no other. The interactive lessons are perfect for young learners.",
    author: "Emily Rodriguez",
    role: "Teacher",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from parents and educators about their experience with our platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.content}</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

