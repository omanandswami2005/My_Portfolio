import { ExternalLink, Github, Globe } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { logEvent, EventCategories, EventActions } from "@/lib/analytics";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function ProjectsSection() {
  const handleProjectClick = (projectName: string, projectLink: string) => {
    logEvent(EventCategories.PROJECTS, EventActions.CLICK, projectName);
    window.location.href = projectLink;
  };

  return (
    <CollapsibleSection id="projects" heading="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="block cursor-pointer w-full"
            onClick={() => handleProjectClick(project.title, project.link)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleProjectClick(project.title, project.link)
            }
          >
            <SpotlightCard className="group h-full w-full">
              <div className="aspect-video relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background/50 to-background/80 shadow-lg ring-1 ring-border/20 hover:ring-primary/30 transition-all duration-300">
                {project.featured && (
                  <div className="absolute top-2 left-2 z-20">
                    <Badge className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-300"
                  priority={projects.indexOf(project) < 3}
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
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary px-2 py-1 rounded-md text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.githubLink || project.devpostLink) && (
                  <div
                    className="flex gap-3 pt-2 border-t border-border/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.devpostLink && (
                      <a
                        href={project.devpostLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Devpost
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 transition-colors ml-auto"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
