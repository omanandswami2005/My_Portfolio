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
    organization: "ABC Pvt. Ltd.",
    duration: "1 month",
    role: "Data Analyst Intern",
    tools: ["Excel", "SQL", "Python", "Tableau"],
    learningOutcome: "Data Cleaning, Analysis, and Visualization techniques",
    certificate: "internship-certificate.pdf",
    description:
      "Worked on customer data analysis and created interactive dashboards for business insights",
  },
  {
    id: "2",
    organization: "XYZ Tech Solutions",
    duration: "2 months",
    role: "Software Development Intern",
    tools: ["React", "Node.js", "MongoDB", "Git"],
    learningOutcome: "Full-stack web development and agile methodologies",
    certificate: "internship-certificate-2.pdf",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks",
  },
  {
    id: "3",
    organization: "Tech Startup Inc.",
    duration: "3 months",
    role: "Machine Learning Intern",
    tools: ["Python", "TensorFlow", "Pandas", "Jupyter"],
    learningOutcome: "Applied ML algorithms to real-world problems",
    description:
      "Built predictive models for customer behavior analysis and recommendation systems",
  },
];
