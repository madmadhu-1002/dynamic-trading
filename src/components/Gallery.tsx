"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import BreadCrumb from "@/components/ui/BreadCrumb"
import { useAppContext } from "@/context/AppContext"

const images = [
  {
    id: 1,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e6a9d77d5.jpg",
    category: "Commercial-Vehicles",
    title: "Image 3"
  },
  {
    id: 2,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e6d0c1f2e.png",
    category: "Commercial-Vehicles",
    title: "Image 4"
  },
  {
    id: 3,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e6e3a913b.jpg",
    category: "Commercial-Vehicles",
    title: "Image 5"
  },
  {
    id: 4,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a40dfed32c.jpg",
    category: "Commercial-Vehicles",
    title: "Image 6"
  },
  {
    id: 5,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a40ea1bf1a.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 7"
  },
  {
    id: 6,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a40f491d11.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 8"
  },
  {
    id: 7,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a40ff91575.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 9"
  },
  {
    id: 8,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a410b51c4a.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 10"
  },
  {
    id: 9,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a419eeb94d.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 11"
  },
  {
    id: 10,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e8a91bcaa.jpg",
    category: "Earth-Moving-Equipment",
    title: "Image 12"
  },
  {
    id: 11,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a41e0f0165.jpg",
    category: "Mini-Construction-Equipment",
    title: "Image 13"
  },
  {
    id: 12,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e87c3b290.jpg",
    category: "Mini-Construction-Equipment",
    title: "Image 14"
  },
  {
    id: 13,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e889c6749.jpg",
    category: "Mini-Construction-Equipment",
    title: "Image 15"
  },
  {
    id: 14,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-06-10-6666e8965333e.jpg",
    category: "Mini-Construction-Equipment",
    title: "Image 16"
  },
  {
    id: 15,
    src: "https://www.dynamictrading-me.com/storage/images/sliders/2024-04-25-662a4212e0c07.jpg",
    category: "Mini-Construction-Equipment",
    title: "Image 17"
  }
];



const categories = ["all", ...new Set(images.map(image => image.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory)
  const {
    isRTL
  } = useAppContext()

  return (
    <>
      <BreadCrumb
        title={"Gallery"}
        breadcrumb={"Gallery"}
        homeLabel={"home"}
        backgroundImage=""
        isRTL={isRTL} // or true for Arabic, etc.
      />

      <div className="p-5">
        {/* Magnetic Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 mt-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              onHoverStart={() => setHoveredTab(category)}
              onHoverEnd={() => setHoveredTab(null)}
              className={`relative px-6 py-3 text-sm font-medium capitalize rounded-full transition-colors duration-300 ${activeCategory === category ? "text-white" : "text-slate-600 hover:text-slate-800"
                }`}
              animate={{
                scale: hoveredTab === category ? 1.1 : 1,
                x:
                  hoveredTab && hoveredTab !== category
                    ? categories.indexOf(hoveredTab) > categories.indexOf(category)
                      ? -10
                      : 10
                    : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="magneticBg"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 },
                }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className=" overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={825}
                    height={340}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-teal-600/20"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}
