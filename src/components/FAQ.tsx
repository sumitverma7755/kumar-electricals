'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'Do you repair ceiling fans?',
    answer: 'Yes, we specialize in ceiling fan repairs including motor winding, bearing replacement, and speed regulator issues. Most repairs are completed the same day.'
  },
  {
    question: 'Do you provide home wiring services?',
    answer: 'Absolutely! We offer complete house wiring services for new homes and rewiring for old properties. Our licensed electricians ensure all work meets safety standards.'
  },
  {
    question: 'Do you sell branded electrical items?',
    answer: 'Yes, we are authorized dealers for top brands like Havells, Polycab, Anchor, Philips, and Orient. All products come with manufacturer warranty.'
  },
  {
    question: 'What are your shop timings?',
    answer: 'We are open 7 days a week from 10:00 AM to 9:00 PM, including Sundays. For urgent repairs, you can call us anytime.'
  },
  {
    question: 'Do you provide on-site service?',
    answer: 'Yes, we provide home visit services for installations, repairs, and house wiring. Call us to schedule an appointment and get a quote.'
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We serve New Hyderabad, Nishatganj, Alambagh, Indira Nagar, Gomti Nagar, Aminabad, Hazratganj, and surrounding areas in Lucknow. Call us to check if we cover your area.'
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
