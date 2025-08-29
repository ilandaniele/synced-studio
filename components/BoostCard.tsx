'use client'
import React from 'react'

type BoostCardProps = {
  on: boolean
  onToggle: () => void
  className?: string
  /** nuevo: deshabilita interacción (click/teclado) */
  interactive?: boolean
  /** nuevo: deshabilita animación del knob */
  animateKnob?: boolean
}

const BoostCard: React.FC<BoostCardProps> = ({
  on,
  onToggle,
  className = '',
  interactive = true,
  animateKnob = true
}) => {
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

  const headerClass = on
    ? 'bg-gradient-to-r from-[#1b1711] via-[#2a2516] to-[rgba(250,255,5,0.25)] border-white/12'
    : 'bg-white/[0.02] border-white/10'

  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={interactive ? onToggle : undefined}
      aria-disabled={!interactive}
      tabIndex={interactive ? 0 : -1}
      className={`
        ${className}
        rounded-4xl border border-white/12 bg-[#0b0a08]/30 backdrop-blur
        p-0 shadow-[0_8px_20px_rgba(0,0,0,0.4)]
        font-poppins text-left
        ${interactive ? '' : 'pointer-events-none'}
      `}
    >
      {/* Encabezado */}
      <div className="px-2.5 md:px-3 pt-2.5">
        <div
          className={`
            w-full rounded-full pl-[4vw] pr-[2.5vw] md:pr-[0.6vw] md:pl-[1.5vw] py-2 flex items-center justify-between
            border ${headerClass}
          `}
        >
          <span className="text-white/95 font-semibold tracking-[0.06em] uppercase text-[5vw] md:text-[1.2vw]">
            With Synced
          </span>
          <ToggleSwitch on={on} animate={animateKnob} />
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-2.5 md:px-3 py-2.5 md:py-3 space-y-2.5 md:space-y-3">
        {metrics.map(m => (
          <ItemRow key={m.title} {...m} />
        ))}
      </div>
    </button>
  )
}

export default BoostCard

/* ---------- Subcomponentes ---------- */

function ToggleSwitch({ on, animate = true }: { on: boolean; animate?: boolean }) {
  // Track cálido cuando ON; rojizo tenue cuando OFF
  const trackClass = on
    ? 'border-white/10 bg-[#292703]'
    : 'bg-[#2a0a0a]/70 border-red-200/20'

  // Animación opcional del knob
  const knobTransition = animate ? 'transition-all' : ''

  // Knob styles: amarillo ON, rojo OFF (con glow)
  const knobOn =
    'bg-[#faff05] '
  const knobOff =
    'bg-[#ff4d4d] '

  return (
    <span
      aria-hidden="true"
      className={`
        relative inline-block rounded-full transition-colors
        h-[7vw] w-[12vw] md:h-[2vw] md:w-[3.5vw]
        border ${trackClass}
      `}
    >
      <span
        className={`
          absolute top-1/2 -translate-y-1/2 rounded-full
          h-[5.5vw] w-[5.5vw] md:h-[1.5vw] md:w-[1.5vw]
          ${knobTransition}
          ${on ? `right-[2px] ${knobOn}` : `left-[2px] ${knobOff}`}
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
    <div className="rounded-full border border-white/10 bg-white/[0.02] py-2 px-[5vw] md:py-3 md:pl-[1.5vw] md:pr-[1.2vw]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="uppercase tracking-[0.05em] text-white/90 text-[3vw] md:text-[0.8vw] font-semibold leading-none">
            {title}
          </span>
          <span
            className={`flex items-center gap-1.5 text-[3vw] md:text-[0.8vw] leading-none mt-[2px]
                        ${on ? 'text-yellow-200/95' : 'text-red-300/90'}`}
          >
            <span
              className={`inline-block h-[7px] w-[7px] rounded-full
                          ${on ? 'bg-[#faff05]' : 'bg-red-400'}`}
            />
            {helper}
          </span>
        </div>
        <span className="text-white font-extrabold text-[6vw] md:text-[22px]">
          {value}
        </span>
      </div>
    </div>
  )
}
