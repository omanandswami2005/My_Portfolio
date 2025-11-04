import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "projects", title: "Projects" },
  { id: "academics", title: "Academics" },
  { id: "activities", title: "Activities" },
  { id: "certifications", title: "Certifications" },
  { id: "career-goals", title: "Career Goals" },
  { id: "learning", title: "Learning" },
  { id: "internships", title: "Internships" },
  { id: "blog", title: "Blog" },
  { id: "research", title: "Research" },
  { id: "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
];

export function SectionNavigator() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  // Keyboard shortcut: Alt + Number (1-9) to jump to sections
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && !isNaN(Number(e.key))) {
        const index = Number(e.key) - 1;
        if (index >= 0 && index < sections.length) {
          e.preventDefault();
          scrollToSection(sections[index].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className={cn(
              "h-14 w-14 rounded-full shadow-lg",
              "hover:scale-110 active:scale-95",
              "transition-all duration-200",
              "bg-primary hover:bg-primary/90"
            )}
            aria-label="Quick navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="left"
          align="end"
          className={cn(
            "w-64 p-2",
            "max-h-[70vh] overflow-y-auto",
            "animate-in slide-in-from-right-4 fade-in-0 duration-300"
          )}
        >
          <div className="space-y-1">
            <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
              Quick Navigation
              <p className="text-xs font-normal mt-1">
                Press Alt + (1-9) for quick access
              </p>
            </div>
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full flex items-center justify-between gap-2",
                  "px-3 py-2 rounded-md text-sm",
                  "transition-all duration-150",
                  "hover:bg-muted hover:translate-x-1",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeSection === section.id &&
                    "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                )}
              >
                <span className="flex items-center gap-2">
                  {index < 9 && (
                    <span className="text-xs text-muted-foreground w-4">
                      {index + 1}
                    </span>
                  )}
                  {section.title}
                </span>
                {activeSection === section.id && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
