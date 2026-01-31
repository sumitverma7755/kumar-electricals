'use client';

import { Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Subtle Accent Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-sm text-slate-700 mb-8 bg-white px-5 py-2.5 rounded-full border border-amber-200 shadow-sm"
          >
            <MapPin className="h-4 w-4 text-amber-600" />
            <span>New Hyderabad, Nishatganj • <strong className="text-slate-900">Est. 2000</strong></span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Powering New Hyderabad{' '}
            <span className="text-amber-600">Since 2000</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base lg:text-xl text-slate-700 leading-relaxed mb-4 max-w-3xl mx-auto"
          >
            Your trusted partner for genuine electrical parts and expert repairs in Nishatganj.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-sm lg:text-lg text-slate-600 font-medium mb-10"
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
            {/* Primary CTA - Call Now */}
            <a
              href="tel:+919453816645"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 h-[44px] sm:h-[48px] sm:px-6 rounded-xl font-semibold text-[15px] sm:text-base hover:bg-amber-600 hover:shadow-xl transition-all"
              aria-label="Call Kumar Electricals"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Call +91 94538 16645</span>
            </a>
            {/* Secondary CTA - WhatsApp */}
            <a
              href="https://wa.me/919453816645"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 h-[44px] sm:h-[48px] sm:px-6 rounded-xl font-medium text-[15px] sm:text-base hover:bg-green-600 transition-all"
              aria-label="Message on WhatsApp"
            >
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
