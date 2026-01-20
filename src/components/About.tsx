'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              A Legacy of Trust Since 2000
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kumar Electricals was founded in 2000 by Mr. Rajesh Kumar in Rajajipuram, Lucknow. 
              What started as a small electrical shop has grown into one of the most trusted names 
              in the area, serving three generations of families.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              For over 25 years, we have been providing reliable electrical repairs, quality products, 
              and honest service to our local customers. Our commitment to genuine parts, fair pricing, 
              and expert workmanship has earned us the trust of thousands of families across Lucknow.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you need electrical supplies, fan repair, or house wiring, we bring the same 
              dedication and expertise that has defined our family business for a quarter century.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
