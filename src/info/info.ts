import { ExperienceType, ProjectType } from "./types";

export const experiences: ExperienceType[] = [
  {
    title: "SDE Intern",
    company: "Amazon Web Services",
    timePeriod: "May 2025 - Aug 2025",
    description: "Incoming Software Development Engineering Intern at AWS :)",
    tags: [
      "Software Engineering",
      "Internship",
      "Cloud Computing",
      "Distributed Systems",
    ],
    imgSrc: "/assets/experience/aws.svg",
  },
  {
    title: "Open Source Software Team Lead",
    company: "Association for Computing Machinery at CSUF",
    timePeriod: "Aug 2024 - Present",
    description:
      "Lead maintainer of acmcsufoss, managing 40+ repositories and engaging 100+ contributors. Organized weekly workshops with open-source maintainers.",
    tags: [
      "Open Source",
      "Software Engineering",
      "Collaboration",
      "Full Stack",
      "Community",
    ],
    imgSrc: "/assets/experience/oss.svg",
  },
  {
    title: "Supplemental Instructor",
    company: "California State University, Fullerton",
    timePeriod: "Jan 2024 - Present",
    description:
      "Conducts weekly sessions reinforcing multivariable and vector calculus concepts through problem-solving and group discussions.",
    tags: ["Tutoring", "Math", "Calculus III", "Problem Solving", "Education"],
    imgSrc: "/assets/experience/si-logo.jpeg",
  },
  {
    title: "Data Science/AI Research Assistant",
    company: "Project ACCESS at CSUF",
    timePeriod: "June 2024 - Aug 2024",
    description:
      "Developed machine learning models and robotics solutions for social justice applications, contributing to research publications.",
    tags: [
      "Internship",
      "Data Science",
      "AI/Robotics",
      "Team Collaboration",
      "Research",
    ],
    imgSrc: "/assets/experience/csuf.png",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Fullyhacks",
    description: "Website for the largest hackathon at CSUF (2025)",
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
