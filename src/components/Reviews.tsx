'use client';

import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reviews() {
  return (
    <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <MessageSquare className="mt-1 h-6 w-6 flex-shrink-0 text-slate-400" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Customer Feedback
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                We value your feedback. If you've used our services, please share your experience 
                on Google Maps or send us a message on WhatsApp.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Leave a Google Review
                </a>
                <a
                  href="https://wa.me/919453816645?text=Hi%2C%20I%20wanted%20to%20share%20feedback"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  WhatsApp Feedback
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
