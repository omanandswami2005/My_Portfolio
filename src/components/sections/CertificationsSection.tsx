import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import { ExternalLink, Calendar, Clock, Award } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function CertificationsSection() {
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "coursera":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "edx":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "aws training":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "udemy":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <CollapsibleSection
      id="certifications"
      heading={<>Certifications & Lifelong Learning</>}
      description={
        <>
          Continuous learning through online courses and professional
          certifications
        </>
      }
      className="bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className={getPlatformColor(cert.platform)}>
                    {cert.platform}
                  </Badge>
                  {cert.certificateLink && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                      onClick={() =>
                        window.open(cert.certificateLink, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {cert.courseName}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.completionDate}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* SDG Goals */}
                {cert.sdgGoals && cert.sdgGoals.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">SDG Goals:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.sdgGoals.map((goal) => (
                        <Badge
                          key={goal}
                          variant="secondary"
                          className="text-xs"
                        >
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Self Evaluation */}
                {cert.selfEvaluation && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Self-Evaluation:
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.selfEvaluation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
}
