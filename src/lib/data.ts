export const profile = {
  name: "Sri Hari Batchu",
  role: "Frontend Developer (Odoo & React) · Data Analytics with AI",
  location: "Hyderabad, India",
  summary:
    "I build frontend systems in Odoo and React, then follow the data those systems produce into dashboards, SQL and AI-assisted analysis. Two years in, I've moved from shipping CRM and payroll UIs to validating the numbers those products live and die by.",
  email: "sriharibatchu70@gmail.com",
  phone: "+91 70131 18220",
  linkedin: "https://www.linkedin.com/in/batchu-srihari-16311a240",
  github: "https://github.com/srihari7072",
};

export const quickFacts = [
  { label: "experience", value: "2+ years" },
  { label: "current focus", value: "AI-powered analytics" },
  { label: "core stack", value: "React · Odoo · Python" },
  { label: "education", value: "Ramachandra College of Engineering" },
];

export const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "JavaScript", note: "interactive UIs, Odoo frontend components" },
      { name: "Python", note: "backend logic, Odoo modules, automation" },
      { name: "HTML / CSS", note: "responsive, accessible layouts" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", note: "component-based dashboards & apps" },
      { name: "Odoo Frontend", note: "custom modules, Odoo 18 / 19" },
      { name: "Bootstrap", note: "responsive styling" },
      { name: "XML / QWeb", note: "Odoo views & report templates" },
    ],
  },
  {
    group: "Backend & data",
    items: [
      { name: "PostgreSQL", note: "relational design & queries" },
      { name: "ClickHouse", note: "real-time analytical queries" },
      { name: "Supabase", note: "backend-as-a-service" },
      { name: "Metabase", note: "BI dashboards, SQL reporting" },
      { name: "Recurly / Adapty", note: "subscription & billing data" },
    ],
  },
  {
    group: "Cloud",
    items: [
      { name: "EC2 / S3", note: "compute & storage" },
      { name: "Aurora RDS", note: "managed relational DB" },
      { name: "Redis", note: "caching" },
      { name: "Secrets Manager", note: "credentials" },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "Claude AI", note: "dashboard charts, data validation" },
      { name: "MCP", note: "agentic dashboard Q&A over live data" },
    ],
  },
];

export const experience = [
  {
    id: "vpn-superunlimited",
    role: "Data Analyst — AI-Powered Analytics",
    org: "VPN SuperUnlimited",
    period: "5 months",
    status: "current",
    summary:
      "Built and validated the analytics dashboard behind subscription, revenue and engagement metrics, wiring AI directly into the data workflow rather than treating it as a separate tool.",
    points: [
      "Built a Metabase dashboard covering subscription, revenue and user-engagement metrics with hand-written SQL.",
      "Wrote and optimized ClickHouse and PostgreSQL queries to power real-time dashboards.",
      "Validated data across ClickHouse, PostgreSQL, Recurly, Purchasely and Adapty, reconciling subscription and billing records across platforms.",
      "Implemented AI skills using MCP so the dashboard answers natural-language questions directly from the database.",
      "Built and cross-checked dashboard charts with the Claude AI tool against raw source data for accuracy.",
      "Investigated and root-caused discrepancies between analytics pipelines and source systems with backend and product teams.",
    ],
    tech: ["Metabase", "ClickHouse", "PostgreSQL", "Recurly", "Adapty", "Purchasely", "MCP", "Claude AI"],
  },
  {
    id: "tsss-frontend",
    role: "Frontend Developer (Odoo & React)",
    org: "TSSS Infotech & Infra / CorpTeam Solutions",
    period: "1.5 years",
    status: "past",
    summary:
      "Built custom Odoo modules and React interfaces for CRM and payroll systems, from dashboard charts down to campaign delivery and payslip workflows.",
    points: [
      "BLOR-CRM: built a 4-screen dashboard — Dashboard, Member, Member Group and CRM Campaigns.",
      "Dashboard screen: line charts, bar charts, heatmaps, a daily weather widget and pie charts for reservations and visitor data.",
      "Campaigns screen: sent SMS, LMS and KakaoTalk campaigns to members or groups with coupons and images, across General and Automatic sub-flows.",
      "Payroll & Employee Automation: configured salary structures, automated monthly payslip batches with a draft-to-approved workflow, and linked payroll to Odoo Accounting for journal entries.",
      "Built a custom module generating employee ID badges from QWeb templates with role-based access.",
      "Dealwallet internship: built shopping-comparison features in React/Next.js, integrated a Python chatbot, and supported releases with bug fixes and Jest tests.",
    ],
    tech: ["Odoo 18/19", "Python", "JavaScript", "XML", "SCSS", "Twilio", "React", "Next.js", "Jest"],
  },
];

export const projects = [
  {
    id: "blor-crm",
    name: "BLOR-CRM",
    tag: "Odoo · CRM",
    description:
      "A 4-screen CRM dashboard for a golf club — member management, group campaigns and a live analytics view with charts and heatmaps.",
    details: [
      "Dashboard: line/bar charts, heatmaps, a weather widget, reservation & visitor pie charts.",
      "Member & Member Group screens for grouping, memos and campaign targeting.",
      "Multi-channel campaign delivery: SMS, LMS, KakaoTalk, with coupons and images.",
    ],
    tech: ["Odoo 18", "Python", "JavaScript", "XML", "SCSS", "Twilio"],
  },
  {
    id: "payroll-automation",
    name: "Payroll & Employee Automation",
    tag: "Odoo · HR",
    description:
      "A full payroll and employee-management system automating salary processing, payslips and ID badge generation.",
    details: [
      "Salary structures and rules for basic pay, allowances and deductions.",
      "Batch payslip generation per department with a draft-to-approved workflow.",
      "Payroll linked to Odoo Accounting for salary journal entries; full employee lifecycle management.",
      "Custom QWeb module for single-click, role-based ID badge generation.",
    ],
    tech: ["Odoo", "Python", "QWeb"],
  },
  {
    id: "dealwallet",
    name: "Dealwallet",
    tag: "React · Next.js",
    description:
      "A shopping-comparison portal for searching products and comparing pricing across stores, with coupons, deals and referrals.",
    details: [
      "Built application UI in React and Next.js from analysis through implementation.",
      "Integrated a Python chatbot into the shopping flow.",
      "Pre-delivery support: bug fixing, code review and unit testing with Jest.",
    ],
    tech: ["React", "Next.js", "Python", "Jest"],
  },
  {
    id: "superunlimited-analytics",
    name: "VPN SuperUnlimited Analytics",
    tag: "Data · AI",
    description:
      "An AI-assisted analytics dashboard reconciling subscription, revenue and engagement data across five data sources.",
    details: [
      "Metabase dashboard powered by hand-optimized ClickHouse and PostgreSQL queries.",
      "Cross-source validation across ClickHouse, PostgreSQL, Recurly, Purchasely and Adapty.",
      "MCP-driven natural-language Q&A directly over the live database.",
      "Chart validation against raw source data using the Claude AI tool.",
    ],
    tech: ["Metabase", "ClickHouse", "PostgreSQL", "MCP", "Claude AI"],
  },
];
