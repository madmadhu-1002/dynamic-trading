"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { useRouter, usePathname } from "next/navigation"

// Define the interface for division content items
interface DivisionContentItem {
  title: string
  slug: string
  description?: string
  image?: string
  ar?: {
    title: string
    description: string
  }
}

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const {
    language,
    translations
  } = useAppContext()

  const t = translations[language]
  const items: string[] = t.about.divisions.items
  const divisionsContent: Record<string, DivisionContentItem> = t.about.divisions.divisionsContent ?? {}

  return (
    <Card className="bg-white border-0 shadow-xl sticky top-24 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4">
        <h3 className="text-xl font-bold text-white">{t.about.divisions.title}</h3>
        <p className="text-blue-100 text-sm mt-1">Explore our complete range</p>
      </div>
      <CardContent className="p-0">
        <div>
          {items.map((item: string, index: number) => {
            const divisionEntry = Object.values(divisionsContent).find(
              (d) => d.title === item
            )

            const isActive = divisionEntry?.slug
              ? pathname === `/divisions/${divisionEntry.slug}`
              : false

            return (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => divisionEntry?.slug && router.push(`/divisions/${divisionEntry.slug}`)}
                className={`flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200 cursor-pointer group ${
                  isActive ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      isActive ? "bg-blue-500" : "bg-green-500 group-hover:bg-blue-500"
                    }`}
                  ></div>
                  <span
                    className={`text-sm font-medium transition-all duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700 group-hover:text-blue-700"
                    }`}
                  >
                    {item}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-all duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1"
                  }`}
                />
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default Sidebar
