"use client";

import { Wrench, Rocket, GraduationCap, BrainCircuit, MonitorPlay, Users, FolderOpen, Zap } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    "ai-driven-careers": BrainCircuit,
    "placement-learning": GraduationCap,
    "hands-on-execution": Rocket,
    "industry-tools": Wrench,
    "hybrid-learning": MonitorPlay,
    "automation-skills": Zap,
};

const features = [
    {
        icon: "ai-driven-careers",
        heading: "Built for AI-Driven Careers",
        para: "Develop practical skills for sales, growth and business development roles."
    },
    {
        icon: "placement-learning",
        heading: "Placement-Focused Learning",
        para: "Learn for 1 month and get structured career support for the next 2 months."
    },
    {
        icon: "industry-tools",
        heading: "Real Industry Tools",
        para: "Train on OpenAI, Apollo, Instantly and automation systems used by modern business teams."
    },
    {
        icon: "hands-on-execution",
        heading: "Hands-On Execution",
        para: "Build real outreach campaigns, workflows and automation projects inside the program."
    },
    {
        icon: "hybrid-learning",
        heading: "Live + Recorded Hybrid",
        para: "Learn at your pace with recorded modules and join live sessions for feedback."
    },
    {
        icon: "automation-skills",
        heading: "Automation-Ready Skills",
        para: "Understand how AI and workflows improve execution and business performance."
    }
];

export default function WhyApex() {
    return (
        <section id="apex" className="bg-slate-50/80 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
                    Why <span className="text-primary">Apex?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        const words = feature.heading.split(" ");
                        const firstWord = words[0];
                        const rest = words.slice(1).join(" ");

                        return (
                            <div
                                key={feature.icon}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-base font-bold text-foreground mb-2">
                                    <span className="text-primary">{firstWord}</span> {rest}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed max-w-[240px]">
                                    {feature.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
