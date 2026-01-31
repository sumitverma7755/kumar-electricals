"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const projects = [
  {
    id: 1,
    title: "Complete House Wiring",
    before: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "3BHK house complete electrical installation"
  },
  {
    id: 2,
    title: "Commercial Electrical Setup",
    before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description: "Shop electrical setup with modern fixtures"
  },
  {
    id: 3,
    title: "Ceiling Fan Installation",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    description: "Multiple ceiling fans installed with proper wiring"
  },
  {
    id: 4,
    title: "Panel Board Upgrade",
    before: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    description: "Old panel board replaced with modern MCB board"
  },
  {
    id: 5,
    title: "LED Lighting Setup",
    before: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    description: "Energy-efficient LED lighting installation"
  },
  {
    id: 6,
    title: "Motor Repair & Winding",
    before: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    description: "Professional motor winding and repair"
  }
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(true)

  const allImages = projects.flatMap(p => [
    { src: p.before, title: `${p.title} - Before` },
    { src: p.after, title: `${p.title} - After` }
  ])

  const openLightbox = (projectIndex: number, isBefore: boolean) => {
    setPhotoIndex(projectIndex * 2 + (isBefore ? 0 : 1))
    setLightboxOpen(true)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the quality of our work through before & after photos
          </p>
        </Reveal>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setShowBefore(true)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                showBefore
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-pressed={showBefore}
            >
              Before
            </button>
            <button
              onClick={() => setShowBefore(false)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                !showBefore
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-pressed={!showBefore}
            >
              After
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(index, showBefore)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={showBefore ? project.before : project.after}
                  alt={`${project.title} - ${showBefore ? 'Before' : 'After'}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {showBefore ? "Before" : "After"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see your project featured here?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={allImages}
      />
    </section>
  )
}
