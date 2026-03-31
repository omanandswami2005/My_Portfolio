export interface Achievement {
  id: string;
  title: string;
  type: "scholarship" | "technical" | "university" | "competition" | "industry";
  description: string;
  date: string;
  organization?: string;
  certificate?: string;
}

export const achievements: Achievement[] = [
  {
    id: "5",
    title: "Finalist – Gemini Live Agent Challenge 2026",
    type: "industry",
    description:
      "Built Omni, a multi-client AI agent hub powered by Google Gemini Live API + ADK. One AI brain across web, mobile, Chrome extension, desktop, and ESP32 robot. Live demo: gemini-live-hackathon-2026.web.app",
    date: "2026",
    organization: "Google / Devpost",
  },
  {
    id: "4",
    title: "Winner – HacktoberFest Hackathon 2025",
    type: "industry",
    description:
      "Won first place and grand prize of ₹10,000 in HacktoberFest Hackathon 2025 for building LegaliTeaAI – an AI-powered legal document analysis platform",
    date: "2025",
    organization: "DigitalOcean, Auth0 & Coditas, Pune",
  },
  {
    id: "3",
    title: "Best Performer - VCRP Latur College",
    type: "university",
    description:
      "Recognized as Best Performer at VCRP Latur College for outstanding academic and project performance",
    date: "2023",
    organization: "VCRP Latur College",
  },
  {
    id: "2",
    title: "Winner - ISTE Chapter Project Competition",
    type: "technical",
    description:
      "Won first place in ISTE Chapter Project Competition at PL College, Latur",
    date: "2023",
    organization: "ISTE Chapter, PL College, Latur",
  },
  {
    id: "1",
    title: "Runner-up – Codingal New Year Coding Challenge 2021",
    type: "competition",
    description:
      "Secured second position in Codingal New Year Coding Challenge 2021, demonstrating strong programming skills",
    date: "2021",
    organization: "Codingal",
  },
];
