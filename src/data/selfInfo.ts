import { ExperienceType, ProjectType } from "./types";

export const experiences: ExperienceType[] = [
  {
    title: "Supplemental Instruction",
    location: "California State University, Fullerton",
    timePeriod: "Jan 2024 - Present",
    description: `Hosted biweekly workshop seessions, integrating interactive and collaborative 
       study techniques. Enhanced student learning of Multivariable Calculus concepts through 
       peer discussion and participation, resulting in a 10% average grade increase`,
  },
  {
    title: "Research Assistant",
    location: "Project ACCESS at CSUF",
    timePeriod: "Feb 2024 - Present",
    description: `Participated in a year-long research program, engaging in data science and 
        cybersecurity projects to raise awareness on social just issues. Attended several workshops
        on topics such as study skills, career opportunities, and C++ programming`,
  },
  {
    title: "ACM Board Member & Contributor",
    location: "Association for Computer Machinery at CSUF",
    timePeriod: "Aug 2023 - Present",
    description: `Led and organized workshops on several technologies such as SvelteKit and VIM. 
        Collaborated with fellow students to develop open source projects, including the website 
        for FullyHacks (largest hackathon at CSUF) using Next.js, TypeScript, and TailwindCSS.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: "Clubannounce",
    description: "UI Platform for drafting announcements within ACM at CSUF",
    tags: ["SvelteKit", "TypeScript", "Sass", "DiscordAPI"],
    githubLink: "https://github.com/acmcsufoss/clubannounce",
  },
  {
    name: "Fullyhacks",
    description: "Website for the largest hackathon at CSUF (2024)",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "MongoDB"],
    githubLink: "https://github.com/tomasohCHOM/fourJSFrameworksOneApp",
    demoLink: "https://fullyhacks.acmcsuf.com/",
  },
  {
    name: "QuizZard",
    description: "Quiz application for interactive learning",
    tags: ["SvelteKit", "TypeScript", "TailwindCSS", "Supabase", "Learning"],
    githubLink: "https://github.com/tomasohCHOM/QuizZard",
    demoLink: "https://quizzardgame.vercel.app/",
  },
  {
    name: "Devdle",
    description: "Wordle clone with SWE terms",
    tags: ["SvelteKit", "TypeScript", "Sass", "SWE", "Web development"],
    githubLink: "https://github.com/tomasohCHOM/Devdle",
    demoLink: "https://devdlegame.vercel.app/",
  },
  {
    name: "MatriXpert",
    description: "A Matrix calculator website",
    tags: ["React.js", "React Router", "Sass", "Linear Algebra"],
    githubLink: "https://github.com/tomasohCHOM/MatriXpert",
    demoLink: "https://matrixpert.netlify.app/",
  },
  {
    name: "char-roles-bot",
    description: "Assign/remove roles from a Smash Bros Discord server",
    tags: ["Deno", "TypeScript", "Discord REST API", "Smash Bros"],
    githubLink: "https://github.com/tomasohCHOM/char-roles-bot",
  },
];

export const skills = [
  "CPP",
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "Rust",
  "HTML",
  "CSS",
  "ReactJS",
  "Svelte",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Sass",
  "Deno",
  "Prisma",
];
