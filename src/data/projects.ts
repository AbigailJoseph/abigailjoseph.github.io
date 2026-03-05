export interface Project {
  id: number;
  name: string;
  description: string;
  image: string | null;
  github: string | null;
  demo: string | null;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    description:
      "A full-stack web application that helps users manage tasks efficiently with real-time collaboration features.",
    image: null,
    github: "https://github.com",
    demo: "https://example.com",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Project Beta",
    description:
      "A machine learning pipeline that classifies images with 95% accuracy using a custom CNN architecture.",
    image: null,
    github: "https://github.com",
    demo: null,
    skills: ["Python", "TensorFlow", "Docker"],
  },
  {
    id: 3,
    name: "Project Gamma",
    description:
      "A mobile-first e-commerce platform with dynamic product filtering, cart management, and Stripe checkout.",
    image: null,
    github: "https://github.com",
    demo: "https://example.com",
    skills: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: 4,
    name: "Project Delta",
    description:
      "A CLI tool for automating deployment workflows, reducing deployment time by 70% for the team.",
    image: null,
    github: "https://github.com",
    demo: null,
    skills: ["Go", "Bash", "AWS"],
  },
  {
    id: 5,
    name: "Project Epsilon",
    description:
      "A real-time analytics dashboard visualizing sensor data streams with customizable charts and alerting.",
    image: null,
    github: "https://github.com",
    demo: "https://example.com",
    skills: ["TypeScript", "D3.js", "WebSockets"],
  },
];
