import type { PageOutline } from './types'

// Small and mid-sized businesses worldwide: custom software projects.

export const customSoftwareOutline: PageOutline = {
  path: '/custom-software-development',
  market: 'smb',
  product: 'custom software development',
  whoFor:
    'Built for small and mid-sized businesses in North America, Europe, the Middle East and Asia-Pacific that have outgrown spreadsheets and off-the-shelf tools.',
  problems: {
    heading: 'What business owners tell us',
    intro: 'Founders, operations managers and finance leads describe the same moment when off-the-shelf stops working.',
    items: [
      { quote: 'We pay for eight subscriptions that don\'t talk to each other.', detail: 'Customer data is copied between CRM, invoicing, project and support tools by hand.' },
      { quote: 'The real process lives in a spreadsheet.', detail: 'Your most important workflow runs on a shared sheet one person understands.' },
      { quote: 'Per-user pricing grows faster than revenue.', detail: 'Every new hire adds another licence, and the features you need cost extra.' },
      { quote: 'No product does exactly what we do.', detail: 'Your competitive edge is the part no SaaS tool supports.' },
      { quote: 'Our last agency disappeared after launch.', detail: 'The system works until something breaks, and then nobody answers.' },
      { quote: 'Hiring developers in-house is slow and expensive.', detail: 'Recruiting a team takes months, and one developer is a single point of failure.' },
    ],
  },
  features: {
    heading: 'What we build, in plain terms',
    intro: 'No jargon: these are the systems growing businesses ask us for most.',
    items: [
      { term: 'Custom CRM', feature: 'Your sales pipeline, customer records and follow-ups, shaped around how you actually sell.' },
      { term: 'Internal tools & admin panels', feature: 'Replace the spreadsheet: approvals, scheduling, stock, job tracking or whatever your team runs on.' },
      { term: 'Customer portals', feature: 'Let clients log in to see orders, documents, invoices and support tickets.' },
      { term: 'Web & mobile apps', feature: 'iOS, Android and web apps for customers, staff or field teams.' },
      { term: 'Automation & AI agents', feature: 'Chatbots, lead qualification, document processing and workflow automation that remove repetitive work.' },
      { term: 'Integrations', feature: 'Connect accounting, payments, email, WhatsApp and the tools you already pay for.' },
      { term: 'Managed hosting & support', feature: 'We host, monitor, patch and improve the system after launch — no handover and walk away.' },
    ],
  },
  proof: {
    kind: 'caseStudy',
    heading: 'Custom systems we have delivered',
    intro: 'A few of the platforms we have designed, built and keep running for clients. All are live.',
    projects: ['crownvoyages', 'yomaldives', 'dreamspeed'],
  },
  guide: {
    heading: 'A buyer\'s guide to custom software development for SMBs',
    intro:
      'Custom software used to be something only large companies could afford. Today, small and mid-sized businesses commission custom CRMs, portals, internal tools and mobile apps routinely — often for less than the combined cost of the subscriptions they replace. Here is how to decide whether custom is right for you, and how to choose a development partner.',
    sections: [
      {
        heading: 'When custom software makes sense',
        paragraphs: [
          'Off-the-shelf software is the right answer when your process is standard: accounting, email, payroll. Custom software makes sense when the process that makes you money is not standard — when you are bending a generic tool around your workflow, paying for features you do not use, or running the core of the business on spreadsheets.',
          'A useful test: if you removed the spreadsheet or the workaround tomorrow, would the business stop? If yes, that process deserves proper software.',
        ],
      },
      {
        heading: 'Start with a focused first version',
        paragraphs: [
          'The most successful projects do not try to build everything at once. Define the one workflow that causes the most pain, build a first version that solves it well, and put it in front of real users within weeks. Feedback from real use is worth more than any specification document.',
          'We work in short increments with weekly demos, so you see working software early and can change priorities as you learn.',
        ],
      },
      {
        heading: 'Understand the commercial model',
        paragraphs: [
          'Traditional agencies quote a fixed price or bill hourly, take a large deposit and hand over the code at the end. That model puts the risk on you and often leaves you without support once the project closes.',
          'LushWare works differently: there is no upfront payment. We build the first version, and if it fits your business you continue on a managed pay-as-you-go plan that covers hosting, updates and support. You only commit once you have seen it working.',
        ],
      },
      {
        heading: 'Choosing an offshore development partner',
        paragraphs: [
          'Offshore development can give a growing business a full team — product, design, development, QA and DevOps — for the cost of one or two local hires. The risks are communication, time-zone gaps and quality. Ask any partner how often you will see working software, who your day-to-day contact is, how they handle security and data protection, and what happens after launch.',
          'From our base in Sri Lanka (UTC+5:30) we overlap the working day in Europe, the Middle East and Asia-Pacific, and schedule calls in North American mornings or evenings. You get written progress updates and a weekly demo.',
        ],
      },
      {
        heading: 'Plan for life after launch',
        paragraphs: [
          'Software is never finished. Operating systems update, integrations change and your business grows. Make sure hosting, monitoring, backups, security patches and small improvements are covered from day one, so the system keeps up with you instead of becoming the next thing you outgrow.',
        ],
      },
    ],
  },
  related: [
    '/solutions/ai-agents',
    '/solutions/bpm',
    '/solutions/websites',
    '/solutions/mobile-apps',
    '/work',
  ],
  faq: [
    {
      question: 'Do you work with businesses outside Sri Lanka?',
      answer:
        'Yes. Most of our clients are international. We work remotely with businesses across North America, Europe, the Middle East and Asia-Pacific, with meetings in your time zone and written progress updates every working day.',
    },
    {
      question: 'Can you sign an NDA before we share our idea?',
      answer: 'Yes. We can sign an NDA before discovery on request.',
    },
    {
      question: 'What happens after launch?',
      answer:
        'We keep running it. Hosting, monitoring, updates, security patches and new features are part of the managed service, so you are never left with unsupported software.',
    },
  ],
  cta: {
    heading: 'Tell us the process that\'s holding you back',
    text: 'Describe the workflow or spreadsheet you would replace first, and we will scope a first version with you — no upfront payment.',
  },
  inquiry: { topic: 'Custom Software Development', industry: 'Custom Software / SMB' },
}

