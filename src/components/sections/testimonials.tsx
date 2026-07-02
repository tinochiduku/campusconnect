"use client"

import { IconQuote, IconStar, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
    {
        quote: "Campus Connect helped me secure a full scholarship to study in India. Their support throughout the application process was invaluable.",
        name: "Tawanda Moyo",
        role: "Student at Lovely Professional University",
        image: "/testimonials/01.jpg",
    },
    {
        quote: "Thanks to Campus Connect, I am now pursuing my Master's degree in Australia. They guided me every step of the way.",
        name: "Chipo Ndlovu",
        role: "Master's Student at University of Melbourne",
        image: "/testimonials/02.jpg",
    },
    {
        quote: "The scholarship opportunities and guidance provided by Campus Connect were a game changer for my academic career.",
        name: "Farai Mutasa",
        role: "Undergraduate Student at University of Warsaw",
        image: "/testimonials/03.jpg",
    },
    {
        quote: "I highly recommend Campus Connect to any student looking to study abroad. Their expertise and resources made all the difference.",
        name: "Rumbi Chari",
        role: "PhD Candidate at University of Edinburgh",
        image: "/testimonials/02.jpg",
    },
    {
        quote: "Campus Connect opened doors I never thought possible. I am grateful for their dedication and support.",
        name: "Kudzi Mahachi",
        role: "Student at University of Oxford",
        image: "/testimonials/01.jpg",
    },
    {
        quote: "With the help of Campus Connect, I received a scholarship to study in Poland. Their team is truly amazing.",
        name: "Tatenda Nyoni",
        role: "Student at University of Warsaw",
        image: "/testimonials/16.jpg",
    },
]

const PER_SLIDE = 3

export default function Testimonials() {
    const slideCount = Math.ceil(testimonials.length / PER_SLIDE)
    const [slide, setSlide] = useState(0)

    const goTo = (i: any) => setSlide((i + slideCount) % slideCount)

    return (
        <div className="container relative md:my-24 my-16 mx-auto">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                    What Students Say About Campus Connect
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Hear from students who achieved their academic dreams abroad with the guidance and support of Campus Connect. Your success story begins here.
                </p>
            </div>

            <div className="relative mt-6 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                    {Array.from({ length: slideCount }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0 w-full px-2"
                        >
                            {testimonials
                                .slice(slideIndex * PER_SLIDE, slideIndex * PER_SLIDE + PER_SLIDE)
                                .map((t) => (
                                    <div key={t.name} className="text-center">
                                        <div className="relative rounded shadow m-2 p-6 bg-white">
                                            <IconQuote className="size-10 text-blue-500 mb-2" />
                                            <p className="text-slate-400 italic">&ldquo;{t.quote}&rdquo;</p>
                                            <ul className="flex justify-center gap-0.5 text-amber-400 mt-3">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <li key={i}>
                                                        <IconStar className="size-4 fill-amber-400" />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="text-center mt-5">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={56}
                                                height={56}
                                                className="size-14 rounded-full shadow-md mx-auto object-cover"
                                            />
                                            <h6 className="mt-2 font-semibold">{t.name}</h6>
                                            <span className="text-slate-400 text-sm">{t.role}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => goTo(slide - 1)}
                    aria-label="Previous testimonials"
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 items-center justify-center size-10 rounded-full bg-white shadow hover:bg-slate-50"
                >
                    <IconChevronLeft className="size-5" />
                </button>
                <button
                    onClick={() => goTo(slide + 1)}
                    aria-label="Next testimonials"
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 items-center justify-center size-10 rounded-full bg-white shadow hover:bg-slate-50"
                >
                    <IconChevronRight className="size-5" />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-8" aria-label="Testimonial pagination">
                {Array.from({ length: slideCount }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === slide ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}