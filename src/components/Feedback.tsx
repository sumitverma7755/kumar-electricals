'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function Feedback() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-slate-900">
            Customer Feedback
          </h2>
          <p className="mt-3 text-slate-600">
            Have you visited our shop or used our services?
          </p>

          <Link
            href="/feedback"
            className="inline-block mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Leave Feedback
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
