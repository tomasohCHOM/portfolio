import React from "react";

interface ExperienceType {
  title: string;
  location: string;
  timePeriod: string;
  description: string;
}

const experiences: ExperienceType[] = [
  {
    title: "Supplemental Instruction",
    location: "California State University, Fullerton",
    timePeriod: "Jan 2024 - Present",
    description: `Hosted biweekly workshop seessions, integrating interactive and collaborative 
       study techniques. Enhanced student learning of Calculus III concepts through 
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

const skills = [
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

function ExperienceBar({ experience }: { experience: ExperienceType[] }) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-8">
      {experience.map((exp) => {
        return (
          <span
            className="h-6 w-6 rounded-[50%] border-2 border-contrast transition hover:bg-contrast"
            key={`experience-sidebar-${exp.title}`}
          />
        );
      })}
    </div>
  );
}

function Skills() {
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

export default function Experience() {
  return (
    <>
      <h2 className="mt-8 text-3xl font-semibold">Experience</h2>
      <ExperienceBar experience={experiences} />
      <section className="mt-8 flex flex-col items-center justify-center gap-4">
        {experiences.map((experience) => {
          return (
            <div
              className="flex max-h-max w-[25rem] flex-col gap-4 rounded-lg bg-secondary p-4 shadow-md"
              key={experience.title}
            >
              <div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="text-sm">{experience.location}</p>
                <p className="text-sm text-slate-300">
                  {experience.timePeriod}
                </p>
              </div>
              <p className="leading-[1.625rem]">{experience.description}</p>
            </div>
          );
        })}
      </section>
      <div>
        <Skills />
      </div>
    </>
  );
}
