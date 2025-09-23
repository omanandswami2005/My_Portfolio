import { useState, useMemo } from "react";
import { learningEntries, type LearningEntry } from "@/data/learning";

export function useLearningEntries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEntries = useMemo(() => {
    return learningEntries.filter((entry) => {
      const matchesCategory =
        selectedCategory === "all" || entry.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tags?.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const sortedEntries = useMemo(() => {
    return [...filteredEntries].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredEntries]);

  const entriesByCategory = useMemo(() => {
    return learningEntries.reduce((acc, entry) => {
      acc[entry.category] = (acc[entry.category] || 0) + 1;
      return acc;
    }, {} as Record<LearningEntry["category"], number>);
  }, []);

  const totalEntries = learningEntries.length;
  const recentEntries = useMemo(() => {
    return [...learningEntries]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  return {
    entries: sortedEntries,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    entriesByCategory,
    totalEntries,
    recentEntries,
    filteredCount: filteredEntries.length,
  };
}
