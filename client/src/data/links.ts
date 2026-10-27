// Display name + one-line description per page, shared by the outline
// "related" cross-links and the footer so link text stays consistent.

export const PAGE_LINKS = {
  '/industries/field-service': { name: 'Field Service Software', desc: 'Scheduling, dispatch and invoicing for HVAC, plumbing and electrical contractors.' },
  '/solutions/hvac-mep-service-software': { name: 'HVAC / MEP Service Software', desc: 'Dispatch, maintenance agreements and refrigerant records for heating and cooling contractors.' },
  '/industries/commercial-hvac-mep': { name: 'Commercial HVAC & MEP Software', desc: 'Projects, AMC contracts and PPM schedules for contractors and FM providers.' },
  '/industries/manufacturing': { name: 'Manufacturing Software', desc: 'Live production monitoring, quality intelligence and digital twins for plants.' },
  '/solutions/predictive-maintenance': { name: 'Predictive Maintenance', desc: 'Condition monitoring and failure prediction for critical equipment.' },
  '/solutions/oee-monitoring': { name: 'OEE Monitoring', desc: 'Automatic OEE, downtime reasons and shift reports from your machines.' },
  '/industries/logistics-supply-chain': { name: 'Logistics & Supply Chain Software', desc: 'Visibility, demand forecasting and route optimization across your network.' },
  '/solutions/warehouse-management': { name: 'Warehouse Management System', desc: 'Receiving, picking, packing and shipping with real-time stock accuracy.' },
  '/industries/tourism-hospitality': { name: 'Tourism & Hospitality Software', desc: 'Booking, travel CRM and operations for tour operators, DMCs and hotels.' },
  '/solutions/travel-agency-software': { name: 'Travel Agency Software', desc: 'Automatic quotes, itineraries, bookings and B2B agent portals.' },
  '/custom-software-development': { name: 'Custom Software Development', desc: 'CRMs, portals, internal tools and apps for growing businesses.' },
  '/solutions/ai-agents': { name: 'AI Agents & Chatbots', desc: 'AI that answers customers, qualifies leads and handles repetitive work.' },
  '/solutions/bpm': { name: 'Business Process Management', desc: 'Approval flows, request forms and process analytics.' },
  '/solutions/websites': { name: 'Business & Corporate Websites', desc: 'Fast, SEO-ready websites built to bring in inquiries.' },
  '/solutions/mobile-apps': { name: 'Mobile App Development', desc: 'iOS and Android apps for customers, staff and field teams.' },
  '/solutions/iot-product-development': { name: 'IoT Product Development', desc: 'Sensors, gateways, cloud platforms and dashboards to connect equipment.' },
  '/solutions/product-engineering': { name: 'Product Engineering & Embedded Systems', desc: 'Hardware, PCB design and firmware from concept to production.' },
  '/solutions/ai-process-optimization': { name: 'AI-Driven Process Optimization', desc: 'Operational intelligence layered on top of your existing systems.' },
  '/solutions/autonomous-decision-intelligence': { name: 'Autonomous Decision Intelligence', desc: 'Operations that decide, act and keep improving, with people in control.' },
  '/work': { name: 'Our Work', desc: 'Projects we have delivered for clients.' },
} as const satisfies Record<string, { name: string; desc: string }>

export type PagePath = keyof typeof PAGE_LINKS
