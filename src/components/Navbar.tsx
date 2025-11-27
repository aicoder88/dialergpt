"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vote } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import QuizModal from "@/components/QuizModal";

export function Navbar() {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    return (
        <>
            <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 border-b border-white/10 backdrop-blur-md bg-background/80 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo.png"
                                alt="DialerGPT Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-xl tracking-tight">DialerGPT</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        onClick={() => setIsQuizOpen(true)}
                        className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-purple-400"
                    >
                        <Vote className="h-4 w-4" />
                        Help Us Build
                    </Button>
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeSwitcher />
                    </div>
                    <Link href="/login">
                        <Button variant="ghost" className="hidden md:flex hover:bg-white/5">
                            Login
                        </Button>
                    </Link>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20">
                        Get Started
                    </Button>
                </div>
            </nav>
            <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </>
    );
}
