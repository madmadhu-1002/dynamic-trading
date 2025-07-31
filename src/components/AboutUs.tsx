"use client"

import { motion } from "framer-motion"

interface AboutSectionProps {
  isRTL: boolean
}

export default function AboutUs({ isRTL }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${isRTL ? "lg:order-2" : ""}`}
          >
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${isRTL ? "text-right" : ""}`}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Dynamic Motors Trading
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 mt-8">
              <div className="text-center lg:text-left p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  18+
                </div>
                <div className="text-gray-600 text-sm font-medium">Years of Excellence</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Global
                </div>
                <div className="text-gray-600 text-sm font-medium">Customer Reach</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm font-medium">Support Service</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${isRTL ? "lg:order-1" : ""}`}
          >
            <div
              className={`text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 sm:space-y-6 ${isRTL ? "text-right" : "text-left"}`}
            >
              <p>
                Dynamic Motors Trading, a true leader in the world of trading! Since our establishment in 2006, we&apos;ve
                been at the forefront of the industry, earning a reputation as one of the premier trading companies in
                the UAE. Specializing in brand-new commercial vehicles and equipment for the construction and industrial
                sectors, we&apos;ve served customers from all corners of the globe with excellence and integrity.
              </p>

              <p>
                Our extensive product range speaks volumes about our commitment to meeting diverse needs. From
                earth-moving equipment to commercial trucks, mini construction equipment to lifting and material
                handling tools, and even warehousing solutions, we&apos;ve got everything you need to power your projects to
                success.
              </p>

              <p>
                But our dedication doesn&apos;t stop there. We go the extra mile to provide additional support, offering a
                comprehensive selection of spare parts for all the equipment and trucks we deal with. With our
                unwavering commitment to quality and service, you can trust us to be your trusted partner every step of
                the way.
              </p>

              <p className="text-blue-600 font-semibold">
                Here&apos;s to Dynamic Motors Trading - cheers to continued success, innovation, and excellence in the world
                of trading!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
