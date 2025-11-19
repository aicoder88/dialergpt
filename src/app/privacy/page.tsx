import React from "react";

export default function PrivacyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 19, 2025</p>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            DialerGPT ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Collection</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and company information.
                        </p>
                        <p className="mt-4">
                            We also automatically collect certain information when you visit, use, or navigate the Site. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site, and other technical information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Data</h2>
                        <p>
                            We use the information we collect or receive:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To post testimonials.</li>
                            <li>To request feedback.</li>
                            <li>To protect our Services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at privacy@dialergpt.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
