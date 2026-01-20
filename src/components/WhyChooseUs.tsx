'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Trusted Local Shop',
    description: 'Serving New Hyderabad and nearby areas since 2014.'
  },
  {
    title: 'Genuine Parts',
    description: 'We use reliable and branded electrical products.'
  },
  {
    title: 'Experienced Work',
    description: 'Repairs and installations done with safety and care.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Choose Kumar Electricals
          </h2>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-medium text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
