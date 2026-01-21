'use client';

import { MapPin } from 'lucide-react';
import Reveal from './Reveal';

const areas = [
  'New Hyderabad',
  'Nishatganj',
  'Alambagh',
  'Indira Nagar',
  'Gomti Nagar',
  'Aminabad',
  'Hazratganj',
  'Chowk',
  'Rajajipuram',
  'Aliganj',
  'Mahanagar',
  'Vikas Nagar'
];

export default function AreasWeServe() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-600 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Service Areas</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Areas We Serve in Lucknow
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We proudly serve customers across Lucknow with fast, reliable electrical services
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areas.map((area) => (
              <div
                key={area}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-amber-300 hover:bg-amber-50 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Not in your area? <a href="tel:+919453816645" className="text-amber-600 hover:text-amber-700 font-medium">Call us</a> to check if we can help
          </p>
        </Reveal>
      </div>
    </section>
  );
}
