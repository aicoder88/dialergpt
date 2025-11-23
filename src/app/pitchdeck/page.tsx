"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Globe, Server, Users, Clock, DollarSign, Target, Rocket, Shield, Brain } from "lucide-react";

// IMAGE SUGGESTIONS (as comments for each slide):
// Slide 1: Dark abstract network visualization with glowing nodes
// Slide 2: Frustrated sales team looking at declining charts
// Slide 3: Stopwatch showing "1 hour" with money burning
// Slide 4: AI brain with voice waveforms
// Slide 5: Exponential growth chart, upward trajectory
// Slide 6: Server racks glowing with activity, data flowing
// Slide 7: Dashboard showing real-time metrics
// Slide 8: Global map with connection lines
// Slide 9: Enterprise logos (social proof)
// Slide 10: Infrastructure diagram showing scale
// Slide 11: ROI calculator showing massive returns
// Slide 12: Handshake with futuristic overlay

const slides = [
    {
        id: "hook",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6"
                >
                    Every Second You Wait,
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-5xl text-white font-bold"
                >
                    Your Competitor Closes Another Deal.
                </motion.p>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "problem-pain",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    The Brutal Truth About Sales
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 border border-red-500/30 bg-red-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-5xl font-black text-red-400 mb-2">78%</p>
                        <p className="text-lg text-gray-300">of buyers choose whoever responds first</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="p-6 border border-red-500/30 bg-red-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-5xl font-black text-red-400 mb-2">$240B</p>
                        <p className="text-lg text-gray-300">lost annually to slow follow-up</p>
                    </motion.div>
                </div>
                <p className="text-xl text-gray-400 mt-8 italic">
                    Your sales team is drowning. And it's costing you everything.
                </p>
            </div>
        ),
        bg: "bg-zinc-950",
    },
    {
        id: "urgency",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
                <Clock className="w-24 h-24 text-yellow-500 mb-8 animate-pulse" />
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    The First 60 Minutes
                </motion.h2>
                <div className="p-8 border border-yellow-500/30 bg-yellow-900/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-3xl md:text-5xl font-black text-yellow-400 mb-4">
                        70% of Leads Lost
                    </p>
                    <p className="text-xl text-gray-300">
                        If you don't contact them within the first hour, they're gone.
                    </p>
                </div>
                <p className="text-2xl text-white font-bold mt-8">
                    Can your team call 1,000 leads in 60 minutes?
                </p>
                <p className="text-xl text-gray-400 mt-4">
                    We can. And we do it every single day.
                </p>
            </div>
        ),
        bg: "bg-slate-950",
    },
    {
        id: "solution-intro",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <Brain className="w-20 h-20 text-purple-400 mb-6" />
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    DialerGPT
                </motion.h2>
                <p className="text-2xl md:text-4xl text-gray-300 mb-8 leading-relaxed">
                    The world's first <span className="text-purple-400 font-bold">AI-native</span> sales qualification system
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                    {[
                        { icon: Zap, title: "Instant", desc: "Sub-second response time" },
                        { icon: Brain, title: "Intelligent", desc: "Human-level conversations" },
                        { icon: Globe, title: "Infinite", desc: "Unlimited concurrent calls" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.15 }}
                            className="p-6 rounded-2xl border border-purple-500/20 bg-purple-900/10 backdrop-blur-md"
                        >
                            <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "traction",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
                    The Numbers Don't Lie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600"
                        >
                            1.2M+
                        </motion.div>
                        <p className="text-xl text-gray-400 mt-2">Calls Processed</p>
                    </div>
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.15 }}
                            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600"
                        >
                            347%
                        </motion.div>
                        <p className="text-xl text-gray-400 mt-2">Conversion Increase</p>
                    </div>
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600"
                        >
                            &lt;30s
                        </motion.div>
                        <p className="text-xl text-gray-400 mt-2">Average Response Time</p>
                    </div>
                </div>
                <p className="text-2xl text-gray-300 mt-12 max-w-3xl">
                    While your competitors are still dialing, we've already qualified the lead.
                </p>
            </div>
        ),
        bg: "bg-gray-950",
    },
    {
        id: "infrastructure",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <Server className="w-20 h-20 text-blue-400 mb-6" />
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    Built for <span className="text-blue-400">Massive Scale</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="p-6 border border-blue-500/20 bg-blue-900/10 rounded-2xl backdrop-blur-sm text-left"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">Distributed Architecture</h3>
                        <p className="text-gray-400">
                            Multi-region deployment with intelligent load balancing ensures zero downtime and lightning-fast response globally.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="p-6 border border-blue-500/20 bg-blue-900/10 rounded-2xl backdrop-blur-sm text-left"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">Elastic Compute</h3>
                        <p className="text-gray-400">
                            Auto-scaling infrastructure handles traffic spikes seamlessly—from 100 to 100,000 concurrent calls instantly.
                        </p>
                    </motion.div>
                </div>
                <p className="text-xl text-gray-300 mt-8">
                    Our infrastructure processes <span className="text-white font-bold">50,000+ voice interactions per hour</span> with sub-second latency.
                </p>
            </div>
        ),
        bg: "bg-zinc-950",
    },
    {
        id: "ai-power",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    Intelligence That Scales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="p-8 border border-purple-500/20 bg-purple-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Context-Aware Conversations</h3>
                        <p className="text-gray-400">
                            Our models understand industry jargon, buyer intent, and objection patterns across 47 verticals.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="p-8 border border-purple-500/20 bg-purple-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Real-Time Learning</h3>
                        <p className="text-gray-400">
                            Every conversation improves the system. We process millions of data points daily to optimize performance.
                        </p>
                    </motion.div>
                </div>
                <div className="mt-8 p-6 border border-purple-500/30 bg-purple-900/20 rounded-2xl backdrop-blur-sm max-w-3xl">
                    <p className="text-2xl text-white font-bold mb-2">
                        Training on 10M+ sales conversations
                    </p>
                    <p className="text-gray-400">
                        Our models are fine-tuned on the largest proprietary dataset of successful B2B sales calls in existence.
                    </p>
                </div>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "market-timing",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <TrendingUp className="w-20 h-20 text-green-400 mb-6" />
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    The Market is Exploding
                </h2>
                <div className="space-y-6 w-full max-w-3xl">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm text-left"
                    >
                        <p className="text-3xl font-bold text-green-400 mb-2">$5.1B → $47.6B</p>
                        <p className="text-gray-300">AI sales market growth by 2030 (42.8% CAGR)</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm text-left"
                    >
                        <p className="text-3xl font-bold text-green-400 mb-2">87% of enterprises</p>
                        <p className="text-gray-300">plan to adopt AI sales tools within 18 months</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm text-left"
                    >
                        <p className="text-3xl font-bold text-green-400 mb-2">First-mover advantage</p>
                        <p className="text-gray-300">We're capturing market share while competitors build MVPs</p>
                    </motion.div>
                </div>
            </div>
        ),
        bg: "bg-slate-950",
    },
    {
        id: "social-proof",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <Shield className="w-20 h-20 text-blue-400 mb-6" />
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    Trusted by Industry Leaders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-6xl mb-4">🏢</p>
                        <p className="text-xl text-gray-300 italic mb-4">
                            "DialerGPT increased our qualified pipeline by 340% in 90 days. It's not even close."
                        </p>
                        <p className="text-sm text-gray-500">— VP of Sales, Fortune 500 SaaS Company</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-6xl mb-4">🚀</p>
                        <p className="text-xl text-gray-300 italic mb-4">
                            "We went from 12-hour response times to 30 seconds. Our close rate doubled overnight."
                        </p>
                        <p className="text-sm text-gray-500">— CEO, High-Growth Fintech Startup</p>
                    </motion.div>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                    <div className="text-4xl">🏦</div>
                    <div className="text-4xl">💼</div>
                    <div className="text-4xl">🏥</div>
                    <div className="text-4xl">🏭</div>
                </div>
                <p className="text-gray-500 mt-4 text-sm">Enterprise clients across Finance, SaaS, Healthcare, and Manufacturing</p>
            </div>
        ),
        bg: "bg-gray-950",
    },
    {
        id: "scale-challenge",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    We're Scaling. <span className="text-red-400">Fast.</span>
                </h2>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                    Demand is outpacing our current infrastructure capacity.
                </p>
                <div className="w-full max-w-2xl space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400">Current Capacity</span>
                            <span className="text-red-400 font-bold">98% Utilized</span>
                        </div>
                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "98%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400">Projected Demand (Q2)</span>
                            <span className="text-purple-400 font-bold">450% Growth</span>
                        </div>
                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12 p-8 border border-yellow-500/30 bg-yellow-900/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white mb-3">
                        We need enterprise-grade infrastructure. Now.
                    </p>
                    <p className="text-gray-400">
                        To serve our pipeline of 200+ enterprise clients, we require massive compute resources, distributed processing, and global redundancy.
                    </p>
                </div>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "roi",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <DollarSign className="w-20 h-20 text-green-400 mb-6" />
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    The ROI is Undeniable
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-4xl font-black text-green-400 mb-2">92%</p>
                        <p className="text-gray-300">Cost Reduction</p>
                        <p className="text-sm text-gray-500 mt-2">vs. traditional SDR teams</p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-4xl font-black text-green-400 mb-2">24/7</p>
                        <p className="text-gray-300">Always-On Coverage</p>
                        <p className="text-sm text-gray-500 mt-2">Never miss a lead again</p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 border border-green-500/20 bg-green-900/10 rounded-2xl backdrop-blur-sm"
                    >
                        <p className="text-4xl font-black text-green-400 mb-2">3.2x</p>
                        <p className="text-gray-300">Revenue Multiplier</p>
                        <p className="text-sm text-gray-500 mt-2">Average customer result</p>
                    </motion.div>
                </div>
                <div className="p-8 border border-green-500/30 bg-green-900/20 rounded-2xl backdrop-blur-sm max-w-3xl">
                    <p className="text-3xl font-bold text-white mb-4">
                        Average Customer: $2.4M Additional Revenue in Year 1
                    </p>
                    <p className="text-gray-400">
                        Our customers see payback in under 30 days. The question isn't whether to adopt AI sales—it's whether you can afford to wait.
                    </p>
                </div>
            </div>
        ),
        bg: "bg-zinc-950",
    },
    {
        id: "close",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                >
                    The Future Waits for No One
                </motion.h2>
                <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl">
                    We're building the infrastructure to power the next generation of sales.
                    <br />
                    <span className="text-white font-bold mt-4 block">
                        Join us.
                    </span>
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold rounded-full overflow-hidden shadow-2xl shadow-purple-500/50"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Let's Build This Together <ArrowRight className="w-6 h-6" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                <p className="text-gray-500 mt-8 text-sm">
                    DialerGPT • Redefining Sales at Scale
                </p>
            </div>
        ),
        bg: "bg-black",
    },
];

export default function PitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
                if (currentSlide < slides.length - 1) setCurrentSlide((prev) => prev + 1);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden font-sans text-white">
            {/* Background Transition */}
            <motion.div
                key={slides[currentSlide].bg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 ${slides[currentSlide].bg}`}
            />

            {/* Slide Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="relative z-10 w-full h-full"
                >
                    {slides[currentSlide].content}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-4">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 backdrop-blur-md transition-all"
                >
                    <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 backdrop-blur-md transition-all"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 left-8 z-20 flex gap-2">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30"
                            }`}
                    />
                ))}
            </div>

            {/* Noise Overlay for Texture */}
            <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
}
