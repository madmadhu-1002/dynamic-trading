"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { TranslationsType } from "@/types/translations"

interface ServicesTabsProps {
    translations: TranslationsType
    language: string
}

export default function ModernPillTabs({ translations }: ServicesTabsProps) {
    const router = useRouter()
    const allServices = Object.values(translations.en.about.divisions.divisionsContent ?? {})
    const [activeIndex, setActiveIndex] = useState(0)
    const selectedService = allServices[activeIndex]

    const tabGroups = [allServices.slice(0, 5), allServices.slice(5, 10)]

    return (
        <>
        <section className="py-2 px-4 max-w-screen-xl mx-auto space-y-4 ">
            {/* Modern Pill Tabs */}
            <div className="space-y-3">
                {tabGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="flex flex-wrap justify-center gap-4 relative">
                        {group.map((service, idx) => {
                            const globalIndex = groupIdx === 0 ? idx : 5 + idx
                            const isActive = activeIndex === globalIndex

                            return (
                                <button
                                    key={service.slug}
                                    onClick={() => setActiveIndex(globalIndex)}
                                    className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 ${isActive
                                        ? "text-white shadow-lg"
                                        : "text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="pill-bg"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full "
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{service.title}</span>
                                </button>
                            )
                        })}
                    </div>
                ))}
            </div>

            {/* Detail View */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-sm"
            >
                <div className="relative w-full h-80 ">
                    <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        fill
                        className="object-contain rounded-xl "
                    />
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{selectedService.description}</p>
                    <button
                        onClick={() => router.push(`/divisions/${selectedService.slug}`)}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-semibold"
                    >
                        View Details
                    </button>
                </div>
            </motion.div>
        </section>
      </>
    )
}
