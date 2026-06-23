import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

const destinations = [
  { name: "United Kingdom", highlight: "World-renowned universities including Oxford, Cambridge, and Imperial.", tag: "Top Ranked" },
  { name: "Canada", highlight: "Post-study work rights and a welcoming multicultural environment.", tag: "Work-friendly" },
  { name: "Germany", highlight: "Tuition-free public universities and strong engineering programs.", tag: "Affordable" },
  { name: "Poland", highlight: "Growing academic hub with affordable costs and EU access.", tag: "Emerging" },
  { name: "Hungary", highlight: "Rich academic heritage and government-funded scholarship programs.", tag: "Scholarships" },
  { name: "Dubai (UAE)", highlight: "Global business centre with international campus partnerships.", tag: "Business Hub" },
  { name: "Malaysia", highlight: "English-medium universities with competitive fees in Southeast Asia.", tag: "Value" },
  { name: "Georgia", highlight: "Affordable medical and engineering degrees with European standards.", tag: "Medicine" },
  { name: "India", highlight: "High-quality STEM and business education with a vast alumni network.", tag: "STEM" },
]

export default function Destinations() {
  return (
    <main className="bg-white text-(--primary)">
      <section className="py-24 container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-(--accent) mb-4">Destinations</p>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mb-6">
          9 countries. <span className="text-violet-600">Unlimited potential.</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl">
          We assist students in reaching universities across the globe. Find the destination that fits your ambitions.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map(({ name, highlight, tag }) => (
            <div key={name} className="group border border-zinc-100 rounded-3xl p-7 hover:border-violet-200 hover:bg-violet-50/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">{tag}</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-zinc-950 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-(--accent) mb-4">Not Sure Where to Go?</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">We will help you choose the right fit.</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Our team will match your goals, budget, and career path to the ideal destination and institution.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition-colors">
            Talk to an Advisor <IconArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}