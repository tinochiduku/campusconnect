"use client"

import { useState, useEffect } from "react"
import { bg1, bg2, plane } from "@/app/images/images"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    const headings = [
        {
            bg: bg1,
            h1: "Find the Best Universities Abroad",
            p: "Explore top international universities that align with your goals. Get expert insights on programs, rankings and admission requirements for your dream destination."
        },
        {
            bg: bg2,
            h1: "Discover Your Next University Placement Abroad",
            p: "Get personalised guidance to find the ideal international university. We simplify your application process and help you begin your academic adventure abroad with confidence."
        },
    ]

    const [index, setIndex] = useState(0)
    const [bgVisible, setBgVisible] = useState(true)
    const [textVisible, setTextVisible] = useState(true)

    useEffect(() => {
        const cycle = setInterval(() => {
            // 1. fade both out
            setBgVisible(false)
            setTextVisible(false)

            // 2. bg swaps + fades back in FAST
            const bgTimeout = setTimeout(() => {
                setIndex((prev) => (prev + 1) % headings.length)
                setBgVisible(true)
            }, 500)

            // 3. text follows a beat later, slower, with a slide-up
            const textTimeout = setTimeout(() => {
                setTextVisible(true)
            }, 750)

            return () => {
                clearTimeout(bgTimeout)
                clearTimeout(textTimeout)
            }
        }, 6000)

        return () => clearInterval(cycle)
    }, [headings.length])

    const current = headings[index]

    const goTo = (i) => {
        if (i === index) return
        setBgVisible(false)
        setTextVisible(false)
        setTimeout(() => {
            setIndex(i)
            setBgVisible(true)
        }, 500)
        setTimeout(() => setTextVisible(true), 750)
    }

    return (
        <section className="relative overflow-hidden">
            <Image
                alt="hero-bg"
                src={current.bg}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    bgVisible ? "opacity-100" : "opacity-0"
                }`}
                width={0}
                height={0}
                sizes="100svw"
                priority
            />
            <div className="absolute bg-black/60 inset-0" />

            <div className="flex items-center relative max-w-4xl mx-auto min-h-screen">
                <div className="flex items-center h-full">
                    <div className="flex flex-col items-center text-white text-center space-y-10">
                        <Image
                            alt="hero-plane"
                            src={plane}
                            className="w-full h-full object-contain max-h-30"
                            width={0}
                            height={0}
                            sizes="100svw"
                        />
                        <h1
                            className={`font-bold text-5xl transition-all duration-700 ease-out ${
                                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        >
                            {current.h1}
                        </h1>
                        <p
                            className={`text-lg transition-all duration-700 ease-out delay-100 ${
                                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        >
                            {current.p}
                        </p>
                        <Link className="flex" href="#">
                            <div className="flex items-center gap-4 bg-(--primary) px-4 py-2 rounded-full font-semibold">
                                <span>Apply Now</span> <IconArrowNarrowRight />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {headings.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}