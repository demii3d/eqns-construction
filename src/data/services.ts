import { images, type ImageAsset } from './images.ts'

export interface ServiceArea {
  title: string
  text: string
}

export interface Service {
  slug: string
  number: string
  title: string
  /** Compact label for menus and dropdowns */
  shortTitle: string
  category: 'Build & Improve' | 'Care & Maintain' | 'Manage & Coordinate'
  summary: string
  /** One-line differentiator used on the services overview page */
  distinction: string
  image: ImageAsset
  heroIntro: string
  overview: string[]
  areas: ServiceArea[]
  fit: string
  related: string[]
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'construction-building-works',
    number: '01',
    title: 'Construction and Building Works',
    shortTitle: 'Construction & Building Works',
    category: 'Build & Improve',
    summary:
      'Organised delivery of new building works and structural alterations, planned around the way your property needs to perform.',
    distinction: 'New structures, extensions and substantial alterations.',
    image: images.construction,
    heroIntro:
      'Building works succeed when planning, workmanship and coordination are treated as one discipline. EQNS approaches construction with that balance in mind.',
    overview: [
      'Construction and building works cover the creation of new structures and significant changes to existing ones. These projects carry the greatest consequence for a property, so clarity at the start matters as much as quality on site.',
      'EQNS works to understand what the building needs to do, how it will be used and what constraints apply before work is organised. The aim is a considered build that supports the long-term condition and value of the property.',
      'Scope, programme and costs are discussed with you for each project. Nothing is assumed in advance, and every project is treated on its own requirements.',
    ],
    areas: [
      { title: 'New build and extension works', text: 'Support for additions and new structures, from early requirements to coordinated site delivery.' },
      { title: 'Structural and layout alterations', text: 'Considered changes to existing buildings where the form or use of a property needs to change.' },
      { title: 'Programme and sequencing', text: 'Organising the order of work so trades, materials and inspections follow logically.' },
      { title: 'Workmanship standards', text: 'Attention to build quality and finishing at each stage, not only at completion.' },
      { title: 'Communication through delivery', text: 'Clear updates so you understand progress, decisions and anything that needs your input.' },
    ],
    fit: 'Construction is the foundation of the EQNS offering. Once a building is complete, the same team understanding can carry through to maintenance, inspections and ongoing management, so the way a property is built informs the way it is looked after.',
    related: ['property-refurbishment', 'contractor-coordination', 'property-inspections'],
    metaDescription:
      'Construction and building works from EQNS: organised, quality-focused delivery of new building works, extensions and alterations.',
  },
  {
    slug: 'property-refurbishment',
    number: '02',
    title: 'Property Refurbishment and Improvements',
    shortTitle: 'Property Refurbishment',
    category: 'Build & Improve',
    summary:
      'Renewal and improvement of existing homes and commercial spaces, restoring standards and improving how a property performs.',
    distinction: 'Renewing and upgrading existing buildings.',
    image: images.refurbishment,
    heroIntro:
      'Refurbishment gives an existing property a renewed purpose. EQNS helps owners improve condition, presentation and usability with careful, structured works.',
    overview: [
      'Refurbishment and improvement works range from refreshing tired interiors to upgrading building elements that no longer meet the needs of occupiers. Unlike new construction, they take place within the limits of a building that already exists.',
      'EQNS considers the current condition of the property, the intended outcome and the practical realities of working in or around occupied spaces. The focus is on improvements that make sense for the property rather than changes for their own sake.',
      'Whether the goal is to prepare a property for new occupiers or to improve a building you already live or work in, the work is planned so decisions are clear and disruption is considered.',
    ],
    areas: [
      { title: 'Interior refurbishment', text: 'Renewal of rooms, finishes, fittings and layouts in homes, offices and commercial units.' },
      { title: 'Exterior and fabric improvements', text: 'Upgrades to the external condition and presentation of a building.' },
      { title: 'Preparing properties for new occupiers', text: 'Works that bring a property to a standard suited to letting, resale or a change of use.' },
      { title: 'Material and finish guidance', text: 'Practical discussion of finishes, durability and maintenance implications.' },
      { title: 'Working around occupancy', text: 'Planning that takes account of people living or working in the building.' },
    ],
    fit: 'Refurbishment sits between construction and maintenance. It restores and improves what exists, and it often leads naturally into planned maintenance or management, helping keep the improved standard in place over time.',
    related: ['construction-building-works', 'property-maintenance', 'contractor-coordination'],
    metaDescription:
      'Property refurbishment and improvement services from EQNS for homes and commercial spaces, planned with care and clear communication.',
  },
  {
    slug: 'property-maintenance',
    number: '03',
    title: 'Property Maintenance and Repairs',
    shortTitle: 'Property Maintenance',
    category: 'Care & Maintain',
    summary:
      'Dependable upkeep and repairs that protect the fabric, safety and presentation of residential and commercial buildings.',
    distinction: 'Repairs and upkeep that keep a building in good order.',
    image: images.maintenance,
    heroIntro:
      'Well-maintained buildings hold their condition and their value. EQNS supports owners with practical repairs and upkeep, handled in an organised way.',
    overview: [
      'Maintenance and repairs deal with the everyday wear every building experiences. Left unattended, small defects can grow into larger and more costly problems, so steady care is one of the most practical ways to protect a property.',
      'EQNS helps owners and managers address repairs as they arise and plan routine upkeep so that it is predictable rather than reactive. Issues are described clearly, and the recommended response is explained in plain terms.',
      'Requirements differ widely between a single rented home and a commercial building, so the approach is tailored to the property and how it is used.',
    ],
    areas: [
      { title: 'Responsive repairs', text: 'Practical attention to defects and faults across building fabric and fittings.' },
      { title: 'Planned and routine upkeep', text: 'Regular care arranged ahead of time to reduce avoidable deterioration.' },
      { title: 'Exterior and communal areas', text: 'Care for roofs, facades, entrances and shared spaces that shape first impressions.' },
      { title: 'Condition-led recommendations', text: 'Clear explanation of what needs attention now and what can be planned for later.' },
      { title: 'Coordination of specialist trades', text: 'Bringing in the right skills for specific repair needs.' },
    ],
    fit: 'Maintenance is the day-to-day expression of EQNS’s commitment to long-term value. It works hand in hand with inspections to spot issues early, and with property management to keep records and responsibilities organised.',
    related: ['property-inspections', 'contractor-coordination', 'residential-property-management'],
    metaDescription:
      'Property maintenance and repairs from EQNS: organised upkeep that protects the fabric, safety and presentation of your building.',
  },
  {
    slug: 'residential-property-management',
    number: '04',
    title: 'Residential Property Management',
    shortTitle: 'Residential Management',
    category: 'Manage & Coordinate',
    summary:
      'Structured management for landlords and residential owners, combining day-to-day oversight with practical building knowledge.',
    distinction: 'Day-to-day oversight of homes and residential portfolios.',
    image: images.residential,
    heroIntro:
      'Managing homes well takes organisation and an understanding of the building itself. EQNS brings both to residential property management.',
    overview: [
      'Residential property management is about keeping homes in good order and their occupiers well served, while giving owners a clear picture of what is happening. It combines administration, communication and attention to the physical condition of the property.',
      'Because EQNS also works in construction and maintenance, management decisions can be informed by genuine knowledge of how buildings are made and how they age. Repairs and improvements are not treated as separate concerns.',
      'The scope of management can be discussed to suit your property, whether that is a single home or several. Details of what is included are agreed with you directly.',
    ],
    areas: [
      { title: 'Day-to-day property oversight', text: 'Organised attention to the running of residential properties.' },
      { title: 'Maintenance and repair coordination', text: 'Reported issues handled through a structured process with clear follow-up.' },
      { title: 'Communication with owners and occupiers', text: 'Clear lines of contact so everyone knows who is responsible for what.' },
      { title: 'Property condition awareness', text: 'Regular consideration of how the building is performing and what it may need.' },
      { title: 'Support for landlords and investors', text: 'Management designed to help protect the long-term value of residential assets.' },
    ],
    fit: 'Residential management draws on the wider EQNS offering. When management identifies repairs, refurbishment or inspections, the same organisation can help arrange them, which keeps decisions joined up.',
    related: ['property-maintenance', 'property-inspections', 'commercial-property-management'],
    metaDescription:
      'Residential property management from EQNS for landlords and owners, combining structured oversight with practical building expertise.',
  },
  {
    slug: 'commercial-property-management',
    number: '05',
    title: 'Commercial Property Management',
    shortTitle: 'Commercial Management',
    category: 'Manage & Coordinate',
    summary:
      'Professional management for offices, retail and mixed-use buildings, focused on condition, continuity and long-term performance.',
    distinction: 'Oversight of offices, retail units and mixed-use buildings.',
    image: images.commercial,
    heroIntro:
      'Commercial buildings need to work for the businesses inside them. EQNS provides organised management that keeps premises presentable, functional and well cared for.',
    overview: [
      'Commercial property management supports owners and occupiers of offices, retail units and mixed-use buildings. Premises influence how a business is perceived and how it operates, so their condition deserves consistent attention.',
      'EQNS combines management oversight with practical construction and maintenance understanding. This allows building issues to be assessed, explained and addressed without passing between separate parties.',
      'Each commercial property has its own demands, from shared areas to specialist building services. The scope of support is discussed around the requirements of your building.',
    ],
    areas: [
      { title: 'Building oversight', text: 'Organised attention to the condition and operation of commercial premises.' },
      { title: 'Maintenance planning', text: 'Planned upkeep that supports continuity for tenants and occupiers.' },
      { title: 'Common parts and presentation', text: 'Care for entrances, shared areas and exteriors that reflect on the building.' },
      { title: 'Contractor and supplier coordination', text: 'Working with the specialists a commercial building relies on.' },
      { title: 'Support for owners and investors', text: 'Clear information to help protect and improve asset performance.' },
    ],
    fit: 'Commercial management connects directly to refurbishment, maintenance and coordination. When premises need to be improved or repaired, EQNS can help organise the work around the needs of the businesses that use them.',
    related: ['contractor-coordination', 'property-inspections', 'property-refurbishment'],
    metaDescription:
      'Commercial property management from EQNS: professional oversight of offices, retail and mixed-use buildings with practical building knowledge.',
  },
  {
    slug: 'contractor-coordination',
    number: '06',
    title: 'Contractor and Trades Coordination',
    shortTitle: 'Contractor Coordination',
    category: 'Manage & Coordinate',
    summary:
      'A single organised point of coordination for the trades, suppliers and specialists a property project depends on.',
    distinction: 'One point of coordination across multiple trades.',
    image: images.coordination,
    heroIntro:
      'Property work often involves several trades and suppliers. EQNS coordinates them so the work fits together and information does not get lost.',
    overview: [
      'Many property problems are not caused by individual trades but by the gaps between them. Contractor and trades coordination exists to close those gaps by aligning schedules, responsibilities and communication.',
      'EQNS acts as an organising party between owners, contractors and suppliers. This reflects the Network principle at the heart of the brand: relationships that are built and managed deliberately.',
      'Coordination can support a single project or a continuing programme of work. How it is structured is agreed for your requirements.',
    ],
    areas: [
      { title: 'Trade sequencing', text: 'Arranging the order of work so trades can follow one another without conflict.' },
      { title: 'Single point of contact', text: 'A clear route for questions, updates and decisions across the whole team.' },
      { title: 'Supplier and materials liaison', text: 'Keeping materials and deliveries aligned with the work on site.' },
      { title: 'Progress and quality checks', text: 'Attention to the standard of completed work as the project develops.' },
      { title: 'Specialist sourcing', text: 'Identifying suitable specialist skills where a job calls for them.' },
    ],
    fit: 'Coordination underpins almost everything EQNS does. It is what keeps construction, refurbishment, maintenance and management working together instead of as separate activities.',
    related: ['construction-building-works', 'property-refurbishment', 'property-maintenance'],
    metaDescription:
      'Contractor and trades coordination from EQNS: a structured, single point of contact for the trades and suppliers your property needs.',
  },
  {
    slug: 'property-inspections',
    number: '07',
    title: 'Property Inspections and Ongoing Maintenance',
    shortTitle: 'Inspections & Ongoing Care',
    category: 'Care & Maintain',
    summary:
      'Regular review of building condition and continuing care, helping owners identify issues early and plan with confidence.',
    distinction: 'Reviewing condition and planning continuing care.',
    image: images.inspections,
    heroIntro:
      'Knowing the condition of a property is the first step to looking after it. EQNS supports owners with inspections and continuing maintenance that keep them informed.',
    overview: [
      'Inspections give owners and managers a considered view of how a property is performing. They help distinguish what needs immediate attention from what can be planned, which supports better decisions and fewer surprises.',
      'Continuing maintenance builds on those findings. Rather than reacting to problems, owners can arrange care in a structured way that protects the building over the longer term.',
      'The frequency and scope of inspections depend on the building and your needs. EQNS does not provide formal surveys or certificates unless these are separately confirmed.',
    ],
    areas: [
      { title: 'Condition reviews', text: 'Observations on the state of building fabric, finishes and shared areas.' },
      { title: 'Issue identification', text: 'Early recognition of defects before they become larger problems.' },
      { title: 'Planned maintenance programmes', text: 'Arranging upkeep over time based on what the building needs.' },
      { title: 'Clear reporting', text: 'Straightforward explanation of findings and recommended next steps.' },
      { title: 'Follow-through', text: 'Connecting recommendations to repairs, improvements or management actions.' },
    ],
    fit: 'Inspections are where EQNS’s services connect. Findings can lead into maintenance, refurbishment or management actions, so knowledge of a property’s condition turns into organised, practical care.',
    related: ['property-maintenance', 'residential-property-management', 'commercial-property-management'],
    metaDescription:
      'Property inspections and ongoing maintenance from EQNS: regular condition reviews and planned care to protect long-term property value.',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const serviceHref = (slug: string) => `/services/${slug}`
