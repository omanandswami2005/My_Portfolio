import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { researchPapers, researchStats } from "@/data/research";
import { FileText, ExternalLink, Users, Calendar, Award } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function ResearchSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "International":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "National":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "State":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <CollapsibleSection
      id="research"
      heading={<>Research Work & Publications</>}
      description={
        <>
          Academic research contributions and published papers in various
          conferences and journals
        </>
      }
      className="bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Research Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">
                {researchStats.totalPapers}
              </div>
              <p className="text-sm text-muted-foreground">Total Papers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">
                {researchStats.internationalPapers}
              </div>
              <p className="text-sm text-muted-foreground">International</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {researchStats.nationalPapers}
              </div>
              <p className="text-sm text-muted-foreground">National</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {researchStats.indexedPapers}
              </div>
              <p className="text-sm text-muted-foreground">Indexed</p>
            </CardContent>
          </Card>
        </div>

        {/* Research Papers */}
        <div className="space-y-6">
          {researchPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(paper.type)}>
                        {paper.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {paper.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight mb-2">
                      {paper.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <Users className="w-3 h-3" />
                      {paper.authors.join(", ")}
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {paper.journal}
                    </p>
                  </div>
                  {paper.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(paper.link, "_blank")}
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {paper.abstract && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  {paper.indexing && (
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Indexed in: {paper.indexing}</span>
                    </div>
                  )}
                  {paper.doi && (
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>DOI: {paper.doi}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {researchPapers.length === 0 && (
          <Card className="text-center border-dashed border-2 border-muted-foreground/30">
            <CardContent className="pt-12 pb-12">
              <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">Research in Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Currently working on research projects that will be published
                soon.
              </p>
              <Button variant="outline" size="sm">
                Contact for Collaboration
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </CollapsibleSection>
  );
}
