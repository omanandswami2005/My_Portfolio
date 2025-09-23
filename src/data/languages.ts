export interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Intermediate" | "Basic";
  level?: string;
}

export const languages: Language[] = [
  {
    name: "English",
    proficiency: "Fluent",
    level: "Medium of Instruction",
  },
  {
    name: "Hindi",
    proficiency: "Fluent",
    level: "Great Proficiency",
  },
  {
    name: "Marathi",
    proficiency: "Native",
    level: "Mother Tongue",
  },
];
