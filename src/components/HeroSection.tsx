import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Play, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm animate-float">
              <Sparkles className="mr-2 h-4 w-4 text-purple-400" />
              Trusted by Purrify & 50+ SMBs
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Training Reps Costs
              <br />
              <span className="gradient-text">
                $5,000 & Several Months.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
              DialerGPT is the AI-powered training ground where your sales team masters their pitch, perfects objection handling, and builds confidence before risking a single lead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25 text-white border-0 px-8 py-6 text-lg transition-all hover:scale-105">
                Start Training Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium text-base border-purple-500/30 hover:bg-purple-500/10 text-foreground px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                See It In Action
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Unlimited Practice
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Real-time Feedback
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Ready for Enterprise
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
            {/* Main Dashboard Card */}
            <div className="relative w-full max-w-md glass-panel rounded-2xl p-6 transform rotate-y-12 hover:rotate-y-0 transition-all duration-500 ease-out">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rep Performance</h3>
                    <p className="text-xs text-muted-foreground">Live Training Session</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Objection Handling</span>
                    <span className="text-purple-400 font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Empathy Score</span>
                    <span className="text-blue-400 font-medium">88%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mt-6">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-200">AI Coach Feedback</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        "Great job pivoting on the pricing objection. Next time, try pausing after stating the value proposition."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -right-4 bottom-20 w-48 glass-card rounded-xl p-4 animate-float animation-delay-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-sm font-medium">Ramp Time</span>
              </div>
              <div className="text-2xl font-bold text-white">-60%</div>
              <p className="text-xs text-muted-foreground">vs Industry Avg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;