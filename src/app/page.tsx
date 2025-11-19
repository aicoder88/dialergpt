"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ROISection from "@/components/ROISection";
import AnalyticsSection from "@/components/AnalyticsSection";
import PricingSection from "@/components/PricingSection";
import QuizModal from "@/components/QuizModal";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Vote, Server, Shield, Activity } from "lucide-react";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 border-b border-white/10 backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="DialerGPT Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight">DialerGPT</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => setIsQuizOpen(true)}
            className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-purple-400"
          >
            <Vote className="h-4 w-4" />
            Help Us Build
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <Button variant="ghost" className="hidden md:flex hover:bg-white/5">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Technical Credibility Banner */}
      <div className="w-full border-y border-white/10 bg-black/40 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Server className="h-5 w-5 text-purple-500" />
            <span className="font-medium">Serverless Architecture</span>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Low-Latency Transcription</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="font-medium">SOC2 & HIPAA Ready</span>
          </div>
        </div>
      </div>

      {/* Features Section (AWS Mapping) */}
      <FeaturesSection />

      {/* ROI Section (The Economics) */}
      <ROISection />

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="DialerGPT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">DialerGPT</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The AI-powered training platform that helps sales teams ramp faster, churn less, and close more.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DialerGPT. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}