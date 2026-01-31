'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Star, ArrowLeft, CheckCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MobileActionBar from '@/components/MobileActionBar';
import { toast } from 'sonner';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '',
    phone: '',
    rating: 5,
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppFeedback = () => {
    const message = encodeURIComponent(
      'Hi, I would like to share my feedback about Kumar Electricals.'
    );
    window.open(`https://wa.me/919453816645?text=${message}`, '_blank');
  };

  const handleGoogleReview = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Kumar+Electricals+New+Hyderabad+Nishatganj+Lucknow',
      '_blank'
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit feedback');
      }

      setSubmitted(true);
      toast.success('Feedback submitted successfully!');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', rating: 5, message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit feedback. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              We Value Your Feedback
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your feedback helps us improve our service and serve you better.
              Share your experience with Kumar Electricals.
            </p>
          </Reveal>

          {/* Primary Option: WhatsApp Feedback */}
          <Reveal delay={0.1} className="mb-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Send Feedback via WhatsApp
                  </h2>
                  <p className="text-sm text-slate-600">Fastest way to reach us</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Chat with us directly on WhatsApp. We typically respond within a few hours.
              </p>
              <button
                onClick={handleWhatsAppFeedback}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Open WhatsApp</span>
              </button>
            </div>
          </Reveal>

          {/* Secondary Option: Google Review */}
          <Reveal delay={0.2} className="mb-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Leave a Google Review
                  </h2>
                  <p className="text-sm text-slate-600">Help others find us</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Share your experience on Google Maps to help other customers in Lucknow.
              </p>
              <button
                onClick={handleGoogleReview}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Star className="h-5 w-5" />
                <span>Write Google Review</span>
              </button>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Feedback Form */}
          <Reveal delay={0.3}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Send Feedback via Form
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below. We'll receive your feedback on WhatsApp.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      How would you rate our service? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 justify-center pb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-10 w-10 ${
                              star <= formData.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Feedback <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    We've received your feedback and will use it to improve our service.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', rating: 5, message: '' });
                    }}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Footer Note */}
          <Reveal delay={0.4} className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              We read every feedback and use it to improve our service. Thank you for helping us serve you better.
            </p>
          </Reveal>
        </div>
      </main>
      <MobileActionBar />
    </div>
  );
}
