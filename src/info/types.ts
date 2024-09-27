export interface ExperienceType {
  title: string;
  location: string;
  timePeriod: string;
  description: string[];
}

export type ProjectType = {
  name: string;
  description: string;
  tags: string[];
  imgSrc?: string;
  githubLink: string;
  demoLink?: string;
};
