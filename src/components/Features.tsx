'use client';

import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-l-2 border-slate-300 pl-4"
          >
            <h3 className="text-base font-medium text-slate-900">
              Honest Pricing
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              No hidden charges. We quote upfront and stick to it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border-l-2 border-slate-300 pl-4"
          >
            <h3 className="text-base font-medium text-slate-900">
              Quality Parts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We only use genuine branded parts with proper warranty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="border-l-2 border-slate-300 pl-4"
          >
            <h3 className="text-base font-medium text-slate-900">
              Local & Trusted
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Serving Lucknow families and businesses since 2014.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
