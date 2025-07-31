"use client"


import { motion } from "framer-motion"
import { useAppContext } from "@/context/AppContext"
import BreadCrumb from "./ui/BreadCrumb"
import Sidebar from "./ui/Sidebar"

const About = () => {
    const {
        language,
        isRTL,
        translations
      } = useAppContext()
      const t = translations[language]
  return (
    <>
        {/* Hero Section */}
        <BreadCrumb
        title={t.about.title}
        breadcrumb={t.about.breadcrumb}
        homeLabel={t.nav.home}
        backgroundImage=""
        isRTL={isRTL} // or true for Arabic, etc.
      />

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Large Image */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop"
                    alt="Construction Equipment"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t.about.mainContent.title}</h2>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {t.about.mainContent.description1}
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {t.about.mainContent.description2}
                  </p>
                </div>
              </motion.div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  )
}

export default About