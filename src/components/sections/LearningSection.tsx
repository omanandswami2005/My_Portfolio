import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  learningEntries,
  learningCategories,
  type LearningEntry,
} from "@/data/learning";
import {
  Calendar,
  ExternalLink,
  BookOpen,
  Award,
  Code,
  Lightbulb,
} from "lucide-react";
import { format } from "date-fns";

const categoryIcons = {
  technical: Code,
  project: Lightbulb,
  certification: Award,
  general: BookOpen,
};

const categoryColors = {
  technical: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  project: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  certification:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  general:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export function LearningSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredEntries = learningEntries.filter(
    (entry) => selectedCategory === "all" || entry.category === selectedCategory
  );

  const displayedEntries = showAll
    ? filteredEntries
    : filteredEntries.slice(0, 6);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM dd, yyyy");
    } catch {
      return dateString;
    }
  };

  const getCategoryIcon = (category: LearningEntry["category"]) => {
    const Icon = categoryIcons[category];
    return <Icon className="w-4 h-4" />;
  };

  return (
    <section id="learning" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal Learning & Reflections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A running log of my learning journey, documenting new skills,
            projects, and insights gained along the way.
          </p>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {learningCategories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="text-xs md:text-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {learningCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedEntries.map((entry) => (
                  <Card
                    key={entry.id}
                    className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(entry.category)}
                          <Badge
                            variant="secondary"
                            className={`${
                              categoryColors[entry.category]
                            } text-xs`}
                          >
                            {entry.category}
                          </Badge>
                        </div>
                        {entry.link && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                            onClick={() => window.open(entry.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {entry.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(entry.date)}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed mb-4">
                        {entry.description}
                      </CardDescription>
                      {entry.tags && entry.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {entry.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredEntries.length > 6 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                    className="min-w-[120px]"
                  >
                    {showAll
                      ? "Show Less"
                      : `Show All (${filteredEntries.length})`}
                  </Button>
                </div>
              )}

              {filteredEntries.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    No learning entries found for this category.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
