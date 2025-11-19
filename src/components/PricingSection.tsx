import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, Shield, Zap, Server, Lock } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start small and scale as your team grows. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Tier */}
          <Card className="glass-card flex flex-col border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>For small teams getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Unlimited Practice Calls</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>5 User Accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Basic Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Standard Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Tier */}
          <Card className="glass-panel border-purple-500/50 flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Growth</CardTitle>
              <CardDescription>For scaling sales organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span>Up to 20 User Accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span>Advanced Coaching Insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span>CRM Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span>Custom Scenarios</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="glass-card flex flex-col border-white/10 bg-gradient-to-b from-slate-900 to-black">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations requiring compliance</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-400 mr-3" />
                  <span>HIPAA & SOC2 Compliance</span>
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Dedicated AWS Instance</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-blue-400 mr-3" />
                  <span>SSO & Advanced Security</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Custom AI Model Fine-tuning</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Unlimited Users</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Trusted by innovative sales teams at</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos - in a real app these would be SVGs */}
            <span className="text-xl font-bold">Purrify</span>
            <span className="text-xl font-bold">TechFlow</span>
            <span className="text-xl font-bold">SalesForce</span>
            <span className="text-xl font-bold">HubSpot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

