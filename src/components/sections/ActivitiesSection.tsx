import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  coCurricularActivities,
  extraCurricularActivities,
} from "@/data/activities";
import { Trophy, Users, Heart, Zap } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export function ActivitiesSection() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "National":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "State":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "University":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "College":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sports":
        return "⚽";
      case "Cultural":
        return "🎭";
      case "NSS":
        return "🤝";
      case "NCC":
        return "🎖️";
      case "Leadership":
        return "👑";
      case "Volunteer":
        return "❤️";
      default:
        return "🌟";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sports":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Cultural":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "NSS":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "NCC":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Leadership":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Volunteer":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <CollapsibleSection
      id="activities"
      heading={<>Leadership & Extracurricular Activities</>}
      description="Beyond academics - competitions, leadership roles, and community involvement"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="co-curricular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="co-curricular"
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Co-curricular Activities
            </TabsTrigger>
            <TabsTrigger
              value="extra-curricular"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Extra-curricular Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="co-curricular">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coCurricularActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={getLevelColor(activity.level)}>
                        {activity.level}
                      </Badge>
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">
                      {activity.activity}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Role:</span>
                        <Badge variant="outline">{activity.role}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Organizer:</span>
                        <span className="text-sm text-muted-foreground">
                          {activity.organizer}
                        </span>
                      </div>
                      {activity.award && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Award:</span>
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800"
                          >
                            {activity.award}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extra-curricular">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {extraCurricularActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={getCategoryColor(activity.category)}>
                        {getCategoryIcon(activity.category)} {activity.category}
                      </Badge>
                      {activity.duration && (
                        <Badge variant="outline" className="text-xs">
                          {activity.duration}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">
                      {activity.activity}
                    </CardTitle>
                    {activity.role && (
                      <Badge variant="secondary" className="w-fit">
                        {activity.role}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CollapsibleSection>
  );
}
