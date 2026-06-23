'use client'

import { IconPhone, IconMail, IconWorld } from "@tabler/icons-react"
import { useState } from "react"

const contactInfo = [
  { icon: IconPhone, label: "Phone", value: "+263 000 000 000" },
  { icon: IconMail, label: "Email", value: "info@campusconnect.co.zw" },
  { icon: IconWorld, label: "Website", value: "www.campusconnect.co.zw" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  return (
    <main className="bg-white text-(--primary)">
      <section className="py-24 container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-(--accent) mb-4">Contact Us</p>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mb-6">
          Ready to take the <span className="text-violet-600">next step?</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl">
          Our team is here to guide, support, and help you turn your dreams into reality. Reach out today.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your goals..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 transition-colors resize-none"
            />
            <button className="bg-violet-600 text-white px-8 py-3 rounded-full font-medium hover:bg-violet-700 transition-colors">
              Send Message
            </button>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Connect with us</h2>
            <p className="text-zinc-500">
              Whether you are a student, parent, or professional looking for guidance, we are just a message away.
            </p>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 border border-zinc-100 rounded-2xl p-4">
                  <div className="bg-violet-50 p-3 rounded-xl">
                    <Icon className="size-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">{label}</p>
                    <p className="font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-zinc-950 rounded-3xl p-8 text-white">
              <p className="text-sm uppercase tracking-widest text-(--accent) mb-2">Our Promise</p>
              <p className="text-zinc-300 leading-relaxed">
                We don't simply process applications — we help build futures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}