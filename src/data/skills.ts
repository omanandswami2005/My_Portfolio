export interface Skill {
  name: string;
  level: number;
  category: "programming" | "tools" | "software" | "domain";
}

export interface TechnicalSkillCategory {
  title: string;
  skills: Skill[];
}

export const skills: Skill[] = [
  {
    name: "Backend Development (Java / Node JS / Python )",
    level: 75,
    category: "programming",
  },
  {
    name: "Frontend Development (React / Vite / JS)",
    level: 85,
    category: "programming",
  },
  {
    name: "Hosting & Deployment (Render / Supabase / Vercel)",
    level: 60,
    category: "tools",
  },
  { name: "Product Design & UX Optimization", level: 40, category: "domain" },
];

export const technicalSkills: TechnicalSkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90, category: "programming" },
      { name: "Java", level: 85, category: "programming" },
      { name: "JavaScript/TypeScript", level: 88, category: "programming" },
      { name: "C++", level: 75, category: "programming" },
      { name: "SQL", level: 80, category: "programming" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85, category: "tools" },
      { name: "Docker", level: 70, category: "tools" },
      { name: "AWS", level: 65, category: "tools" },
      { name: "MongoDB", level: 80, category: "tools" },
      { name: "Firebase", level: 75, category: "tools" },
    ],
  },
  {
    title: "Software/Hardware Skills",
    skills: [
      { name: "Linux/Unix", level: 75, category: "software" },
      { name: "Windows", level: 90, category: "software" },
      { name: "VS Code", level: 95, category: "software" },
      { name: "IntelliJ IDEA", level: 80, category: "software" },
    ],
  },
  {
    title: "Domain Expertise",
    skills: [
      { name: "AI/Machine Learning", level: 80, category: "domain" },
      { name: "Web Development", level: 90, category: "domain" },
      { name: "Cloud Computing", level: 70, category: "domain" },
      { name: "Data Science", level: 75, category: "domain" },
    ],
  },
];

// Competitive Programming Rankings
export interface CompetitivePlatform {
  platform: string;
  ranking: string;
  profileUrl?: string;
}

export const competitiveProgramming: CompetitivePlatform[] = [
  {
    platform: "LeetCode",
    ranking: "Knight (1800+ rating)",
    profileUrl: "https://leetcode.com/yourprofile",
  },
  {
    platform: "CodeChef",
    ranking: "4 Star (1800+ rating)",
    profileUrl: "https://codechef.com/users/yourprofile",
  },
  {
    platform: "Codeforces",
    ranking: "Specialist (1400+ rating)",
    profileUrl: "https://codeforces.com/profile/yourprofile",
  },
  {
    platform: "HackerRank",
    ranking: "5 Star in Problem Solving",
    profileUrl: "https://hackerrank.com/yourprofile",
  },
];
