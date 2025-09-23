export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  type: "State" | "National" | "International";
  date: string;
  indexing?: string;
  doi?: string;
  link?: string;
  abstract?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "1",
    title: "Machine Learning Approaches for Predictive Healthcare Analytics",
    authors: ["John Doe", "Dr. Jane Smith", "Prof. Robert Johnson"],
    journal: "International Journal of Computer Science and Applications",
    type: "International",
    date: "2024",
    indexing: "Scopus, IEEE Xplore",
    doi: "10.1109/example.2024.123456",
    link: "https://ieeexplore.ieee.org/document/example",
    abstract:
      "This paper presents novel machine learning approaches for predictive healthcare analytics, focusing on early disease detection and patient outcome prediction.",
  },
  {
    id: "2",
    title: "Blockchain-based Secure Data Sharing in IoT Networks",
    authors: ["John Doe", "Dr. Alice Brown"],
    journal: "National Conference on Emerging Technologies",
    type: "National",
    date: "2023",
    indexing: "IEEE Xplore",
    abstract:
      "A comprehensive study on implementing blockchain technology for secure data sharing in Internet of Things networks.",
  },
  {
    id: "3",
    title: "Optimization Algorithms for Smart Grid Energy Management",
    authors: ["John Doe", "Team Members"],
    journal: "State Level Technical Symposium",
    type: "State",
    date: "2023",
    abstract:
      "Research on optimization algorithms to improve energy efficiency in smart grid systems.",
  },
];

export const researchStats = {
  totalPapers: researchPapers.length,
  internationalPapers: researchPapers.filter((p) => p.type === "International")
    .length,
  nationalPapers: researchPapers.filter((p) => p.type === "National").length,
  statePapers: researchPapers.filter((p) => p.type === "State").length,
  indexedPapers: researchPapers.filter((p) => p.indexing).length,
};
