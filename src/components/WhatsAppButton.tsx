'use client';

import { MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { getShopStatus } from '@/lib/shopStatus';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [status, setStatus] = useState({ open: false, label: 'Checking...' });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const updateStatus = () => {
      setStatus(getShopStatus());
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.a
        href="https://wa.me/919453816645"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 bg-slate-900 text-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3">
              <p className="text-sm font-semibold mb-1">Chat with us</p>
              <div className="flex items-center gap-2 text-xs">
                <Clock className="h-3 w-3" aria-hidden="true" />
                <span className={status.open ? 'text-green-400' : 'text-red-400'}>
                  {status.label}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                10 AM - 9 PM (7 days)
              </p>
            </div>
          </motion.div>
        )}
      </motion.a>
      
      {/* Status indicator */}
      <div className={`w-3 h-3 rounded-full ${status.open ? 'bg-green-500' : 'bg-red-500'} shadow-lg`} aria-hidden="true" />
    </div>
  );
}
