"use client"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error() {
  const router = useRouter();
  return (
    <div className="h-full flex items-center justify-center bg-white mt-8">
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            >
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We encountered an unexpected error. Our team has been notified and is working to fix this issue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <Button
        className="w-full cursor-pointer transition-all duration-150 ease-in-out active:scale-95 hover:brightness-105 focus:ring-2 focus:ring-blue-500"
        size="lg"
        onClick={() => router.refresh()}
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>

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
