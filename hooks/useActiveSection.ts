import { useState, useEffect } from 'react'
import { getActiveSection } from '@/lib/utils'
import { LAYOUT } from '@/constants'
import type { NavItem } from '@/types'

/**
 * Hook to track the currently active section in viewport
 */
export const useActiveSection = (
  sections: NavItem[],
  offset: number = LAYOUT.SCROLL_OFFSET
): string => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const current = getActiveSection(sections, offset)
      setActiveSection(current)
    }

    // Initial check
    handleScroll()

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, offset])

  return activeSection
}