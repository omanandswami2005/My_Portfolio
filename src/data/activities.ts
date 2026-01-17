export interface CoCurricularActivity {
  id: string;
  activity: string;
  level: "National" | "State" | "University" | "College";
  role: string;
  organizer: string;
  award?: string;
  certificate?: string;
}

export interface ExtraCurricularActivity {
  id: string;
  category: "Sports" | "Cultural" | "NSS" | "NCC" | "Leadership" | "Volunteer";
  activity: string;
  role?: string;
  description: string;
  duration?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  level: "International" | "National" | "State" | "University" | "College";
  organizer?: string;
  achievement?: string;
  tech?: string[];
  link?: string;
}

export interface Meetup {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  type: "Conference" | "Meetup" | "Workshop" | "Seminar" | "Webinar";
  organizer?: string;
  role?: string;
  topics?: string[];
  link?: string;
}

export const coCurricularActivities: CoCurricularActivity[] = [
  {
    id: "1",
    activity: "Hackathon",
    level: "National",
    role: "Finalist",
    organizer: "AICTE & AISSMS",
    award: "Top 10 Finalist",
    certificate: "certificate.pdf",
  },
  {
    id: "2",
    activity: "Technical Poster Presentation",
    level: "State",
    role: "Presenter",
    organizer: "Tech Symposium",
    award: "Second Prize",
  },
  {
    id: "3",
    activity: "Project Expo Contest",
    level: "University",
    role: "Winner",
    organizer: "Computer Science Department, PLGPL",
    award: "First Prize",
  },
];

export const extraCurricularActivities: ExtraCurricularActivity[] = [
  {
    id: "1",
    category: "Cultural",
    activity: "Drama Club",
    role: "Member",
    description:
      "Participated in various cultural events and drama competitions",
    duration: "2022-2024",
  },
  {
    id: "2",
    category: "NSS",
    activity: "Community Service",
    role: "Volunteer",
    description:
      "Organized blood donation camps and environmental awareness programs",
    duration: "2023-2024",
  },
  {
    id: "3",
    category: "Leadership",
    activity: "Class Representative",
    role: "Class Rep",
    description: "Represented class in academic and administrative matters",
    duration: "2023-2024",
  },
];

export const hackathons: Hackathon[] = [
  {
    id: "1",
    name: "AICTE Hackathon",
    description:
      "National level hackathon focused on innovative tech solutions",
    date: "2024",
    location: "AISSMS, Pune",
    level: "National",
    organizer: "AICTE & AISSMS",
    achievement: "Top 10 Finalist",
    tech: ["React", "Node.js", "AI/ML"],
  },
  {
    id: "2",
    name: "Stellar Blockchain Hackathon",
    description:
      "Built StellarScholar - A Web3 Learn2Earn platform on Stellar blockchain",
    date: "2024",
    location: "Online",
    level: "International",
    organizer: "Stellar Development Foundation",
    tech: ["Stellar", "React", "Rust", "Supabase"],
    link: "https://github.com/omanandswami2005/stallar-hackthon",
  },
  {
    id: "3",
    name: "Hacktoberfest",
    description: "Contributed to open source projects and built LegaliTeaAI",
    date: "October 2024",
    location: "Online",
    level: "International",
    organizer: "DigitalOcean",
    tech: ["TypeScript", "React", "AI/ML"],
    link: "https://legalitea-genai.vercel.app",
  },
];

export const meetups: Meetup[] = [
  {
    id: "1",
    name: "Google Developer Group Pune",
    description:
      "Regular meetups discussing latest Google technologies and web development",
    date: "2023-2024",
    location: "Pune, Maharashtra",
    type: "Meetup",
    organizer: "GDG Pune",
    role: "Attendee",
    topics: ["Web Development", "Cloud", "AI/ML"],
  },
  {
    id: "2",
    name: "React Pune Meetup",
    description:
      "Community meetup for React developers to share knowledge and experiences",
    date: "2024",
    location: "Pune, Maharashtra",
    type: "Meetup",
    organizer: "React Pune Community",
    role: "Attendee",
    topics: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "3",
    name: "Tech Conference 2024",
    description:
      "Annual technology conference featuring latest trends in software development",
    date: "2024",
    location: "Mumbai, Maharashtra",
    type: "Conference",
    role: "Attendee",
    topics: ["Full Stack", "DevOps", "Cloud Native"],
  },
];
