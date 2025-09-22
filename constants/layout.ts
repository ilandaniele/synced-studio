// Navigation configuration
export const NAVIGATION_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#comments', label: 'Reviews' },
  { href: '#faqs', label: "FAQ'S" },
] as const

export const SECTION_REFS = [
  ...NAVIGATION_ITEMS,
  { href: '#contact', label: 'Contact Us' },
] as const

// Layout constants
export const LAYOUT = {
  HEADER_HEIGHT: 80,
  SCROLL_OFFSET: 200,
  CONTAINER_MAX_WIDTH: 1320,
  CONTAINER_XL_MAX_WIDTH: 1400,
} as const

// Responsive breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Z-index layers
export const Z_INDEX = {
  HEADER: 200,
  MODAL: 1000,
  OVERLAY: 500,
  DROPDOWN: 100,
} as const

// Animation durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const

// Image sizes
export const IMAGE_SIZES = {
  LOGO_DESKTOP: { width: 195, height: 65 },
  LOGO_MOBILE: { width: 169, height: 59 },
  PLACEHOLDER: { width: 300, height: 300 },
  MEDIA_LARGE: { width: 700, height: 525 },
} as const

// Grid configurations
export const GRID = {
  PROJECTS_DESKTOP_COLS: 4,
  SERVICES_DESKTOP_COLS: 4,
  MOBILE_GAP: 4,
  DESKTOP_GAP: 6,
} as const