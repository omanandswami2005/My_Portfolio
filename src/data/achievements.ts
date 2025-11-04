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
    id: "4",
    title: "Winner - HactoberFest Hackthon 2025",
    type: "industry",
    description:
      "Won first place in HactoberFest Hackthon 2025 for innovative project development",
    date: "2025",
    organization: "Digital Ocean and Coditas, Pune",
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
    title: "Runner-up in Codingal Coding Competition",
    type: "competition",
    description:
      "Secured second position in Codingal Coding Competition demonstrating strong programming skills",
    date: "2021",
    organization: "Codingal",
  },
];
