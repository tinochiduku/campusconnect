import Image from "next/image"
import ApplyForm from "@/components/apply-form"
import { apply } from "@/app/images/images"

export const metadata = {
    title: "Apply Now | Campus Connect",
}

export default function ApplyNowPage() {
    return (
        <section className="relative table w-full items-center">
            <div className="container flex flex-col lg:flex-row mt-10 pt-10 pb-10 gap-6 mx-auto">
                <div className="flex-grow lg:w-1/2">
                    <ApplyForm />
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <Image
                        src={apply}
                        alt="Student preparing to travel abroad"
                        className="w-full h-full object-cover rounded-lg"
                        width={0}
                        height={0}
                        sizes="50vw"
                    />
                </div>
            </div>
        </section>
    )
}