"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface HeroSectionProps {
  title: string;
  breadcrumb: string;
  homeLabel: string;
  backgroundImage?: string;
  isRTL?: boolean;
}

export default function BreadCrumb({
  title,
  breadcrumb,
  homeLabel,
  backgroundImage = "",
  isRTL = false,
}: HeroSectionProps) {
  return (
    <section className="relative h-[20vh] sm:h-[30vh] overflow-hidden bg-gradient-to-r from-gray-600 to-gray-500">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/50" />
      <div className="relative z-10 container-fluid mx-auto ps-[60px] pe-[60px] h-full flex flex-col justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h1 className={clsx("text-3xl sm:text-4xl lg:text-5xl font-bold mb-4", isRTL && "text-right")}>
            {title}
          </h1>
          <div
            className={clsx(
              "flex items-center space-x-2 text-sm",
              isRTL && "flex-row-reverse space-x-reverse"
            )}
          >
            <Link href="/homepage5" className="flex items-center hover:text-blue-300 transition-colors">
              <Home className="w-4 h-4 mr-1" />
              {homeLabel}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-300">{breadcrumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
