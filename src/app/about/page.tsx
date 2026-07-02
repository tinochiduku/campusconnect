import About from "@/components/sections/about"

const values = [
  { title: "Integrity", desc: "Honesty, transparency, and ethical guidance in every process." },
  { title: "Student Centred", desc: "Personalised guidance tailored to individual goals and journeys." },
  { title: "Excellence", desc: "Professional, high-quality services at every stage." },
  { title: "Global Opportunity", desc: "Education opens doors to limitless international possibilities." },
]

const audience = [
  "High School Graduates",
  "University Students",
  "Parents Seeking International Education",
  "Working Professionals",
  "Scholarship Applicants",
  "Students Seeking Mentorship",
]

export default function Page() {
  return (
    <main className="bg-white text-(--primary)">

      <About />

      <section className="py-16 bg-zinc-950 text-white mt-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">Mission</p>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Our misson is to build a trusted student ecosystem that provides access to global education opportunities, mentorship and reliable information. Empowering students to make informed decisions and and pursue their dreams without limitis
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">Vision</p>
            <p className="text-xl text-zinc-300 leading-relaxed">
              To be a trusted global education partner, empowering students to achieve international success while building a supportive community for aspiring global learners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">Core Values</p>
        <h2 className="text-3xl font-semibold mb-12">What guides everything we do.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ title, desc }) => (
            <div key={title} className="bg-zinc-50 rounded-2xl p-6">
              <h3 className="font-semibold text-violet-600 mb-2">{title}</h3>
              <p className="text-sm text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-(--accent) mb-3">Who We Serve</p>
          <h2 className="text-3xl font-semibold mb-10">Built for every aspiring global learner.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a) => (
              <div key={a} className="bg-white border border-zinc-100 rounded-2xl px-6 py-5 flex items-center gap-3">
                <span className="size-2 rounded-full bg-violet-500 shrink-0" />
                <span className="font-medium text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}