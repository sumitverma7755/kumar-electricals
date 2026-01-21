'use client';

import Reveal from './Reveal';

const reasons = [
  {
    title: 'Trusted Local Shop',
    description: 'Serving New Hyderabad and nearby areas since 2000.'
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
        <Reveal>
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Choose Kumar Electricals
          </h2>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <h3 className="font-medium text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
