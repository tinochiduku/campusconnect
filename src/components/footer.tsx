'use client'

import Image from "next/image"
import Link from "next/link"
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconPhone, IconMail, IconMapPin } from "@tabler/icons-react"
import { _nav } from "./header"

const services = [
  "University Applications",
  "Visa Assistance",
  "Pre-Departure Support",
  "Career Mentorship",
  "Student Community",
]

const socials = [
  { icon: IconBrandInstagram, href: "#" },
  { icon: IconBrandLinkedin, href: "#" },
  { icon: IconBrandX, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 space-y-5">
          <Image
            alt="logo"
            src="/logos/inverse.png"
            className="h-10 w-auto object-contain"
            width={0}
            height={0}
            sizes="100svw"
          />
          <p className="text-zinc-400 text-sm leading-relaxed">
            Empowering aspiring students to pursue global education opportunities through trusted guidance and meaningful partnerships.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <Link key={i} href={href} className="border border-zinc-700 rounded-full p-2 hover:border-violet-500 hover:text-violet-400 transition-colors">
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-(--accent) mb-5">Navigation</p>
          <ul className="space-y-3">
            {_nav.map(({ title, nav }) => (
              <li key={title}>
                <Link href={nav} className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-(--accent) mb-5">Our Services</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-(--accent) mb-5">Contact</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <IconPhone className="size-4 shrink-0 mt-0.5 text-violet-400" />
              +263 000 000 000
            </li>
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <IconMail className="size-4 shrink-0 mt-0.5 text-violet-400" />
              info@campusconnect.co.zw
            </li>
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <IconMapPin className="size-4 shrink-0 mt-0.5 text-violet-400" />
              Harare, Zimbabwe
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-xs">© {new Date().getFullYear()} Campus Connect International. All rights reserved.</p>
          <p className="text-xs text-zinc-600 italic">Dream Beyond Borders.</p>
        </div>
      </div>
    </footer>
  )
}