const smbDemo = (heading: string, intro: string, steps: string[]): PageOutline['proof'] => ({ kind: 'demo', heading, intro, steps })

export const aiAgentsOutline: PageOutline = {
  path: '/solutions/ai-agents',
  market: 'smb',
  product: 'an AI agent or chatbot',
  whoFor: 'Built for small and mid-sized businesses worldwide that want AI to answer customers, qualify leads and handle repetitive work.',
  problems: {
    heading: 'What business owners tell us',
    intro: 'The reasons teams ask us about AI agents are remarkably consistent.',
    items: [
      { quote: 'We answer the same ten questions all day.', detail: 'Staff spend hours on pricing, opening hours, order status and booking questions.' },
      { quote: 'Leads message at midnight and buy elsewhere by morning.', detail: 'Inquiries outside office hours go unanswered.' },
      { quote: 'Our chatbot just says "I don\'t understand".', detail: 'Rule-based bots frustrate customers and send everything to a human anyway.' },
      { quote: 'Data entry eats the team\'s week.', detail: 'Invoices, forms and emails are copied into systems by hand.' },
      { quote: 'I\'m worried AI will make things up.', detail: 'You need answers grounded in your own information, with a human in control.' },
      { quote: 'We don\'t know where to start with AI.', detail: 'There are many tools and no clear path from idea to working system.' },
    ],
  },
  features: {
    heading: 'AI features, in plain language',
    intro: 'What an AI agent actually does for your business.',
    items: [
      { term: '24/7 customer chat', feature: 'Answers on your website, WhatsApp or social channels using your own policies, prices and FAQs.' },
      { term: 'Lead qualification', feature: 'Asks the right questions, scores the lead and books a call or hands over to sales.' },
      { term: 'Order & booking status', feature: 'Looks up live data in your systems to answer "where is my order?" or change a booking.' },
      { term: 'Document processing', feature: 'Reads invoices, forms and emails and enters the data into your systems.' },
      { term: 'Human handover', feature: 'Passes the conversation to a person, with full context, whenever the AI is unsure.' },
      { term: 'Guardrails & logs', feature: 'Answers grounded in approved content, with every conversation logged and reviewable.' },
    ],
  },
  proof: smbDemo(
    'See an AI agent trained on your own content',
    'Share your FAQs or website and we will show you an AI agent answering your real customer questions, with handover to a human when needed.',
    [
      'A customer asks about pricing on WhatsApp; the agent answers from your approved price list.',
      'A new lead is qualified with a few questions and a call is booked in your calendar.',
      'An order-status question is answered from live data in your system.',
      'A complex request is handed to a team member with the full conversation attached.',
    ],
  ),
  related: [
    '/custom-software-development',
    '/solutions/bpm',
    '/industries/tourism-hospitality',
    '/solutions/ai-process-optimization',
  ],
  faq: [
    {
      question: 'What are AI Agents?',
      answer:
        'AI Agents are autonomous software programs that can perform tasks, make decisions, and interact with users or systems based on artificial intelligence algorithms.',
    },
    {
      question: 'What are AI Chatbots?',
      answer:
        'AI Chatbots are intelligent conversational agents that understand user inputs and provide automated responses, improving engagement and customer support.',
    },
    {
      question: 'How do AI solutions benefit my business?',
      answer:
        'AI Agents and Chatbots help streamline operations, enhance customer experience, automate repetitive tasks, and provide insights through data-driven intelligence.',
    },
    {
      question: 'Is my data secure with AI solutions?',
      answer:
        'Absolutely. We implement strict security protocols and compliance measures to protect all business and customer data handled by our AI systems.',
    },
  ],
  cta: {
    heading: 'Give your team their hours back',
    text: 'Tell us which questions or tasks take the most time and we will show you what an AI agent can take off your plate.',
  },
  inquiry: { topic: 'AI Agents & AI Chatbots', industry: 'AI Agents' },
}

