"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { toast } from "sonner"
import Reveal from "./Reveal"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date: z.date({ message: "Please select a date" }),
  time: z.string().min(1, "Please select a time slot"),
  address: z.string().min(10, "Please provide detailed address"),
  message: z.string().optional()
})

type BookingFormData = z.infer<typeof bookingSchema>

const services = [
  "House Wiring",
  "Fan Installation/Repair",
  "Motor Winding",
  "Electrical Repair",
  "MCB Installation",
  "Light Fitting",
  "Switch/Socket Installation",
  "Emergency Service",
  "Other"
]

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM"
]

export default function ServiceBooking() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [showCalendar, setShowCalendar] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          date: format(data.date, "PPP")
        })
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Booking Confirmed!", {
          description: `We'll contact you shortly to confirm your appointment on ${format(data.date, "PPP")} at ${data.time}`
        })
        reset()
        setSelectedDate(undefined)
      } else {
        toast.error("Booking Failed", {
          description: "Please call us directly at +91 94538 16645"
        })
      }
    } catch (error) {
      console.error('Booking error:', error)
      toast.error("Connection Error", {
        description: "Please call us directly at +91 94538 16645"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setValue("date", date, { shouldValidate: true })
      setShowCalendar(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="booking">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Service
          </h2>
          <p className="text-xl text-gray-600">
            Schedule your electrical service at your convenience
          </p>
        </Reveal>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your name"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="9415772903"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Service */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email (Optional)
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("service")}
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  aria-invalid={errors.service ? "true" : "false"}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent flex items-center justify-between"
                    aria-label="Select date"
                  >
                    <span className={selectedDate ? "text-gray-900" : "text-gray-400"}>
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </span>
                    <CalendarIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </button>
                  {showCalendar && (
                    <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </div>
                  )}
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                  Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("time")}
                    id="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
                    aria-invalid={errors.time ? "true" : "false"}
                    aria-describedby={errors.time ? "time-error" : undefined}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
                </div>
                {errors.time && (
                  <p id="time-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                Service Address <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("address")}
                id="address"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter complete address with landmark"
                aria-invalid={errors.address ? "true" : "false"}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Any specific requirements or issues..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center min-h-[48px]"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Booking...
                </span>
              ) : (
                "Confirm Booking"
              )}
            </button>

            <p className="text-sm text-gray-600 text-center">
              We'll call you to confirm your booking within 1 hour
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
