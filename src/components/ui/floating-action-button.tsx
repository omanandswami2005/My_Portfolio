import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, X, Mail, Phone, Linkedin, Github } from "lucide-react";
import { socialLinks } from "@/data/social";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:omanandswami2005@gmail.com", "_blank"),
      className: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () =>
        window.open("https://www.linkedin.com/in/omanandswami2005", "_blank"),
      className: "bg-blue-700 hover:bg-blue-800",
    },
    {
      icon: Github,
      label: "GitHub",
      action: () =>
        window.open("https://github.com/omanandswami2005", "_blank"),
      className: "bg-gray-800 hover:bg-gray-900",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Action Buttons */}
      <div
        className={cn(
          "flex flex-col gap-3 mb-4 transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              size="icon"
              className={cn(
                "w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                action.className,
                "animate-in slide-in-from-bottom-2"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => {
                action.action();
                setIsOpen(false);
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{action.label}</span>
            </Button>
          );
        })}
      </div>

      {/* Main FAB */}
      <Button
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-primary hover:bg-primary/90",
          isOpen && "rotate-45"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        <span className="sr-only">Contact options</span>
      </Button>
    </div>
  );
}
