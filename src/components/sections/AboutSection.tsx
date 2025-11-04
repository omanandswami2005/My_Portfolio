import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills, technicalSkills, competitiveProgramming } from "@/data/skills";
import { aboutContent } from "@/data/about";
import { Code, Trophy, ExternalLink } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function AboutSection() {
  return (
    <CollapsibleSection
      id="about"
      heading="About Me"
      description={
        <>
          Passionate developer with a strong foundation in computer science and
          hands-on experience in modern technologies
        </>
      }
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Professional Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.introduction}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="domain">Domain</TabsTrigger>
              </TabsList>

              {technicalSkills.map((category) => (
                <TabsContent
                  key={category.title.toLowerCase().replace(/[^a-z]/g, "")}
                  value={
                    category.title.toLowerCase().includes("programming")
                      ? "programming"
                      : category.title.toLowerCase().includes("tools")
                      ? "tools"
                      : category.title.toLowerCase().includes("software")
                      ? "software"
                      : "domain"
                  }
                  className="mt-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Competitive Programming - Hidden for now */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competitive Programming Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {competitiveProgramming.map((platform) => (
                <div
                  key={platform.platform}
                  className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold mb-2">{platform.platform}</h4>
                  <Badge variant="secondary" className="mb-2">
                    {platform.ranking}
                  </Badge>
                  {platform.profileUrl && (
                    <div className="mt-2">
                      <a
                        href={platform.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center justify-center gap-1"
                      >
                        View Profile <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </CollapsibleSection>
  );
}
