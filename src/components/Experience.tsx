import { motionVariant } from "@/app/motions";
import { motion } from "framer-motion";
import React, { useState } from "react";
import type { ExperienceType } from "@/data/types";

function ExperienceTop({
  experience,
  currExperience,
}: {
  experience: ExperienceType[];
  currExperience: number;
}) {
  return (
    <div className="hidden cursor-pointer items-center justify-center gap-8 md:flex">
      {experience.map((exp, i) => {
        return (
          <span
            className={`h-4 w-4 rounded-[50%] border-2 border-contrast transition ${currExperience === i ? "bg-contrast" : ""}`}
            key={`experience-sidebar-${exp.title}`}
          />
        );
      })}
    </div>
  );
}

function ExperienceBar({
  experience,
  currExperience,
  setExperienceIndex,
}: {
  experience: ExperienceType[];
  currExperience: number;
  setExperienceIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="hidden flex-col gap-2 md:flex">
      {experience.map((exp, i) => {
        return (
          <span
            className={`cursor-pointer rounded-lg p-2 text-sm transition ${currExperience === i ? "bg-secondary" : "hover:underline"}`}
            key={`experience-sidebar-${i}`}
            onClick={() => setExperienceIndex(i)}
          >
            {exp.title}
          </span>
        );
      })}
    </div>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <div className="relative flex max-h-max max-w-[25rem] flex-col gap-4 rounded-lg bg-secondary p-4 shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{experience.title}</h3>
        <p className="text-sm font-medium text-contrast">
          {experience.location}
        </p>
        <p className="text-sm">{experience.timePeriod}</p>
      </div>
      <p className="leading-[1.625rem]">{experience.description}</p>

      <div className="absolute left-[-41px] top-[40%] z-10 h-4 w-4 rounded-[50%] bg-white sm:left-[-57px] md:hidden" />
    </div>
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
              className="flex h-16 rounded-lg bg-secondary p-3 shadow-sm"
              key={skill}
            >
              <img
                src={`/assets/skills/${skill.split(".").join("").toLowerCase()}.png`}
                className="w-10 items-center justify-center object-contain"
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
  const [experienceIndex, setExperienceIndex] = useState(0);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={motionVariant}
      id="experience"
    >
      <h2 className="mt-8 text-3xl font-semibold">Experience</h2>
      <ExperienceTop
        experience={experiences}
        currExperience={experienceIndex}
      />
      <div className="mt-8 flex gap-4">
        <ExperienceBar
          experience={experiences}
          currExperience={experienceIndex}
          setExperienceIndex={setExperienceIndex}
        />
        <div className="hidden md:block">
          <ExperienceCard experience={experiences[experienceIndex]} />
        </div>
        <div className="flex w-full items-center justify-center gap-8 sm:gap-12 md:hidden">
          <div className="h-full border-l-2 border-white" />
          <div className="flex flex-col gap-4">
            {experiences.map((experience) => (
              <ExperienceCard experience={experience} key={experience.title} />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={motionVariant}
      >
        <Skills skills={skills} />
      </motion.div>
    </motion.section>
  );
}
