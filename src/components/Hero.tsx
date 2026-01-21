'use client';

import { Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-sm text-amber-100 mb-8 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-500/30"
          >
            <MapPin className="h-4 w-4 text-amber-400" />
            <span>New Hyderabad, Nishatganj • <strong className="text-white">Est. 2000</strong></span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Powering New Hyderabad{' '}
            <span className="text-amber-400">Since 2000</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base lg:text-xl text-slate-300 leading-relaxed mb-4 max-w-3xl mx-auto"
          >
            Your trusted partner for genuine electrical parts and expert repairs in Nishatganj.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-sm lg:text-lg text-amber-200 font-medium mb-10"
          >
            Over 25 years of service to our community.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+919453816645"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-6 py-3.5 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-amber-400 hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:-translate-y-0.5 min-h-[44px]"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm lg:text-base">Call +91 94538 16645</span>
            </a>
            <a
              href="https://wa.me/919453816645"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all min-h-[44px]"
            >
              <span className="text-sm lg:text-base">WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
