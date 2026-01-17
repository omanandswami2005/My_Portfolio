import { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionNavigator } from "@/components/ui/section-navigator";
import { ThemeProvider, useTheme } from "@/providers/theme-provider";
import Squares from "@/components/ui/Squares";
import { navItems } from "@/data/navigation";
import ReactGA from "react-ga4";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ActivitiesPage } from "@/pages/ActivitiesPage";

function AppContent() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Initialize Google Analytics
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
    }
  }, []);

  useEffect(() => {
    // Send page view on route change
    ReactGA.send({ hitType: "pageview", page: location.pathname });

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Only observe sections on home page
    if (!isHomePage) return;

    const sections = [
      "home",
      "about",
      "academics",
      "projects",
      "internships",
      "activities",
      "career-goals",
      "resume",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isHomePage]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    ReactGA.event({
      category: "Theme",
      action: "Toggle",
      label: theme === "light" ? "Dark" : "Light",
    });
  };

  return (
    <div className="min-h-screen bg-background/50 text-foreground transition-colors duration-300 relative">
      <ScrollProgress />

      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor={theme === "dark" ? "#fff" : "#000"}
        hoverFillColor={theme === "dark" ? "#222" : "#eee"}
      />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        navItems={navItems}
        setActiveSection={setActiveSection}
      />

      <main
        ref={mainRef}
        className="container mx-auto px-4 pt-4 pb-8 relative z-10"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <FloatingActionButton />
      <ScrollToTop />
      {isHomePage && <SectionNavigator />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
