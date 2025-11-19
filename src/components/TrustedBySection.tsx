import React from "react";
import Image from "next/image";

const TrustedBySection = () => {
    return (
        <section className="w-full py-12 border-b border-white/5 bg-black/20">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by innovative sales teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Purrify Logo - Using text representation as requested/implied if asset missing, 
              but styling it to look like a logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Purrify</span>
                    </div>

                    {/* Other Trust Logos (Text/Icon placeholders) */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white/80">TechFlow</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white/80">SalesForce</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white/80">HubSpot</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white/80">Intercom</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
