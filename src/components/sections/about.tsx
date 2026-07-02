import { about, plane } from "@/app/images/images";
import { IconChevronRight, IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default function About () {
    return (
        <section>
            <div className="py-20 grid grid-cols-1 md:grid-cols-2 container mx-auto px-4">
                <div className="flex items-center justify-around">
                    <div className="relative">
                        <div className="absolute bg-white flex gap-4 items-center p-4 rounded-lg shadow -left-10 bottom-20 min-w-58"> 
                            <div className="bg-lime-400/20 text-lime-500 p-4 rounded-md">
                                <IconWorld />
                            </div>
                            <div className="">
                                <h4>Visitor</h4>
                                <p className="font-bold">4,589</p>
                            </div>
                        </div>
                        <div className="absolute bg-white flex gap-4 items-center p-4 rounded-lg shadow -right-10 top-20 min-w-58"> 
                            <div className="bg-violet-400/20 p-4 rounded-md">
                                <IconWorld />
                            </div>
                            <div className="">
                                <h4>Scholarships</h4>
                                <p className="font-bold">50+</p>
                            </div>
                        </div>
                        <Image
                            alt="about image"
                            src={about}
                            className="object-cover aspect-13/16 w-auto h-full max-h-120 rounded-3xl shadow"
                            width={0}
                            height={0}
                            sizes="100svw"
                        />
                    </div>
                </div>
                <div className="relative">
                    <Image
                        alt="bg"
                        src={plane}
                        className="absolute object-contain w-full h-auto max-h-80 invert bottom-0 opacity-10 -left-1/4"
                        width={0}
                        height={0}
                        sizes="100svw"
                    />
                    <div className="relative py-24 container mx-auto px-4 space-y-10">
                        <h3 className="text-4xl font-semibold leading-tight max-w-3xl">
                            Campus Connect
                        </h3>
                        <p className="text-lg text-zinc-500 max-w-2xl">
                            Founded with the vision of connecting aspiring students to world-class educational opportunities, Campus Connect International provides expert guidance and comprehensive support throughout the entire study abroad journey.
                        </p>
                        <Link className="flex" href="#">
                            <div className="flex text-white items-center gap-4 bg-(--primary) px-4 py-2.5 rounded font-semibold">
                                <span>Read More</span> <IconChevronRight className="size-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto md:max-w-xl lg:max-w-screen-xl grid gap-8 grid-cols-2 lg:grid-cols-4 mt-16">
                <div className="text-center group transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 shadow-md group-hover:bg-blue-100 transition-all duration-300">
                        <svg className="w-10 h-10 text-blue-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
                        </svg>
                    </div>
                    <h6 className="text-3xl lg:text-4xl font-extrabold text-blue-600">25,000+</h6>
                    <p className="text-sm mt-2 font-medium text-slate-500 tracking-wide">Students Counseled</p>
                </div>
                <div className="text-center group transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-rose-50 shadow-md group-hover:bg-rose-100 transition-all duration-300">
                        <svg className="w-10 h-10 text-rose-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"></path>
                        </svg>
                    </div>
                    <h6 className="text-3xl lg:text-4xl font-extrabold text-rose-500">3,000+</h6>
                    <p className="text-sm mt-2 font-medium text-slate-500 tracking-wide">Placed Successfully</p>
                </div>
                <div className="text-center group transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-50 shadow-md group-hover:bg-emerald-100 transition-all duration-300">
                        <svg className="w-10 h-10 text-emerald-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"></path>
                        </svg>
                    </div>
                    <h6 className="text-3xl lg:text-4xl font-extrabold text-emerald-600">99%</h6>
                    <p className="text-sm mt-2 font-medium text-slate-500 tracking-wide">Visa Success Rate</p>
                </div>
                <div className="text-center group transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-amber-50 shadow-md group-hover:bg-amber-100 transition-all duration-300">
                        <svg className="w-10 h-10 text-amber-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    </div>
                    <h6 className="text-3xl lg:text-4xl font-extrabold text-amber-600">5+</h6>
                    <p className="text-sm mt-2 font-medium text-slate-500 tracking-wide">Years of Experience</p>
                </div>
            </div>
        </section>
    )
}