import React from "react";
import { Button } from "@/components/ui/button";

export default function CaseStudiesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Customer <span className="gradient-text">Success Stories</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        See how leading sales teams are using DialerGPT to break records.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12">
                    {[
                        {
                            company: "TechFlow",
                            metric: "60% Faster Ramp Time",
                            description: "TechFlow needed to scale their SDR team from 10 to 50 in 3 months. With DialerGPT, new hires were hitting quota in week 2 instead of month 2.",
                            quote: "DialerGPT is the cheat code for sales onboarding.",
                            author: "Sarah Jenkins, VP of Sales"
                        },
                        {
                            company: "CloudScale",
                            metric: "30% Increase in Conversion",
                            description: "CloudScale's seasoned AEs used DialerGPT to practice handling new competitive objections, resulting in a significant boost in win rates.",
                            quote: "Our team is more confident and prepared for every call.",
                            author: "Mike Ross, CRO"
                        }
                    ].map((study, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 items-center">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                                <div className="text-3xl font-bold text-green-400">{study.metric}</div>
                                <p className="text-muted-foreground">{study.description}</p>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="italic text-white/80">"{study.quote}"</p>
                                    <p className="text-sm text-muted-foreground mt-2">- {study.author}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center">
                                <span className="text-muted-foreground">Company Logo</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
