"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LucideFacebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useAppContext } from "@/context/AppContext"



export default function Footer() {
  const {
    language,
    translations,
} = useAppContext()
  const t = translations[language]

  const divisions = [
    "Commercial Vehicles",
    "Earth Moving Equipment",
    "Construction Equipment",
    "Material Handling Equipment",
    "Mobile Elevating Work Platforms",
    "Industrial Generators",
  ]

  const moreDivisions = ["Rough Terrain Cranes", "Spare Parts", "Forklifts", "Mini Construction Equipment"]

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Divisions Column 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Divisions</h4>
            <div className="space-y-2">
              {divisions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divisions Column 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 opacity-0">More</h4>
            <div className="space-y-2">
              {moreDivisions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium text-gray-300">Address</div>
                <div className="text-gray-400">Dynamic Motors Trading,</div>
                <div className="text-gray-400">PO Box 269917, Dubai,</div>
                <div className="text-gray-400">United Arab Emirates</div>
              </div>
              <div>
                <div className="font-medium text-gray-300">Mobile</div>
                <div className="text-gray-400">+971 50 1454762</div>
                <div className="text-gray-400">+971 50 6269636</div>
                <div className="text-gray-400">+971 56 1180861</div>
              </div>
            </div>
          </motion.div>

          {/* Email & Legal */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Email</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">ashokv@dtglobal.com</div>
              <div className="text-gray-400">siju@dtglobal.com</div>
              <div className="text-gray-400">khalid@dtglobal.com</div>
            </div>
            <div className="mt-6 space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                terms
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <LucideFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">©2024 Dynamic Motors Trading. rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
