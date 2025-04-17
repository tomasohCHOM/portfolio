import { motionVariant } from "@/app/motions";
import { motion } from "motion/react";
import type { ExperienceType } from "@/info/types";
import Image from "next/image";
import React from "react";
import { Tag } from "./Tag";

function ExperienceCard({
  isMobile,
  experience,
}: {
  isMobile: boolean;
  experience: ExperienceType;
}) {
  return (
    <motion.div
      initial={isMobile ? "verticalHidden" : "horizontalHidden"}
      whileInView={isMobile ? "verticalVisible" : "horizontalVisible"}
      viewport={{ once: true }}
      variants={motionVariant}
      className="relative flex max-h-max flex-col gap-4 rounded-lg bg-secondary p-4 shadow-md"
    >
      <div className="absolute -right-4 -top-2 flex aspect-square w-12 items-center justify-center rounded-full bg-secondary">
        <Image
          src={experience.imgSrc}
          alt={experience.company + " experience"}
          width={42}
          height={42}
          className="w-[85%] rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{experience.title}</h3>
        <p className="text-sm font-medium text-contrast">
          {experience.company}
        </p>
        <p className="text-sm">{experience.timePeriod}</p>
      </div>
      <p>{experience.description}</p>
      <div className="flex flex-wrap items-center gap-1 sm:justify-normal">
        {experience.tags.map((tag) => {
          return <Tag text={tag} key={`project-tag-${tag}`} />;
        })}
      </div>
    </motion.div>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <>
      <h2 className="mt-8 text-3xl font-semibold">Skills</h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {skills.map((skill) => {
          return (
            <span
              className="group flex h-12 rounded-lg bg-secondary p-3 shadow-sm sm:h-16"
              key={skill}
            >
              <Image
                src={`/assets/skills/${skill.split(".").join("").toLowerCase()}.png`}
                alt={`${skill} icon`}
                width={100}
                height={100}
                className="w-6 items-center justify-center object-contain saturate-100 transition-all duration-[250ms] group-hover:saturate-100 sm:w-10 sm:saturate-0"
              />
            </span>
          );
        })}
      </div>
    </>
  );
}

export default function Experience({
  experiences,
  skills,
}: {
  experiences: ExperienceType[];
  skills: string[];
}) {
  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
      viewport={{ once: true }}
      variants={motionVariant}
      id="experience"
    >
      <h2 className="mt-8 text-3xl font-semibold">Experience</h2>
      <div className="mt-8 flex gap-4">
        <div className="flex w-full items-center justify-center gap-8 sm:gap-12">
          <div className="h-full border-l-2 border-white" />
          <div className="flex flex-col gap-4">
            {experiences.map((experience, i) => (
              <ExperienceCard
                isMobile={true}
                experience={experience}
                key={experience.title}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial="verticalHidden"
        whileInView="verticalVisible"
        viewport={{ once: true }}
        variants={motionVariant}
      >
        <Skills skills={skills} />
      </motion.div>
    </motion.section>
  );
}
