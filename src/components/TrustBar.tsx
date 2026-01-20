'use client';

import { Award, Shield, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Award, label: '25+ Years Experience', value: 'Since 2000' },
  { icon: Shield, label: 'Certified Repair Experts', value: 'Licensed Electricians' },
  { icon: TrendingDown, label: 'Wholesale Prices', value: 'Best Rates in Lucknow' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 text-white"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold text-lg">{stat.label}</div>
                <div className="text-slate-300 text-sm">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
