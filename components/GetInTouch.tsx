'use client'
import React from 'react'

const GetInTouch: React.FC = () => {
  return (
    <section className="w-full bg-black text-[#f7e8d3] py-20 px-4 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40">
      {/* Texto Izquierda */}
      <div className="text-center md:text-center flex flex-col items-start gap-6">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          LET’S GET<br />
          IN TOUCH
        </h2>
        <p className="text-center text-2xl md:text-3xl font-semibold tracking-wide">
          INFO@SYNCED-STUDIO.EU
        </p>
      </div>

      {/* Formulario Derecha */}
      <div className="flex flex-col items-center gap-8 w-full max-w-[400px]">
        <div className="w-full bg-black border border-[#f7e8d3] rounded-[50px] py-24 px-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-[#f7e8d3]">DATA BOX</p>
        </div>
        <button className="w-full bg-[#f7e8d3] text-black font-bold py-4 rounded-full hover:opacity-90 transition">
          SEND
        </button>
      </div>
    </section>
  )
}

export default GetInTouch
