import {
  Globe,
  Code2,
  Award,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Trophy,
  Building,
  Target,
  FileText,
  Search,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Globe },
  { id: "about", label: "About", icon: Code2 },
  { id: "academics", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: BookOpen },
  { id: "projects", label: "Projects", icon: Award },
  { id: "research", label: "Research", icon: Search },
  { id: "internships", label: "Experience", icon: Building },
  { id: "activities", label: "Activities", icon: Trophy },
  { id: "learning", label: "Learning", icon: BookOpen },
  { id: "career-goals", label: "Goals", icon: Target },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: MessageSquare },
];
