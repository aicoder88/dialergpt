"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ROISection from "@/components/ROISection";
import AnalyticsSection from "@/components/AnalyticsSection";
import PricingSection from "@/components/PricingSection";
import TrustedBySection from "@/components/TrustedBySection";
import { Server, Shield, Activity } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background overflow-x-hidden">

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

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

    </main>
  );
}