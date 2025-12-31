import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter } from "lucide-react";

export default function CommunityPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-orange-900/20 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Join the <span className="gradient-text">Community</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Connect with thousands of sales professionals mastering their craft.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 text-center hover:bg-[#5865F2]/20 transition-colors cursor-pointer">
                        <MessageCircle className="h-12 w-12 mx-auto text-[#5865F2] mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Discord Server</h3>
                        <p className="text-muted-foreground mb-6">Chat live with other users, share tips, and get help from our team.</p>
                        <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">Join Discord</Button>
                    </div>

                    <div className="p-8 rounded-2xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 text-center hover:bg-[#1DA1F2]/20 transition-colors cursor-pointer">
                        <Twitter className="h-12 w-12 mx-auto text-[#1DA1F2] mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Twitter / X</h3>
                        <p className="text-muted-foreground mb-6">Follow us for the latest updates, sales memes, and industry news.</p>
                        <Button className="bg-[#1DA1F2] hover:bg-[#1A91DA] text-white">Follow Us</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
