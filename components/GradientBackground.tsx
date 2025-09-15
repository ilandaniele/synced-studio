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
        background: '#000000',
      }}
    >
      {children}
    </div>
  )
}

export default GradientBackground
