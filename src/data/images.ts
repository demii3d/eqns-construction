/**
 * Image library. Files live in /public/images in two widths (900w / 1800w).
 * Photographs are licensed stock architecture imagery (Unsplash licence) and
 * illustrate themes only. They do not depict completed EQNS projects.
 * Swap a file or alt text here to change it everywhere.
 */
export interface ImageAsset {
  src: string
  srcSet: string
  alt: string
  /** Natural width/height used to reserve space and prevent layout shift */
  width: number
  height: number
}

const make = (name: string, alt: string, ratio = 1.5): ImageAsset => ({
  src: `/images/${name}-1800.jpg`,
  srcSet: `/images/${name}-900.jpg 900w, /images/${name}-1800.jpg 1800w`,
  alt,
  width: 1800,
  height: Math.round(1800 / ratio),
})

export const images = {
  hero: make('hero', 'Contemporary residential building with glazed elevations at dusk'),
  interior: make('interior', 'Bright, carefully finished contemporary living space'),
  construction: make('construction', 'Construction team reviewing a building site from above'),
  refurbishment: make('refurbishment', 'Tradesperson working with timber and power tools'),
  maintenance: make('maintenance', 'Well-maintained roofline and exterior cladding of a house'),
  residential: make('residential', 'Modern residential apartment building with balconies'),
  commercial: make('commercial', 'Glass commercial towers viewed from street level'),
  coordination: make('coordination', 'Site team coordinating work on a building project'),
  inspections: make('inspections', 'Clean, well-kept commercial interior corridor'),
  planning: make('planning', 'Hands marking up architectural plans on a desk'),
  architecture: make('architecture', 'Contemporary architectural building with angular glazing'),
  towers: make('towers', 'Dark glass towers rising against a cloudy sky'),
  modernHome: make('modern-home', 'Modern white house with large glazed doors and garden'),
  facade: make('facade', 'Contemporary apartment facade with balconies and brick detailing'),
} satisfies Record<string, ImageAsset>
