import React from "react";

const TrustedBySection = () => {
    return (
        <section className="w-full py-12 border-b border-white/5 bg-black/20">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by innovative sales teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Purrify Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Purrify</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
