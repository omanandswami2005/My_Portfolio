import { ChevronDown, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ShinyText from "@/components/ui/ShinyText";
import { useTheme } from "@/providers/theme-provider";
import { techTags } from "@/data/tech-tags";
import { heroContent } from "@/data/hero";
import { socialLinks } from "@/data/social";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function HeroSection() {
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Omanand_Swami_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium">Hello, I'm</span>
              </div>

              {theme === "dark" ? (
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold relative">
                  <ShinyText
                    text={heroContent.title}
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                  <sub className="absolute -right-7 text-sm font-normal text-muted-foreground/70 animate-pulse">
                    (omiii)
                  </sub>
                </div>
              ) : (
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold relative">
                  <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {heroContent.title}
                  </h1>
                  <sub className="absolute -right-4 text-sm font-normal text-muted-foreground/70 animate-pulse">
                    (omiii)
                  </sub>
                </div>
              )}

              <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                {heroContent.subtitle}
              </p>
              <p className="text-1xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                and More...
              </p>
            </div>

            <p className="text-lg text-muted-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative overflow-hidden px-8"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative overflow-hidden px-8"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side avatar */}
          <div className="relative order-1 md:order-2">
            <div className="flex flex-col items-center space-y-6">
              {/* Profile Picture */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <OptimizedImage
                  src="/myavatar.jpeg"
                  alt="Profile Picture"
                  width={320}
                  height={320}
                  priority={true}
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                {/* Status Badge */}
                {/* <div className="absolute -bottom-2 -right-2 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/50 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="text-white text-xs font-medium">
                    Available
                  </span>
                </div> */}
                {/* Code Icon */}
                {theme === "dark" ? (
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                ) : (
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg">
                    <span className="text-2xl">💻</span>
                  </div>
                )}
              </div>

              {/* Quick Access Buttons */}
              <div className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full border-2 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                        onClick={() => window.open(social.href, "_blank")}
                      >
                        <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    );
                  })}
                </div>

                {/* Resume Download Button */}
                <Button
                  onClick={handleDownloadResume}
                  className="group relative overflow-hidden px-6 py-2 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    <span className="font-medium">Download Resume</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>

                {/* Quick Stats */}
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="px-3 py-1 text-xs">
                    <span className="font-semibold text-primary">8.52</span>
                    <span className="ml-1">CGPA</span>
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">
                    <span className="font-semibold text-primary">3rd</span>
                    <span className="ml-1">Year Student</span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
