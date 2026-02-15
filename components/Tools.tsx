"use client";

import React from 'react';
import Image from 'next/image'


// Combined Data
const ALL_TOOLS = [
    { name: "OpenAI", logo: "/GPT.jpg" },
    { name: "Apollo", logo: "/Apollo.jpg" },
    { name: "Aimfox", logo: "/Aimfox.jpg" },
    { name: "Instantly", logo: "/Instantly.png" },
    { name: "n8n", logo: "/n8n.png" },
    { name: "Gamma", logo: "/Gamma.jpg" },
    { name: "Hubspot", logo: "/Hubspot.jpg" },
];

export default function AIToolsSection() {
    return (
        <section className="bg-background py-10 px-4 sm:px-6 lg:px-8 border-t border-primary/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Tools You <span className="text-primary">Master in This Program</span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {/* Tools Marquee */}
                    <div>
                        <div className="relative flex w-[90%] mx-auto overflow-x-hidden group mask-linear-fade">
                            <div className="animate-marquee whitespace-nowrap flex">
                                {[...ALL_TOOLS, ...ALL_TOOLS].map((tool, idx) => (
                                    <div
                                        key={`${tool.name}-${idx}`}
                                        className="bg-card border border-primary rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-4 min-w-40 md:min-w-50 hover:border-primary/50 transition-colors mr-6"
                                    >
                                        <Image src={tool.logo} alt={tool.name} width={32} height={32} className="object-contain opacity-80" />
                                        <span className="text-foreground text-sm font-bold">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-background to-transparent z-10"></div>
                            <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-background to-transparent z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
