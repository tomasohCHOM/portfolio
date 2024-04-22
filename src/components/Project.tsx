import { motionVariant } from "@/app/motions";
import { motion } from "framer-motion";
import { ProjectType } from "@/info/types";
import Image from "next/image";
import React from "react";

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-xl bg-contrast_muted px-2 text-[12px] font-semibold text-contrast">
      {text}
    </span>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <a
      target="_blank"
      href={project.demoLink ?? project.githubLink}
      className="flex h-full max-w-[20rem] cursor-pointer flex-col items-center gap-4 justify-self-center rounded-xl bg-secondary-300 p-6 text-sm font-medium shadow-md transition hover:bg-secondary sm:max-w-full sm:flex-row sm:justify-self-stretch md:p-4"
    >
      <span className="relative aspect-[1.57142857] w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl sm:rounded-lg">
        <Image
          src={`/assets/projects/${project.name.toLowerCase()}.png`}
          alt={`${project.name} project image`}
          width={1100}
          height={700}
          className="object-contain object-center drop-shadow-md"
        />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-lg font-semibold sm:text-start">
          {project.name}
        </h3>
        <p className="max-w-full text-center sm:text-start">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-normal">
          {project.tags.map((tag) => {
            return <Tag text={tag} key={`project-tag-${tag}`} />;
          })}
        </div>
      </div>
    </a>
  );
}

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
      viewport={{ once: true }}
      variants={motionVariant}
      id="projects"
    >
      <h2 className="mt-8 text-3xl font-semibold">Projects</h2>
      <p className="mt-2">
        All of my projects are available on{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/tomasohCHOM/?tab=repositories"
        >
          my GitHub.
        </a>
      </p>
      <div className="mt-6 grid grid-cols-1 items-center justify-center gap-4">
        {projects.map((project, i) => {
          return <Project project={project} key={`project-${i}`} />;
        })}
      </div>
    </motion.section>
  );
}
