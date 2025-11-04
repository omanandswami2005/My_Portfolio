import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { internships } from "@/data/internships";
import { Building, Clock, ExternalLink, Lightbulb, Wrench } from "lucide-react";

export function InternshipsSection() {
  return (
    <section id="internships" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience & Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical industry experience and hands-on learning opportunities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((internship) => (
            <Card
              key={internship.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <Badge variant="secondary">{internship.duration}</Badge>
                  </div>
                  {/* {internship.certificate && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                      onClick={() =>
                        window.open(internship.certificate, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )} */}
                </div>
                <CardTitle className="text-xl">
                  {internship.organization}
                </CardTitle>
                <Badge variant="outline" className="w-fit">
                  {internship.role}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Wrench className="w-4 h-4" />
                    Tools & Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {internship.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learning Outcome */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Lightbulb className="w-4 h-4" />
                    Learning Outcome:
                  </h4>
                  <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                    {internship.learningOutcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Internship CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto border-dashed border-2 border-muted-foreground/30">
            <CardContent className="pt-6">
              <Building className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">Looking for Opportunities</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Open to internships and training programs in software
                development, data science, and emerging technologies.
              </p>
              <Button variant="outline" size="sm">
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
