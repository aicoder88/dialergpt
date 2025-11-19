import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Server, Lock, CheckCircle } from "lucide-react";

export default function EnterprisePage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-900 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Enterprise-Grade <span className="gradient-text">Sales Training</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Secure, scalable, and compliant. Built for organizations that demand the best.
                    </p>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                        Contact Sales
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Shield className="h-8 w-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Security First</h3>
                        <p className="text-muted-foreground">SOC2 Type II certified, HIPAA compliant, and GDPR ready. Your data is safe with us.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Server className="h-8 w-8 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Dedicated Infrastructure</h3>
                        <p className="text-muted-foreground">Private cloud deployment options and isolated database instances available.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Lock className="h-8 w-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Advanced Access Control</h3>
                        <p className="text-muted-foreground">SSO (SAML/OIDC), RBAC, and detailed audit logs for full visibility.</p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Enterprise Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Unlimited Users & Teams",
                            "Custom AI Model Fine-tuning",
                            "Dedicated Customer Success Manager",
                            "SLA Guarantees (99.99%)",
                            "Custom CRM Integrations",
                            "Priority Support 24/7",
                            "Quarterly Business Reviews",
                            "On-premise Deployment Options"
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                <span className="text-sm md:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
