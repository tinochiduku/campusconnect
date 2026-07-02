'use client'

import Link from "next/link"
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconPhone, IconMail, IconMapPin } from "@tabler/icons-react"
import { _nav } from "./header"

export const socials = [
  { icon: IconBrandInstagram, href: "#" },
  { icon: IconBrandLinkedin, href: "#" },
  { icon: IconBrandX, href: "#" },
]

export const contact = [
  {
    icon: <IconMapPin className="size-5" strokeWidth={1.5} />,
    body: 'Address here'
  },
  {
    icon: <IconPhone className="size-5" strokeWidth={1.5} />,
    body: 'Phone here'
  },
  {
    icon: <IconMail className="size-5" strokeWidth={1.5} />,
    body: 'Email Address'
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 space-y-5">
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
          <p className="tracking-widest font-semibold mb-5">Contact</p>
          <ul className="space-y-3">
            {contact.map((s, i) => (
              <li className="flex items-center gap-3" key={i}>
                {s.icon}
                <Link href="/services" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {s.body}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracking-widest font-semibold mb-5">Company</p>
          <ul className="space-y-3">
            {_nav.map(({ title, nav }) => (
              <li key={title}>
                <Link href={nav} className="text-zinc-400 hover:text-white transition-colors">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <p className="tracking-widest font-semibold mb-5">Newsletter</p>
          <div className="space-y-4">
              <p>Sign up and receive the latest tips via email</p>
              <div className="flex flex-col gap-4">
                <label>Write your email <span className="sup text-red-500">*</span></label>
                <div className="relative flex items-center w-full">
                  <IconMail className="absolute left-2 size-6" strokeWidth={1.5} /> 
                  <input className="py-2 pl-10 border rounded w-full" placeholder="Email" />
                </div>
              <button className="font-semibold rounded bg-(--primary) px-4 py-2"> Subscribe </button>
              </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-xs">© {new Date().getFullYear()} Campus Connect International. All rights reserved.</p>
          <Link href="https://www.motive8creatives.co.zw/" className="text-xs text-zinc-600 italic">Made by Motiv8Creatives</Link>
        </div>
      </div>
    </footer>
  )
}