'use client';

import { Award } from 'lucide-react';
import Reveal from './Reveal';

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
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-600 mb-3">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Authorized Dealer For</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Premium Electrical Brands
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Reveal key={brand} delay={index * 0.05}>
              <div className="flex items-center justify-center h-24 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                <span className="text-slate-700 font-semibold text-center px-4">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
