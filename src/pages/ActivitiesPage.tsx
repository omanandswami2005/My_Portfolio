import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  coCurricularActivities,
  extraCurricularActivities,
  hackathons,
  meetups,
} from "@/data/activities";
import { Trophy, Users, Code, Calendar, Search, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";

export function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
      case "International":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
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

  // Filter functions
  const filterBySearch = (items: any[]) => {
    if (!searchTerm) return items;
    return items.filter(
      (item) =>
        item.activity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.organizer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Activities & Events - Omanand Swami",
    description:
      "Hackathons, meetups, competitions, and extracurricular activities participated by Omanand Swami",
    url: "https://omanandswami.vercel.app/activities",
    author: {
      "@type": "Person",
      name: "Omanand Swami",
      url: "https://omanandswami.vercel.app",
    },
  };

  return (
    <>
      <SEO
        title="Activities & Events - Omanand Swami"
        description="Explore hackathons, tech meetups, competitions, and extracurricular activities. Active participation in the tech community and leadership roles."
        keywords="hackathons, tech meetups, coding competitions, tech events, developer community, extracurricular activities, leadership"
        url="https://omanandswami.vercel.app/activities"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Activities & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics - hackathons, meetups, competitions, leadership
            roles, and community involvement
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="hackathons" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="hackathons" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Hackathons
            </TabsTrigger>
            <TabsTrigger value="meetups" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Meetups
            </TabsTrigger>
            <TabsTrigger
              value="co-curricular"
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Competitions
            </TabsTrigger>
            <TabsTrigger
              value="extra-curricular"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Extracurricular
            </TabsTrigger>
          </TabsList>

          {/* Hackathons Tab */}
          <TabsContent value="hackathons">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterBySearch(hackathons).map((hackathon) => (
                <Card
                  key={hackathon.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={getLevelColor(hackathon.level)}>
                        {hackathon.level}
                      </Badge>
                      <Code className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{hackathon.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {hackathon.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{hackathon.location}</span>
                      </div>
                      {hackathon.organizer && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Organizer:
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {hackathon.organizer}
                          </span>
                        </div>
                      )}
                      {hackathon.achievement && (
                        <Badge
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        >
                          {hackathon.achievement}
                        </Badge>
                      )}
                      {hackathon.tech && hackathon.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {hackathon.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Meetups Tab */}
          <TabsContent value="meetups">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterBySearch(meetups).map((meetup) => (
                <Card
                  key={meetup.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary">{meetup.type}</Badge>
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{meetup.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {meetup.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{meetup.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{meetup.location}</span>
                      </div>
                      {meetup.organizer && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Organizer:
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {meetup.organizer}
                          </span>
                        </div>
                      )}
                      {meetup.role && (
                        <Badge variant="outline">{meetup.role}</Badge>
                      )}
                      {meetup.topics && meetup.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {meetup.topics.map((topic) => (
                            <Badge
                              key={topic}
                              variant="outline"
                              className="text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Co-curricular Tab */}
          <TabsContent value="co-curricular">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterBySearch(coCurricularActivities).map((activity) => (
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

          {/* Extra-curricular Tab */}
          <TabsContent value="extra-curricular">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterBySearch(extraCurricularActivities).map((activity) => (
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
    </>
  );
}
