// Utility functions for the application

/**
 * Checks if a file is a video based on its extension
 */
export const isVideoFile = (src: string): boolean => {
  return src.toLowerCase().endsWith('.mp4')
}

/**
 * Smooth scroll to element with offset
 */
export const smoothScrollToElement = (
  selector: string,
  offset: number = 0
): void => {
  const element = document.querySelector(selector)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Clamps a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: never[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, delay)
    }
  }
}

/**
 * Get active section based on scroll position
 */
export const getActiveSection = (
  sections: { href: string }[],
  offset: number = 200
): string => {
  let current = ''
  
  sections.forEach(({ href }) => {
    const element = document.querySelector(href)
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      if (window.scrollY >= elementTop - offset) {
        current = href
      }
    }
  })
  
  return current
}

/**
 * Generate class names conditionally
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Check if device is mobile based on window width
 */
export const isMobileDevice = (breakpoint: number = 768): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoint
}