export const bpmOutline: PageOutline = {
  path: '/solutions/bpm',
  market: 'smb',
  product: 'BPM software',
  whoFor: 'Built for operations teams in small and mid-sized businesses worldwide that run approvals and workflows on email and spreadsheets.',
  problems: {
    heading: 'What operations managers tell us',
    intro: 'Process problems sound the same in every industry.',
    items: [
      { quote: 'Approvals get stuck in someone\'s inbox.', detail: 'Purchase requests, leave and discounts wait days for a reply.' },
      { quote: 'Nobody knows where a request is.', detail: 'Customers and staff chase status updates by phone and email.' },
      { quote: 'Every team does it differently.', detail: 'The same process runs three ways, with different results.' },
      { quote: 'We only find bottlenecks when a customer complains.', detail: 'There is no data on how long each step takes.' },
      { quote: 'Audits mean digging through email.', detail: 'Who approved what, and when, is impossible to prove quickly.' },
      { quote: 'Onboarding a new hire takes weeks.', detail: 'Processes live in people\'s heads, not in a system.' },
    ],
  },
  features: {
    heading: 'BPM features, in operations language',
    intro: 'Workflow software described the way your teams describe their work.',
    items: [
      { term: 'Approval flows', feature: 'Multi-step approvals with rules, limits, delegation and mobile sign-off.' },
      { term: 'Request forms', feature: 'Digital forms that replace email requests and feed straight into the workflow.' },
      { term: 'Status tracking', feature: 'Everyone sees where each request is and who it is waiting on.' },
      { term: 'SLA & escalation', feature: 'Deadlines per step with automatic reminders and escalation.' },
      { term: 'Audit trail', feature: 'Every action, approval and change recorded with time and user.' },
      { term: 'Process analytics', feature: 'Cycle times and bottlenecks by step, team and request type.' },
    ],
  },
  proof: smbDemo(
    'See one of your processes automated',
    'Pick a process — purchase approvals, onboarding, customer requests — and we will walk through it running as an automated workflow.',
    [
      'A request is submitted through a digital form instead of email.',
      'It routes to the right approver based on amount, department and rules.',
      'An overdue step triggers a reminder and escalates automatically.',
      'The completed request is logged with a full audit trail, and cycle time appears in the dashboard.',
    ],
  ),
  related: [
    '/custom-software-development',
    '/solutions/ai-agents',
    '/solutions/ai-process-optimization',
  ],
  faq: [
    {
      question: 'What is Business Process Management (BPM)?',
      answer:
        'BPM is a systematic approach to improving and automating business processes, ensuring efficiency, transparency, and alignment with organizational goals.',
    },
    {
      question: 'How does BPM benefit my business?',
      answer:
        'BPM increases operational efficiency, reduces errors, enhances collaboration, and provides insights to continuously optimize workflows.',
    },
    {
      question: 'Is BPM suitable for small businesses?',
      answer:
        'Absolutely. BPM solutions are scalable and can be tailored to small businesses, growing startups, and large enterprises.',
    },
    {
      question: 'How does BPM ensure process optimization?',
      answer:
        'BPM provides monitoring, analytics, and reporting tools that help identify bottlenecks, track KPIs, and continuously improve business processes.',
    },
  ],
  cta: {
    heading: 'Unstick your slowest process',
    text: 'Tell us which approval or workflow causes the most delays and we will show you how it would run automated.',
  },
  inquiry: { topic: 'Business Process Management', industry: 'BPM' },
}

