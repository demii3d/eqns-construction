export interface PageMeta {
  title: string
  description: string
}

const suffix = ' | EQNS'

export const seo = {
  home: {
    title: 'EQNS | Construction & Property Management',
    description:
      'EQNS brings construction, refurbishment, maintenance and property management together to protect and improve your property. The Right Elements. The Right Results.',
  },
  about: {
    title: `About EQNS${suffix}`,
    description:
      'Learn about EQNS: Equilibrium, Quality, Network and Structure, and our integrated approach to construction and property management.',
  },
  services: {
    title: `Property & Construction Services${suffix}`,
    description:
      'Seven integrated services from EQNS: building works, refurbishment, maintenance, residential and commercial management, trades coordination and inspections.',
  },
  approach: {
    title: `Our Approach${suffix}`,
    description:
      'How EQNS approaches property work: quality, structured coordination, clear communication and ongoing care for long-term value.',
  },
  clients: {
    title: `Who We Work With${suffix}`,
    description:
      'EQNS supports landlords, residential and commercial owners, investors, businesses and property management professionals.',
  },
  contact: {
    title: `Contact EQNS${suffix}`,
    description:
      'Discuss a construction, refurbishment, maintenance or property management requirement with EQNS.',
  },
  privacy: {
    title: `Privacy Policy${suffix}`,
    description: 'How personal information submitted through the EQNS website is handled.',
  },
  cookies: {
    title: `Cookie Policy${suffix}`,
    description: 'Information about cookies and similar technologies on the EQNS website.',
  },
  notFound: {
    title: `Page not found${suffix}`,
    description: 'The page you are looking for could not be found.',
  },
} satisfies Record<string, PageMeta>
