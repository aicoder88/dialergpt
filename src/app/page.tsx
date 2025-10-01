"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import QuizModal from "@/components/QuizModal";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Database, Sparkles, Target, Shield, Vote } from "lucide-react";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    // Auto-open quiz on page load after a short delay
    const timer = setTimeout(() => {
      setIsQuizOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Zap className="h-6 w-6 text-purple-600" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
          </div>
          <span className="font-bold text-xl gradient-text">DialerGPT</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsQuizOpen(true)}
            className="hidden sm:flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <Vote className="h-4 w-4" />
            Help Us Build
          </Button>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button variant="ghost" className="hidden md:flex">
            Login
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Docs
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 brand-shadow">
            Try Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Cards */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-pink-950/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/50 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              Why Sales Teams Choose DialerGPT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Transform Your Sales Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of sales teams who've revolutionized their lead qualification with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 brand-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                  Save 19% of Sales Time
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eliminate administrative overhead and focus your sales team on
                  closing deals with qualified prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 brand-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Pay Only for Qualified Leads
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stop wasting resources on cold prospects. Our AI identifies
                  who's ready to buy now.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 brand-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                  Seamless CRM Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically sync qualified leads with your existing CRM
                  system for a smooth workflow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Upsell Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-purple-50/50 dark:from-orange-950/20 dark:via-pink-950/10 dark:to-purple-950/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/50 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300 mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Need More Leads?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Supercharge your sales pipeline with our premium lead generation and
            AI SDR services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 brand-shadow">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                  Lead Generation Service
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Get high-quality leads tailored to your industry and target
                  market. Starting at $20 per qualified lead.
                </p>
                <Button variant="outline" className="mt-auto border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950/50">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/50 dark:to-purple-950/50 brand-shadow">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">
                  AI SDR Service
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Let our AI handle follow-up calls and appointment setting. Pay
                  only for talk time at $0.10-0.25/minute.
                </p>
                <Button variant="outline" className="mt-auto border-pink-200 hover:bg-pink-50 dark:border-pink-800 dark:hover:bg-pink-950/50">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 lg:px-24 border-t bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Zap className="h-6 w-6 text-purple-600" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
              </div>
              <span className="font-bold text-xl gradient-text">DialerGPT</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered lead qualification that saves time and increases sales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DialerGPT. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}