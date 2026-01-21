import { Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Logo.png"
                alt="Kumar Electricals Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <div className="text-lg font-semibold text-slate-900">
                Kumar Electricals
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">
              Trusted since 2000. Serving Lucknow for over 25 years with quality electrical solutions.
            </p>
            <p className="text-sm text-amber-600 font-medium">
              Est. 2000 • Family Business
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-slate-900 mb-4">Contact</h3>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="tel:+919453816645" className="hover:text-slate-900 transition-colors">
                  +91 94538 16645
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>New Hyderabad, Nishatganj, Lucknow</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-medium text-slate-900 mb-4">Working Hours</h3>
            <div className="text-slate-600 space-y-1.5">
              <p>Monday – Saturday</p>
              <p>10:00 AM – 9:00 PM</p>
              <p className="text-sm text-slate-500 mt-3">Closed on Sundays</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            © 2000-2026 Kumar Electricals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
