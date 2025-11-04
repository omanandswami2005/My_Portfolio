import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { academicRecords, semesterGrades } from "@/data/academics";
import { languages } from "@/data/languages";
import { achievements } from "@/data/achievements";
import { GraduationCap, Globe, Award, Calendar } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function AcademicsSection() {
  const getProgressValue = (sgpa: string) => {
    return (parseFloat(sgpa) / 10) * 100;
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Native":
        return "bg-green-500";
      case "Fluent":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Basic":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "scholarship":
        return "🎓";
      case "technical":
        return "💻";
      case "university":
        return "🏆";
      case "competition":
        return "🥇";
      default:
        return "🏅";
    }
  };

  return (
    <CollapsibleSection
      id="academics"
      heading={<>Education & Academic Background</>}
      description="My educational journey, achievements, and language proficiencies"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Academic Records */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Academic Records
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {academicRecords.map((record, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/20 pl-4 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{record.level}</h3>
                    <Badge variant="outline">{record.year}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {record.institution}
                  </p>
                  {record.specialization && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {record.specialization}
                    </p>
                  )}
                  <div className="flex gap-2">
                    {record.percentage && (
                      <Badge variant="secondary">
                        Percentage: {record.percentage}
                      </Badge>
                    )}
                    {record.cgpa && (
                      <Badge variant="secondary">CGPA: {record.cgpa}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Semester Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Semester-wise Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {semesterGrades.map((grade, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {grade.semester}
                    </span>
                    <span className="text-sm font-semibold">{grade.sgpa}</span>
                  </div>
                  <Progress
                    value={getProgressValue(grade.sgpa)}
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Languages Known
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{language.name}</h3>
                    {language.level && (
                      <p className="text-sm text-muted-foreground">
                        {language.level}
                      </p>
                    )}
                  </div>
                  <Badge className={getProficiencyColor(language.proficiency)}>
                    {language.proficiency}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="border-l-2 border-primary/20 pl-4"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg">
                      {getAchievementIcon(achievement.type)}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                        {achievement.organization && (
                          <>
                            <span>•</span>
                            {achievement.organization}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </CollapsibleSection>
  );
}
