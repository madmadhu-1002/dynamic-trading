"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { TranslationsType } from "@/types/translations"

interface ServicesTabsProps {
    translations: TranslationsType
    language: string
}

export default function ExpertiseAlternatingLayout({ translations }: ServicesTabsProps) {
    const router = useRouter()
    const allServices = Object.values(translations.en.about.divisions.divisionsContent ?? {})

    return (
        <section className="py-0">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Our <span className="font-bold">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Three pillars of excellence that define our commitment to superior industrial solutions
          </p>
        </motion.div> */}

                {/* Alternating Content Sections */}
                <div className="space-y-16">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative w-full aspect-video ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                <Image
                                    src={service.images[0] || "/placeholder.svg"}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain "
                                    priority
                                />
                            </div>


                            {/* Text */}
                            <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                                <div>
                                    <h3 className="text-4xl font-light text-gray-900 mb-6">{service.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed font-light">{service.description}</p>
                                </div>

                                <button
                                    onClick={() => router.push(`/divisions/${service.slug}`)}
                                    className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition rounded-none"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
