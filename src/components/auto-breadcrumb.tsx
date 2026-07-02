"use client"

import { usePathname } from "next/navigation"
import Breadcrumb from "@/components/breadcrumb"
import { bg1 } from "@/app/images/images"

// Override auto-generated titles for specific routes here
const TITLE_OVERRIDES: Record<string, string> = {
    "apply-now": "Apply Now",
    about: "About Us",
    destinations: "Blogs",
    services: "About Us",
}

function toTitle(segment: string) {
    return TITLE_OVERRIDES[segment] ?? segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function AutoBreadcrumb() {
    const pathname = usePathname()

    // No breadcrumb on the homepage
    if (pathname === "/") return null

    const segments = pathname.split("/").filter(Boolean)

    const links = segments.map((segment, i) => ({
        label: toTitle(segment),
        href: "/" + segments.slice(0, i + 1).join("/"),
    }))

    const pageTitle = links[links.length - 1]?.label ?? ""

    return <Breadcrumb title={pageTitle} bgImage={bg1} links={links} />
}