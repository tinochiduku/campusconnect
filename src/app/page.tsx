import Link from "next/link"
import { IconArrowRight, IconSchool, IconBuilding, IconUsers } from "@tabler/icons-react"
import { FaCcVisa } from 'react-icons/fa6'
import Image from "next/image"
import { hero } from "./images/images"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import Insights from "@/components/sections/insights"

const stats = [
  { value: "9+", label: "Study Destinations" },
  { value: "100%", label: "Personalised Guidance" },
  { value: "5★", label: "Student Satisfaction" },
]

const services = [
  { icon: IconSchool, title: "University Applications", desc: "Course matching, application prep, and admissions support." },
  { icon: FaCcVisa, title: "Visa Assistance", desc: "Documentation, reviews, and interview preparation." },
  { icon: IconBuilding, title: "Pre-Departure Support", desc: "Housing, travel, cultural, and settlement guidance." },
  { icon: IconUsers, title: "Student Community", desc: "Mentorship, scholarships, and peer networking." },
]

const destinations = ["United Kingdom", "Canada", "Germany", "Poland", "Hungary", "Dubai", "Malaysia", "Georgia", "India"]

export default function Home() {
  return (
    <main className="bg-white text-(--primary)">
      <Hero />

      <About />

      <WhyChooseUs />

      <Testimonials />

      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">Study Destinations</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Where will you go?</h2>
          <div className="flex flex-wrap gap-3">
            {destinations.map((d) => (
              <span key={d} className="border border-zinc-200 rounded-full px-4 py-2 text-sm font-medium bg-white hover:border-violet-300 transition-colors cursor-default">
                {d}
              </span>
            ))}
          </div>
          <Link href="/destinations" className="inline-flex items-center gap-2 mt-8 text-violet-600 font-medium hover:gap-3 transition-all">
            Explore all destinations <IconArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <Insights />

      <section className="py-24 bg-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 max-w-2xl mx-auto">Your global journey starts here.</h2>
          <p className="text-violet-200 mb-8 max-w-md mx-auto">Connect ambition to endless opportunities. Let us help you take the first step.</p>
          <Link href="/contact" className="bg-white text-violet-700 px-8 py-3 rounded-full font-semibold hover:bg-violet-50 transition-colors inline-flex items-center gap-2">
            Get in Touch <IconArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}