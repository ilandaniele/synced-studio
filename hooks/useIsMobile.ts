import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '@/constants'

/**
 * Hook to detect if the current viewport is mobile
 */
export const useIsMobile = (breakpoint: number = BREAKPOINTS.md): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    checkIsMobile()

    // Add event listener
    window.addEventListener('resize', checkIsMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}