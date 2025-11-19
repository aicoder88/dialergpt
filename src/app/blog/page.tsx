import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-purple-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        The <span className="gradient-text">DialerGPT Blog</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Insights, strategies, and stories from the frontlines of AI sales training.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Why Roleplay is Broken (And How AI Fixes It)",
                            category: "Thought Leadership",
                            date: "Nov 18, 2025",
                            excerpt: "Traditional roleplay is awkward, infrequent, and unscalable. Here's why AI simulation is the future."
                        },
                        {
                            title: "5 Objection Handling Techniques Every Rep Needs",
                            category: "Sales Tips",
                            date: "Nov 15, 2025",
                            excerpt: "Master the art of the pivot with these battle-tested strategies used by top performers."
                        },
                        {
                            title: "How TechFlow Reduced Ramp Time by 60%",
                            category: "Case Study",
                            date: "Nov 10, 2025",
                            excerpt: "A deep dive into how a fast-growing SaaS company used DialerGPT to onboard reps faster."
                        },
                        {
                            title: "The Psychology of Cold Calling",
                            category: "Research",
                            date: "Nov 05, 2025",
                            excerpt: "Understanding the cognitive biases that influence prospect behavior during the first 30 seconds."
                        },
                        {
                            title: "DialerGPT Product Update: November 2025",
                            category: "Product",
                            date: "Nov 01, 2025",
                            excerpt: "Introducing new voice models, improved latency, and deeper CRM integrations."
                        },
                        {
                            title: "Building a Culture of Continuous Coaching",
                            category: "Management",
                            date: "Oct 28, 2025",
                            excerpt: "How sales leaders can create a feedback loop that actually drives performance."
                        }
                    ].map((post, i) => (
                        <div key={i} className="flex flex-col h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{post.category}</span>
                                <span className="mx-2 text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{post.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow">{post.excerpt}</p>
                            <div className="flex items-center text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                                Read Article <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
