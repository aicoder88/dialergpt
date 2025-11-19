"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Check, X, TrendingUp, DollarSign, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROISection = () => {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/roi-bg.png"
                    alt="ROI Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400 mb-6">
                        <DollarSign className="mr-2 h-4 w-4" />
                        The Economics
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why CFOs Love <span className="text-white">DialerGPT</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Traditional training is slow, expensive, and inconsistent. We fixed the math.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="bg-red-950/10 border-red-900/30 relative overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50" />
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-red-400 mb-2">The Old Way</h3>
                                <p className="text-muted-foreground mb-8">Manual Roleplay & Shadowing</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-red-500/10 mt-1">
                                            <DollarSign className="h-5 w-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">$3,000 - $5,000</h4>
                                            <p className="text-muted-foreground">Cost per rep for onboarding & training time.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-red-500/10 mt-1">
                                            <Clock className="h-5 w-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Several Months</h4>
                                            <p className="text-muted-foreground">Time to full productivity (ramp time).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-red-500/10 mt-1">
                                            <X className="h-5 w-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">High Churn Risk</h4>
                                            <p className="text-muted-foreground">30-50% of reps fail in the first year due to lack of support.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* The DialerGPT Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="glass-panel border-green-500/30 relative overflow-hidden transform md:-translate-y-4 md:scale-105 shadow-2xl shadow-green-900/20 h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold text-green-400">The DialerGPT Way</h3>
                                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                                        Recommended
                                    </span>
                                </div>
                                <p className="text-muted-foreground mb-8">AI-Powered Simulation</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-green-500/10 mt-1">
                                            <DollarSign className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">$99 - $299 / month</h4>
                                            <p className="text-muted-foreground">Flat fee for unlimited practice & coaching.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-green-500/10 mt-1">
                                            <TrendingUp className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">2 - 4 Weeks</h4>
                                            <p className="text-muted-foreground">Accelerated ramp time with 24/7 practice availability.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-green-500/10 mt-1">
                                            <Check className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Higher Retention</h4>
                                            <p className="text-muted-foreground">Reps feel confident and supported before their first live call.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROISection;
