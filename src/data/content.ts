import { images, type ImageAsset } from './images'

export const brandElements = [
  { letter: 'E', name: 'Equilibrium', text: 'The right balance between quality, cost, planning and performance.' },
  { letter: 'Q', name: 'Quality', text: 'High standards across workmanship, materials and service delivery.' },
  { letter: 'N', name: 'Network', text: 'Strong relationships with clients, contractors, suppliers and property professionals.' },
  { letter: 'S', name: 'Structure', text: 'Organised processes, clear communication and effective management.' },
] as const

export const principles = [
  { number: '01', title: 'Quality in Every Detail', text: 'Standards are set at the start and carried through workmanship, materials and finishing, not just checked at the end.' },
  { number: '02', title: 'Structured and Organised Delivery', text: 'Clear scopes, sensible sequencing and coordinated trades keep work orderly and easy to follow.' },
  { number: '03', title: 'Clear Communication', text: 'Plain language, regular updates and a clear point of contact so you always know where things stand.' },
  { number: '04', title: 'Reliable Service', text: 'Considered planning and consistent follow-through, so you can depend on the way work is handled.' },
  { number: '05', title: 'Long-Term Property Value', text: 'Decisions are weighed against how a property will perform and hold its condition over time.' },
  { number: '06', title: 'Professional Relationships', text: 'Respectful, open working relationships with owners, occupiers, contractors and suppliers.' },
] as const

export interface ClientCategory {
  id: string
  title: string
  summary: string
  detail: string
  needs: string[]
  services: string[]
  image: ImageAsset
}

export const clientCategories: ClientCategory[] = [
  {
    id: 'landlords',
    title: 'Landlords',
    summary: 'Keeping rental properties in good order and ready for occupiers.',
    detail: 'Landlords need properties that are safe, presentable and well looked after, without every repair becoming a distraction. EQNS can help organise upkeep, improvements and management around your portfolio.',
    needs: ['Repairs and routine maintenance', 'Refurbishment between occupiers', 'Ongoing residential management'],
    services: ['residential-property-management', 'property-maintenance', 'property-refurbishment'],
    image: images.residential,
  },
  {
    id: 'residential-owners',
    title: 'Residential Property Owners',
    summary: 'Care, improvement and building works for the homes you own.',
    detail: 'Whether you are improving the home you live in or planning bigger works, EQNS can help you understand your options and organise the work clearly.',
    needs: ['Home improvements and refurbishment', 'Extensions and building works', 'Repairs and maintenance'],
    services: ['property-refurbishment', 'construction-building-works', 'property-maintenance'],
    image: images.modernHome,
  },
  {
    id: 'commercial-owners',
    title: 'Commercial Property Owners',
    summary: 'Premises that remain functional, presentable and well maintained.',
    detail: 'Offices, retail units and mixed-use buildings carry particular demands. EQNS can support owners with management, maintenance and improvement planning.',
    needs: ['Commercial property management', 'Maintenance planning', 'Refurbishment of commercial space'],
    services: ['commercial-property-management', 'property-maintenance', 'property-refurbishment'],
    image: images.commercial,
  },
  {
    id: 'investors',
    title: 'Property Investors',
    summary: 'Practical support to protect and improve the value of assets.',
    detail: 'Investors benefit from a clear picture of how an asset is performing and what it needs. EQNS combines building knowledge with management to support informed decisions.',
    needs: ['Condition reviews and inspections', 'Improvement and refurbishment works', 'Management of residential or commercial assets'],
    services: ['property-inspections', 'property-refurbishment', 'commercial-property-management'],
    image: images.towers,
  },
  {
    id: 'businesses',
    title: 'Businesses',
    summary: 'Workplaces that support the way your business operates.',
    detail: 'Businesses that own or occupy premises need them to work well and look right. EQNS can help with fit-out style improvements, repairs and continuing upkeep.',
    needs: ['Premises refurbishment', 'Repairs and ongoing maintenance', 'Coordination of trades and suppliers'],
    services: ['property-refurbishment', 'property-maintenance', 'contractor-coordination'],
    image: images.inspections,
  },
  {
    id: 'property-professionals',
    title: 'Property Management Professionals',
    summary: 'A dependable partner for the building side of management.',
    detail: 'Managing agents and property professionals often need a capable team to handle building works and repairs. EQNS can coordinate trades and deliver work in an organised way.',
    needs: ['Trades and contractor coordination', 'Maintenance and repairs', 'Inspections and follow-up works'],
    services: ['contractor-coordination', 'property-maintenance', 'property-inspections'],
    image: images.coordination,
  },
]

export const approachSteps = [
  { number: '01', title: 'Initial Enquiry', text: 'You tell us about the property and what you need. We listen first, so we understand the building, the goals and the constraints before anything else.' },
  { number: '02', title: 'Planning', text: 'Requirements are shaped into a clear scope, with sensible sequencing and the practical considerations a property project involves.' },
  { number: '03', title: 'Coordination', text: 'Trades, suppliers and specialists are organised around the plan, with clear responsibilities and a single route for communication.' },
  { number: '04', title: 'Delivery', text: 'Work is carried out with attention to quality and finish, with updates that keep you informed of progress and any decisions needed.' },
  { number: '05', title: 'Ongoing Support', text: 'Where it is useful, care continues through maintenance, inspections and management, so the standard achieved is looked after over time.' },
] as const

export const approachThemes = [
  { title: 'Quality control and attention to detail', text: 'Good results come from consistent standards. Careful review during the work helps catch problems when they are small and keeps finishes to the standard intended.' },
  { title: 'Structured project coordination', text: 'Property work depends on many hands. Clear sequencing and defined responsibilities reduce confusion and help each part of the project support the next.' },
  { title: 'Clear communication', text: 'Owners should not have to chase for information. We aim to explain things plainly, share progress honestly and flag decisions early.' },
  { title: 'Reliable service delivery', text: 'Reliability is built through planning and follow-through. We aim to do what we say we will do, and to be open when plans need to change.' },
  { title: 'Ongoing property care', text: 'A property needs attention after the work is finished. Maintenance and inspections help protect the investment already made.' },
  { title: 'Long-term property value', text: 'Every recommendation is weighed against how the property will perform and hold its condition, not only against immediate cost.' },
  { title: 'Strong professional relationships', text: 'Respectful relationships with clients, contractors and suppliers make projects smoother and working together easier.' },
] as const

export const importance = [
  { title: 'Quality', text: 'Workmanship and materials set how a property looks, performs and ages.' },
  { title: 'Planning', text: 'Thinking ahead avoids rework, delays and avoidable cost.' },
  { title: 'Coordination', text: 'Trades, suppliers and decisions need to come together at the right moment.' },
] as const
