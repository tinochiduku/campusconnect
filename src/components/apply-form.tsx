"use client"

import { IconArrowNarrowRight, IconCheck } from "@tabler/icons-react"
import { useState } from "react"

const countries = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Poland",
    "India",
    "Germany",
    "Other",
]

const levels = ["Undergraduate", "Postgraduate", "PhD", "Diploma / Foundation"]

type FormState = {
    fullName: string
    email: string
    phone: string
    country: string
    level: string
    message: string
}

const initialState: FormState = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    level: "",
    message: "",
}

export default function ApplyForm() {
    const [form, setForm] = useState<FormState>(initialState)
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    const validate = () => {
        const next: Partial<Record<keyof FormState, string>> = {}
        if (!form.fullName.trim()) next.fullName = "Please enter your full name."
        if (!form.email.trim()) {
            next.email = "Please enter your email."
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            next.email = "Please enter a valid email."
        }
        if (!form.phone.trim()) next.phone = "Please enter a phone number."
        if (!form.country) next.country = "Please select a destination."
        if (!form.level) next.level = "Please select a level of study."
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setStatus("submitting")
        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error("Request failed")
            setStatus("success")
            setForm(initialState)
        } catch {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4 bg-white rounded-lg shadow p-10">
                <div className="flex items-center justify-center size-16 rounded-full bg-lime-400/20 text-lime-500">
                    <IconCheck className="size-8" />
                </div>
                <h4 className="text-2xl font-semibold">Application Received</h4>
                <p className="text-slate-500 max-w-sm">
                    Thank you for applying. A member of our team will be in touch within one
                    business day to guide you through the next steps.
                </p>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white text-black rounded-lg shadow p-6 md:p-10 space-y-6"
            noValidate
        >
            <div>
                <h4 className="text-2xl font-semibold">Start Your Application</h4>
                <p className="text-slate-500 mt-2">
                    Tell us a little about yourself and where you'd like to study — we'll take
                    it from there.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" error={errors.fullName}>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Tinotenda Moyo"
                        className={inputClass(!!errors.fullName)}
                    />
                </Field>

                <Field label="Email Address" error={errors.email}>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass(!!errors.email)}
                    />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+263 77 123 4567"
                        className={inputClass(!!errors.phone)}
                    />
                </Field>

                <Field label="Preferred Destination" error={errors.country}>
                    <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className={inputClass(!!errors.country)}
                    >
                        <option value="">Select a country</option>
                        {countries.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </Field>

                <Field label="Level of Study" error={errors.level} full>
                    <select
                        name="level"
                        value={form.level}
                        onChange={handleChange}
                        className={inputClass(!!errors.level)}
                    >
                        <option value="">Select a level</option>
                        {levels.map((l) => (
                            <option key={l} value={l}>
                                {l}
                            </option>
                        ))}
                    </select>
                </Field>
            </div>

            <Field label="Message (optional)">
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Anything else you'd like us to know..."
                    className={inputClass(false)}
                />
            </Field>

            {status === "error" && (
                <p className="text-sm text-red-500">
                    Something went wrong submitting your application. Please try again.
                </p>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="flex items-center gap-4 text-white bg-(--primary) px-6 py-2.5 rounded-full font-semibold disabled:opacity-60"
            >
                <span>{status === "submitting" ? "Submitting..." : "Submit Application"}</span>
                <IconArrowNarrowRight className="size-4" />
            </button>
        </form>
    )
}

function Field({
    label,
    error,
    full,
    children,
}: {
    label: string
    error?: string
    full?: boolean
    children: React.ReactNode
}) {
    return (
        <div className={full ? "sm:col-span-2" : ""}>
            <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
            {children}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    )
}

function inputClass(hasError: boolean) {
    return `w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-(--primary) ${
        hasError ? "border-red-400" : "border-slate-200"
    }`
}