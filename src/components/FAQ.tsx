'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve Rajapur, Tiwaripur, Babhnauli, Kamasin, and surrounding areas in Lalganj, Raebareli. We\'re happy to travel for larger projects!'
  },
  {
    question: 'Do you provide emergency electrical services?',
    answer: 'Yes! We offer 24/7 emergency electrical services for urgent issues like power outages, electrical faults, and safety hazards. Call us anytime at +91 94157 72903.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Pricing varies based on the type and complexity of work. Basic repairs start from ₹300, while complete house wiring depends on property size. We offer free consultations and transparent quotes before starting any project.'
  },
  {
    question: 'Do you repair ceiling fans and motors?',
    answer: 'Yes, we specialize in ceiling fan repairs including motor winding, bearing replacement, and speed regulator issues. Most repairs are completed the same day.'
  },
  {
    question: 'Do you sell branded electrical items?',
    answer: 'Yes, we are authorized dealers for top brands like Havells, Polycab, Anchor, Philips, Crompton, V-Guard, Finolex, and more. All products come with manufacturer warranty.'
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
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed electricians with years of experience. We follow all safety standards and building codes to ensure quality work.'
  },
  {
    question: 'How long does electrical installation take?',
    answer: 'Timeline depends on the project scope. Simple repairs can be done within hours, while complete home wiring may take several days. We provide realistic timelines during consultation.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes! We provide warranties on both our workmanship and the products we install. Warranty periods vary by service and product type.'
  }
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
