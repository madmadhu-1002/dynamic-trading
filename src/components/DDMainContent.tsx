"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from "lucide-react"
import { useState } from "react"
import Sidebar from "./ui/Sidebar"
import { TranslationsType } from "@/types/translations"

interface MainContentProps {
  division: {
    title: string
    description: string
    images?: string[]
    ar?: {
      title: string
      description: string
    }
  }
  translations: TranslationsType
  language: string
  isRTL: boolean
}

export default function DDMainContent({ division, translations, language, isRTL }: MainContentProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const t = translations[language]
  console.log(t,"t")
  const images = division.images?.length
    ? division.images
    : [
        "/images/default-1.jpg",
        "/images/default-2.jpg",
        "/images/default-3.jpg",
        "/images/default-4.jpg",
      ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  const localizedTitle = language === "ar" && division.ar?.title ? division.ar.title : division.title
  const localizedDescription =
    language === "ar" && division.ar?.description ? division.ar.description : division.description

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Optional Sidebar could go here */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Sidebar />

              
            </motion.div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">{localizedTitle}</motion.h2>
              {/* Image Carousel */}
              <div className="mb-8 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={images[currentImage]}
                      alt={`Division Image ${currentImage + 1}`}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />

                    {/* Overlay and Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className={`absolute bottom-6 ${isRTL ? "right-6" : "left-6"} text-white`}>
                      <motion.h3 className="text-xl sm:text-2xl font-bold mb-2">{localizedTitle}</motion.h3>
                      <motion.p className="text-sm sm:text-base text-gray-200">{localizedDescription}</motion.p>
                    </div>

                    {/* Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg hover:scale-110 transition"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg hover:scale-110 transition"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* View Gallery */}
                    <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{"View Gallery"}</span>
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex justify-center space-x-2 mt-4 px-4">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-16 h-12 overflow-hidden rounded-lg border-2 transition ${
                          currentImage === index
                            ? "border-blue-500 shadow-lg scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Division Description */}
              <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
                
                <motion.p className="text-base sm:text-lg text-gray-700 leading-relaxed">{localizedDescription}</motion.p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg font-medium flex items-center space-x-2">
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium">
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          
          
        </div>
      </div>
    </section>
  )
}
