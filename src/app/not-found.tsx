"use client"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-full flex items-center justify-center bg-white mt-8">
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-9xl font-bold text-gray-200 mb-4"
          >
            404
          </motion.h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <Button
        variant="outline"
        className="w-full bg-transparent cursor-pointer transition-all duration-150 ease-in-out active:scale-95 hover:brightness-105 focus:ring-2 focus:ring-blue-500"
        size="lg"
        onClick={() => router.push("/")}
      >
        Go Home
      </Button>
        </motion.div>
      </div>
    </div>
  )
}
