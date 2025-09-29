import React from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowRight, Upload, Phone, Tags, Play, Pause } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How DialerGPT Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system qualifies your leads in three simple steps,
            saving your sales team valuable time.
          </p>
        </div>

        <Tabs defaultValue="step1" className="w-full">
          <div className="flex flex-col items-center mb-8">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl">
              <TabsTrigger value="step1" className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
                  1
                </span>
                <span>Upload Leads</span>
              </TabsTrigger>
              <TabsTrigger value="step2" className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
                  2
                </span>
                <span>AI Qualification Calls</span>
              </TabsTrigger>
              <TabsTrigger value="step3" className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
                  3
                </span>
                <span>Lead Tagging</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="step1" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Upload Your Leads</h3>
                <p className="text-muted-foreground mb-6">
                  Simply upload your lead list from any source - ads, webinars,
                  website forms, or your existing CRM. We accept CSV, Excel, or
                  direct API integration with popular CRM platforms.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="w-5 h-5 text-primary" />
                    </div>
                    <span>Upload CSV or Excel files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span>Connect with your CRM</span>
                  </div>
                </div>
                <Button className="mt-6">Try It Free</Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg p-6 shadow-md">
                <div className="border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                  <h4 className="text-lg font-medium mb-2">
                    Drag & Drop Your Files
                  </h4>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Upload your CSV, Excel or connect directly to your CRM
                  </p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="step2" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  AI Qualification Calls
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our AI voice agent automatically calls your leads and asks 3-5
                  qualifying questions tailored to your business needs. The
                  conversations sound natural and gather key information to
                  determine lead quality.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>Natural-sounding AI voice calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span>Customizable qualifying questions</span>
                  </div>
                </div>
                <Button className="mt-6">Hear Sample Call</Button>
              </div>
              <div className="bg-muted rounded-lg p-6 shadow-md">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">AI Call in Progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <Pause className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm">
                          "Hello, this is Amy from DialerGPT. I'm calling about
                          your recent interest in AI sales solutions. Do you
                          have a minute to chat?"
                        </p>
                      </div>
                      <div className="bg-secondary/20 p-3 rounded-lg rounded-tr-none ml-auto">
                        <p className="text-sm">
                          "Yes, I was looking into tools to help our sales team
                          be more efficient."
                        </p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm">
                          "Great! How many leads does your team process monthly,
                          and what's your biggest challenge with lead
                          qualification?"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="step3" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  Lead Tagging & CRM Integration
                </h3>
                <p className="text-muted-foreground mb-6">
                  After the calls, leads are automatically tagged as Hot, Warm,
                  or Cold based on their responses. All data syncs seamlessly
                  with your CRM, allowing your sales team to focus only on the
                  most promising prospects.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Tags className="w-5 h-5 text-primary" />
                    </div>
                    <span>Automatic Hot/Warm/Cold tagging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span>Seamless CRM integration</span>
                  </div>
                </div>
                <Button className="mt-6">View Demo Dashboard</Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        Hot Lead
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        2 hours ago
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      John Smith - Budget confirmed, decision maker, needs
                      solution within 30 days
                    </p>
                  </div>

                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        Warm Lead
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        5 hours ago
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      Sarah Johnson - Interested, has budget, timeline unclear
                    </p>
                  </div>

                  <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                        Cold Lead
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        1 day ago
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      Mike Brown - Just researching, no budget allocated yet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Sample Conversation Transcript
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-xs text-primary-foreground font-medium">
                  AI
                </span>
              </div>
              <div>
                <p className="font-medium">DialerGPT AI</p>
                <p className="text-sm text-muted-foreground">
                  "Hello, this is Amy from DialerGPT. I'm calling about your
                  recent interest in AI sales solutions. Do you have a minute to
                  chat?"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="text-xs text-secondary-foreground font-medium">
                  L
                </span>
              </div>
              <div>
                <p className="font-medium">Lead</p>
                <p className="text-sm text-muted-foreground">
                  "Yes, I was looking into tools to help our sales team be more
                  efficient."
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-xs text-primary-foreground font-medium">
                  AI
                </span>
              </div>
              <div>
                <p className="font-medium">DialerGPT AI</p>
                <p className="text-sm text-muted-foreground">
                  "Great! How many leads does your team process monthly, and
                  what's your biggest challenge with lead qualification?"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="text-xs text-secondary-foreground font-medium">
                  L
                </span>
              </div>
              <div>
                <p className="font-medium">Lead</p>
                <p className="text-sm text-muted-foreground">
                  "We handle about 200 leads per month. Our biggest challenge is
                  identifying which ones are actually ready to buy versus just
                  browsing."
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-xs text-primary-foreground font-medium">
                  AI
                </span>
              </div>
              <div>
                <p className="font-medium">DialerGPT AI</p>
                <p className="text-sm text-muted-foreground">
                  "I understand. What's your current budget for a solution like
                  this, and what's your timeline for implementation?"
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline">View Full Transcript</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