export const websitesOutline: PageOutline = {
  path: '/solutions/websites',
  market: 'smb',
  product: 'a business website',
  whoFor: 'Built for small and mid-sized businesses worldwide that need a fast, professional website that brings in customers.',
  problems: {
    heading: 'What business owners tell us about their websites',
    intro: 'The same complaints come up in almost every first call.',
    items: [
      { quote: 'Our website looks older than our business.', detail: 'An outdated site makes a strong business look small or unreliable.' },
      { quote: 'Nobody finds us on Google.', detail: 'The site has no SEO structure, so competitors take the searches.' },
      { quote: 'It\'s slow and broken on phones.', detail: 'Most visitors arrive on mobile and leave before the page loads.' },
      { quote: 'We get visits but no inquiries.', detail: 'There is no clear call to action, form or booking flow.' },
      { quote: 'I can\'t update it without calling a developer.', detail: 'Simple changes take days and cost money.' },
      { quote: 'Our last web agency vanished.', detail: 'Hosting, security and updates were never anyone\'s job.' },
    ],
  },
  features: {
    heading: 'Website features, in plain terms',
    intro: 'What you get, without the jargon.',
    items: [
      { term: 'Fast on every phone', feature: 'Mobile-first design with optimised images and pages that load quickly.' },
      { term: 'Found on Google', feature: 'SEO-ready structure, page titles, descriptions, sitemap and structured data from day one.' },
      { term: 'Inquiries & bookings', feature: 'Contact forms, WhatsApp buttons, booking and payment flows that turn visits into customers.' },
      { term: 'Easy updates', feature: 'Change text, images and offers yourself, or ask us and we do it.' },
      { term: 'Managed hosting', feature: 'Hosting, SSL, backups, security updates and monitoring handled for you.' },
      { term: 'Analytics', feature: 'See where visitors come from and which pages bring inquiries.' },
    ],
  },
  proof: {
    kind: 'caseStudy',
    heading: 'Websites we have built',
    intro: 'Live websites we have designed and built for clients.',
    projects: ['tripskyway', 'holidayvibes', 'traveliccted'],
  },
  related: [
    '/custom-software-development',
    '/industries/tourism-hospitality',
    '/solutions/mobile-apps',
  ],
  faq: [
    {
      question: 'What is a corporate website?',
      answer:
        'A corporate website is a digital platform representing a business online, providing information, services, and engagement opportunities for clients, partners, and stakeholders.',
    },
    {
      question: 'How does a business website benefit my company?',
      answer:
        'It increases brand visibility, strengthens credibility, generates leads, provides customer engagement channels, and allows your business to reach a global audience.',
    },
    {
      question: 'Can my website be mobile-friendly?',
      answer:
        'Absolutely. All websites we design are responsive and optimized for mobile devices, ensuring an excellent user experience on smartphones and tablets.',
    },
    {
      question: 'Do you provide SEO and performance optimization?',
      answer:
        'Yes. Our websites follow SEO best practices, fast loading speeds, and modern web standards to help your business rank higher and perform better online.',
    },
  ],
  cta: {
    heading: 'Turn your website into your best salesperson',
    text: 'Send us your current site, or tell us about your business, and we will propose a website built to bring in inquiries.',
  },
  inquiry: { topic: 'Business & Corporate Websites', industry: 'Websites' },
}

