// src/data/portfolio.ts — single source of truth for all site content.

export const profile = {
  name: "Guddu Kumar",
  role: "Full Stack Developer",
  location: "Mysore, Karnataka, India",
  email: "guddukumar001122@gmail.com",
  phone: "+91 73408 54172",
  whatsapp: "917340854172", // country code + number, digits only
  whatsappMessage: "Hi Guddu, I found your portfolio and would like to connect.",
  linkedin: "https://www.linkedin.com/in/guddu-kumar-6b9272170/",
  github: "https://github.com/Guddu3261",
  resume: "/Guddu_Kumar_Resume.pdf",
  siteUrl: "https://example.vercel.app", 
  summary:
    "Full Stack Developer with 4+ years of experience in web and mobile application development using React.js, Next.js, Node.js, Flutter, and PostgreSQL. Experienced in secure REST APIs, multi-tenant healthcare applications, authentication systems, appointment management workflows, and ABDM integrations.",
};

export const skills = [
  { group: "Frontend", items: ["React.js", "Next.js", "Redux", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap", "Shadcn-ui"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"] },
  { group: "Mobile", items: ["Flutter", "Dart"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "Docker", "VS Code"] },
  { group: "Testing", items: ["Jest", "React Testing Library"] },
];

export const projects = [
  {
    title: "Practmd",
    slug: "practmd",
    role: "Full Stack Developer",
    subtitle: "Full Stack Healthcare Platform",
    description:
      "Multi-tenant healthcare application for clinics covering appointment scheduling, patient management, and operational reporting.",
    tech: ["Next.js", "React.js", "Node.js", "PostgreSQL", "JWT/OAuth", "Docker"],
    highlights: [
      "Built appointment scheduling and patient management modules for healthcare providers.",
      "Built reporting and dashboard features for healthcare operations.",
      "Implemented authentication and authorization workflows using JWT/OAuth.",
      "Supported patient onboarding and clinic management workflows.",
    ],
    images: [
      { src: "/projects/practmd/dashboard.jpg", alt: "Practmd admin dashboard with clinics, providers, staff and patient overview", caption: "Admin dashboard", width: 1400, height: 688 },
      { src: "/projects/practmd/tasks.jpg", alt: "Practmd task management table with filters and status tabs", caption: "Task management", width: 1400, height: 688 },
      { src: "/projects/practmd/form-builder.jpg", alt: "Practmd drag-and-drop form builder", caption: "Form builder", width: 1396, height: 959 },
      { src: "/projects/practmd/staff-roles.jpg", alt: "Practmd add staff role dialog with permissions", caption: "Roles & permissions", width: 1382, height: 663 },
      { src: "/projects/practmd/login.jpg", alt: "Practmd login page with Google sign-in and magic link", caption: "Login", width: 1400, height: 714 },
    ],
    links: [{ label: "Visit website", url: "https://practmd.com/" }],
  },
  {
    title: "Dello Plus",
    slug: "dello-plus",
    role: "Mobile & Backend Developer",
    subtitle: "Mobile & Backend",
    description:
      "Cross-platform health app for Android, iOS, and Web with patient onboarding, assessments, immunization, and follow-up workflows.",
    tech: ["Flutter", "Dart", "Python (Flask)", "PostgreSQL", "Firebase", "Google Cloud"],
    highlights: [
      "Developed mobile app screens and business workflows in Flutter.",
      "Implemented onboarding, assessment, immunization, and follow-up management.",
      "Integrated ABDM APIs for health record sharing and consent management.",
    ],
    mobile: true,
    images: [
      { src: "/projects/dello-plus/home.jpg", alt: "Dello Plus doctor home screen", caption: "Home", width: 417, height: 867 },
      { src: "/projects/dello-plus/digitize.jpg", alt: "Dello Plus digitize clinical data screen", caption: "Digitize records", width: 417, height: 867 },
      { src: "/projects/dello-plus/chat.jpg", alt: "Dello Plus patient chat and telemedicine screen", caption: "Chat & telemedicine", width: 417, height: 867 },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/dello-pro/id1501643449" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.teakshed.omrx" },
    ],
  },
  {
    title: "KeySkillsets",
    slug: "keyskillsets",
    role: "Full Stack Developer",
    subtitle: "Online Learning & Test Prep Platform",
    description:
      "Learning platform for exam preparation and software skills, with NEET and IIT-JEE test series, simulation-based courses, a learner dashboard, and score analytics. I worked on both the frontend and the backend.",
    tech: ["React.js", "JavaScript", "Node.js", "PostgreSQL"],
    highlights: [
      "Built frontend modules with React.js and JavaScript for the learner experience.",
      "Developed backend services and REST APIs with Node.js.",
      "Designed and managed the PostgreSQL database layer.",
    ],
    images: [
      { src: "/projects/keyskillsets/login.jpg", alt: "keySkillset login page", caption: "Login", width: 1400, height: 703 },
      { src: "/projects/keyskillsets/dashboard.jpg", alt: "keySkillset learner dashboard with progress summary and test series", caption: "Learner dashboard", width: 1400, height: 703 },
      { src: "/projects/keyskillsets/test-series.jpg", alt: "keySkillset test series overview with score progression", caption: "Test series & score progression", width: 1400, height: 703 },
      { src: "/projects/keyskillsets/courses.jpg", alt: "keySkillset course catalog", caption: "Course catalog", width: 1400, height: 703 },
      { src: "/projects/keyskillsets/practice-hub.jpg", alt: "keySkillset practice hub", caption: "Practice hub", width: 1400, height: 703 },
    ],
    links: [{ label: "Visit website", url: "https://www.keyskillset.com/" }],
  },
];

export const workHistory = [
  {
    company: "Accession Consulting & Health Tech",
    location: "Mysuru",
    role: "Senior Software Developer",
    period: "03/2024 – Present",
    highlights: [
      "Developed and maintained secure REST APIs in Node.js with JWT/OAuth authentication and authorization.",
      "Built responsive, reusable frontend modules with React.js, Next.js, TypeScript, and Redux.",
      "Implemented multi-tenant healthcare workflows: tenant onboarding, patient management, appointment scheduling.",
      "Integrated third-party healthcare APIs, including ABDM, for health record sharing and consent management.",
      "Worked in Agile/Scrum teams: requirement analysis, code reviews, debugging, and testing.",
    ],
  },
  {
    company: "Nogrunt",
    location: "Bengaluru",
    role: "Associate Software Developer",
    period: "07/2023 – 12/2023",
    highlights: [
      "Built responsive UIs with React.js, JavaScript, and Material UI.",
      "Created reusable, modular components to improve maintainability and development speed.",
      "Integrated REST APIs for data fetching, updates, and frontend-backend communication.",
      "Worked on performance optimization and improved UX through efficient UI implementation.",
    ],
  },
  {
    company: "Atraya Technologies",
    location: "Bengaluru",
    role: "Software Developer",
    period: "04/2022 – 07/2023",
    highlights: [
      "Developed and maintained UIs for client applications such as aagey.com and AuditFy.",
      "Built responsive UIs and reusable components with React.js, Formik, and Axios.",
      "Performed API testing with Postman and maintained test cases for web apps.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Shaheed Bhagat Singh State Technical Campus",
  location: "Firozepur, Punjab",
  year: "2019",
};
