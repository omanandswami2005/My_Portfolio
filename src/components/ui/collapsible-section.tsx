import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  defaultOpen?: boolean;
  autoExpandOnScroll?: boolean;
}

export function CollapsibleSection({
  id,
  heading,
  description,
  defaultOpen = false,
  autoExpandOnScroll = true,
  className,
  children,
  ...rest
}: CollapsibleSectionProps) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const [hasBeenViewed, setHasBeenViewed] = React.useState(defaultOpen);

  // Auto-expand on scroll using IntersectionObserver
  React.useEffect(() => {
    if (!autoExpandOnScroll || hasBeenViewed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setIsOpen(true);
            setHasBeenViewed(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => observer.disconnect();
  }, [autoExpandOnScroll, hasBeenViewed]);

  // Sync details open state with React state
  React.useEffect(() => {
    if (detailsRef.current && detailsRef.current.open !== isOpen) {
      detailsRef.current.open = isOpen;
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const sections = Array.from(
        document.querySelectorAll("section[id] details")
      );
      const currentIndex = sections.findIndex((s) => s === detailsRef.current);

      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        (
          sections[currentIndex + 1].querySelector("summary") as HTMLElement
        )?.focus();
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        (
          sections[currentIndex - 1].querySelector("summary") as HTMLElement
        )?.focus();
      }
    }
  };

  return (
    <section
      id={id}
      className={cn("scroll-mt-16 py-4 md:py-6", className)}
      {...rest}
    >
      <details
        ref={detailsRef}
        className={cn(
          "group rounded-xl border bg-card text-card-foreground shadow-sm",
          "transition-all duration-300 ease-out",
          "open:shadow-lg open:border-primary/20"
        )}
        open={isOpen}
        onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary
          className={cn(
            "flex w-full cursor-pointer list-none items-start justify-between gap-4",
            "p-4 md:p-6 rounded-xl",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "hover:bg-muted/50 active:bg-muted/70",
            "transition-all duration-200 ease-in-out"
          )}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-expanded={isOpen}
        >
          <div className="flex-1 transition-transform duration-200 group-open:translate-x-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 transition-colors duration-200 group-hover:text-primary">
              {heading}
            </h2>
            {description ? (
              <p className="text-sm md:text-base text-muted-foreground transition-opacity duration-200">
                {description}
              </p>
            ) : null}
          </div>
          <div
            aria-hidden
            className={cn(
              "mt-1 rounded-md border bg-background p-2 text-muted-foreground shrink-0",
              "transition-all duration-300 ease-out",
              "group-open:rotate-180 group-open:bg-primary group-open:text-primary-foreground group-open:border-primary",
              "group-hover:scale-110 group-active:scale-95"
            )}
          >
            <ChevronDown className="h-5 w-5" />
          </div>
        </summary>
        <div
          className={cn(
            "overflow-hidden",
            "animate-in slide-in-from-top-4 fade-in-0 duration-500 ease-out"
          )}
        >
          <div className="px-4 pb-4 md:px-6 md:pb-6 pt-2">{children}</div>
        </div>
      </details>
    </section>
  );
}
