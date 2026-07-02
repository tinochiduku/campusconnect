import { IconChevronRight } from "@tabler/icons-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type BreadcrumbLink = {
    label: string
    href?: string
}

type BreadcrumbProps = {
    title: string
    bgImage?: StaticImageData | string
    links?: BreadcrumbLink[]
}

export default function Breadcrumb({ title, bgImage, links = [] }: BreadcrumbProps) {
    return (
        <section className="relative table w-full items-center py-36 overflow-hidden bg-slate-900">
            {bgImage && (
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
                        {title}
                    </h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <Link href="/">Campus Connect</Link>
                    </li>

                    {links.map((link, i) => {
                        const isLast = i === links.length - 1
                        return (
                            <li key={link.label} className="inline-block">
                                <span className="inline-block text-base text-white/50 mx-0.5 align-middle">
                                    <IconChevronRight className="size-4" />
                                </span>
                                <span
                                    className={`inline-block uppercase text-[13px] font-bold duration-500 ease-in-out ${
                                        isLast ? "text-white" : "text-white/50 hover:text-white"
                                    }`}
                                    aria-current={isLast ? "page" : undefined}
                                >
                                    {!isLast && link.href ? (
                                        <Link href={link.href}>{link.label}</Link>
                                    ) : (
                                        link.label
                                    )}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}