export interface Internship {
  id: string;
  organization: string;
  duration: string;
  role: string;
  tools: string[];
  learningOutcome: string;
  certificate?: string;
  description: string;
}

export const internships: Internship[] = [
  {
    id: "1",
    organization: "Unified Mentor Private Limited",
    duration: "1 month",
    role: "MERN Stack Developer Intern",
    tools: ["MongoDB", "Express.js", "React", "Node.js"],
    learningOutcome: "Developed a full-stack web application and gained hands-on experience with the MERN stack",
    certificate: "internship-certificate.pdf",
    description:
      "Worked on building a web application that connects students with teachers, allowing users to sign up, create profiles, and schedule mentoring sessions & appointments.",
  },
  
];
