import React from "react";
import { Button } from "@/components/ui/button";
import { Book, Code, Terminal } from "lucide-react";

export default function DocsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Documentation
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Everything you need to integrate and customize DialerGPT.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <Book className="h-8 w-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Guides</h3>
                        <p className="text-muted-foreground">Step-by-step tutorials for setting up your team and campaigns.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <Terminal className="h-8 w-8 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">API Reference</h3>
                        <p className="text-muted-foreground">Detailed documentation for our REST API and Webhooks.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <Code className="h-8 w-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">SDKs</h3>
                        <p className="text-muted-foreground">Client libraries for Python, Node.js, and Ruby.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
