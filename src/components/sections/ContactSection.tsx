import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contactContent } from "@/data/contact";
import { socialLinks } from "@/data/social";
import { logEvent, EventCategories, EventActions } from "@/lib/analytics";
import { Mail, Phone, MapPin, Clock, Send, Linkedin } from "lucide-react";

export function ContactSection() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleSocialClick = (platform: string, url: string) => {
    logEvent(EventCategories.SOCIAL, EventActions.CLICK, platform);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="scroll-mt-16 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {contactContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      omanandswami2005@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Available for Remote Work
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="sm"
                        className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
                        onClick={() => handleSocialClick(link.label, link.href)}
                      >
                        <Icon className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        {link.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                {contactContent.cards.cooperation.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {contactContent.cards.cooperation.description}
              </p>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Button
                  className="w-full group relative overflow-hidden"
                  onClick={() =>
                    window.open("mailto:omanandswami2005@gmail.com", "_blank")
                  }
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Send Email
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/omanandswami2005",
                      "_blank"
                    )
                  }
                >
                  {socialLinks.find((link) => link.label === "Linkedin")
                    ?.icon &&
                    React.createElement(
                      socialLinks.find((link) => link.label === "Linkedin")!
                        .icon,
                      { className: "w-4 h-4 mr-2" }
                    )}
                  Connect on LinkedIn
                </Button>
              </div>

              {/* Status */}
              <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Available for opportunities
                  </Badge>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Open to freelance projects, collaborations, and full-time
                  opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
