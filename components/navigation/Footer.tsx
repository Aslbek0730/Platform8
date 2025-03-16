import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">CreativeKids</h3>
            <p className="mt-4 text-sm text-gray-600">
              Developing creative skills for children and young people through interactive and engaging courses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Courses</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/courses?category=art" className="text-sm text-gray-600 hover:text-primary">
                  Art & Drawing
                </Link>
              </li>
              <li>
                <Link href="/courses?category=music" className="text-sm text-gray-600 hover:text-primary">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/courses?category=coding" className="text-sm text-gray-600 hover:text-primary">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="/courses?category=crafts" className="text-sm text-gray-600 hover:text-primary">
                  Crafts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} CreativeKids. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

