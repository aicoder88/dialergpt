"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Globe, Server, Users } from "lucide-react";

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
                    The Future is Already Here.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-3xl text-gray-300 font-light"
                >
                    It's just unevenly distributed.
                </motion.p>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "problem",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="mb-8 p-6 border border-red-500/30 bg-red-900/10 rounded-2xl backdrop-blur-sm"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        70% of leads
                    </h2>
                    <p className="text-2xl md:text-3xl text-red-400">
                        are lost in the first hour.
                    </p>
                </motion.div>
                <p className="text-lg md:text-xl text-gray-400 mt-8">
                    Speed to lead is the single biggest predictor of conversion. <br />
                    Humans are too slow.
                </p>
            </div>
        ),
        bg: "bg-zinc-950",
    },
    {
        id: "solution",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
                >
                    {[
                        { icon: Zap, title: "Instant", desc: "Zero latency response." },
                        { icon: Server, title: "Intelligent", desc: "Context-aware AI conversations." },
                        { icon: Globe, title: "Infinite", desc: "Scale to millions of calls." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        ),
        bg: "bg-slate-950",
    },
    {
        id: "traction",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
                    Unstoppable Momentum
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600"
                        >
                            1.2M+
                        </motion.div>
                        <p className="text-xl text-gray-400 mt-2">Calls Processed</p>
                    </div>
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600"
                        >
                            300%
                        </motion.div>
                        <p className="text-xl text-gray-400 mt-2">Conversion Lift</p>
                    </div>
                </div>
            </div>
        ),
        bg: "bg-gray-950",
    },
    {
        id: "vision",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    We are scaling. <span className="text-purple-500">Fast.</span>
                </h2>
                <p className="text-2xl md:text-3xl text-gray-300 mb-12">
                    The demand is overwhelming. The technology is proven.
                    <br />
                    <span className="font-bold text-white">
                        The only limit is infrastructure.
                    </span>
                </p>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden max-w-md mx-auto">
                    <motion.div
                        initial={{ width: "10%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2">Compute Capacity Usage</p>
            </div>
        ),
        bg: "bg-black",
    },
    {
        id: "ask",
        content: (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                    Join the Revolution
                </h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-white text-black text-xl font-bold rounded-full overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Partner With Us <ArrowRight className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </div>
        ),
        bg: "bg-zinc-950",
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
