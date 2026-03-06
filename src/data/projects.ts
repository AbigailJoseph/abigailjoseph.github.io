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
    name: "TriageAI Coach",
    description:
      "Recieved 1st place Technical Excellence Award at Claude Builder's Club Hackathon (1/38 projects selected). \n Medical Education tool for students to practice case presentation & patient prioritization for triage. ",
    image: "/images/triageAICoach.jpg",
    github: "https://github.com/ParviChadha/attending-physician",
    demo: "https://www.youtube.com/watch?v=bU7-vWimPRo&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=OTY3MTQ",
    skills: ["CaludeAPI", "PubMedBERT", "PostgreSQL"],
  },
  {
    id: 2,
    name: "MentorMD",
    description:
      "AI Attending Physican that coaches medical students through developing a clinically sound clinical case presentation in preperation for clinical rotations.",
    image: "images/mentorMD.png",
    github: "https://github.com/AbigailJoseph/Kaggle-MedGemma",
    demo: "https://www.canva.com/design/DAHCR6Oa0J8/3RYTGyvRdFolZMhJS5lylg/watch?utm_content=DAHCR6Oa0J8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb2c2b3a7ae",
    skills: ["MedGemma", "GPT-4o-mini", "FastAPI", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Mobile Pricing Analytics",
    description:
      "A real-time analytics dashboard visualizing sensor data streams with customizable charts and alerting.",
    image: null,
    github: "https://github.com",
    demo: "https://example.com",
    skills: ["Python", "SQL", " Pandas/NumPy", "scikit-learn"],
  },
  {
    id: 4,
    name: "Cogo",
    description:
      "Collaborative habit tracker mobile iOS app. Available on the Apple App store.",
    image: "/images/cogo2.jpg",
    github: "private-git",
    demo: "https://apps.apple.com/us/app/cogo-group-habit-tracker/id1631623887",
    skills: ["Swift", "Firebase"],
  },
  {
    id: 5,
    name: "InfoStream",
    description:
      "News agrregator website built with React and Firebase",
    image: "/images/infostream.jpg",
    github: "https://github.com/AbigailJoseph/InfoStream-v2",
    demo: "https://www.youtube.com/watch?v=BGvSkE0tjrQ",
    skills: ["React", "Firebase"],
  },
];
