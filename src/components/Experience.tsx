import React from "react";

interface ExperienceType {
  title: string;
  timePeriod: string;
  description?: string[];
}

const experience: ExperienceType[] = [
  {
    title: "Supplemental Instruction",
    timePeriod: "Jan 2024 - Present",
    description: [],
  },
  {
    title: "Project ACCESS",
    timePeriod: "Feb 2024 - Present",
    description: [],
  },
  {
    title: "ACM at CSUF",
    timePeriod: "Aug 2023 - Present",
    description: [],
  },
];

function ExperienceSidebar({ experience }: { experience: ExperienceType[] }) {
  return (
    <div className="flex flex-col gap-2">
      {experience.map((exp, i) => {
        return (
          <span
            className="border-b-2 border-contrast p-2"
            key={`experience-sidebar-${i}`}
          >
            {exp.title}
          </span>
        );
      })}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <h2 className="mt-8 text-3xl font-semibold">Experience</h2>
      <section className="mt-8 flex gap-4">
        <ExperienceSidebar experience={experience} />
        <h3 className="text-lg font-semibold">Something</h3>
      </section>
    </>
  );
}
