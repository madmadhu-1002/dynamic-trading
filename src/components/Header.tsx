"use client"

import Link from "next/link"
import { Button } from "./ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { useAppContext } from "@/context/AppContext"
import { usePathname } from "next/navigation"


export default function Header() {
    const {
        language,
        setLanguage,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isRTL,
        translations,
    } = useAppContext()
    const pathname = usePathname()


    const t = translations[language]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm"
        >
            <div className="container mx-auto px-4">
                <div className={`flex items-center justify-between h-16 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-04-19-6622555ce3f60-0pvrbAMB5YfLz58ccXP0QiBVUTBpvF.png"
                            alt="Dynamic Motors Trading Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className={`hidden lg:flex space-x-6 xl:space-x-8 ${isRTL ? "space-x-reverse" : ""}`}>
                        <Link href="/" className={`font-medium text-sm xl:text-base transition-colors ${pathname === "/" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                            }`}>
                            {t.nav.home}
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium text-sm xl:text-base transition-colors ${pathname === "/about" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {t.nav.about}
                        </Link>
                        <Link
                            href="/divisions"
                            className={`font-medium text-sm xl:text-base transition-colors ${pathname === "/services" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {t.nav.divisions}
                        </Link>
                        <Link
                            href="/gallery"
                            className={`font-medium text-sm xl:text-base transition-colors ${pathname === "/gallery" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {t.nav.gallery}
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-medium text-sm xl:text-base transition-colors ${pathname === "/contact" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {t.nav.contact}
                        </Link>
                        <Link
                            href="/career"
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
                        >
                            {t.nav.career}
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className={`hidden md:flex items-center space-x-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""
                        }`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-sm px-4 py-2 mx-3">
                            {t.nav.enquire}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                            className="border-gray-300 text-sm"
                        >
                            {language === "en" ? "العربية" : "English"}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                            className="border-gray-300 text-xs px-2 py-1"
                        >
                            {language === "en" ? "عربي" : "EN"}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                                <span
                                    className={`block h-0.5 w-5 bg-gray-600 transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-5 bg-gray-600 transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                                ></span>
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
                        >
                            <nav className="py-4 space-y-3">
                                <Link href="#" className="block px-4 py-2 text-blue-600 bg-blue-50 font-medium">
                                    {t.nav.home}
                                </Link>
                                <Link
                                    href="#about"
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                                >
                                    {t.nav.about}
                                </Link>
                                <Link
                                    href="#services"
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                                >
                                    {t.nav.divisions}
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                                >
                                    {t.nav.gallery}
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                                >
                                    {t.nav.contact}
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                                >
                                    {t.nav.career}
                                </Link>
                                <div className="px-4 pt-2">
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-sm">
                                        {t.nav.enquire}
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
