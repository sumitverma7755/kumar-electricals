'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const brands = [
  'Havells',
  'Crompton',
  'Anchor by Panasonic',
  'Philips',
  'Orient Electric',
  'Polycab',
  'Syska',
  'V-Guard'
];

export default function BrandsMarquee() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-amber-600 mb-3">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Authorized Dealer For</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Premium Electrical Brands
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-24 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <span className="text-slate-700 font-semibold text-center px-4">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
