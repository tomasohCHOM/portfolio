export interface ExperienceType {
  title: string;
  company: string;
  timePeriod: string;
  description: string;
  tags: string[];
  imgSrc: string;
}

export type ProjectType = {
  name: string;
  description: string;
  tags: string[];
  imgSrc?: string;
  githubLink: string;
  demoLink?: string;
};
