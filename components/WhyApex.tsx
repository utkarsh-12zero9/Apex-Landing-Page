"use client";

import { Hammer, Briefcase, LayoutDashboard, CalendarCheck, BadgeCheck, Trophy } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    "learn-by-doing": Hammer,
    "placement-learning": Briefcase,
    "hands-on-execution": CalendarCheck,
    "industry-tools": LayoutDashboard,
    "hybrid-learning": BadgeCheck,
    "automation-skills": Trophy,
};

const features = [
    {
        icon: "learn-by-doing",
        heading: "Learn by Doing",
        highlights: ["Learn"],
        para: "Build real campaigns, outreach systems, and automation workflows, not just watch videos."
    },
    {
        icon: "placement-learning",
        heading: "Mentors Who Have Done the Job",
        highlights: ["Mentors", "Done the Job"],
        para: "Learn from leaders with IIT, ISB backgrounds and real experience across Tata, Ola, Citibank, and HDFC."
    },
    {
        icon: "industry-tools",
        heading: "Tools That Get You Interviews",
        highlights: ["Tools", "Interviews"],
        para: "Train on OpenAI, Apollo, Instantly, HubSpot, n8n, the stack modern recruiters look for."
    },
    {
        icon: "hands-on-execution",
        heading: "3 Weeks to Learn. 2 Months of Placement Support.",
        highlights: ["3 Weeks", "2 Months of Placement"],
        para: "Structured learning, mock interviews, resume refinement, and guided job support built in."
    },
    {
        icon: "hybrid-learning",
        heading: "Graduate Job Ready",
        highlights: ["Graduate Job"],
        para: "Complete real business tasks and finish with a portfolio that proves your skills."
    },
    {
        icon: "automation-skills",
        heading: "Real Placements, Not Just Promises",
        highlights: ["Real Placements"],
        para: "Alumni working at NatWest, Doubtnut, PadCare, and more."
    }
];

function renderHeading(heading: string, highlights: string[]) {
    if (!highlights.length) return <>{heading}</>;
    // Build a regex that matches any of the highlight phrases
    const escaped = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'g');
    const parts = heading.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                highlights.includes(part)
                    ? <span key={i} className="text-primary">{part}</span>
                    : <span key={i}>{part}</span>
            )}
        </>
    );
}

export default function WhyApex() {
    return (
        <section id="apex" className="scroll-mt-18 bg-slate-50/80 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
                    Why <span className="text-primary">Apex?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];

                        return (
                            <div
                                key={feature.icon}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-base font-bold text-foreground mb-2">
                                    {renderHeading(feature.heading, feature.highlights)}
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
