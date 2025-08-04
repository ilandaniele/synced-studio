'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const GetInTouch: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setLoading(true)
    setSuccess(null)

    emailjs
      .sendForm(
        'service_gmail',
        'template_gmail',
        form.current,
        'KPKEoFmZtywTXlc41'
      )
      .then(
        () => {
          setSuccess('Message sent successfully! 🎉')
          form.current?.reset()
        },
        (error) => {
          setSuccess('Error sending message 😢')
          console.error(error)
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="w-full text-white py-22 md:py-18 px-4 flex flex-col items-center gap-8 mb-24">
      {/* — Título y mail — */}
      <div className="text-center flex flex-col gap-1">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins leading-snug text-[#faff05]">
          LET’S CREATE SOMETHING THAT SELLS
        </h2>
        <p className="text-base lg:text-2xl md:text-xl font-medium font-poppins lowercase">
          Book a free call to see how your product could look better
        </p>
      </div>

      {/* — Formulario — */}
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4 relative">
        {/* Inputs */}
        <input
          name="full_name"
          type="text"
          placeholder="Full Name *"
          required
          className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] placeholder-gray-500 text-white text-lg font-poppins rounded-full focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          required
          className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] placeholder-gray-500 text-white text-lg font-poppins rounded-full focus:outline-none"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] placeholder-gray-500 text-white text-lg font-poppins rounded-full focus:outline-none"
        />

        {/* Select */}
        <div className="relative group">
          <select
            name="service"
            required
            defaultValue=""
            className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] text-white text-lg font-poppins rounded-full focus:outline-none appearance-none"
          >
            <option value="" disabled hidden>
              Select a service you’re interested in
            </option>
            <option value="3D Modeling">3D Modeling</option>
            <option value="3D Animation & VFX">3D Animation & VFX</option>
            <option value="Creative Brand Direction">Creative Brand Direction</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border border-gray-500 rounded-full p-1 transition-transform group-focus-within:rotate-180">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="w-4 h-4 text-gray-300">
              <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          required
          className="w-full px-5 py-4 bg-[rgba(78,58,46,0.2)] placeholder-gray-500 text-white text-lg font-poppins rounded-2xl focus:outline-none resize-none"
        />

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full h-12 bg-[#faff05] text-black font-bold font-poppins text-lg rounded-full hover:opacity-90 transition"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {/* Mensaje de feedback */}
        {success && <p className="text-center text-sm mt-2">{success}</p>}
      </form>

      {/* Estilos globales */}
      <style jsx global>{`
        input::placeholder,
        textarea::placeholder {
          color: #6b6b6b;
        }
        select:invalid {
          color: #6b6b6b;
        }
        option {
          background-color: rgba(78, 58, 46, 0.8) !important;
          color: #ffffff !important;
        }
        select option[disabled] {
          color: #6b6b6b !important;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: #ffffff !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
  )
}

export default GetInTouch
