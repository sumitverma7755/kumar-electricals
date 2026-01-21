'use client';

import { Star } from 'lucide-react';
import Reveal from './Reveal';

export default function GoogleReviewCTA() {
  const handleGoogleReview = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Kumar+Electricals+New+Hyderabad+Nishatganj+Lucknow',
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
            ))}
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Love Our Service?
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            If you're happy with our work, please take a moment to leave us a Google review. 
            Your feedback helps other customers in Lucknow find reliable electrical services.
          </p>

          <button
            onClick={handleGoogleReview}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <Star className="h-5 w-5" />
            <span>Review Us on Google</span>
          </button>

          <p className="text-sm text-slate-500 mt-6">
            Your review takes less than a minute and means the world to us
          </p>
        </Reveal>
      </div>
    </section>
  );
}
