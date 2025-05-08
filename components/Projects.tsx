'use client'
import React from 'react'

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-[#f7e8d3] rounded-[60px] text-center px-6 py-16 text-black overflow-hidden">
      <h2 className="text-6xl md:text-7xl font-bold mb-20">PROJECTS</h2>
      <p className="max-w-4xl mx-auto text-lg leading-relaxed">
        At Synced, we make your product look irresistible.
      </p>
      <p className="max-w-4xl mx-auto text-lg mt-6 leading-relaxed">
        We’re a creative studio specialized in visual content for food and beverage brands.
      </p>
      <p className="max-w-4xl mx-auto text-lg mt-6 leading-relaxed">
        Fast, clean, conversion-driven assets — no cameras, no shipping, no excuses.
      </p>
      <p className="max-w-4xl mx-auto text-lg mt-6 leading-relaxed">
        With us, creativity is the only limit.
      </p>
      <p className="max-w-4xl mx-auto text-lg mt-6 leading-relaxed">
        We craft what your customers want to see before they taste.
      </p>
      <button className="mt-10 bg-[#160d09] text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition">
        CONTACT US
      </button>
    </section>
  )
}

export default AboutUs
