'use client';

import { Shield, CheckCircle, Award, DollarSign } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: CheckCircle,
    title: 'Genuine Electrical Parts',
    description: 'We only use authentic products from authorized brands like Havells, Anchor, and Philips'
  },
  {
    icon: Shield,
    title: 'Safety-First Practices',
    description: 'All wiring and installations follow strict safety standards to protect your home'
  },
  {
    icon: Award,
    title: 'Experienced Technicians',
    description: '25+ years of expertise in electrical repairs, installations, and troubleshooting'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Clear quotes before we start any work'
  }
];

export default function SafetyQuality() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            When it comes to electrical work, quality and safety cannot be compromised
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="text-center mt-12">
          <p className="text-slate-300">
            Licensed, insured, and committed to excellence in every job
          </p>
        </Reveal>
      </div>
    </section>
  );
}
