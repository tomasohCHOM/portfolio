import React from "react";

interface ExperienceType {
  title: string;
  timePeriod: string;
  description: string[];
}

const experience: ExperienceType[] = [
  {
    title: "Supplemental Instruction",
    timePeriod: "Jan 2024 - Present",
    description: [
      "Integrated interactive and collaborative study techniques, enhancing student learning of Calculus III concepts",
      "Encouraged active student participation and peer discussion, resulting in a 10% average grade increase",
    ],
  },
  {
    title: "Project ACCESS",
    timePeriod: "Feb 2024 - Present",
    description: [
      `Participated in year-long research program, engaging in data science and cybersecurity projects to 
       provide awareness on emerging social justice issues`,
      "Attended several workshops on topics such as study skills, career opportunities, and C++ programming",
    ],
  },
  {
    title: "ACM at CSUF",
    timePeriod: "Aug 2023 - Present",
    description: [
      "Led and organized workshops on technologies such as SvelteKit and VIM for the largest computer science club at CSUF",
      "Collaborated with fellow student developers to build open source projects for the organization's benelovement",
      "Co-developed the website for Fullyhacks, the largest hackathon at CSUF, using Next.js, TypeScript, and TailwindCSS",
    ],
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
        <h3 className="text-lg font-semibold">{experience[0].title}</h3>
        <p>{experience[0].timePeriod}</p>
      </section>
    </>
  );
}
