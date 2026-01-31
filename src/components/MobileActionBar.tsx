'use client';

import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function MobileActionBar() {
  const handleNavigate = () => {
    // Universal link format that opens Google Maps app directly
    window.location.href = 'https://www.google.com/maps/dir/?api=1&destination=26.867192,80.949335';
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-slate-200 shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-slate-200">
        {/* Call Button - Primary */}
        <a
          href="tel:+919453816645"
          className="flex flex-col items-center justify-center py-3 px-4 active:bg-slate-50 transition-colors min-h-[72px]"
          aria-label="Call Kumar Electricals"
        >
          <div className="w-11 h-11 bg-amber-500 rounded-full flex items-center justify-center mb-1.5">
            <Phone className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold text-slate-900">Call</span>
        </a>

        {/* Navigate Button */}
        <button
          onClick={handleNavigate}
          className="flex flex-col items-center justify-center py-3 px-4 active:bg-slate-50 transition-colors min-h-[72px]"
          aria-label="Navigate to Kumar Electricals"
        >
          <div className="w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center mb-1.5">
            <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold text-slate-900">Go</span>
        </button>

        {/* WhatsApp Button - Secondary */}
        <a
          href="https://wa.me/919453816645"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 px-4 active:bg-slate-50 transition-colors min-h-[72px]"
          aria-label="Message on WhatsApp"
        >
          <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center mb-1.5">
            <MessageCircle className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold text-slate-900">Chat</span>
        </a>
      </div>
    </div>
  );
}
