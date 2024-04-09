import { motionVariant } from "@/app/motions";
import { motion } from "framer-motion";
import React, { useState } from "react";
import type { ExperienceType } from "@/info/types";
import Image from "next/image";

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

function ExperienceCard({
  isMobile,
  experience,
  experienceIndex,
}: {
  isMobile: boolean;
  experience: ExperienceType;
  experienceIndex: number;
}) {
  return (
    <motion.div
      key={experienceIndex}
      initial={isMobile ? "verticalHidden" : "horizontalHidden"}
      whileInView={isMobile ? "verticalVisible" : "horizontalVisible"}
      viewport={{ once: true }}
      variants={motionVariant}
      className="relative flex max-h-max max-w-[25rem] flex-col gap-4 rounded-lg bg-secondary p-4 shadow-md"
    >
      <div>
        <h3 className="text-lg font-semibold">{experience.title}</h3>
        <p className="text-sm font-medium text-contrast">
          {experience.location}
        </p>
        <p className="text-sm">{experience.timePeriod}</p>
      </div>
      <p className="leading-[1.625rem]">{experience.description}</p>

      <motion.div
        inherit={false}
        className="absolute left-[-41px] top-[40%] z-10 h-4 w-4 rounded-[50%] bg-white sm:left-[-57px] md:hidden"
      />
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
  const [experienceIndex, setExperienceIndex] = useState(0);

  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
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
          <ExperienceCard
            isMobile={false}
            experienceIndex={experienceIndex}
            experience={experiences[experienceIndex]}
          />
        </div>
        <div className="flex w-full items-center justify-center gap-8 sm:gap-12 md:hidden">
          <div className="h-full border-l-2 border-white" />
          <div className="flex flex-col gap-4">
            {experiences.map((experience) => (
              <ExperienceCard
                isMobile={true}
                experienceIndex={experienceIndex}
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
