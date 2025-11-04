import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { careerGoals, areasOfInterest } from "@/data/career-goals";
import { Target, Clock, Lightbulb, TrendingUp } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function CareerGoalsSection() {
  const shortTermGoals = careerGoals.filter(
    (goal) => goal.type === "short-term"
  );
  const longTermGoals = careerGoals.filter((goal) => goal.type === "long-term");

  return (
    <CollapsibleSection
      id="career-goals"
      heading={<>Career Objectives & Professional Goals</>}
      description={
        <>
          My professional aspirations and areas of interest for continuous
          growth
        </>
      }
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Career Goals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Target className="w-6 h-6" />
              Career Goals
            </h3>

            <Tabs defaultValue="short-term" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="short-term"
                  className="flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Short-term
                </TabsTrigger>
                <TabsTrigger
                  value="long-term"
                  className="flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  Long-term
                </TabsTrigger>
              </TabsList>

              <TabsContent value="short-term" className="space-y-4 mt-6">
                {shortTermGoals.map((goal, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        {goal.timeline && (
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800"
                          >
                            {goal.timeline}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="long-term" className="space-y-4 mt-6">
                {longTermGoals.map((goal, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        {goal.timeline && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800"
                          >
                            {goal.timeline}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Areas of Interest */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Lightbulb className="w-6 h-6" />
              Areas of Interest
            </h3>

            <div className="space-y-4">
              {areasOfInterest.map((area, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Related Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {area.relatedSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Future Learning Plans */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Future Learning Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Stay updated with latest technologies and industry trends
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Skill Development</h4>
                <p className="text-sm text-muted-foreground">
                  Focus on both technical and soft skills enhancement
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Career Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Progress towards leadership and technical expertise roles
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CollapsibleSection>
  );
}
