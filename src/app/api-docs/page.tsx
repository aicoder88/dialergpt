import React from "react";

export default function ApiDocsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl font-bold mb-6">API Reference</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Our API documentation is currently being updated. Please check back soon.
                </p>
                <div className="p-8 rounded-xl bg-black/50 border border-white/10 font-mono text-left max-w-2xl mx-auto overflow-x-auto">
                    <p className="text-green-400">// Example Request</p>
                    <p className="text-blue-400">curl</p>
                    <p className="pl-4 text-white">https://api.dialergpt.com/v1/calls \</p>
                    <p className="pl-4 text-white">-H "Authorization: Bearer YOUR_API_KEY" \</p>
                    <p className="pl-4 text-white">-d '{"{"}"type": "simulation", "scenario_id": "123"{"}"}'</p>
                </div>
            </div>
        </main>
    );
}
