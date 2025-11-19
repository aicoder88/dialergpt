import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Work with the Best in <span className="gradient-text">AI & Sales</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We're hiring builders, dreamers, and closers. Help us define the future of sales enablement.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h2 className="text-2xl font-bold mb-8">Open Positions</h2>

                <div className="space-y-4">
                    {["Senior Full Stack Engineer", "AI Research Scientist", "Product Marketing Manager", "Enterprise Account Executive"].map((job) => (
                        <div key={job} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors flex justify-between items-center group cursor-pointer">
                            <div>
                                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">{job}</h3>
                                <p className="text-sm text-muted-foreground">Remote • Full Time</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 text-center">
                    <h3 className="text-xl font-bold mb-4">Don't see your role?</h3>
                    <p className="text-muted-foreground mb-6">
                        We're always looking for exceptional talent. Send us your resume and tell us how you can help.
                    </p>
                    <Button variant="outline">Email Us</Button>
                </div>
            </div>
        </main>
    );
}
