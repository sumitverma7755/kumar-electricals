'use client';

import { motion } from 'framer-motion';
import { Home, Fan, Zap } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Electrical Retail',
    description: 'Genuine electrical products from top brands - Havells, Orient, Philips, and more.',
    items: [
      'Wires & Cables (Havells, Polycab)',
      'Switches & Sockets (Anchor)',
      'LED Lights & Bulbs (Philips)',
      'Ceiling Fans (Orient, Crompton)',
      'All products at wholesale prices'
    ]
  },
  {
    icon: Fan,
    title: 'Expert Repairs',
    description: 'Professional repair services with genuine parts and experienced technicians.',
    items: [
      'Motor Winding (Fan, Cooler)',
      'Ceiling Fan Repair',
      'Mixer Grinder Repair',
      'Iron & Appliance Fixing',
      'Same-day service available'
    ]
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'Complete electrical solutions for residential and commercial properties.',
    items: [
      'Complete House Wiring',
      'Inverter Setup & Installation',
      'Circuit Breaker Installation',
      'Electrical Safety Inspections',
      'Emergency Repairs'
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Expert Electrical Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional electrical solutions backed by 25+ years of experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-amber-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.items.map((item, i) => (
                  <li key={i} className="text-slate-700 flex items-start gap-2.5">
                    <span className="text-amber-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
