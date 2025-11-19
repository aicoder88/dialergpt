import React from "react";
import { Card } from "./ui/card";
import { Activity, BarChart3, Brain, LineChart, MousePointer2, PieChart, Zap } from "lucide-react";

const AnalyticsSection = () => {
    return (
        <section className="w-full py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                            <Activity className="mr-2 h-4 w-4" />
                            Deep Insights
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Technical Precision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Down to the Millisecond
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Our engine analyzes tone, pacing, and objection handling in real-time.
                            Get granular data on where your reps excel and where they need coaching.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-white">99.9%</h4>
                                <p className="text-sm text-muted-foreground">Uptime SLA</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-white">&lt;50ms</h4>
                                <p className="text-sm text-muted-foreground">Voice Latency</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-white">100+</h4>
                                <p className="text-sm text-muted-foreground">Data Points/Call</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-white">SOC2</h4>
                                <p className="text-sm text-muted-foreground">Type II Certified</p>
                            </div>
                        </div>
                    </div>

                    {/* Visuals - Animated Charts */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-20" />

                        <div className="relative grid gap-6">
                            {/* Chart 1: Skill Radar (Simulated) */}
                            <Card className="glass-panel p-6 border-white/10 bg-black/60 backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Brain className="h-5 w-5 text-purple-400" />
                                        <h3 className="font-semibold text-sm">Skill Analysis</h3>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Live Updates</span>
                                </div>

                                <div className="space-y-4">
                                    {/* Skill Bars */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span>Empathy</span>
                                            <span className="text-purple-400">94%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-[94%] animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span>Pacing</span>
                                            <span className="text-blue-400">88%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[88%]" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span>Closing</span>
                                            <span className="text-green-400">91%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[91%]" />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Chart 2: Performance Graph (Simulated) */}
                            <div className="flex gap-6">
                                <Card className="glass-panel p-6 border-white/10 bg-black/60 backdrop-blur-xl flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <LineChart className="h-4 w-4 text-green-400" />
                                        <h3 className="font-semibold text-xs">Conversion Rate</h3>
                                    </div>
                                    <div className="flex items-end gap-1 h-24 w-full">
                                        {[40, 65, 55, 80, 75, 90, 85].map((height, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 bg-gradient-to-t from-green-500/20 to-green-500 rounded-t-sm transition-all duration-1000 ease-in-out hover:opacity-80"
                                                style={{ height: `${height}%` }}
                                            />
                                        ))}
                                    </div>
                                </Card>

                                <Card className="glass-panel p-6 border-white/10 bg-black/60 backdrop-blur-xl flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="h-4 w-4 text-yellow-400" />
                                        <h3 className="font-semibold text-xs">Ramp Speed</h3>
                                    </div>
                                    <div className="relative h-24 w-full flex items-center justify-center">
                                        <div className="absolute w-20 h-20 rounded-full border-4 border-white/10 border-t-yellow-400 animate-spin-slow" />
                                        <div className="text-2xl font-bold text-white">2x</div>
                                    </div>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
