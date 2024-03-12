import Image from "next/image";
import React from "react";

interface ProjectType {
  name: string;
  description: string;
  tags: string[];
  imgSrc?: string;
  githubLink: string;
  demoLink?: string;
}

const projects: ProjectType[] = [
  {
    name: "Clubannounce",
    description: "UI Platform for drafting announcements within ACM at CSUF",
    tags: ["SvelteKit", "TypeScript", "Sass", "DiscsordAPI"],
    githubLink: "https://github.com/acmcsufoss/clubannounce",
  },
  {
    name: "Fullyhacks",
    description: "Website for the largest hackathon at CSUF",
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
    tags: ["React.js", "React Router", "Sass", "Katex", "Linear Algebra"],
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

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex gap-4 rounded-xl bg-secondary p-4 shadow-md">
      <span className="overflow-hidden rounded-lg">
        <Image
          src={`/assets/projects/${project.name.toLowerCase()}.png`}
          alt={`${project.name} image`}
          className="aspect-[3/2] drop-shadow-md"
          width={200}
          height={200}
        />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="grid grid-cols-1 gap-4 ">
      {projects.map((project, i) => {
        return <Project project={project} key={`project-${i}`} />;
      })}
    </section>
  );
}
