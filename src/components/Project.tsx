import { motionVariant, projectVariant } from "@/app/motions";
import { motion } from "framer-motion";
import { ProjectType } from "@/data/types";
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={projectVariant}
      className="flex h-full max-w-[20rem] flex-col items-center gap-4 rounded-xl bg-secondary p-6 text-sm font-medium shadow-md md:max-w-full md:flex-col md:p-4"
    >
      <a
        className="relative aspect-[1.57142857] w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl sm:rounded-lg"
        target="_blank"
        href={project.demoLink ?? project.githubLink}
      >
        <img
          src={`/assets/projects/${project.name.toLowerCase()}.png`}
          alt={`${project.name} image`}
          className="object-contain object-center drop-shadow-md"
        />
        {/* <Image
          src={`/assets/projects/${project.name.toLowerCase()}.png`}
          alt={`${project.name} image`}
          className="object-contain object-center drop-shadow-md"
          priority
          fill
        /> */}
      </a>
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-lg font-semibold">{project.name}</h3>
        <p className="max-w-[35ch] text-center">{project.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {project.tags.map((tag) => {
            return <Tag text={tag} key={`project-tag-${tag}`} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
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
      <div className="mt-6 grid items-center justify-center gap-4 sm:grid-cols-2">
        {projects.map((project, i) => {
          return <Project project={project} key={`project-${i}`} />;
        })}
      </div>
    </motion.section>
  );
}
