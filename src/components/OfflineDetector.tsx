"use client"

import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    // Check initial state
    setIsOffline(!navigator.onLine)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-16 left-0 right-0 z-40 bg-red-500 text-white py-3 px-4 text-center shadow-lg"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="h-5 w-5" aria-hidden="true" />
            <span className="font-semibold">You're offline</span>
            <span className="hidden sm:inline">- Some features may not work</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
