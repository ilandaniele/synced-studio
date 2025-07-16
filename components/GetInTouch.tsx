'use client'
import React from 'react'

const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="w-full text-white py-12 px-4 flex flex-col items-center gap-8">
      {/* — Título y mail — */}
      <div className="text-center flex flex-col gap-1">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#faff05]">
          LET’S GET IN TOUCH
        </h2>
        <p className="text-base font-medium font-poppins lowercase">
          info@synced-studio.eu
        </p>
      </div>

      {/* — Formulario — */}
      <form className="w-full max-w-md flex flex-col gap-4 relative">
        {/* Inputs */}
        {['Full Name *', 'Email *', 'Phone'].map((ph, i) => (
          <input
            key={i}
            type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
            placeholder={ph}
            className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] placeholder-gray-500 text-white text-lg font-poppins rounded-full focus:outline-none"
          />
        ))}

        {/* Select */}
        <div className="relative group">
          <select
            defaultValue=""
            className="w-full h-12 px-5 bg-[rgba(78,58,46,0.3)] text-white text-lg font-poppins rounded-full focus:outline-none appearance-none"
          >
            <option value="" disabled hidden>
              Select a service you’re interested in
            </option>
            <option>3D Modeling</option>
            <option>3D Animation & VFX</option>
            <option>Creative Brand Direction</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 border border-gray-500 rounded-full p-1 transition-transform group-focus-within:rotate-180">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 text-gray-300"
            >
              <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full px-5 py-4 bg-[rgba(78,58,46,0.2)] placeholder-gray-500 text-white text-lg font-poppins rounded-2xl focus:outline-none resize-none"
        />

        {/* Botón */}
        <button
          type="submit"
          className="mt-2 w-full h-12 bg-[#faff05] text-black font-bold font-poppins text-lg rounded-full hover:opacity-90 transition"
        >
          Send
        </button>
      </form>

      {/* Estilos globales */}
      <style jsx global>{`
        input::placeholder,
        textarea::placeholder {
          color: #6b6b6b; /* Gris oscuro para placeholder */
        }

        select:invalid {
          color: #6b6b6b; /* Gris oscuro para select sin elegir */
        }

        option {
          background-color: rgba(78, 58, 46, 0.8) !important;
          color: #ffffff !important;
        }

        select option[disabled] {
          color: #6b6b6b !important; /* Gris oscuro solo en option deshabilitado */
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
