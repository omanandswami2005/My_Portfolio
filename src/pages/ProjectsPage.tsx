import { useState } from "react";
import { ExternalLink, Search, Filter } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { logEvent, EventCategories, EventActions } from "@/lib/analytics";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SEO } from "@/components/SEO";

export function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get all unique technologies
  const allTechs = Array.from(
    new Set(projects.flatMap((project) => project.tech)),
  ).sort();

  // Filter projects based on search and selected tech
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = !selectedTech || project.tech.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const handleProjectClick = (projectName: string, projectLink: string) => {
    logEvent(EventCategories.PROJECTS, EventActions.CLICK, projectName);
    window.open(projectLink, "_blank", "noopener,noreferrer");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Omanand Swami",
    description:
      "A collection of full-stack web development projects showcasing expertise in React, Node.js, TypeScript, AI/ML, and modern web technologies",
    url: "https://omanandswami.vercel.app/projects",
    author: {
      "@type": "Person",
      name: "Omanand Swami",
      url: "https://omanandswami.vercel.app",
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.link,
      keywords: project.tech.join(", "),
      image: project.image,
    })),
  };

  return (
    <>
      <SEO
        title="Projects - Omanand Swami"
        description="Explore my portfolio of full-stack web development projects including AI-powered applications, blockchain solutions, and modern web apps built with React, Node.js, TypeScript, and more."
        keywords="web development projects, React projects, Node.js applications, TypeScript projects, AI applications, blockchain projects, full stack portfolio"
        url="https://omanandswami.vercel.app/projects"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning web development, AI/ML, blockchain,
            and more. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tech Filter */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech(null)}
            >
              All
            </Button>
            {allTechs.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedTech(selectedTech === tech ? null : tech)
                }
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Button
              key={project.title}
              variant="ghost"
              className="block p-0 h-auto hover:bg-transparent w-full"
              onClick={() => handleProjectClick(project.title, project.link)}
            >
              <SpotlightCard className="group h-full w-full">
                <div className="aspect-video relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background/50 to-background/80 shadow-lg ring-1 ring-border/20 hover:ring-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    priority={projects.indexOf(project) < 6}
                  />
                </div>
                <div className="px-4 text-left">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base text-left">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant={
                          selectedTech === tech ? "default" : "secondary"
                        }
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Button>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedTech(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
