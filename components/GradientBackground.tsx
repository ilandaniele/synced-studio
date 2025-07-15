// components/GradientBackground.tsx
'use client'
import React from 'react'

interface GradientBackgroundProps {
  children: React.ReactNode
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #060503 0%, #160d09 35%, #743610 60%, #160d09 80%, #060503 100%)',
      }}
    >
      {children}
    </div>
  )
}

export default GradientBackground
