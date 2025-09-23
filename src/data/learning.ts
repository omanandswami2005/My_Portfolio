export interface LearningEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "technical" | "project" | "certification" | "general";
  tags?: string[];
  link?: string;
}

export const learningEntries: LearningEntry[] = [
  {
    id: "1",
    date: "2024-01-15",
    title: "GitHub Project Deployment",
    description:
      "Learned GitHub project deployment today. Linked my first repo! Successfully deployed a React portfolio using GitHub Pages and configured custom domain.",
    category: "technical",
    tags: ["GitHub", "Deployment", "React"],
    link: "https://github.com/username/portfolio",
  },
  {
    id: "2",
    date: "2024-01-22",
    title: "Face Recognition with OpenCV",
    description:
      "Completed a mini-project on face recognition using OpenCV. Implemented real-time face detection and recognition algorithms with Python.",
    category: "project",
    tags: ["OpenCV", "Python", "Computer Vision", "Machine Learning"],
    link: "https://github.com/username/face-recognition",
  },
  {
    id: "3",
    date: "2024-02-05",
    title: "React Hooks Deep Dive",
    description:
      "Mastered advanced React hooks including useCallback, useMemo, and custom hooks. Built a complex state management system for a todo application.",
    category: "technical",
    tags: ["React", "Hooks", "JavaScript", "State Management"],
  },
  {
    id: "4",
    date: "2024-02-18",
    title: "AWS Cloud Practitioner Certification",
    description:
      "Successfully passed the AWS Cloud Practitioner exam. Gained comprehensive understanding of cloud computing concepts and AWS services.",
    category: "certification",
    tags: ["AWS", "Cloud Computing", "Certification"],
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    id: "5",
    date: "2024-03-02",
    title: "Docker Containerization",
    description:
      "Learned Docker fundamentals and containerized my first application. Created multi-stage builds and docker-compose configurations.",
    category: "technical",
    tags: ["Docker", "DevOps", "Containerization"],
  },
  {
    id: "6",
    date: "2024-03-15",
    title: "Hackathon Participation",
    description:
      'Participated in my first hackathon and built a sustainable energy tracking app in 48 hours. Won the "Best Environmental Impact" award.',
    category: "project",
    tags: ["Hackathon", "Sustainability", "Mobile App", "Team Work"],
  },
];

export const learningCategories = [
  { value: "all", label: "All Categories" },
  { value: "technical", label: "Technical Skills" },
  { value: "project", label: "Projects" },
  { value: "certification", label: "Certifications" },
  { value: "general", label: "General Learning" },
];
