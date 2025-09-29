import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Phone, CheckCircle, Play, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-pink-950/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 dark:border-purple-800 px-6 py-3 text-sm font-medium text-purple-700 dark:text-purple-300 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Lead Qualification
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Stop Cold Calling.
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Start Smart Calling.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
              Let AI qualify your leads through intelligent voice calls. Focus
              only on hot prospects and save valuable sales time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 brand-shadow text-white border-0 px-8 py-6 text-lg">
                Try Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium text-base border-2 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/50 px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Free tier available
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Setup in 5 minutes
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-800/50 shadow-2xl overflow-hidden brand-shadow">
              <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50">
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
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">AI Call in Progress</h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-sm font-medium text-green-500">
                        Live Call
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <Phone className="h-8 w-8 text-white animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Calling John Smith</p>
                      <p className="text-sm text-muted-foreground">
                        Marketing Director at Acme Inc.
                      </p>
                    </div>
                  </div>

                  <Card className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 border-0">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-medium text-white">
                          AI
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-lg p-3 text-sm max-w-[80%]">
                          Hi John, this is Amy from DialerGPT. I'm calling to
                          follow up on your interest in our AI solutions. Do you
                          have a minute to chat?
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-lg p-3 text-sm max-w-[80%]">
                          Sure, I've been looking for ways to improve our lead
                          qualification process.
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xs font-medium text-white">
                          JS
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-medium text-white">
                          AI
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-lg p-3 text-sm max-w-[80%]">
                          Great! Could you tell me about your current sales team
                          size and how many leads you process monthly?
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-muted-foreground">
                      Qualifying Questions: 2/5
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 px-3 py-1 rounded-full">
                      <span className="text-purple-700 dark:text-purple-300 font-medium">
                        92% Confidence
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        12
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Hot Leads
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                        28
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Warm Leads
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</div>
                      <div className="text-xs text-muted-foreground">
                        Cold Leads
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;