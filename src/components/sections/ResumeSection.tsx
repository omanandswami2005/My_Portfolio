import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, ExternalLink } from "lucide-react";

export function ResumeSection() {
  const handleDownloadResume = () => {
    // Replace with actual resume file path
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Omanand_Swami_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Replace with actual resume file path or viewer URL
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download or view my latest resume with comprehensive details about
            my experience and skills
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">My Resume</CardTitle>
              <p className="text-muted-foreground">
                Latest version updated with recent projects and achievements
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Resume Preview Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">What's included:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Professional experience and internships</li>
                  <li>• Technical skills and certifications</li>
                  <li>• Academic background and achievements</li>
                  <li>• Projects and publications</li>
                  <li>• Contact information and references</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleViewResume}
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Eye className="w-4 h-4" />
                  View Resume
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>

              {/* Additional Links */}
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 text-center">
                  Also available on:
                </h4>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/omanandswami2005",
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://github.com/omanandswami2005",
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
