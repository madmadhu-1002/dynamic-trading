'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type BannerType = {
  id: string
  label?: string
  title: string
  subtitle: string
  image: string
  cta: {
    primary: string
    secondary: string
  }
}

const HomeSlider2 = ({ banners }: { banners: BannerType[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full pt-1">
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-white transition-all hover:bg-white/5 md:flex lg:h-16 lg:w-16">
          <FiChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>

        <button className="swiper-button-next-custom absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-white transition-all hover:bg-white/5 md:flex lg:h-16 lg:w-16">
          <FiChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>

        <Swiper
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Autoplay, Navigation]}
          className="h-full w-full"
        >
          {banners.map(({ id, title, subtitle, image }, index) => (
            <SwiperSlide key={id} className="relative">
              <Image
                alt={title}
                width={2774}
                height={650}
                title={title}
                src={image}
                className="w-full h-auto object-contain"
              />

              {/* Motion Content */}
              <AnimatePresence mode="wait">
                {index === activeIndex && (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 lg:px-32 text-white "
                  >
                    <motion.h2
                      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Welcome to Dynamic Motors Trading
                    </motion.h2>
                    <motion.p
                      className="mt-2 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-light drop-shadow"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {subtitle}
                    </motion.p>
                    {/* Add CTA buttons with motion if needed */}
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider2
