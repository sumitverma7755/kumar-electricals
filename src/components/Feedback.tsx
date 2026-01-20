'use client';

import { motion } from 'framer-motion';

export default function Feedback() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-slate-900">
            Customer Feedback
          </h2>
          <p className="mt-3 text-slate-600">
            Have you visited our shop or used our services?
          </p>

          <a
            href="https://wa.me/919453816645?text=Hi%2C%20I%20wanted%20to%20share%20feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Share Feedback on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
