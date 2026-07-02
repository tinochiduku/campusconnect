const reasons = [
    {
        bg: "bg-blue-100",
        color: "text-blue-600",
        title: "Expert Guidance",
        desc: "Our seasoned experts help you navigate the complexities of international education and admissions seamlessly.",
        path: "m19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2zm0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43z",
    },
    {
        bg: "bg-green-100",
        color: "text-green-600",
        title: "Personalized Solutions",
        desc: "We tailor our services to fit your unique academic aspirations, ensuring a perfect match with your goals.",
        path: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z",
    },
    {
        bg: "bg-purple-100",
        color: "text-purple-600",
        title: "Full Transparency",
        desc: "Our process is 100% transparent, keeping you informed at every step of your educational journey.",
        path: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
    },
    {
        bg: "bg-yellow-100",
        color: "text-yellow-600",
        title: "Affordable Options",
        desc: "Get premium services at cost-effective rates, making global education accessible to everyone.",
        path: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4",
    },
    {
        bg: "bg-red-100",
        color: "text-red-600",
        title: "University Matchmaking",
        desc: "We help you choose the perfect university and course that align with your academic profile and career goals.",
        path: "M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z",
    },
    {
        bg: "bg-teal-100",
        color: "text-teal-600",
        title: "Application Support",
        desc: "Get expert guidance on crafting compelling applications, essays, and SOPs that stand out.",
        path: "M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2 20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25M20 17h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8.01-3c-.01-1.1-.9-2-2.01-2",
    },
    {
        bg: "bg-indigo-100",
        color: "text-indigo-600",
        title: "Visa Assistance",
        desc: "From document preparation to interview coaching, we simplify the visa process for you.",
        path: "M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z",
    },
    {
        bg: "bg-pink-100",
        color: "text-pink-600",
        title: "Pre-Departure Support",
        desc: "Comprehensive guidance on accommodation, travel arrangements, and cultural orientation for a smooth transition.",
        circle: { cx: 9, cy: 9, r: 4 },
        path: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m7.76-9.64-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27M20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14",
    },
    {
        bg: "bg-orange-100",
        color: "text-orange-600",
        title: "Scholarship Opportunities",
        desc: "We help you identify and secure scholarships to ease your financial burden.",
        path: "M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 py-16 md:py-24">
                <div className="mx-auto mb-10 max-w-[510px] text-center md:mb-14">
                    <h2 className="mb-4 text-2xl md:text-3xl leading-normal font-semibold">
                        Why Choose Campus Connect?
                    </h2>
                    <p className="text-slate-400">
                        9 Key Reasons to Trust Us with Your Academic Future
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-slate-200">
                    {reasons.map(({ bg, color, title, desc, path, circle }, i) => (
                        <div
                            key={title}
                            className={`p-8 text-center ${
                                (i + 1) % 3 !== 0 ? "lg:border-r" : ""
                            } ${i % 2 === 0 ? "sm:border-r lg:border-r-0" : ""} ${
                                i < reasons.length - (reasons.length % 3 === 0 ? 3 : reasons.length % 3)
                                    ? "border-b"
                                    : ""
                            }`}
                        >
                            <div className="max-w-md mx-auto">
                                <div
                                    className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full shadow-md ${bg}`}
                                >
                                    <svg
                                        className={`w-8 h-8 ${color}`}
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                    >
                                        {circle && (
                                            <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
                                        )}
                                        <path d={path}></path>
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">{title}</h6>
                                <p className="text-sm text-slate-400 leading-5">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}