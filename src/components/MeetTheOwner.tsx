'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Reveal from './Reveal';

export default function MeetTheOwner() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <Reveal>
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">The Heart of Our Business</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              A Legacy of Trust
            </h2>

            <p className="text-xl text-slate-700 font-medium mb-6">
              Serving New Hyderabad & Nishatganj Since 2000
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With over 25 years of dedicated experience in electrical repairs and services, 
                the founder of Kumar Electricals established this shop with a simple mission: 
                to provide honest, reliable electrical solutions to the people of New Hyderabad 
                and Nishatganj.
              </p>

              <p>
                From the very beginning in 2000, the focus has been on building lasting relationships 
                through quality workmanship, genuine parts, and transparent pricing. What started as 
                a small neighborhood shop has grown into a trusted name, serving thousands of families 
                and businesses across Lucknow.
              </p>

              <p>
                Whether it's a complex motor winding job, a complete house wiring project, or a simple 
                fan repair, every customer receives the same level of attention and expertise. This 
                commitment to excellence and community service has been the cornerstone of Kumar 
                Electricals for over two decades.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-900 font-semibold text-lg">Proprietor</p>
              <p className="text-slate-600 text-sm mt-1">Kumar Electricals</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Expert Technician</div>
                  <div className="text-sm text-slate-600">25+ Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Community First</div>
                  <div className="text-sm text-slate-600">Serving Nishatganj Families</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Image */}
          <Reveal delay={0.2} className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/Owner.JPG"
                alt="Founder of Kumar Electricals"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm font-medium">Years</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
