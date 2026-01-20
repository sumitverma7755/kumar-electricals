'use client';

import { MapPin, Phone, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleShareLocation = () => {
    const locationText = encodeURIComponent(
      'Here is the location for Kumar Electricals, Nishatganj: https://maps.google.com/?q=26.867192,80.949335'
    );
    window.open(`https://wa.me/?text=${locationText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              Visit Our Shop
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    New Hyderabad, Nishatganj<br />
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="tel:+919453816645" 
                    className="text-slate-900 text-lg hover:text-amber-600 transition-colors"
                  >
                    +91 94538 16645
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-600">
                    Mon–Sat: 10:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Share Location Button */}
            <button
              onClick={handleShareLocation}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg min-h-[44px]"
            >
              <Share2 className="h-5 w-5" />
              <span>Share Location on WhatsApp</span>
            </button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d80.949335!3d26.867192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzAxLjkiTiA4MMKwNTYnNTcuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-[350px] rounded-xl border border-slate-200"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Kumar Electricals - New Hyderabad, Nishatganj, Lucknow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
