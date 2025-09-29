import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-background to-background/95 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="mr-1">✨</span> AI-Powered Lead Qualification
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Stop Cold Calling.
              <br />
              <span className="text-primary">Start Smart Calling.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[600px]">
              Let AI qualify your leads through intelligent voice calls. Focus
              only on hot prospects and save valuable sales time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium text-base">
                Try Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium text-base"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                Free tier available
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-background rounded-xl border shadow-xl overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="mx-auto text-sm font-medium">
                    DialerGPT Dashboard
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">AI Call in Progress</h3>

                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Calling John Smith</p>
                      <p className="text-sm text-muted-foreground">
                        Marketing Director at Acme Inc.
                      </p>
                    </div>
                  </div>

                  <Card className="p-4 bg-muted/50">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
                          AI
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[80%]">
                          Hi John, this is Amy from DialerGPT. I'm calling to
                          follow up on your interest in our AI solutions. Do you
                          have a minute to chat?
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <div className="bg-secondary/10 rounded-lg p-3 text-sm max-w-[80%]">
                          Sure, I've been looking for ways to improve our lead
                          qualification process.
                        </div>
                        <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium">
                          JS
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
                          AI
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[80%]">
                          Great! Could you tell me about your current sales team
                          size and how many leads you process monthly?
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Qualifying Questions: 2/5
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium text-green-500">
                        Live Call
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 border-green-500/50 bg-green-500/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">
                        12
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Hot Leads
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-yellow-500/50 bg-yellow-500/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-500">
                        28
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Warm Leads
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-blue-500/50 bg-blue-500/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">45</div>
                      <div className="text-xs text-muted-foreground">
                        Cold Leads
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -z-10 top-20 left-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
