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
    <div className="flex cursor-pointer items-center justify-center gap-8">
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
  setExperienceItem,
}: {
  experience: ExperienceType[];
  currExperience: number;
  setExperienceItem: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col gap-2">
      {experience.map((exp, i) => {
        return (
          <span
            className={`cursor-pointer rounded-lg p-2 text-sm transition ${currExperience === i ? "bg-secondary" : "hover:underline"}`}
            key={`experience-sidebar-${i}`}
            onClick={() => setExperienceItem(i)}
          >
            {exp.title}
          </span>
        );
      })}
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
  const [experienceItem, setExperienceItem] = useState(0);

  return (
    <>
      <h2 className="mt-8 text-3xl font-semibold">Experience</h2>
      <ExperienceTop experience={experiences} currExperience={experienceItem} />

      <section className="mt-8 flex gap-4">
        <ExperienceBar
          experience={experiences}
          currExperience={experienceItem}
          setExperienceItem={setExperienceItem}
        />
        <div
          className="flex max-h-max w-[25rem] flex-col gap-4 rounded-lg bg-secondary p-4 shadow-md"
          key={experiences[experienceItem].title}
        >
          <div>
            <h3 className="text-lg font-semibold">
              {experiences[experienceItem].title}
            </h3>
            <p className="text-sm font-medium">
              {experiences[experienceItem].location}
            </p>
            <p className="text-sm">{experiences[experienceItem].timePeriod}</p>
          </div>
          <p className="leading-[1.625rem]">
            {experiences[experienceItem].description}
          </p>
        </div>
      </section>
      <div>
        <Skills skills={skills} />
      </div>
    </>
  );
}
