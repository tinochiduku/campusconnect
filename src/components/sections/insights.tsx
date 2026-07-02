import { about, bg1, bg2 } from "@/app/images/images"
import Image from "next/image"
import Link from "next/link"

const posts = [
    {
        image: bg1,
        tag: "Scholarships",
        title: "How to Secure a Scholarship to Study Abroad",
        excerpt: "Discover the essential steps and tips for securing a scholarship to study abroad. Learn about the application process, required documents, and key deadlines.",
        author: "Tinotenda Chiduku",
        readTime: "5 min read",
        href: "#",
    },
    {
        image: bg2,
        tag: "Destinations",
        title: "Top Destinations for Zimbabwean Students",
        excerpt: "Explore the top study destinations for Zimbabwean students, including universities and programs that offer the best opportunities.",
        author: "Tinotenda Chiduku",
        readTime: "5 min read",
        href: "#",
    },
    {
        image: about,
        tag: "Success Stories",
        title: "Success Stories: Zimbabwean Students Abroad",
        excerpt: "Read inspiring success stories of Zimbabwean students who have secured scholarships and achieved their dreams of studying abroad.",
        author: "Tinotenda Chiduku",
        readTime: "5 min read",
        href: "#",
    },
]

export default function Insights() {
    return (
        <div className="container relative md:my-24 my-16 mx-auto">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                    Insights &amp; Updates: Campus Connect Blog
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Dive into the Campus Connect Blog for the latest insights, tips, and updates on educational scholarships and opportunities. Our blog features expert advice, success stories, and practical guidance to help you navigate the scholarship landscape and achieve your academic goals. Stay informed and inspired with our curated content designed to support your educational journey.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                {posts.map((post) => (
                    <div key={post.title} className="group relative overflow-hidden">
                        <div className="relative overflow-hidden rounded-md shadow">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="aspect-16/13 object-cover w-full h-auto group-hover:scale-110 group-hover:rotate-3 duration-500"
                            />
                            <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                                    {post.tag}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex mb-4">
                                <span className="flex items-center text-slate-400 text-sm">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-4 text-slate-900 me-1.5"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {post.readTime}
                                </span>
                                <span className="text-slate-400 text-sm ms-3">
                                    by{" "}
                                    <Link
                                        className="text-slate-900 hover:text-red-500 font-medium"
                                        href="/"
                                    >
                                        {post.author}
                                    </Link>
                                </span>
                            </div>

                            <Link
                                className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                                href={post.href}
                            >
                                {post.title}
                            </Link>
                            <p className="text-slate-400 mt-2">{post.excerpt}</p>

                            <div className="mt-3">
                                <Link
                                    className="hover:text-red-500 inline-flex items-center"
                                    href={post.href}
                                >
                                    Read More
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-4 ms-1"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}