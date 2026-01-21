'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'Do you repair cooler motors?',
    answer: 'Yes, we repair all types of cooler motors. We use quality spare parts and test the motor before returning it to ensure it works properly.'
  },
  {
    question: 'What are your shop hours?',
    answer: 'We are open Monday to Saturday from 10:00 AM to 9:00 PM. We are closed on Sundays. For urgent repairs, you can call us anytime.'
  },
  {
    question: 'Do you offer home visits for electrical work?',
    answer: 'Yes, we provide home visit services for house wiring, installations, and repairs. Call us to schedule an appointment and get a quote.'
  },
  {
    question: 'Are your products genuine?',
    answer: 'Absolutely! We only sell genuine products from authorized brands like Havells, Polycab, Anchor, and Philips. All products come with manufacturer warranty.'
  },
  {
    question: 'How long does fan repair take?',
    answer: 'Most ceiling fan repairs are completed the same day. For fan winding, it typically takes 1-2 days depending on the work required.'
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, we provide a 30-day warranty on all repair work. If you face any issues with the repaired item, bring it back and we will fix it free of charge.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about our services and products
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
