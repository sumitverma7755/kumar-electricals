'use client';

import { Phone, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getShopStatus } from '@/lib/shopStatus';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({ open: false, label: 'Checking...' });

  useEffect(() => {
    const updateStatus = () => {
      setStatus(getShopStatus());
    };

    // Update immediately
    updateStatus();

    // Update every minute
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Est. Badge */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo.png?v=2"
                alt="Kumar Electricals Logo"
                width={40}
                height={40}
                className="h-9 w-auto md:h-10"
                priority
                unoptimized
              />
              <span className="text-lg font-bold text-slate-900">Kumar Electricals</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                <Award className="h-3 w-3" />
                Est. 2000
              </span>
            </div>
            <span className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.open
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
              }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.open ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {status.label}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <Link href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
              Services
            </Link>
            <Link href="#products" className="text-slate-600 hover:text-slate-900 transition-colors">
              Products
            </Link>
            <Link href="#gallery" className="text-slate-600 hover:text-slate-900 transition-colors">
              Gallery
            </Link>
            <Link href="#booking" className="text-slate-600 hover:text-slate-900 transition-colors">
              Book Service
            </Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
              Reviews
            </Link>
            <Link href="/feedback" className="text-slate-600 hover:text-slate-900 transition-colors">
              Feedback
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <a
              href="tel:+919453816645"
              className="flex items-center gap-2 bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-amber-600 hover:shadow-lg transition-all min-h-[44px]"
              aria-label="Call Kumar Electricals"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </nav>

          {/* Mobile: Phone Number Always Visible */}
          <a
            href="tel:+919453816645"
            className="md:hidden flex items-center gap-2 bg-amber-500 text-white px-4 py-2.5 rounded-lg font-medium text-sm min-h-[44px]"
            aria-label="Call Kumar Electricals"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 transition-colors ml-2 min-h-[44px] min-w-[44px]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu" 
            className="border-t border-slate-200 py-4 md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                  <Award className="h-3 w-3" aria-hidden="true" />
                  Est. 2000
                </span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.open
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.open ? 'bg-green-500' : 'bg-red-500'}`} aria-hidden="true"></span>
                  {status.label}
                </span>
              </div>
              <Link 
                href="#services" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#products" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="#gallery" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="#booking" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </Link>
              <Link 
                href="#testimonials" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/feedback" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Feedback
              </Link>
              <Link 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 py-2 min-h-[44px] flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
