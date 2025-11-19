import React from "react";
import { Button } from "@/components/ui/button";
import { Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-purple-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        We're Building the Future of <span className="gradient-text">Sales Training</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        DialerGPT was born from a simple frustration: sales training is too slow, too expensive, and too manual. We believe every rep deserves a safe space to practice and fail before they ever talk to a prospect.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">For Sales Leaders</h3>
                        <p className="text-muted-foreground">Scale your coaching without scaling your calendar. Get data-driven insights into your team's readiness.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                        <p className="text-muted-foreground">Our AI simulates accents, cultural nuances, and buying behaviors from around the world.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                            <Award className="h-6 w-6 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Excellence First</h3>
                        <p className="text-muted-foreground">We don't settle for "good enough". Our AI models are fine-tuned on millions of successful sales calls.</p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Join Our Mission</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        We're a team of engineers, sales leaders, and AI researchers working together to transform how the world sells.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                        View Open Positions
                    </Button>
                </div>
            </div>
        </main>
    );
}
