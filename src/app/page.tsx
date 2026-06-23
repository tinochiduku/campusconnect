import Link from "next/link"
import { IconArrowRight, IconSchool, IconBuilding, IconUsers } from "@tabler/icons-react"
import { FaCcVisa } from 'react-icons/fa6'
import Image from "next/image"

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
        <section className="min-h-[90vh] relative flex flex-col justify-center mx-auto py-24">
            <Image
                alt="hero image"
                src="/hero.avif"
                className="absolute object-cover w-full h-full"
                width={0}
                height={0}
                sizes="100svw"
            />
            <div className="absolute w-full h-full bg-linear-to-tr from-black/90 to-transparent" />
            <div className="relative flex flex-col justify-center container mx-auto px-4 py-24">
                <p className="text-sm uppercase tracking-widest text-(--accent) mb-4">Campus Connect International</p>
                <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl mb-8">
                Dream Beyond<br />
                <span className="text-violet-600">Borders.</span>
                </h1>
                <p className="text-lg text-zinc-300 max-w-xl mb-10">
                Trusted guidance, meaningful partnerships, and a supportive community helping Zimbabwean students reach universities worldwide.
                </p>
                <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-violet-700 transition-colors">
                    Start Your Journey <IconArrowRight className="size-4" />
                </Link>
                <Link href="/services" className="border text-white hover:text-(--primary) border-zinc-200 px-6 py-3 rounded-full font-medium hover:bg-zinc-50 transition-colors">
                    Our Services
                </Link>
                </div>
            </div>
        </section>

      <section className="bg-zinc-950 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl md:text-5xl font-semibold text-violet-400">{value}</p>
              <p className="text-zinc-400 mt-1 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 max-w-xl">Everything you need, from application to arrival.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-zinc-100 rounded-2xl p-6 hover:border-violet-200 transition-colors">
              <Icon className="size-6 text-violet-600 mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

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