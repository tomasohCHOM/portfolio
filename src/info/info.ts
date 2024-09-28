import { ExperienceType, ProjectType } from "./types";

export const experiences: ExperienceType[] = [
  {
    title: "Open Source Software Team Lead",
    location: "Association for Computer Machinery at CSUF",
    timePeriod: "Aug 2024 - Present",
    description: [
      "Led an open source software initiative, consisting of 60+ student contributors and 20+ maintained projects",
      "Collaborated with fellow members to build full-stack, back-end, and infrastructure solutions that benefited the community, exposing students to multiple languages, technologies, and design patterns",
      "Hosted weekly workshops centered around open source development and its impact in the engineering space",
    ],
  },
  {
    title: "Supplemental Instructor",
    location: "California State University, Fullerton",
    timePeriod: "Jan 2024 - Present",
    description: [
      "Conducted weekly sessions to reinforce students' understanding of multivariable} and vector calculus concepts",
      "Integrated interactive and collaborative study techniques to help improve problem-solving skills for complex topics",
      "Fostered active participation and peer discussion with 20+ students, resulting in a 10% average grade increase",
    ],
  },
  {
    title: "Data Science/AI Research Assistant",
    location: "Project ACCESS at CSUF",
    timePeriod: "June 2024 - Aug 2024",
    description: [
      "Completed a ten-week research program, attended data science and AI/robotics lectures, and collaborated with a team of three to build projects addressing emerging social justice issues",
      "Implemented fall-detection and emergency alerting functionalities for a Raspberry PI AI Vision Robot Car, utilizing YOLO v8 pose-detection model, SQLite to store owner information, and SMTB for text messaging",
      "Developed a machine learning model with NumPy, Pandas, and scikit-learn to predict salaries in the technology industry based on demographic data, using 70,000+ responses from the Stack Overflow 2022 Developer Survey",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Fullyhacks",
    description: "Website for the largest hackathon at CSUF (2024)",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "MongoDB"],
    githubLink: "https://github.com/tomasohCHOM/fourJSFrameworksOneApp",
    demoLink: "https://fullyhacks.acmcsuf.com/",
  },
  {
    name: "vimaroo",
    description: "Website to practice Vim keybindings/motions",
    tags: ["SvelteKit", "TypeScript", "TailwindCSS", "Supabase", "Vim"],
    githubLink: "https://github.com/tomasohCHOM/vimaroo",
    demoLink: "https://vimaroo.vercel.app",
  },
  {
    name: "char-roles-bot",
    description: "Assign/remove roles from a Smash Bros Discord server",
    tags: ["Deno", "TypeScript", "Discord REST API", "Smash Bros"],
    githubLink: "https://github.com/tomasohCHOM/char-roles-bot",
  },
  {
    name: "github-stats",
    description: "CLI tool that retrieves GitHub user statistics",
    tags: ["Go", "GitHubAPI"],
    githubLink: "https://github.com/tomasohCHOM/github-stats",
  },
];

export const skills = [
  "CPP",
  "Python",
  "TypeScript",
  "JavaScript",
  "GO",
  "HTML",
  "CSS",
  "Java",
  "ReactJS",
  "Next.js",
  "Svelte",
  "Node.js",
  "TailwindCSS",
  "Sass",
  "Deno",
  "Vim",
];
