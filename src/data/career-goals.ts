export interface CareerGoal {
  type: "short-term" | "long-term";
  title: string;
  description: string;
  timeline?: string;
}

export interface AreaOfInterest {
  name: string;
  description: string;
  relatedSkills: string[];
}

export const careerGoals: CareerGoal[] = [
  {
    type: "short-term",
    title: "Software Engineer at Tech Company",
    description:
      "Secure a position as a software engineer at a leading technology company to gain industry experience and work on scalable applications.",
    timeline: "6-12 months",
  },
  {
    type: "short-term",
    title: "Master Cloud Technologies",
    description:
      "Become proficient in cloud platforms like AWS, Azure, and GCP to build and deploy cloud-native applications.",
    timeline: "12 months",
  },
  {
    type: "short-term",
    title: "JAVA and Spring Boot Developer",
    description:
      "Specialize in Java and Spring Boot development to create robust and efficient backend systems for web applications.",
    timeline: "6-12 years",
  },
  {
    type: "long-term",
    title: "Technical Lead/Architect",
    description:
      "Progress to a technical leadership role where I can guide development teams and make architectural decisions for large-scale systems.",
    timeline: "3-5 years",
  },
  {
    type: "long-term",
    title: "Contribute to Open Source",
    description:
      "Actively contribute to major open-source projects and potentially maintain my own widely-used libraries or frameworks.",
    timeline: "2-5 years",
  },
  {
    type: "long-term",
    title: "AI and LLM Development",
    description:
      "Specialize in artificial intelligence and large language models to develop innovative solutions that leverage AI for real-world applications.",
    timeline: "3-5 years",
  }
];

export const areasOfInterest: AreaOfInterest[] = [
  {
    name: "Artificial Intelligence & Machine Learning",
    description:
      "Developing intelligent systems that can learn and make decisions",
    relatedSkills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Data Science",
      "Deep Learning",
    ],
  },
  {
    name: "Full-Stack Web Development",
    description:
      "Building end-to-end web applications with modern technologies",
    relatedSkills: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
  },
  {
    name: "Cloud Computing & DevOps",
    description: "Designing and managing scalable cloud infrastructure",
    relatedSkills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    name: "Mobile App Development",
    description: "Creating cross-platform mobile applications",
    relatedSkills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
  },
];
