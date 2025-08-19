'use client'
import React from 'react'

type BoostCardProps = {
  on: boolean
  onToggle: () => void
  className?: string
}

const BoostCard: React.FC<BoostCardProps> = ({ on, onToggle, className = '' }) => {
  const metrics = on
    ? [
        { title: 'Sales & Conversion', value: '21%', helper: 'Your product stand out', on: true },
        { title: 'Visibility & Brand Awareness', value: '157K', helper: 'Your packaging got attention', on: true },
        { title: 'Brand Perception', value: '67%', helper: 'Your content got views', on: true },
      ]
    : [
        { title: 'Sales & Conversion', value: '5%', helper: 'Your product doesn’t stand out', on: false },
        { title: 'Visibility & Brand Awareness', value: '12K', helper: 'Your packaging gets ignored', on: false },
        { title: 'Brand Perception', value: '23%', helper: 'Your content gets scrolled past', on: false },
      ]

  // Header: fondo depende de "on"
  const headerClass =
    on
      ? 'bg-gradient-to-r from-[#1b1711] via-[#2a2516] to-[rgba(250,255,5,0.25)] border-white/12'
      : 'bg-white/[0.02] border-white/10'

  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onToggle}
      className={`
        ${className}
        rounded-4xl border border-white/12 bg-[#0b0a08]/80 backdrop-blur
        p-0 shadow-[0_8px_20px_rgba(0,0,0,0.4)]
        font-poppins text-left
      `}
    >
      {/* Encabezado */}
      <div className="px-2.5 md:px-5 pt-2.5">
        <div
          className={`
            w-full rounded-full px-6 py-2 flex items-center justify-between
            border ${headerClass}
          `}
        >
          <span className="text-white/95 font-semibold tracking-[0.06em] uppercase text-[10px] md:text-[1.2vw]">
            Synced Boost
          </span>
          <ToggleSwitch on={on} />
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-2.5 md:px-5 py-2.5 md:py-3 space-y-2.5 md:space-y-3">
        {metrics.map(m => (
          <ItemRow key={m.title} {...m} />
        ))}
      </div>
    </button>
  )
}

export default BoostCard

/* ---------- Subcomponentes ---------- */

function ToggleSwitch({ on }: { on: boolean }) {
  // Track siempre sólido: oscuro en off, amarillo en on
  const trackClass = on
    ? 'border-white/10 bg-[#555014]'
    : 'bg-white/[0.08] border-white/15'

  return (
    <span
      aria-hidden="true"
      className={`
        relative inline-block rounded-full transition-colors
        h-[18px] w-[36px] md:h-[22px] md:w-[44px]
        border ${trackClass}
      `}
    >
      <span
        className={`
          absolute top-1/2 -translate-y-1/2 rounded-full shadow
          h-[14px] w-[14px] md:h-[18px] md:w-[18px]
          transition-all
          ${on ? 'right-[2px] bg-[#faff05]' : 'left-[2px] bg-white'}
        `}
      />
    </span>
  )
}

type ItemRowProps = {
  title: string
  value: string
  helper: string
  on?: boolean
}

function ItemRow({ title, value, helper, on = false }: ItemRowProps) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/[0.02] py-2 px-5 md:py-3 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="uppercase tracking-[0.05em] text-white/90 text-[0.5vw] md:text-[0.8vw] font-semibold">
            {title}
          </span>
          <span
            className={`mt-0.5 flex items-center gap-1.5 text-[10px] md:text-[12px]
                        ${on ? 'text-yellow-200/95' : 'text-red-300/90'}`}
          >
            <span
              className={`inline-block h-[5px] w-[5px] rounded-full
                          ${on ? 'bg-[#faff05]' : 'bg-red-400'}`}
            />
            {helper}
          </span>
        </div>
        <span className="text-white font-extrabold text-[16px] md:text-[22px]">
          {value}
        </span>
      </div>
    </div>
  )
}
