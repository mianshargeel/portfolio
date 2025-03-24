export interface Project {
    id: number;
    title: string;
    durration: string;
    description: string;
    technologies: string[];
    links: {
    github: string,
    live?: string
  };
}
