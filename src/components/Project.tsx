import React from "react";

interface ProjectType {
  name: string;
  description: string;
  tags: string[];
  imgSrc: string;
  githubLink: string;
  demoLink?: string;
}

const projects: ProjectType = [
  {
    name: "Clubannounce",
    description: "UI Platform for drafting announcements within ACM at CSUF",
    tags: ["SvelteKit", "TypeScript", "Sass", "DiscsordAPI"],
  },
  {
    name: "Fullyhacks",
    description: "Website for the largest hackathon at CSUF",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "MongoDB"],
  },
  {
    name: "QuizZard",
    description: "Quiz application for interactive learning",
    tags: ["SvelteKit", "TypeScript", "TailwindCSS", "Supabase", "Learning"],
  },
  {
    name: "Devdle",
    description: "Wordle clone with SWE terms",
    tags: ["SvelteKit", "TypeScript", "Sass", "SWE", "Web development"],
  },
  {
    name: "MatriXpert",
    description: "A Matrix calculator website",
    tags: ["React.js", "React Router", "Sass", "Katex", "Linear Algebra"],
  },
  {
    name: "CharRolesBot",
    description: "Assign/remove roles from a Smash Bros Discord server",
    tags: ["Deno", "TypeScript", "Discord REST API", "Smash Bros"],
  },
];

function Project(project: ProjectType) {
  return <div className="rounded-xl bg-secondary"></div>;
}

export default function Projects() {
  return <div>Project</div>;
}
