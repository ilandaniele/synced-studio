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
        background: 'linear-gradient(to bottom, #060503 0%, #140700 35%, #240e01 60%, #140700 80%, #060503 100%)',
      }}
    >
      {children}
    </div>
  )
}

export default GradientBackground