export const mobileAppsOutline: PageOutline = {
  path: '/solutions/mobile-apps',
  market: 'smb',
  product: 'a mobile app',
  whoFor: 'Built for businesses worldwide that need iOS and Android apps for their customers, staff or field teams.',
  problems: {
    heading: 'What businesses tell us before building an app',
    intro: 'These are the reasons teams come to us for a mobile app.',
    items: [
      { quote: 'Our customers expect an app, and we don\'t have one.', detail: 'Competitors offer booking, ordering or loyalty in an app; you offer a phone number.' },
      { quote: 'Field staff still use paper forms.', detail: 'Job sheets, inspections and signatures are typed in again at the office.' },
      { quote: 'We were quoted twice — once for iOS, once for Android.', detail: 'Building two separate apps doubles the cost and the maintenance.' },
      { quote: 'The app has to work without signal.', detail: 'Staff work in basements, rural areas and on the road.' },
      { quote: 'Our last app was abandoned after launch.', detail: 'OS updates broke it and nobody maintained it.' },
      { quote: 'It needs to connect to our existing systems.', detail: 'An app that does not talk to your CRM, ERP or booking system just adds work.' },
    ],
  },
  features: {
    heading: 'App features, in plain terms',
    intro: 'What a business app typically needs to do.',
    items: [
      { term: 'iOS & Android from one build', feature: 'Cross-platform apps that look and feel native, maintained as one codebase.' },
      { term: 'Bookings, orders & payments', feature: 'Let customers book, order and pay in a few taps.' },
      { term: 'Field forms & signatures', feature: 'Digital job sheets, checklists, photos and signatures for staff in the field.' },
      { term: 'Works offline', feature: 'Data captured without signal syncs automatically when back online.' },
      { term: 'Push notifications', feature: 'Reminders, offers and status updates sent straight to the phone.' },
      { term: 'Connected to your systems', feature: 'Integrated with your CRM, booking system, ERP or custom back office.' },
    ],
  },
  proof: smbDemo(
    'See a sample business app on your phone',
    'We will walk you through working sample apps — customer-facing and field-staff — so you can see what is possible before you scope your own.',
    [
      'A customer books and pays for a service in the app and gets a confirmation notification.',
      'A field technician opens the job offline, completes a checklist with photos and a signature.',
      'The data syncs to the back office and the customer receives an update.',
      'An app update is released to both iOS and Android from one codebase.',
    ],
  ),
  related: [
    '/custom-software-development',
    '/industries/field-service',
    '/solutions/warehouse-management',
  ],
  faq: [
    {
      question: 'What is Mobile App Development?',
      answer:
        'Mobile app development involves designing, building, and deploying applications for mobile devices on iOS and Android platforms, ensuring seamless user experiences and business value.',
    },
    {
      question: 'How can mobile apps benefit my business?',
      answer:
        'Mobile apps increase accessibility for customers, improve engagement, streamline business processes, and enable data-driven decisions through real-time interactions.',
    },
    {
      question: 'Can LushWare build apps for both iOS and Android?',
      answer:
        'Yes, we create native and cross-platform mobile applications tailored to your business needs, ensuring high performance and security across devices.',
    },
  ],
  cta: {
    heading: 'Put your business in your customers\' pockets',
    text: 'Tell us who will use the app and what they need to do, and we will scope a first version for iOS and Android.',
  },
  inquiry: { topic: 'Mobile App Development', industry: 'Mobile Apps' },
}
