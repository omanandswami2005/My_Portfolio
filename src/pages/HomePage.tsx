import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AcademicsSection } from "@/components/sections/AcademicsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { InternshipsSection } from "@/components/sections/InternshipsSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { CareerGoalsSection } from "@/components/sections/CareerGoalsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SEO } from "@/components/SEO";

export function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omanand Swami",
    url: "https://omanandswami.vercel.app",
    image: "https://omanandswami.vercel.app/myavatar.jpeg",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies",
    sameAs: [
      "https://github.com/omanandswami2005",
      "https://linkedin.com/in/omanandswami",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Full Stack Development",
      "Web Development",
      "AI/ML",
    ],
  };

  return (
    <>
      <SEO
        title="Omanand Swami - Full Stack Developer Portfolio"
        description="Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Explore my projects, experience, and technical expertise."
        url="https://omanandswami.vercel.app"
        structuredData={structuredData}
      />
      <div className="space-y-16 md:space-y-24">
        <div className="relative min-h-[80vh] w-full">
          <HeroSection />
        </div>
        <AboutSection />
        <AcademicsSection />
        <ProjectsSection />
        <InternshipsSection />
        <ActivitiesSection />
        <CareerGoalsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  );
}
