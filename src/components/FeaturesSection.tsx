import React from "react";
import { Card, CardContent } from "./ui/card";
import { Mic, Users, Brain, Shield, Zap, Server } from "lucide-react";

const features = [
    {
        icon: <Mic className="h-6 w-6 text-blue-400" />,
        title: "Real-time Call Analysis",
        description: "Advanced Speech Recognition",
        details: "Convert training calls into text instantly for AI processing. Analyze tone, sentiment, and keyword usage in real-time.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        icon: <Users className="h-6 w-6 text-purple-400" />,
        title: "Realistic AI Personas",
        description: "Neural Text-to-Speech",
        details: "Practice with diverse AI customer voices. From angry customers to confused leads, simulate any scenario.",
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50"
    },
    {
        icon: <Brain className="h-6 w-6 text-yellow-400" />,
        title: "Instant Coaching",
        description: "Generative AI Feedback",
        details: "Get personalized feedback immediately after every call. Our AI coach identifies improvement areas instantly.",
        gradient: "from-yellow-500/20 to-orange-500/20",
        border: "group-hover:border-yellow-500/50"
    },
    {
        icon: <Shield className="h-6 w-6 text-green-400" />,
        title: "Enterprise Security",
        description: "Bank-Grade Encryption",
        details: "Your training data is encrypted, compliant, and safe. We adhere to strict security standards.",
        gradient: "from-green-500/20 to-emerald-500/20",
        border: "group-hover:border-green-500/50"
    },
    {
        icon: <Zap className="h-6 w-6 text-indigo-400" />,
        title: "Low Latency",
        description: "High-Performance Edge Network",
        details: "Experience lag-free conversations. Our architecture ensures conversations feel natural and fluid.",
        gradient: "from-indigo-500/20 to-violet-500/20",
        border: "group-hover:border-indigo-500/50"
    },
    {
        icon: <Server className="h-6 w-6 text-red-400" />,
        title: "Infinite Scalability",
        description: "Cloud-Native Infrastructure",
        details: "Train 5 reps or 5,000. Our infrastructure scales automatically to meet your training demands.",
        gradient: "from-red-500/20 to-rose-500/20",
        border: "group-hover:border-red-500/50"
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="w-full py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Built on <span className="gradient-text">Next-Gen AI Technology</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        We leverage cutting-edge artificial intelligence to deliver a training platform that's secure, scalable, and incredibly smart.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className={`glass-card border-white/5 transition-all duration-300 group ${feature.border}`}>
                            <CardContent className="p-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider text-xs">
                                    {feature.description}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.details}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
