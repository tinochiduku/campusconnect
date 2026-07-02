'use client'

import { logo } from "@/app/images/images"
import { IconMenu, IconX, IconClock, IconMapPin, IconMail } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { socials } from "./footer"


export default function Header() {
    const pathname = usePathname()
    const [isSticky, setIsSticky] = useState(false)
    const sentinelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const sentinel = sentinelRef.current
        if (!sentinel) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the sentinel scrolls out of view, the nav has hit top-0
                setIsSticky(!entry.isIntersecting)
            },
            { threshold: 0, rootMargin: "0px" }
        )

        observer.observe(sentinel)

        return () => observer.disconnect()
    }, [])

    const toggleNav = () => {
        const state = document.getElementById("mobile")!
        
        if(state.classList.contains("top-0")) {
            state.classList.remove("top-0")
            state.classList.add("-top-[100%]")
            state.classList.add("opacity-0")
            state.classList.remove("opacity-100")
        } else {
            state.classList.remove("-top-[100%]")
            state.classList.add("top-0")
            state.classList.remove("opacity-0")
            state.classList.add("opacity-100")
        }
    }

    return (
        <header className="relative">
            {/* Sentinel sits at the very top — once it leaves the viewport, sticky has engaged */}
            <div ref={sentinelRef} className="absolute top-0 h-px w-full" />

            {/* Top info bar — slides up and away once the nav locks to the top */}
            <section
                className={`hidden lg:flex bg-black transition-transform duration-300 ease-in-out ${
                    isSticky ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <div className="container flex items-center justify-between px-4 py-2 w-full mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <IconClock className="size-5" strokeWidth={1.5} />
                            <p className="text-sm">Mon-Sat: 8am to 4pm</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IconMapPin className="size-5" strokeWidth={1.5} />
                            <p className="text-sm">Address Here</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <IconMail className="size-5" strokeWidth={1.5} />
                            <p className="text-sm">Email Address Here</p>
                        </div>
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, href }, i) => (
                            <Link key={i} href={href} className="border border-zinc-700 rounded-full p-2 hover:border-violet-500 hover:text-violet-400 transition-colors">
                                <Icon className="size-4" />
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Nav — absolute on load (sits right where it naturally falls), fixes to top-0 once sticky */}
            <section
                className={`w-full z-50 py-4 transition-colors duration-300 ${
                    isSticky
                        ? "fixed top-0 bg-white text-black shadow-sm"
                        : "absolute bg-transparent text-white"
                }`}
            >
                <nav className="container flex items-center justify-between mx-auto px-4">
                    <div>
                        <Image
                            alt="logo"
                            src={logo}
                            className="w-full h-12"
                            width={0}
                            height={0}
                            sizes="100svw"
                        />
                    </div>
                    <ul className="hidden md:flex items-center gap-10 text-sm">
                        {_nav.map(({title, nav}) => (
                            <li key={title}>
                                <Link className={`font-semibold ${pathname === nav ? 'text-(--accent)' : ''}`} href={nav}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={toggleNav} className="md:hidden rounded-full">
                            <IconMenu  className="size-4"/>
                    </button>
                </nav>
                <MobileNav nav={_nav} pathname={pathname} toggleNav={toggleNav} />
            </section>
        </header>
    )
}

export const MobileNav = ({nav, pathname, toggleNav}: any) => {

    return (
        <nav id="mobile" className="fixed w-full h-screen bg-white px-4 -top-[100%] space-y-10 transition-all duration-300 delay-150 z-[60]">
            <div className="flex items-center w-full justify-between py-4">
                <div>
                    <Image
                        alt="logo"
                        src="/logos/inverse.png"
                        className="w-full h-12 object-contain"
                        width={0}
                        height={0}
                        sizes="100svw"
                    />
                </div>
                <button onClick={toggleNav} className="rounded-full border p-1.5">
                    <IconX  className="size-4"/>
                </button>
            </div>
            <ul className="flex flex-col items-center gap-4 ">
                {nav.map(({title, nav}: any) => (
                    <li key={title}>
                        <Link className={`font-medium ${pathname === nav ? 'text-(--accent)' : ''}`} href={nav}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export const _nav = [
    {
        title: 'Home',
        nav: '/'
    },
    {
        title: 'Apply Now',
        nav: '/apply-now'
    },
    {
        title: 'About Us',
        nav: '/about'
    },
    {
        title: 'Our Services',
        nav: '/services'
    },
    {
        title: 'Destinatins',
        nav: '/destinations'
    },
    {
        title: 'Contact Us',
        nav: '/contact'
    },
]