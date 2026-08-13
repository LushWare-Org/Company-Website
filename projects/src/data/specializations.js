export const TABS = [
  {
    id: 'scalable',
    num: '01',
    label: 'Scalable Systems',
    icon: 'infra',
    eyebrow: 'Domain 01 · Foundations',
    title: 'Scalable Software System Design & Implementation',
    intro:
      'The architectural backbone for every other capability LushWare delivers — systems engineered from day one to carry enterprise load, evolve with the business, and stay observable in production.',
    steps: [
      { t: 'Discovery & Requirements Architecture', d: 'Stakeholder workshops, domain modeling, and capture of non-functional requirements — scale targets, latency budgets, and compliance constraints.' },
      { t: 'System Architecture & Technology Blueprint', d: 'Select the right pattern (microservices, modular monolith, event-driven) and lock the stack, service boundaries, and data-flow contracts.' },
      { t: 'Data Modeling & Infrastructure Design', d: 'Schema and storage design, cloud topology, and infrastructure-as-code so environments are reproducible from the first commit.' },
      { t: 'Core Module Development in Iterative Sprints', d: 'Build in short, demoable increments with CI/CD wired in from sprint one — nothing ships without an automated pipeline behind it.' },
      { t: 'Integration, Testing & Performance Hardening', d: 'End-to-end integration, security testing, and load testing against real traffic profiles before anything reaches staging.' },
      { t: 'Deployment, Monitoring & Scaling', d: 'Phased rollout, full observability stack, and auto-scaling policies tuned from live telemetry, not assumptions.' }
    ],
    appsLabel: 'Industry Applications',
    industries: [
      { key: 'realEstate', name: 'Real Estate', items: ['AI-powered Real Estate CRM', 'Property & Facility Management System', 'Real Estate Investment Management Platform', 'Smart Building Management System'] },
      { key: 'retail', name: 'Retail', items: ['Retail Order & Inventory Management Platform', 'Omnichannel POS & Commerce System', 'Warehouse & Fulfillment Management System', 'Retail Customer Loyalty Platform'] },
      { key: 'engineering', name: 'Engineering', items: ['Engineering Project Management Platform', 'CAD & Design Collaboration System', 'Asset & Equipment Lifecycle Management', 'Engineering Resource Planning Platform'] },
      { key: 'healthcare', name: 'Healthcare', items: ['Hospital Management Platform', 'Patient Engagement Portal', 'Clinical Workflow Management System', 'Healthcare Analytics Platform'] },
      { key: 'manufacturing', name: 'Manufacturing', items: ['Manufacturing Execution System (MES)', 'Production Monitoring Platform', 'Quality Management System', 'Asset Management Platform'] },
      { key: 'construction', name: 'Construction', items: ['Construction Project Management Platform', 'Contractor Management System', 'Digital Site Management Platform', 'Equipment Management Platform'] }
    ]
  },
  {
    id: 'agentic',
    num: '02',
    label: 'Agentic AI',
    icon: 'spark',
    eyebrow: 'Domain 02 · Autonomy',
    title: 'Agentic AI Systems & Solutions',
    intro:
      'Task-executing agents built with explicit decision boundaries, real tool access, and a human always able to step in — autonomy that is designed, not improvised.',
    steps: [
      { t: 'Use-Case & Agent Role Definition', d: 'Define exactly what the agent decides versus recommends, its success metrics, and where its authority ends.' },
      { t: 'Knowledge & Tooling Architecture', d: 'Wire the agent to the systems, APIs, and data sources it needs to act on — not a simulated sandbox, real tool access.' },
      { t: 'Reasoning & Orchestration Design', d: 'Select the agent framework, define the plan-act-observe loop, and design multi-agent orchestration where a single agent is not enough.' },
      { t: 'Guardrails, Memory & Human-in-the-Loop Controls', d: 'Safety constraints, persistent memory design, and clear escalation paths back to a human for anything outside policy.' },
      { t: 'Simulation & Behavioral Testing', d: 'Scenario runs, adversarial prompts, and edge-case rehearsal before the agent ever touches production data.' },
      { t: 'Deployment & Continuous Feedback Loop', d: 'Roll out with decision logging, monitor real agent behavior, and refine the policy from what actually happens.' }
    ],
    appsLabel: 'Industry Applications',
    industries: [
      { key: 'realEstate', name: 'Real Estate', items: ['AI Lead Qualification Agent', 'Property Recommendation Agent', 'Sales Follow-up Agent', 'Property Valuation Agent'] },
      { key: 'retail', name: 'Retail', items: ['AI Shopping Assistant Agent', 'Inventory Replenishment Agent', 'Dynamic Pricing Agent', 'Customer Support Agent'] },
      { key: 'engineering', name: 'Engineering', items: ['Engineering Design Review Agent', 'Project Scheduling Agent', 'Technical Documentation Agent', 'Compliance Checking Agent'] },
      { key: 'healthcare', name: 'Healthcare', items: ['Patient Support Agent', 'Clinical Documentation Agent', 'Appointment Scheduling Agent', 'Medical Knowledge Assistant'] },
      { key: 'manufacturing', name: 'Manufacturing', items: ['Production Optimization Agent', 'Maintenance Planning Agent', 'Quality Assurance Agent', 'Supply Chain Coordination Agent'] },
      { key: 'construction', name: 'Construction', items: ['Project Monitoring Agent', 'Site Safety Compliance Agent', 'Procurement Assistant Agent', 'Cost Estimation Agent'] }
    ]
  },
  {
    id: 'ml',
    num: '03',
    label: 'ML Models',
    icon: 'chart',
    eyebrow: 'Domain 03 · Prediction',
    title: 'Machine Learning Model Implementation & Fine-Tuning',
    intro:
      'Predictive models grounded in the client\u2019s own data — trained, validated for bias, and wired into a retraining loop so accuracy does not decay the moment they ship.',
    steps: [
      { t: 'Problem Framing & Data Audit', d: 'Define the prediction target precisely and audit what data actually exists to support it before any modeling begins.' },
      { t: 'Data Engineering & Feature Pipeline', d: 'Cleaning, feature engineering, and an automated pipeline that keeps training data fresh as new records arrive.' },
      { t: 'Model Selection & Baseline Training', d: 'Evaluate candidate model families and establish a baseline that every later iteration must beat.' },
      { t: 'Fine-Tuning & Hyperparameter Optimization', d: 'Transfer learning, systematic tuning, and cross-validation to squeeze reliable accuracy out of the baseline.' },
      { t: 'Validation, Bias & Explainability Testing', d: 'Holdout testing, fairness checks across subgroups, and explainability tooling so predictions can be justified.' },
      { t: 'Deployment & Continuous Retraining', d: 'Serve the model, monitor for drift in real time, and retrain on a schedule tied to how fast the underlying data moves.' }
    ],
    appsLabel: 'Industry Applications',
    industries: [
      { key: 'realEstate', name: 'Real Estate', items: ['Property Price Prediction Models', 'Buyer Recommendation Models', 'Lead Conversion Prediction', 'Rental Demand Forecasting'] },
      { key: 'retail', name: 'Retail', items: ['Demand Forecasting Models', 'Product Recommendation Models', 'Customer Segmentation Models', 'Inventory Optimization Models'] },
      { key: 'engineering', name: 'Engineering', items: ['Structural Load Prediction Models', 'Equipment Failure Prediction', 'Project Cost Estimation Models', 'Material Demand Forecasting'] },
      { key: 'healthcare', name: 'Healthcare', items: ['Disease Risk Prediction', 'Patient Readmission Prediction', 'Resource Demand Forecasting', 'Treatment Recommendation Models'] },
      { key: 'manufacturing', name: 'Manufacturing', items: ['Predictive Maintenance Models', 'Production Yield Prediction', 'Quality Defect Prediction', 'Demand Forecasting Models'] },
      { key: 'construction', name: 'Construction', items: ['Project Delay Prediction', 'Cost Overrun Prediction', 'Equipment Failure Prediction', 'Safety Risk Prediction'] }
    ]
  },
  {
    id: 'deeptech',
    num: '04',
    label: 'Deep Tech',
    icon: 'layers',
    eyebrow: 'Domain 04 · Frontier Engineering',
    title: 'Deep Tech Project Development',
    intro:
      'Five specialist tracks — generative AI, computer vision, decision-support analytics, edge AI, and the MLOps backbone that governs all of it — each with its own build discipline.',
    isDeepTech: true,
    subtabs: [
      {
        id: 'genai',
        label: 'Generative AI & NLP',
        icon: 'spark',
        eyebrow: 'Deep Tech 4A',
        title: 'Generative AI & Advanced NLP',
        intro: 'Language systems grounded in the client\u2019s own knowledge base — generation that cites its source rather than guessing.',
        steps: [
          { t: 'Use-Case Scoping & Corpus Assessment', d: 'Define the writing or comprehension task and assess what proprietary text corpus is available to ground it.' },
          { t: 'Model Selection: Foundation, Fine-Tune, or RAG', d: 'Choose the right pattern per use case — a foundation model, a fine-tuned variant, or a retrieval-augmented pipeline.' },
          { t: 'Retrieval & Knowledge Grounding Architecture', d: 'Build the retrieval layer and indexing strategy that keeps generated output tied to verified source documents.' },
          { t: 'Prompt & Fine-Tune Engineering with Guardrails', d: 'Engineer prompts or fine-tunes alongside content and safety guardrails, not as an afterthought.' },
          { t: 'Evaluation for Hallucination, Relevance & Tone', d: 'Structured evaluation sets that specifically probe for hallucination, off-brand tone, and irrelevant output.' },
          { t: 'Deployment & Continuous Quality Monitoring', d: 'Ship with content-quality monitoring in place and a feedback loop for continual grounding improvements.' }
        ],
        appsLabel: 'Industry Applications',
        industries: [
          { key: 'realEstate', name: 'Real Estate', items: ['AI Property Description Generator', 'Intelligent Document Analysis', 'Lease & Contract Review Assistant', 'Real Estate Knowledge Chatbot'] },
          { key: 'retail', name: 'Retail', items: ['AI Product Description Generator', 'Retail Shopping Chatbot', 'Multilingual Customer Support', 'Automated Quotation Generator'] },
          { key: 'engineering', name: 'Engineering', items: ['AI Technical Specification Generator', 'Engineering Report Assistant', 'Proposal Writing Assistant', 'Engineering Knowledge Assistant'] },
          { key: 'healthcare', name: 'Healthcare', items: ['Medical Documentation Assistant', 'Clinical Knowledge Search', 'Healthcare Chatbot', 'Medical Report Summarization'] }
        ]
      },
      {
        id: 'cv',
        label: 'Computer Vision',
        icon: 'eye',
        eyebrow: 'Deep Tech 4B',
        title: 'Computer Vision & Spatial Intelligence',
        intro: 'Vision systems that turn cameras and sensors into structured, decision-ready data — from a single inspection line to a full site.',
        steps: [
          { t: 'Visual Data Collection & Annotation Strategy', d: 'Plan how footage and imagery will be captured and labeled at the volume the model will need.' },
          { t: 'Sensor & Camera Infrastructure Design', d: 'Specify hardware placement, resolution, and network topology for reliable capture in the field.' },
          { t: 'Model Architecture Selection', d: 'Choose detection, segmentation, or classification architectures suited to the specific visual task.' },
          { t: 'Training & Domain Adaptation', d: 'Train on-site imagery and adapt pretrained models to the client\u2019s exact lighting, angles, and equipment.' },
          { t: 'Real-Time Inference Pipeline Design', d: 'Split inference across edge and cloud to hit the latency the use case actually needs.' },
          { t: 'Field Validation & Continuous Recalibration', d: 'Validate against live conditions and recalibrate as cameras, layouts, or seasons change.' }
        ],
        appsLabel: 'Industry Applications',
        industries: [
          { key: 'realEstate', name: 'Real Estate', items: ['Property Inspection AI', 'Construction Progress Monitoring', 'Floor Plan Digitization', 'Smart Building Surveillance'] },
          { key: 'retail', name: 'Retail', items: ['Shelf & Planogram Compliance Monitoring', 'In-Store Customer Analytics', 'Self-Checkout Loss Prevention', 'Store Foot Traffic Analysis'] },
          { key: 'manufacturing', name: 'Manufacturing', items: ['Automated Quality Inspection', 'Defect Detection', 'Inventory Counting', 'Worker Safety Monitoring'] },
          { key: 'construction', name: 'Construction', items: ['Site Progress Tracking', 'PPE Compliance Detection', 'Equipment Monitoring', 'Drone-based Site Inspection'] }
        ]
      },
      {
        id: 'predictive',
        label: 'Predictive & Decision Support',
        icon: 'chart',
        eyebrow: 'Deep Tech 4C',
        title: 'Predictive Analytics & Decision Support Systems',
        intro: 'Executive-facing intelligence platforms that turn scattered data into a single decision surface, with scenarios you can actually run.',
        steps: [
          { t: 'Decision Framework & KPI Mapping', d: 'Map the decisions the platform needs to support and the KPIs that define a good outcome.' },
          { t: 'Data Integration Across Sources', d: 'Bring disparate systems — finance, ops, CRM — into one consistent analytical layer.' },
          { t: 'Analytical & Statistical Model Development', d: 'Build the forecasting and scoring models that power the platform\u2019s recommendations.' },
          { t: 'Dashboard & Decision-Support UX Design', d: 'Design the interface so an executive can act in seconds, not after a training session.' },
          { t: 'Scenario Simulation & What-If Engines', d: 'Add simulation capability so leaders can stress-test decisions before committing.' },
          { t: 'Rollout & Executive Adoption Enablement', d: 'Phased rollout paired with enablement so the platform actually becomes part of the decision rhythm.' }
        ],
        appsLabel: 'Industry Applications',
        industries: [
          { key: 'realEstate', name: 'Real Estate', items: ['Investment Decision Platform', 'Market Trend Forecasting', 'Property Portfolio Analytics', 'Sales Performance Dashboard'] },
          { key: 'retail', name: 'Retail', items: ['Retail Revenue Intelligence Platform', 'Demand & Stock Forecasting Dashboard', 'Store Performance Analytics', 'Customer Lifetime Value Platform'] },
          { key: 'engineering', name: 'Engineering', items: ['Engineering Decision Support System', 'Project Cost Intelligence Dashboard', 'Resource Capacity Planning Platform', 'Engineering Performance Analytics'] },
          { key: 'manufacturing', name: 'Manufacturing', items: ['Production Analytics', 'Supply Chain Intelligence', 'Inventory Optimization', 'Capacity Planning Dashboard'] }
        ]
      },
      {
        id: 'edge',
        label: 'Edge AI & TinyML',
        icon: 'chip',
        eyebrow: 'Deep Tech 4D',
        title: 'Edge AI & TinyML',
        intro: 'Intelligence pushed onto the device itself — built for constrained power, patchy connectivity, and hardware that has to keep working offline.',
        steps: [
          { t: 'Device & Constraint Assessment', d: 'Assess the target device\u2019s power budget, compute headroom, and connectivity reality up front.' },
          { t: 'Model Compression & Quantization Strategy', d: 'Compress and quantize models to fit the device without giving up the accuracy the use case needs.' },
          { t: 'On-Device Inference Pipeline Design', d: 'Design the inference path to run locally, with predictable latency and power draw.' },
          { t: 'Edge-Cloud Sync & Fallback Architecture', d: 'Define how the device syncs with the cloud and what it does when connectivity drops.' },
          { t: 'Field Testing Under Real Constraints', d: 'Test in the actual physical environment — temperature, interference, and power conditions included.' },
          { t: 'OTA Updates & Fleet Monitoring', d: 'Ship over-the-air update tooling and fleet-wide monitoring for devices once deployed at scale.' }
        ],
        appsLabel: 'Industry Applications',
        industries: [
          { key: 'realEstate', name: 'Real Estate', items: ['Smart Building Edge Monitoring', 'Occupancy Detection', 'Energy Optimization', 'Security Monitoring'] },
          { key: 'retail', name: 'Retail', items: ['Smart Shelf & Stock Sensors', 'In-Store Visitor Counting Devices', 'Edge-based Loss Prevention', 'Smart POS Edge Devices'] },
          { key: 'manufacturing', name: 'Manufacturing', items: ['Edge Quality Inspection', 'Machine Health Monitoring', 'Predictive Equipment Maintenance', 'Factory Sensor Intelligence'] },
          { key: 'construction', name: 'Construction', items: ['Smart Safety Wearables', 'Equipment Monitoring Devices', 'Edge Surveillance Systems', 'Environmental Monitoring Sensors'] }
        ]
      },
      {
        id: 'mlops',
        label: 'MLOps & AI Governance',
        icon: 'infra',
        eyebrow: 'Deep Tech 4E',
        title: 'MLOps & AI Governance (Infrastructure Services)',
        intro: 'The infrastructure layer underneath everything else — the platform, pipelines, and governance that keep every model above accountable and auditable.',
        steps: [
          { t: 'AI Platform Architecture Assessment', d: 'Assess current infrastructure maturity and define the target platform architecture.' },
          { t: 'Data Engineering Foundation', d: 'Stand up the data lake, warehouse, and streaming layers that every model depends on.' },
          { t: 'MLOps Pipeline & Model Lifecycle Setup', d: 'Automate training, versioning, and deployment so models move from notebook to production reliably.' },
          { t: 'Governance, Security & Compliance Framework', d: 'Establish access controls, audit trails, and a responsible-AI policy that regulators and clients can trust.' },
          { t: 'Monitoring, Drift Detection & Explainability', d: 'Deploy monitoring that catches performance drift and tooling that explains any model\u2019s decisions on demand.' },
          { t: 'Continuous Optimization & Audit Readiness', d: 'Keep the platform audit-ready and continuously tuned as models and regulations evolve.' }
        ],
        appsLabel: 'Infrastructure Capabilities',
        industries: [
          { key: 'infra', name: 'Enterprise AI Infrastructure', items: ['AI Platform Architecture & Deployment', 'MLOps Pipeline Development', 'Model Monitoring & Drift Detection', 'AI Governance Framework Implementation'] },
          { key: 'data', name: 'Data Engineering', items: ['Enterprise Data Lake & Data Warehouse', 'ETL/ELT Pipeline Development', 'Real-time Data Streaming Architecture', 'Feature Store Implementation'] },
          { key: 'ops', name: 'AI Operations', items: ['Model Versioning & Lifecycle Management', 'Automated Model Retraining', 'AI Performance Monitoring', 'Explainable AI (XAI) Implementation'] },
          { key: 'security', name: 'Security & Compliance', items: ['AI Security & Access Control', 'Data Privacy & Compliance Solutions', 'Audit & Traceability Frameworks', 'Responsible AI Implementation'] }
        ]
      }
    ]
  },
  {
    id: 'blockchain',
    num: '05',
    label: 'Blockchain & Web3',
    icon: 'chain',
    eyebrow: 'Domain 05 · Trust Infrastructure',
    title: 'Blockchain & Web 3.0 Technology Solutions',
    intro:
      'Distributed-ledger systems for the moments where trust needs to be provable, not promised — ownership, provenance, and agreements that verify themselves.',
    steps: [
      { t: 'Use-Case Validation & Network Selection', d: 'Confirm blockchain is genuinely the right tool, then choose a public, private, or consortium network to match.' },
      { t: 'Smart Contract & Data Architecture Design', d: 'Design the on-chain and off-chain data split and the smart contract logic that will enforce it.' },
      { t: 'Protocol Development & Asset Modeling', d: 'Build the protocol layer and model any tokens or digital assets the solution requires.' },
      { t: 'Security Audit & Compliance Review', d: 'Independent audit of contract code plus a compliance review against relevant regulation.' },
      { t: 'Integration with Existing Enterprise Systems', d: 'Connect the ledger to the client\u2019s existing CRM, ERP, or operational systems without disrupting them.' },
      { t: 'Deployment, Governance & Network Monitoring', d: 'Go live with clear governance rules and ongoing monitoring of network health and activity.' }
    ],
    appsLabel: 'Industry Applications',
    industries: [
      {
        key: 'realEstate', name: 'Real Estate', items: [
          { n: 'Digital Property Registry', d: 'Secure, tamper-proof property ownership and title management.' },
          { n: 'Smart Contract Automation', d: 'Automate property sales, leasing, escrow, and commission settlements.' },
          { n: 'Real Estate Tokenization Platform', d: 'Enable fractional ownership and digital investment in properties.' },
          { n: 'Property Document Verification', d: 'Authenticate deeds, permits, and legal documents on the blockchain.' }
        ]
      },
      {
        key: 'retail', name: 'Retail', items: [
          { n: 'Blockchain Loyalty & Rewards Platform', d: 'Unified, transferable customer loyalty points across retail partners and brands.' },
          { n: 'Product Authenticity Verification', d: 'Verify genuine products and combat counterfeiting at the point of sale.' },
          { n: 'Retail Supply Chain Traceability', d: 'Track goods from manufacturer to shelf with an immutable, transparent record.' },
          { n: 'Tokenized Gift Card & Rewards Platform', d: 'Issue and redeem digital gift cards and rewards as tradeable, secure tokens.' }
        ]
      },
      {
        key: 'engineering', name: 'Engineering', items: [
          { n: 'Digital Document Verification', d: 'Verify contracts, certifications, and engineering documents with immutable records.' },
          { n: 'Smart Contract Solutions', d: 'Automate project agreements, milestone approvals, and payment workflows.' },
          { n: 'Engineering Supply Chain Traceability', d: 'Track components and materials with complete transparency from source to project.' },
          { n: 'Blockchain Engineering Advisory', d: 'Design and implement enterprise blockchain solutions aligned with engineering operations.' }
        ]
      },
      {
        key: 'healthcare', name: 'Healthcare', items: [
          { n: 'Electronic Health Record (EHR) Security', d: 'Secure and share patient records with authorized providers.' },
          { n: 'Pharmaceutical Supply Chain Tracking', d: 'Ensure medicine authenticity and prevent counterfeit drugs.' },
          { n: 'Medical Credential Verification', d: 'Verify healthcare professionals\u2019 licenses and certifications.' },
          { n: 'Consent & Data Sharing Platform', d: 'Manage patient consent for secure healthcare data exchange.' }
        ]
      },
      {
        key: 'manufacturing', name: 'Manufacturing', items: [
          { n: 'Supply Chain Transparency Platform', d: 'Track raw materials and finished goods across the production lifecycle.' },
          { n: 'Product Authenticity Verification', d: 'Prevent counterfeiting using blockchain-based product identities.' },
          { n: 'Smart Manufacturing Contracts', d: 'Automate supplier agreements, procurement, and payments.' },
          { n: 'Carbon & ESG Traceability', d: 'Record sustainability metrics and compliance data with immutable audit trails.' }
        ]
      },
      {
        key: 'construction', name: 'Construction', items: [
          { n: 'Construction Contract Automation', d: 'Execute milestone-based payments using smart contracts.' },
          { n: 'Material Traceability Platform', d: 'Track construction materials from suppliers to project sites.' },
          { n: 'Project Audit Trail', d: 'Maintain an immutable history of project approvals, inspections, and changes.' },
          { n: 'Digital Asset & Document Registry', d: 'Securely manage blueprints, permits, compliance documents, and project records.' }
        ]
      }
    ]
  }
]
