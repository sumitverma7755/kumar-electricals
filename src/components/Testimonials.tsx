'use client';

import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Gomti Nagar',
    rating: 5,
    text: 'Excellent service! They repaired my ceiling fan the same day. Very honest pricing and quality work.',
    date: '2 weeks ago'
  },
  {
    name: 'Priya Sharma',
    location: 'Indira Nagar',
    rating: 5,
    text: 'Best electrical shop in the area. Genuine products and the owner is very knowledgeable. Highly recommended!',
    date: '1 month ago'
  },
  {
    name: 'Amit Verma',
    location: 'Alambagh',
    rating: 5,
    text: 'Got complete house wiring done. Professional work and they completed it on time. Very satisfied!',
    date: '3 months ago'
  },
  {
    name: 'Sunita Gupta',
    location: 'Hazratganj',
    rating: 5,
    text: 'Reliable and trustworthy. I always buy my electrical items from here. Good quality at fair prices.',
    date: '2 months ago'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600">
            Real reviews from satisfied customers across Lucknow
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <Quote className="h-8 w-8 text-amber-500 mb-4" />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                  <div className="text-xs text-slate-400 mt-1">{testimonial.date}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
