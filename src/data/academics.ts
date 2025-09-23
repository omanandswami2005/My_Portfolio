export interface AcademicRecord {
  level: string;
  institution: string;
  year: string;
  percentage?: string;
  cgpa?: string;
  specialization?: string;
}

export interface SemesterGrade {
  semester: string;
  sgpa: string;
}

export const academicRecords: AcademicRecord[] = [
  {
    level: "10th Standard (SSC)",
    institution: "Maharashtra State Board",
    year: "2021",
    percentage: "92.20%",
  },
  {
    level: "Diploma in Computer Engineering",
    institution: "Polytechnic College",
    year: "2021-2024",
    percentage: "90.57%",
    specialization: "Computer Engineering",
  },
  {
    level: "B.Tech (Direct Second Year)",
    institution: "JSPM's Rajarshri Shahu College of Engineering, Pune",
    year: "2024-2027",
    cgpa: "8.52",
    specialization: "Computer Science and Business Systems (SPPU, Pune)",
  },
];

export const semesterGrades: SemesterGrade[] = [
  { semester: "Semester 1 (Diploma)", sgpa: "9.2" },
  { semester: "Semester 2 (Diploma)", sgpa: "9.0" },
  { semester: "Semester 3 (Diploma)", sgpa: "9.1" },
  { semester: "Semester 4 (Diploma)", sgpa: "8.9" },
  { semester: "Semester 5 (Diploma)", sgpa: "9.0" },
  { semester: "Semester 6 (Diploma)", sgpa: "9.1" },
  { semester: "Semester 3 (B.Tech)", sgpa: "8.5" },
  { semester: "Semester 4 (B.Tech)", sgpa: "8.6" },
  { semester: "Semester 5 (B.Tech)", sgpa: "8.5" },
];
