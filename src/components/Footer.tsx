import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-16 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-black/40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo.png"
                                alt="DialerGPT Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-xl">DialerGPT</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        The AI-powered training platform that helps sales teams ramp faster, churn less, and close more.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Product</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/#features" className="hover:text-purple-400 transition-colors">Features</Link></li>
                        <li><Link href="/#pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
                        <li><Link href="/enterprise" className="hover:text-purple-400 transition-colors">Enterprise</Link></li>
                        <li><Link href="/case-studies" className="hover:text-purple-400 transition-colors">Case Studies</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Resources</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/docs" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
                        <li><Link href="/api-docs" className="hover:text-purple-400 transition-colors">API Reference</Link></li>
                        <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                        <li><Link href="/community" className="hover:text-purple-400 transition-colors">Community</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-white/80">Company</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-purple-400 transition-colors">Careers</Link></li>
                        <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} DialerGPT. All rights reserved.</p>
            </div>
        </footer>
    );
}
