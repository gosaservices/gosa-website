import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BENEFITS = [
  '20% Lifetime discount on all contracts',
  'Premium talent pool access', 
  'Dedicated account manager',
  '24-48h priority staffing',
  'First access to new services',
  'Quarterly business reviews'
]

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  // Show popup after delay, only once per user session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('hasSeenPopup', 'true')
    setIsVisible(false)
  }

  const handleJoinNow = () => {
    sessionStorage.setItem('hasSeenPopup', 'true')
    navigate('/contact?source=popup')
  }

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="bg-white shadow-2xl rounded-xl max-w-2xl w-full border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-blue-900 px-8 py-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="font-semibold text-sm tracking-wide">FOUNDING PARTNER PROGRAM</span>
              </div>
              
              <h3 className="text-2xl font-bold leading-snug">Join Our First 30 Partners</h3>
              <p className="text-blue-100 text-sm mt-1">Exclusive lifetime benefits & priority access</p>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row">
              
              {/* Left - Benefits */}
              <div className="md:w-1/2 w-full p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="space-y-4">
                  {BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Progress + CTA */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>Founding Partner Positions</span>
                    <span className="font-semibold text-blue-900">15/30 Filled</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-blue-900 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Only 15 positions remaining</p>
                </div>

                <div className="space-y-4 mt-6">
                  <motion.button
                    onClick={handleJoinNow}
                    whileHover={{ scale: 1.03, boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Secure Your Position
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <button
                    onClick={handleClose}
                    className="w-full text-gray-500 hover:text-gray-700 text-sm transition-colors py-2"
                  >
                    No thanks, I'll pass
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupBanner
