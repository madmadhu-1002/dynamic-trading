'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { TranslationsType } from '@/types/translations'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from "@/context/AppContext"
import HomeSlider2 from './ui/HomeSlider'

interface BannerCarouselProps {
  translations: TranslationsType
  language: string
  isRTL: boolean
}

export default function BannerCarousel() {
  const {
    language,
    isRTL,
    translations
  } = useAppContext()
  const t = translations["en"]
  const [currentSlide, setCurrentSlide] = useState(0)
  const bannerSlides = t.banners || []

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [bannerSlides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)

  if (bannerSlides.length === 0) return null

  return (
    <HomeSlider2 banners={bannerSlides}/>
  )
}
