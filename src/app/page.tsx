import React from "react";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Database } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 border-b">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">DialerGPT</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">
            Login
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Docs
          </Button>
          <Button>Try Free</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Cards */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Sales Teams Choose DialerGPT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Save 19% of Sales Time
                </h3>
                <p className="text-muted-foreground">
                  Eliminate administrative overhead and focus your sales team on
                  closing deals with qualified prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Pay Only for Qualified Leads
                </h3>
                <p className="text-muted-foreground">
                  Stop wasting resources on cold prospects. Our AI identifies
                  who's ready to buy now.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Seamless CRM Integration
                </h3>
                <p className="text-muted-foreground">
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
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Leads?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Supercharge your sales pipeline with our premium lead generation and
            AI SDR services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card">
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">
                  Lead Generation Service
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get high-quality leads tailored to your industry and target
                  market. Starting at $20 per qualified lead.
                </p>
                <Button variant="outline" className="mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">AI SDR Service</h3>
                <p className="text-muted-foreground mb-4">
                  Let our AI handle follow-up calls and appointment setting. Pay
                  only for talk time at $0.10-0.25/minute.
                </p>
                <Button variant="outline" className="mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">DialerGPT</span>
            </div>
            <p className="text-muted-foreground">
              AI-powered lead qualification that saves time and increases sales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DialerGPT. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
