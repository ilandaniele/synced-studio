// Type definitions for the application

export interface NavItem {
  href: string
  label: string
}

export interface Project {
  id: number
  title: string
  subtitle: string
  thumb: string
  gallery: string[]
  disappearOnMobile?: boolean
}

export interface Service {
  img?: string
  imgAlt: string
  title: string
  copy: string
  cta: string
  href: string
}

export interface Testimonial {
  id: number
  name: string
  company: string
  image: string
  rating: number
  testimonial: string
}

export interface FAQ {
  question: string
  answer: string[]
}

// Media types
export interface MediaItem {
  src: string
  type: 'image' | 'video'
  alt?: string
}

// Responsive breakpoints
export interface Breakpoints {
  sm: number
  md: number
  lg: number
  xl: number
}

// Animation configuration
export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
}