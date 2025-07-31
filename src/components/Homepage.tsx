"use client"

import { useAppContext } from "@/context/AppContext"
import BannerCarousel from './BannerCarousel'
import AboutUs from "./AboutUs"
import { ArrowRight, Award, Globe, Users, Zap, TrendingUp, Shield, Clock } from "lucide-react"
import ServicesCarousel from "./ServicesCarousel"
import { motion } from "framer-motion"

const stats = [
  { icon: Award, value: "18+", label: "Years Experience", color: "text-blue-600" },
  { icon: Globe, value: "50+", label: "Countries Served", color: "text-green-600" },
  { icon: Users, value: "1000+", label: "Happy Clients", color: "text-purple-600" },
  { icon: TrendingUp, value: "99%", label: "Success Rate", color: "text-orange-600" },
]

const Homepage = () => {
  const {
    language,
    isRTL,
    translations,
  } = useAppContext()

  const t = translations[language]
  return (
    <>
      <BannerCarousel  />
      <AboutUs isRTL={isRTL} />
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {t.services.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t.services.titleGradient}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">{t.services.subtitle}</p>
          </motion.div>
          <ServicesCarousel translations={translations} language={language} />
        </div>
      </section>

    </>
  )
}

export default Homepage