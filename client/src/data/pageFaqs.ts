// FAQs for pages without a market outline. Outline pages keep theirs in
// src/data/outlines; both are served through getRouteFaq() in src/data/faq.ts.

import type { Faq } from './faq'

export const PAGE_FAQS: Record<string, Faq[]> = {
  '/solutions/ai-process-optimization': [
    {
      question: 'What is AI-Driven Process Optimization?',
      answer:
        'It uses operational AI, simulation, and mathematical optimization to help you understand what is happening across your operations, predict what is likely to happen, and decide what to do next.',
    },
    {
      question: 'How is this different from building a machine learning model?',
      answer:
        'A model only predicts. We go further and solve for the best feasible operational decision given your objectives and constraints, using optimization techniques such as constraint programming, MILP/LP, scheduling, and routing.',
    },
    {
      question: 'What is a digital twin and why would I need one?',
      answer:
        'A digital twin is a computational representation of your real operation. It lets management test \'what if\' scenarios, such as a machine failure, a demand spike, or a delayed shipment, before they happen in the real world.',
    },
    {
      question: 'Can this connect to the systems we already use?',
      answer:
        'Yes. We integrate AI with ERP, CRM, PMS, WMS, CMMS, BMS, SCADA/MES, IoT platforms, fleet systems, and booking platforms, so you get AI connected to your operations rather than another isolated demo.',
    },
    {
      question: 'Which industries do you serve?',
      answer:
        'Our initial verticals are HVAC & MEP, Manufacturing, Logistics & Supply Chain, and Tourism & Hospitality, all built on the same operational-AI capability.',
    },
    {
      question: 'How do you keep models reliable after launch?',
      answer:
        'We build the data and AI infrastructure behind the models: telemetry pipelines, data quality checks, MLOps, model monitoring, drift detection, and AI observability.',
    },
  ],
  '/solutions/autonomous-decision-intelligence': [
    {
      question: 'What is Autonomous Decision Intelligence?',
      answer:
        'It is a set of intelligent systems that continuously evaluate operational conditions, determine the best course of action, and execute decisions within predefined business objectives, constraints, and approval policies.',
    },
    {
      question: 'Will AI simply run my business on its own?',
      answer:
        'No. Autonomy is introduced progressively and kept constrained. You can start with AI recommendations, move to human-approved actions, and only then allow automatic execution within explicitly defined boundaries.',
    },
    {
      question: 'How do you keep autonomous decisions safe and accountable?',
      answer:
        'Through governance: approval workflows, confidence thresholds, escalation, audit logs, role-based permissions, decision explanations, action limits, and continuous AI monitoring.',
    },
    {
      question: 'How is this different from conventional automation?',
      answer:
        'Conventional automation repeats the same rules. Self-optimizing systems learn from operational feedback and continuously search for better ways to operate, while staying within safety limits.',
    },
    {
      question: 'Why use multiple agents instead of one large AI agent?',
      answer:
        'Specialized agents, such as planning, scheduling, dispatch, and technician agents, are easier to control, test, and audit than one giant agent, and they coordinate through a clear hierarchy.',
    },
    {
      question: 'Where does Autonomous Decision Intelligence fit with Process Optimization?',
      answer:
        'Operational AI provides insights, Optimization Engineering identifies suitable decisions, and Autonomous Decision Making turns those decisions into controlled, executable actions that adapt to changing conditions.',
    },
  ],
  '/solutions/iot-product-development': [
    {
      question: 'What are IoT Projects?',
      answer:
        'IoT projects involve engineering and connecting physical devices (like sensors and controllers) to the internet, allowing them to collect data and be controlled remotely through a centralized software system.',
    },
    {
      question: 'Do you build tailored solutions for specific industries?',
      answer:
        'Yes. We develop tailored, custom-built software solutions and IoT architectures for highly specific use cases, such as smart HVAC systems, allowing for remote temperature monitoring, automated climate adjustments, and predictive maintenance.',
    },
    {
      question: 'How does IoT integrate with software?',
      answer:
        'We build custom software interfaces and APIs that communicate directly with your physical devices, unifying data and workflows seamlessly without relying on generic, off-the-shelf platforms.',
    },
    {
      question: 'Is IoT suitable for small businesses?',
      answer:
        'Absolutely. IoT solutions are scalable and can be tailored to small businesses, growing startups, and large enterprises.',
    },
  ],
  '/solutions/product-engineering': [
    {
      question: 'What is End-to-End Product Engineering?',
      answer:
        'It covers the full journey of a physical product: concept, architecture, prototyping, PCB and firmware design, compliance, and the transition to mass manufacturing, all handled by one engineering team.',
    },
    {
      question: 'Can you take our prototype to mass production?',
      answer:
        'Yes. We apply Design for Manufacturing (DFM), optimize your Bill of Materials, source components, and manage the hand-off from prototype to volume production so you keep your time to market.',
    },
    {
      question: 'Will the hardware pass CE, FCC, and RoHS certification?',
      answer:
        'We design with compliance in mind from day one, including EMI/EMC mitigation, high-voltage isolation, and testing strategies, so the product is engineered to pass certification without costly redesign cycles.',
    },
    {
      question: 'Can low-cost hardware deliver precise measurements?',
      answer:
        'Yes. By combining well-designed analog signal chains with Digital Signal Processing and sensor fusion, we reach high-precision results in noisy environments while keeping unit costs low.',
    },
    {
      question: 'Which microcontrollers and wireless protocols do you work with?',
      answer:
        'We develop firmware for STM32, ESP32, and Nordic nRF platforms, with Wi-Fi, BLE, and LoRaWAN connectivity, and secure hardware-to-cloud communication over MQTT and IoT platforms.',
    },
    {
      question: 'Do you also build the cloud and mobile apps?',
      answer:
        'Yes. We build the web backend, dashboards, and Android/iOS apps (including Bluetooth integration) so your device, cloud, and users work as one system.',
    },
  ],
}
