import { IconSchool, IconBuilding, IconBriefcase, IconUsers } from "@tabler/icons-react"
import { FaCcVisa } from 'react-icons/fa6'


const services = [
  {
    icon: IconSchool,
    title: "University & College Applications",
    desc: "We assist students in identifying the right academic pathways and institutions that align with their goals.",
    items: ["Course and career guidance", "University and college matching", "Application processing and submission", "Offer letter assistance", "Admission follow-ups"],
  },
  {
    icon: FaCcVisa,
    title: "Visa Assistance",
    desc: "Professional guidance throughout the visa application process, helping students prepare and submit strong applications.",
    items: ["Visa documentation guidance", "Financial document preparation", "Application review and verification", "Interview preparation", "Visa submission assistance"],
  },
  {
    icon: IconBuilding,
    title: "Accommodation & Pre-Departure",
    desc: "We ensure students are well-prepared for life abroad before departure and upon arrival.",
    items: ["Student housing guidance and referrals", "Travel and relocation assistance", "Pre-departure orientation", "Cultural preparation support", "Arrival and settlement assistance"],
  },
  {
    icon: IconBriefcase,
    title: "Career & Academic Mentorship",
    desc: "Ongoing mentorship to help students adapt to new environments, excel academically, and develop professionally.",
    items: ["Personalised academic support", "Career development planning", "Professional goal setting", "Ongoing check-ins and guidance"],
  },
  {
    icon: IconUsers,
    title: "Student Community Hub",
    desc: "A safe and supportive community where students can connect, learn, and grow together.",
    items: ["Network with fellow students", "Access mentorship and guidance", "Explore scholarship opportunities", "Receive career counselling support", "Build confidence through shared experiences"],
  },
]

export default function Services() {
  return (
    <main className="bg-white text-(--primary)">
      <section className="py-24 container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-(--accent) mb-4">Services</p>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mb-6">
          Comprehensive support, <span className="text-violet-600">every step.</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl">
          From first enquiry to touchdown abroad — we are with you through every stage of your international education journey.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-4 space-y-6">
        {services.map(({ icon: Icon, title, desc, items }, i) => (
          <div key={title} className={`rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start ${i % 2 === 0 ? "bg-zinc-50" : "bg-zinc-950 text-white"}`}>
            <div>
              <Icon className={`size-8 mb-4 ${i % 2 === 0 ? "text-violet-600" : "text-violet-400"}`} />
              <h2 className="text-2xl font-semibold mb-3">{title}</h2>
              <p className={`${i % 2 === 0 ? "text-zinc-500" : "text-zinc-400"}`}>{desc}</p>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className={`flex items-center gap-3 text-sm ${i % 2 === 0 ? "text-zinc-600" : "text-zinc-300"}`}>
                  <span className={`size-1.5 rounded-full shrink-0 ${i % 2 === 0 ? "bg-(--accent)" : "bg-(--accent)"}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}