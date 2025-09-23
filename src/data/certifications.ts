export interface Certification {
  id: string;
  courseName: string;
  platform: string;
  duration: string;
  completionDate: string;
  certificateLink?: string;
  skills: string[];
  sdgGoals?: string[];
  selfEvaluation?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    courseName: "Machine Learning",
    platform: "Coursera",
    duration: "4 weeks",
    completionDate: "May 2024",
    certificateLink: "https://coursera.org/certificate/xyz",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"],
    sdgGoals: ["Quality Education", "Industry Innovation"],
    selfEvaluation:
      "Excellent understanding of ML concepts and practical implementation",
  },
  {
    id: "2",
    courseName: "Full Stack Web Development",
    platform: "edX",
    duration: "8 weeks",
    completionDate: "March 2024",
    certificateLink: "https://edx.org/certificate/abc",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    selfEvaluation: "Strong grasp of full-stack development principles",
  },
  {
    id: "3",
    courseName: "AWS Cloud Practitioner",
    platform: "AWS Training",
    duration: "6 weeks",
    completionDate: "January 2024",
    certificateLink: "https://aws.amazon.com/certificate/def",
    skills: ["Cloud Computing", "AWS Services", "DevOps"],
    selfEvaluation: "Good understanding of cloud infrastructure and services",
  },
];
