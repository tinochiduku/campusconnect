'use client'

import { logo } from "@/app/images/images"
import { IconMenu, IconX } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Header() {
    const pathname = usePathname()

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
        <header className="bg-white text-(--primary) py-4">
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
                <ul className="hidden md:flex items-center gap-4 ">
                    {_nav.map(({title, nav}) => (
                        <li key={title}>
                            <Link className={`font-medium ${pathname === nav ? 'text-(--accent)' : ''}`} href={nav}>
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
        </header>
    )
}

export const MobileNav = ({nav, pathname, toggleNav}: any) => {

    return (
        <nav id="mobile" className="fixed w-full h-screen bg-white px-4 -top-[100%] space-y-10 transition-all duration-300 delay-150">
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
        title: 'About Us',
        nav: '/about'
    },
    {
        title: 'Services',
        nav: '/services'
    },
    {
        title: 'Destinations',
        nav: '/destinations'
    },
    {
        title: 'Contact Us',
        nav: '/contact'
    },
]