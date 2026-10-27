import type { PageOutline } from './types'

// Manufacturing & supply chain operators, worldwide.

export const manufacturingOutline: PageOutline = {
  market: 'industrial',
  product: 'manufacturing software',
  whoFor:
    'Built for discrete and process manufacturers in Europe, North America, the Middle East and Asia-Pacific — from a single plant to a multi-site group.',
  problems: {
    heading: 'What plant managers tell us',
    intro: 'Plant and operations managers describe the same blind spots on every continent. These are their words.',
    items: [
      { quote: 'We have OEE blind spots on every line.', detail: 'OEE is calculated by hand at the end of the shift, so micro-stops and slow cycles never show up.' },
      { quote: 'The line stops and we find out why afterwards.', detail: 'Breakdowns arrive without warning, and the root cause is guessed rather than measured.' },
      { quote: 'Our data is in the PLCs, not in front of anyone.', detail: 'Machines produce data every second, but managers still work from yesterday\'s spreadsheet.' },
      { quote: 'Quality finds the defect after we\'ve made a thousand of them.', detail: 'Inspection happens at the end of the line, so scrap and rework are discovered too late.' },
      { quote: 'Every plant reports differently.', detail: 'Group management cannot compare sites because each one measures OEE, downtime and scrap its own way.' },
      { quote: 'The ERP says one thing, the shop floor another.', detail: 'Work orders, stock and actual output disagree, and planners do not trust the schedule.' },
    ],
  },
  features: {
    heading: 'Features, in shop-floor language',
    intro: 'We use the terms your production, maintenance and quality teams already use.',
    items: [
      { term: 'Live OEE', feature: 'Availability, performance and quality calculated automatically from machine signals, per line, shift and plant.' },
      { term: 'Downtime reason codes', feature: 'Operators tag stops on a shop-floor tablet the moment they happen, so Pareto charts reflect reality.' },
      { term: 'Predictive maintenance', feature: 'Vibration, temperature and current data used to predict failures and raise work orders in your CMMS.' },
      { term: 'SPC & quality intelligence', feature: 'In-process measurements monitored against control limits, with AI flagging drift before parts go out of spec.' },
      { term: 'Lot & serial traceability', feature: 'Genealogy from raw material to finished goods that supports ISO 9001 and IATF 16949 audits.' },
      { term: 'Shift handover reports', feature: 'Automatic summaries of output, losses and open issues at every shift change.' },
      { term: 'Factory digital twin', feature: 'A live model of lines and assets to test schedule, staffing or layout changes before making them.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See live OEE and downtime on a sample line',
    intro:
      'A 45-minute walkthrough of a sample production line connected through OPC UA and IoT sensors, showing the dashboards your supervisors and plant manager would use every day.',
    steps: [
      'Machine signals stream in from PLCs and retrofit sensors; OEE updates live for each machine and line.',
      'A stop is detected; the operator tags the reason on a tablet and the downtime Pareto updates instantly.',
      'Rising vibration on a motor triggers a predictive alert and a work order in the CMMS.',
      'A quality measurement drifts towards its control limit and the line supervisor is notified.',
      'The shift report — output, OEE, top losses, open work orders — is sent automatically at handover.',
    ],
  },
  guide: {
    heading: 'A practical guide to manufacturing software, AI and IoT',
    intro:
      'Manufacturing software has become a crowded category: MES, MOM, IIoT platforms, CMMS, QMS, digital twins and now AI on top of all of them. For most plants the question is not which acronym to buy, but which losses to attack first and how to get trustworthy data to the people who can act on it. This guide explains how we approach it with manufacturers worldwide.',
    sections: [
      {
        heading: 'Start with the biggest loss, not the biggest platform',
        paragraphs: [
          'Most plants already know roughly where they lose capacity: unplanned downtime on a bottleneck machine, changeovers that take too long, scrap on a particular product family, or a planning process that cannot keep up with demand changes. The fastest return comes from measuring that one loss properly and giving the team a way to act on it.',
          'That is why we usually begin with a focused pilot — live OEE on one line, or predictive maintenance on a handful of critical assets — rather than a plant-wide MES rollout. Once the pilot proves value in numbers your finance team accepts, the same data foundation extends to other lines and sites.',
        ],
      },
      {
        heading: 'Connect what you already have',
        paragraphs: [
          'Modern PLCs and SCADA systems expose data through OPC UA, Modbus or MQTT; older machines can be retrofitted with low-cost sensors that read cycle signals, power draw, vibration or temperature. Combined with work orders and material data from your ERP — SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite or Odoo — that is usually enough to build accurate OEE, downtime and quality views.',
          'A good partner will not ask you to replace your ERP, MES or CMMS. The goal is to connect them so that production, maintenance, quality and planning work from the same numbers.',
        ],
      },
      {
        heading: 'Where AI genuinely helps on the shop floor',
        paragraphs: [
          'AI is useful in manufacturing when there is a clear decision to support and enough history to learn from. Predicting bearing or motor failures from vibration patterns, detecting process drift before parts go out of tolerance, forecasting demand to set production plans, and recommending schedule changes when a machine goes down are all proven use cases.',
          'What AI should not do is take control of production without people. We design systems where models recommend and humans approve, with every recommendation explained, logged and measured against the outcome.',
        ],
      },
      {
        heading: 'Make multi-site reporting comparable',
        paragraphs: [
          'Groups with plants in several countries often discover that each site defines OEE, downtime and scrap differently, which makes comparison meaningless. A shared data model with standard loss categories, multi-language interfaces and role-based access lets group management compare plants fairly while each site keeps its own detail.',
          'Traceability and maintenance records built on the same model also support ISO 9001, IATF 16949 and ISO 55000 audits without a separate documentation effort.',
        ],
      },
      {
        heading: 'Plan for adoption as much as technology',
        paragraphs: [
          'The best dashboards fail if operators do not trust them. Involve supervisors and operators in defining reason codes, put tablets where stops happen, and review the numbers in daily production meetings from week one. Software that becomes part of the morning meeting gets used; software that lives on a manager\'s laptop does not.',
        ],
      },
    ],
  },
  faq: [],
  cta: {
    heading: 'Find your biggest hidden loss in one pilot',
    text: 'Tell us about the line or asset that hurts most today and we will propose a focused pilot to measure and fix it.',
  },
  inquiry: { topic: 'Manufacturing Software', industry: 'Manufacturing' },
}

export const predictiveMaintenanceOutline: PageOutline = {
  market: 'industrial',
  product: 'predictive maintenance software',
  whoFor:
    'Built for maintenance and reliability teams in manufacturing plants, utilities and process industries worldwide.',
  problems: {
    heading: 'What maintenance managers tell us',
    intro: 'Reliability engineers and maintenance managers describe the same frustrations everywhere.',
    items: [
      { quote: 'The compressor always fails on a night shift.', detail: 'Critical assets break without warning, and the line stops until someone finds the fault.' },
      { quote: 'We replace parts that had years left in them.', detail: 'Calendar-based PMs swap healthy components because nobody knows their real condition.' },
      { quote: 'We collect sensor data and never look at it.', detail: 'PLC tags and historian data pile up without anyone turning them into early warnings.' },
      { quote: 'The spare part arrives after the breakdown.', detail: 'Without a failure forecast, critical spares are ordered reactively at premium prices.' },
      { quote: 'Our CMMS is a record of what broke.', detail: 'Maintenance history exists but is never used to predict what breaks next.' },
      { quote: 'Vibration routes take a whole week.', detail: 'Manual condition monitoring covers each asset once a month at best.' },
    ],
  },
  features: {
    heading: 'Features, in reliability language',
    intro: 'Named the way maintenance and reliability engineers already talk.',
    items: [
      { term: 'Condition monitoring', feature: 'Continuous vibration, temperature, current and pressure data from existing PLCs or retrofit wireless sensors.' },
      { term: 'Anomaly detection', feature: 'Models learn each asset\'s normal behaviour and flag deviations long before alarm thresholds are reached.' },
      { term: 'Remaining useful life (RUL)', feature: 'Estimated time to failure per asset, so work is planned into the next scheduled stop.' },
      { term: 'Auto work orders', feature: 'Predictions raise work orders with likely cause and recommended action in SAP PM, IBM Maximo, Dynamics 365 or your CMMS.' },
      { term: 'Criticality ranking', feature: 'Assets ranked by risk and production impact so the team works on what matters first.' },
      { term: 'Spares forecasting', feature: 'Upcoming failures linked to spare-part demand so critical stock is ordered in time.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See a failure predicted weeks ahead',
    intro: 'A walkthrough on sample asset data showing how an early warning becomes a planned repair instead of a breakdown.',
    steps: [
      'Vibration and temperature data stream in from a pump and motor set.',
      'The model detects a rising bearing-wear signature and estimates remaining useful life.',
      'A work order with the likely cause is created in the CMMS and scheduled into the next planned stop.',
      'The spare bearing is reserved and the alert is closed with the technician\'s findings, improving the next prediction.',
    ],
  },
  guide: {
    heading: 'Getting started with predictive maintenance',
    intro:
      'Predictive maintenance (PdM) uses equipment data to estimate when an asset will fail, so repairs happen at the right time — not too early, as with calendar maintenance, and not too late, as with run-to-failure.',
    sections: [
      {
        heading: 'Pick the right assets first',
        paragraphs: [
          'Start with a handful of critical, failure-prone assets where a breakdown stops production: compressors, pumps, gearboxes, spindles, fans or conveyors. A focused pilot on these proves value quickly and builds the data foundation for the rest of the plant.',
        ],
      },
      {
        heading: 'Use the data you already have, then fill the gaps',
        paragraphs: [
          'PLC and SCADA tags, historian data and CMMS maintenance history are often enough for a first model. Where critical assets have no instrumentation, low-cost wireless vibration and temperature sensors close the gap without rewiring.',
        ],
      },
      {
        heading: 'Close the loop with your CMMS',
        paragraphs: [
          'Predictions only create value when they become planned work. Alerts should land as work orders in the system technicians already use, and the outcome of each job should feed back into the model so predictions improve over time.',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'What is predictive maintenance software?',
      answer:
        'Predictive maintenance software analyses machine and sensor data to detect early signs of failure and estimate when an asset will need attention, so maintenance is planned before a breakdown happens.',
    },
    {
      question: 'What data do we need to get started?',
      answer:
        'Usually some combination of PLC/SCADA tags, sensor readings and maintenance history. If critical assets have no data, we add retrofit sensors for vibration, temperature or current.',
    },
    {
      question: 'Can it work with our existing CMMS or ERP?',
      answer: 'Yes. Predictions create work orders directly in systems such as SAP PM, IBM Maximo, Microsoft Dynamics 365 or your current CMMS.',
    },
    {
      question: 'Do you work with manufacturers outside your home region?',
      answer: 'Yes. We work with plants and operators globally, delivering remotely and planning on-site visits per phase when installation is needed.',
    },
  ],
  cta: {
    heading: 'Stop the next breakdown before it happens',
    text: 'Name your most critical assets and we will scope a predictive maintenance pilot around them.',
  },
  inquiry: { topic: 'Predictive Maintenance', industry: 'Manufacturing' },
}

export const oeeOutline: PageOutline = {
  market: 'industrial',
  product: 'OEE monitoring software',
  whoFor: 'Built for production and continuous-improvement teams in manufacturing plants worldwide, from one line to many sites.',
  problems: {
    heading: 'What production managers tell us',
    intro: 'Continuous-improvement leads and production managers describe the same measurement problems.',
    items: [
      { quote: 'Our OEE is a spreadsheet nobody believes.', detail: 'Numbers are typed in at the end of the shift and argued about in every meeting.' },
      { quote: 'Micro-stops eat the shift and never get logged.', detail: 'Short stops and slow cycles are invisible in manual logs, yet they add up to hours.' },
      { quote: 'Downtime reasons are guessed afterwards.', detail: 'By the time anyone asks, the operator has forgotten why the machine stopped.' },
      { quote: 'Scrap is counted somewhere else.', detail: 'Quality losses live in a separate system, so OEE overstates real performance.' },
      { quote: 'We can\'t compare shifts or lines fairly.', detail: 'Each area calculates OEE differently, so benchmarks mean nothing.' },
      { quote: 'Half our machines have no data connection.', detail: 'Older equipment without PLCs is left out of every report.' },
    ],
  },
  features: {
    heading: 'Features, in CI language',
    intro: 'Built around the metrics and routines your continuous-improvement team already runs.',
    items: [
      { term: 'Automatic OEE', feature: 'Availability × performance × quality calculated from machine signals in real time.' },
      { term: 'Six big losses', feature: 'Breakdowns, setups, small stops, reduced speed, start-up rejects and production rejects classified automatically.' },
      { term: 'Reason codes on the line', feature: 'Operators pick downtime reasons on a tablet as soon as a stop is detected.' },
      { term: 'Andon & line boards', feature: 'Large-screen status boards showing live output against target for each line.' },
      { term: 'Shift reports', feature: 'Output, OEE, top losses and comments sent automatically at shift end.' },
      { term: 'Legacy machine retrofit', feature: 'Sensors and edge gateways capture cycles, run state and power from machines without PLCs.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See automatic OEE on a sample line',
    intro: 'A walkthrough of live OEE dashboards and operator screens on a sample line with mixed new and legacy machines.',
    steps: [
      'Cycle signals stream from a PLC and a retrofitted legacy press.',
      'A micro-stop is detected and classified automatically; a longer stop prompts the operator for a reason.',
      'The six-big-losses chart and live OEE update for the line and the shift.',
      'The shift report is sent at handover with top losses and actions.',
    ],
  },
  faq: [
    {
      question: 'What is OEE?',
      answer:
        "Overall Equipment Effectiveness (OEE) multiplies availability, performance and quality into one score that shows how much of a machine's planned production time is truly productive.",
    },
    {
      question: 'Can you connect older machines without PLCs?',
      answer:
        'Yes. We retrofit sensors and edge gateways to capture cycles, run states and power draw from legacy equipment, so every machine is measured the same way.',
    },
    {
      question: 'Is this a full MES?',
      answer:
        'It covers the most valuable MES functions — OEE, downtime, work orders and output tracking — without the cost of a full MES. It can integrate with an existing MES or ERP if you have one.',
    },
    {
      question: 'Can operators enter downtime reasons?',
      answer:
        'Yes. Operators pick reason codes on a shop-floor tablet when a stop is detected, which makes downtime analysis accurate instead of estimated.',
    },
    {
      question: 'Do you support multiple plants in different countries?',
      answer: 'Yes. Dashboards roll up across sites with multi-language, multi-unit and role-based access for plant and group management.',
    },
  ],
  cta: {
    heading: 'See where your capacity really goes',
    text: 'Pick one line and we will show you live OEE and downtime on it, with the machines you already have.',
  },
  inquiry: { topic: 'OEE Monitoring', industry: 'Manufacturing' },
}

export const logisticsOutline: PageOutline = {
  market: 'industrial',
  product: 'logistics and supply chain software',
  whoFor:
    'Built for manufacturers, distributors, 3PLs and fleet operators running supply chains across Europe, North America, the Middle East and Asia-Pacific.',
  problems: {
    heading: 'What supply chain leaders tell us',
    intro: 'Supply chain, logistics and warehouse managers describe the same gaps, whatever they ship.',
    items: [
      { quote: 'We find out a shipment is late when the customer calls.', detail: 'Carrier updates, ports and warehouses all report separately, so exceptions surface too late.' },
      { quote: 'Our forecast is last year plus ten percent.', detail: 'Demand planning relies on spreadsheets, causing stockouts on some lines and excess on others.' },
      { quote: 'Routes are planned from memory.', detail: 'Dispatchers plan by experience, ignoring time windows, vehicle limits and traffic.' },
      { quote: 'The warehouse is full and we still can\'t find stock.', detail: 'Inventory records disagree with what is on the shelves.' },
      { quote: 'Every partner sends data in a different format.', detail: 'EDI, email and portals have to be reconciled by hand.' },
      { quote: 'We can\'t test a change before we make it.', detail: 'Network, sourcing or capacity decisions are made without simulating the impact.' },
    ],
  },
  features: {
    heading: 'Features, in supply chain language',
    intro: 'Named the way planners, dispatchers and warehouse teams already talk.',
    items: [
      { term: 'Control tower', feature: 'One live view of orders, shipments, inventory and exceptions across carriers, warehouses and plants.' },
      { term: 'Demand forecasting', feature: 'AI forecasts by SKU, location and channel that account for seasonality, promotions and lead times.' },
      { term: 'Route optimisation', feature: 'Routes that respect time windows, vehicle capacity, driver hours and real traffic.' },
      { term: 'Inventory optimisation', feature: 'Safety stock and reorder points set per item and location to cut stockouts and excess stock.' },
      { term: 'EDI & partner integration', feature: 'EDIFACT / ANSI X12 messages, APIs and portals unified into one data flow.' },
      { term: 'Supply chain digital twin', feature: 'Simulate demand spikes, supplier failures or new sites before committing.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See a supply chain exception handled end to end',
    intro: 'A walkthrough of a sample distribution network showing how visibility, forecasting and routing work together.',
    steps: [
      'A delayed inbound container is flagged in the control tower, with affected customer orders listed.',
      'The forecast and inventory view show which locations will stock out and when.',
      'The system recommends a stock transfer and re-optimises tomorrow\'s delivery routes.',
      'Customers with affected orders receive updated delivery dates automatically.',
    ],
  },
  guide: {
    heading: 'How to choose logistics and supply chain software',
    intro:
      'Supply chain software covers a wide range: transport management, warehouse management, demand planning, visibility platforms and, increasingly, AI and digital twins. Most operators do not need all of it at once. This guide explains how to decide where to start and what to look for.',
    sections: [
      {
        heading: 'Visibility before optimisation',
        paragraphs: [
          'You cannot optimise what you cannot see. The first step for most operators is a single, trustworthy view of orders, shipments and inventory across carriers, warehouses and plants. That usually means integrating ERP data, carrier tracking, warehouse systems and partner EDI into one data model.',
          'Once that view exists, exceptions — late shipments, stock running low, capacity shortfalls — can be flagged automatically, and planners spend their time fixing problems instead of finding them.',
        ],
      },
      {
        heading: 'Forecasting that planners trust',
        paragraphs: [
          'Demand forecasting is where AI pays back fastest in most supply chains. Models that learn from sales history, seasonality, promotions and external signals consistently beat spreadsheet methods, but only if planners understand and trust them.',
          'Look for forecasts that are explainable, that planners can override with a reason, and that are measured against actual demand every week. A forecast that improves visibly earns adoption.',
        ],
      },
      {
        heading: 'Routing and fleet under real constraints',
        paragraphs: [
          'Route optimisation only works if it respects the rules your dispatchers already know: delivery time windows, vehicle capacities, driver hours, access restrictions and customer priorities. A system that ignores them produces routes nobody follows.',
          'The best results come when dispatchers keep control: the system proposes, the dispatcher adjusts, and the system learns from those adjustments.',
        ],
      },
      {
        heading: 'Integrate rather than replace',
        paragraphs: [
          'Most supply chains already run on an ERP such as SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite or Odoo, plus carrier and partner systems. A good solution connects to them through APIs, EDI (EDIFACT or ANSI X12) and GS1 barcode standards, rather than forcing a rip-and-replace project.',
          'Phased delivery — one region, warehouse or flow at a time — keeps risk low and proves value before wider rollout.',
        ],
      },
      {
        heading: 'Use digital twins for big decisions',
        paragraphs: [
          'Opening a new warehouse, changing suppliers or redesigning a delivery network are expensive decisions. A supply chain digital twin lets you simulate them with your own data first — testing demand spikes, supplier failures or capacity changes — so the decision is based on evidence rather than intuition.',
        ],
      },
    ],
  },
  faq: [],
  cta: {
    heading: 'See your whole supply chain in one view',
    text: 'Tell us where visibility breaks down today and we will propose a phased plan, starting with the flow that costs you most.',
  },
  inquiry: { topic: 'Logistics & Supply Chain Software', industry: 'Logistics & Supply Chain' },
}

export const warehouseOutline: PageOutline = {
  market: 'industrial',
  product: 'a custom WMS',
  whoFor: 'Built for warehouse, distribution and e-commerce fulfilment operators worldwide, from one site to a multi-country network.',
  problems: {
    heading: 'What warehouse managers tell us',
    intro: 'Warehouse and fulfilment managers describe the same daily frustrations.',
    items: [
      { quote: 'The system says we have it. The shelf says we don\'t.', detail: 'Inventory counts never match, so sales promise stock that is not there.' },
      { quote: 'Mis-picks cost us customers.', detail: 'Paper pick lists lead to wrong items, wrong quantities and returns.' },
      { quote: 'Receiving is a bottleneck.', detail: 'Inbound goods wait on the dock while paperwork is checked by hand.' },
      { quote: 'Peak season breaks the team.', detail: 'Order volume doubles and the process cannot scale without overtime.' },
      { quote: 'Labels and carrier bookings are manual.', detail: 'Staff copy addresses between systems to book carriers and print labels.' },
      { quote: 'We can\'t see stock across warehouses.', detail: 'Each site runs separately, so transfers and allocation are guesswork.' },
    ],
  },
  features: {
    heading: 'Features, in warehouse language',
    intro: 'Named the way your receiving, picking and dispatch teams already talk.',
    items: [
      { term: 'Scan-to-receive', feature: 'Receive against purchase orders with barcode or RFID, flag discrepancies and print GS1 labels.' },
      { term: 'Directed put-away', feature: 'The system suggests the best bin by product rules, velocity and space.' },
      { term: 'Wave, batch & zone picking', feature: 'Pick strategies matched to your order profile, with scan confirmation to stop mis-picks.' },
      { term: 'Pack & ship', feature: 'Packing stations, carrier rate selection and label printing in one step.' },
      { term: 'Cycle counts', feature: 'Rolling counts by location or ABC class, without shutting the warehouse.' },
      { term: 'Lot, serial & expiry', feature: 'FIFO/FEFO rotation and full traceability by lot, serial and expiry date.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See an order flow through a sample warehouse',
    intro: 'A walkthrough from inbound truck to outbound label on a sample warehouse configured like yours.',
    steps: [
      'A delivery is received by scanning against the purchase order; discrepancies are flagged.',
      'Put-away is directed to the best bin; stock is available to sell immediately.',
      'Orders are released as a wave; pickers scan each item and location.',
      'Packed orders get carrier labels automatically and the ERP is updated in real time.',
    ],
  },
  faq: [
    {
      question: 'What does a warehouse management system do?',
      answer:
        'A WMS controls stock movements inside the warehouse — receiving, put-away, storage, picking, packing and shipping — and keeps inventory accurate in real time by location, lot and serial number.',
    },
    {
      question: 'Why build a custom WMS instead of buying one?',
      answer:
        'Packaged WMS products are priced for large operations and force their own processes. A custom WMS fits your layout, product rules and integrations, and you only adopt it once it fits.',
    },
    {
      question: 'Does it support barcode scanners and RFID?',
      answer: 'Yes. The system works with handheld scanners, mobile phones and fixed RFID readers, and prints GS1-compliant labels.',
    },
    {
      question: 'Can it manage multiple warehouses in different countries?',
      answer:
        'Yes. Multi-warehouse, multi-currency and multi-language operation is built in, with transfers and stock visibility across every site.',
    },
  ],
  cta: {
    heading: 'Make every pick right the first time',
    text: 'Send us your warehouse layout and order profile and we will show you how a WMS built around them would run.',
  },
  inquiry: { topic: 'Warehouse Management System', industry: 'Logistics & Supply Chain' },
}
