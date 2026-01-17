import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  activeSection: string;
  navItems: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export function Navbar({
  theme,
  toggleTheme,
  activeSection,
  navItems,
  setActiveSection,
}: NavbarProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolling(lastScrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavItems = navItems.filter((item) =>
    ["home", "about", "contact"].includes(item.id),
  );

  const academicItems = navItems.filter((item) =>
    ["academics", "certifications", "research"].includes(item.id),
  );

  const experienceItems = navItems.filter((item) =>
    ["projects", "internships", "activities"].includes(item.id),
  );

  const otherItems = navItems.filter((item) =>
    ["learning", "career-goals", "resume"].includes(item.id),
  );

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    // Check if we need to navigate to a different page
    if (id === "projects" && location.pathname !== "/projects") {
      navigate("/projects");
    } else if (id === "activities" && location.pathname !== "/activities") {
      navigate("/activities");
    } else if (location.pathname !== "/") {
      // If on a different page, go to home first
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      // Same page, just scroll
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolling
            ? theme === "light"
              ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm"
              : "bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="relative h-10 w-10">
              <OptimizedImage
                src="./myavatar.jpeg"
                alt="logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 ring-2 ring-gray-300/60"
              />
            </div>
            <span className="font-bold text-lg hidden sm:block">
              Omanand's Portfolio
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map(({ id, label }) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative",
                  activeSection === id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 flex items-center gap-1",
                    academicItems.some((item) => item.id === activeSection)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  Education
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {academicItems.map(({ id, label, icon: Icon }) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={cn(
                      "flex items-center gap-2 cursor-pointer",
                      activeSection === id && "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 flex items-center gap-1",
                    experienceItems.some((item) => item.id === activeSection)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  Portfolio
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {experienceItems.map(({ id, label, icon: Icon }) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={cn(
                      "flex items-center gap-2 cursor-pointer",
                      activeSection === id && "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {otherItems.map(({ id, label }) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm font-medium transition-all duration-300",
                  activeSection === id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted/50 transition-all duration-300"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden border-t transition-all duration-300",
              theme === "light"
                ? "bg-white/95 backdrop-blur-xl border-zinc-200/50"
                : "bg-zinc-900/95 backdrop-blur-xl border-zinc-800/50",
            )}
          >
            <div className="container mx-auto px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
                  Main
                </h3>
                {primaryNavItems.map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start gap-3",
                      activeSection === id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => handleNavClick(id)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
                  Education
                </h3>
                {academicItems.map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start gap-3",
                      activeSection === id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => handleNavClick(id)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
                  Portfolio
                </h3>
                {experienceItems.map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start gap-3",
                      activeSection === id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => handleNavClick(id)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
                  Professional
                </h3>
                {otherItems.map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start gap-3",
                      activeSection === id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => handleNavClick(id)}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16" />
    </>
  );
}
