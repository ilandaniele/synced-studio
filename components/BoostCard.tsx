'use client'
import React from 'react'

type ColorActive = 'yellow' | 'red'
type ColorInactive = 'red' | 'gray'
type ContentVariant = 'positive' | 'negative'

type BoostCardProps = {
  on: boolean
  onToggle: () => void
  className?: string
  interactive?: boolean
  animateKnob?: boolean
  /** Encabezado del panel (e.g., WITH SYNCED / WITHOUT SYNCED) */
  title?: string
  /** Define el contenido fijo del panel (positivo/negativo), independiente del toggle */
  contentVariant?: ContentVariant
  /** Color cuando el toggle está a la derecha */
  activeColor?: ColorActive
  /** Color cuando el toggle está a la izquierda */
  inactiveColor?: ColorInactive
}

const BoostCard: React.FC<BoostCardProps> = ({
  on,
  onToggle,
  className = '',
  interactive = true,
  animateKnob = true,
  title = 'With Synced',
  contentVariant = 'positive',
  activeColor = 'yellow',
  inactiveColor = 'red'
}) => {
  // Contenido SIEMPRE fijo por variante (no depende de "on")
  const metrics =
    contentVariant === 'positive'
      ? [
          { title: 'Sales & Conversion', value: '21%', helper: 'Your product stand out' },
          { title: 'Visibility & Brand Awareness', value: '157K', helper: 'Your packaging got attention' },
          { title: 'Brand Perception', value: '67%', helper: 'Your content got views' },
        ]
      : [
          { title: 'Sales & Conversion', value: '5%', helper: 'Your product doesn’t stand out' },
          { title: 'Visibility & Brand Awareness', value: '12K', helper: 'Your packaging gets ignored' },
          { title: 'Brand Perception', value: '23%', helper: 'Your content gets scrolled past' },
        ]

  // Estilos según estado del switch (on/off) y paletas
  const headerClass =
    on
      ? (activeColor === 'yellow'
          ? 'bg-gradient-to-r from-[#1b1711] to-[rgba(250,255,5,0.25)] border-white/12'
          : 'bg-gradient-to-r from-[#1b1711] to-[rgba(255,77,77,0.28)] border-red-200/20')
      : (inactiveColor === 'red'
          ? 'bg-gradient-to-r from-[#1b1711] to-[rgba(255,77,77,0.28)] border-red-200/20'
          : 'bg-gradient-to-r from-[#1b1711] to-[rgba(255,255,255,0.16)] border-white/10')

  const trackClass =
    on
      ? (activeColor === 'yellow'
          ? 'border-white/10 bg-[#292703]'
          : 'bg-[#2a0a0a]/70 border-red-200/20')
      : (inactiveColor === 'red'
          ? 'bg-[#2a0a0a]/70 border-red-200/20'
          : 'bg-[#1f1f1f]/70 border-white/10')

  const knobTransition = animateKnob ? 'transition-all' : ''
  const knobClass =
    on
      ? (activeColor === 'yellow' ? 'bg-[#faff05]' : 'bg-[#ff4d4d]')
      : (inactiveColor === 'red' ? 'bg-[#ff4d4d]' : 'bg-[#9ca3af]')

  const helperTextClass =
    on
      ? (activeColor === 'yellow' ? 'text-yellow-200/95' : 'text-red-300/90')
      : (inactiveColor === 'red' ? 'text-red-300/90' : 'text-gray-300/90')

  const helperDotClass =
    on
      ? (activeColor === 'yellow' ? 'bg-[#faff05]' : 'bg-red-400')
      : (inactiveColor === 'red' ? 'bg-red-400' : 'bg-gray-400')

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
            {title}
          </span>
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
                ${on ? 'right-[2px]' : 'left-[2px]'} ${knobClass}
              `}
            />
          </span>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-2.5 md:px-3 py-2.5 md:py-3 space-y-2.5 md:space-y-3">
        {metrics.map(m => (
          <ItemRow
            key={m.title}
            title={m.title}
            value={m.value}
            helper={m.helper}
            helperTextClass={helperTextClass}
            helperDotClass={helperDotClass}
          />
        ))}
      </div>
    </button>
  )
}

export default BoostCard

/* ---------- Subcomponentes ---------- */

type ItemRowProps = {
  title: string
  value: string
  helper: string
  helperTextClass: string
  helperDotClass: string
}

function ItemRow({ title, value, helper, helperTextClass, helperDotClass }: ItemRowProps) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.02] py-2 px-[5vw] md:py-3 md:pl-[1.5vw] md:pr-[1.2vw]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="uppercase tracking-[0.05em] text-white/90 text-[3vw] md:text-[0.8vw] font-semibold leading-none">
            {title}
          </span>
          <span className={`flex items-center gap-1.5 text-[3vw] md:text-[0.8vw] leading-none mt-[2px] ${helperTextClass}`}>
            <span className={`inline-block h-[7px] w-[7px] rounded-full ${helperDotClass}`} />
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
