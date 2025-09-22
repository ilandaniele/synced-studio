import { Project } from '@/types'

// Projects data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hershey's",
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/hersheys/1.jpg',
    gallery: ['/images/projects/hersheys/1.jpg']
  },
  {
    id: 2,
    title: 'Perfect Ted',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/perfect_ted/1.jpg',
    gallery: ['/images/projects/perfect_ted/1.jpg', '/images/projects/perfect_ted/2.jpg']
  },
  {
    id: 3,
    title: 'Raise',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/raise/1.jpg',
    gallery: [
      '/images/projects/raise/1.jpg',
      '/images/projects/raise/2.jpg',
      '/images/projects/raise/3.jpg',
      '/images/projects/raise/4.jpg',
      '/images/projects/raise/5.jpg',
      '/images/projects/raise/6.jpg'
    ]
  },
  {
    id: 4,
    title: "Reese's",
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/reeses/1.jpg',
    gallery: [
      '/images/projects/reeses/1.jpg',
      '/images/projects/reeses/2.jpg',
      '/images/projects/reeses/3.jpg',
      '/images/projects/reeses/4.jpg',
      '/images/projects/reeses/5.jpg',
      '/images/projects/reeses/6.mp4',
      '/images/projects/reeses/7.jpg'
    ]
  },
  {
    id: 5,
    title: 'Monaco',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/monaco/1.jpg',
    gallery: ['/images/projects/monaco/1.jpg']
  },
  {
    id: 6,
    title: 'Glad',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/glad/1.jpg',
    gallery: [
      '/images/projects/glad/1.jpg',
      '/images/projects/glad/2.jpg',
      '/images/projects/glad/3.jpg'
    ]
  },
  {
    id: 7,
    title: 'Zumino',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/zumino/1.jpg',
    gallery: ['/images/projects/zumino/1.jpg', '/images/projects/zumino/2.mp4']
  },
  {
    id: 8,
    title: 'Huel',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/huel/1.jpg',
    gallery: [
      '/images/projects/huel/1.jpg',
      '/images/projects/huel/2.png',
      '/images/projects/huel/3.jpg',
      '/images/projects/huel/4.mp4'
    ]
  },
  {
    id: 9,
    title: 'Aquela Kombucha',
    subtitle: '01. Layout Design & 3D Modeling',
    thumb: '/images/projects/aquela_kombucha/1.jpg',
    gallery: [
      '/images/projects/aquela_kombucha/1.jpg',
      '/images/projects/aquela_kombucha/2.jpg',
      '/images/projects/aquela_kombucha/3.mp4',
      '/images/projects/aquela_kombucha/4.jpg',
      '/images/projects/aquela_kombucha/5.jpg',
      '/images/projects/aquela_kombucha/6.jpg'
    ]
  },
  // Placeholder projects for grid layout
  {
    id: 10,
    title: '',
    subtitle: '',
    thumb: '',
    gallery: [],
    disappearOnMobile: false
  },
  {
    id: 11,
    title: '',
    subtitle: '',
    thumb: '',
    gallery: [],
    disappearOnMobile: true
  },
  {
    id: 12,
    title: '',
    subtitle: '',
    thumb: '',
    gallery: [],
    disappearOnMobile: true
  }
]

// Project configuration
export const PROJECT_CONFIG = {
  DEFAULT_VISIBLE_COUNT: 8,
  PLACEHOLDER_COUNT: 3,
} as const