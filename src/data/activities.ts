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

export const coCurricularActivities: CoCurricularActivity[] = [
  {
    id: "1",
    activity: "Hackathon",
    level: "National",
    role: "Finalist",
    organizer: "AICTE",
    award: "Top 10 Finalist",
    certificate: "certificate.pdf",
  },
  {
    id: "2",
    activity: "Technical Paper Presentation",
    level: "State",
    role: "Presenter",
    organizer: "IEEE Student Chapter",
    award: "Best Paper Award",
  },
  {
    id: "3",
    activity: "Coding Contest",
    level: "University",
    role: "Winner",
    organizer: "Computer Science Department",
    award: "First Prize",
  },
];

export const extraCurricularActivities: ExtraCurricularActivity[] = [
  {
    id: "1",
    category: "Sports",
    activity: "Basketball Team Captain",
    role: "Captain",
    description: "Led university basketball team to inter-college championship",
    duration: "2023-2024",
  },
  {
    id: "2",
    category: "Cultural",
    activity: "Drama Club",
    role: "Member",
    description:
      "Participated in various cultural events and drama competitions",
    duration: "2022-2024",
  },
  {
    id: "3",
    category: "NSS",
    activity: "Community Service",
    role: "Volunteer",
    description:
      "Organized blood donation camps and environmental awareness programs",
    duration: "2023-2024",
  },
  {
    id: "4",
    category: "Leadership",
    activity: "Class Representative",
    role: "Class Rep",
    description: "Represented class in academic and administrative matters",
    duration: "2023-2024",
  },
];
