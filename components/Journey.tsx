"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flag, Rocket, Users, FileText, Zap } from 'lucide-react';

const journeyData = [
    {
        sectionTag: "Start of Program",
        title: "Onboarding and Orientation",
        description: [
            "Get access to your learning modules and tools",
            "Understand the complete roadmap, assignments, and expectations",
            "Join your learning cohort and community",
            "Start on-demand learning modules"
        ],
        timeline: "Day 1",
        phase: "Onboarding",
        icon: Flag,
        color: "bg-[#FDF6B2]", // Pastel Yellow
        borderColor: "border-[#FCE96A]"
    },
    {
        sectionTag: "Build Your Foundation",
        title: "Skill Development",
        description: [
            "Access structured modules and guided assignments.",
            "Work on real business scenarios and execution tasks.",
            "Build outreach systems, automation flows, and communication skills.",
            "Improve your output with mentor inputs."
        ],
        timeline: "Week 1 to Week 3",
        phase: "Structured Learning and Execution",
        icon: Zap,
        color: "bg-[#BCF0DA]", // Pastel Green
        borderColor: "border-[#84E1BC]"
    },
    {
        sectionTag: "Live Interactions",
        title: "Mentored Sessions",
        description: [
            "Join live sessions twice every week",
            "Ask questions and get real-time clarity",
            "Learn from mentors and peer discussions",
            "Get practical insights from real business situations"
        ],
        timeline: "2 Times a Week",
        phase: "Live Zoom Sessions",
        icon: Users,
        color: "bg-[#E5D7F9]", // Pastel Purple
        borderColor: "border-[#C3A6EA]"
    },
    {
        sectionTag: "Career Preparation",
        title: "Career Preparation & Interview Readiness",
        description: [
            "Build a strong resume and practical portfolio",
            "Align your profile with targeted business roles",
            "Practice through real-life mock interviews",
            "Receive detailed feedback on your job-readiness"
        ],
        timeline: "Week 4",
        phase: "Interview Readiness",
        icon: FileText,
        color: "bg-[#FDF6B2]", // Pastel Yellow
        borderColor: "border-[#FCE96A]"
    },
    {
        sectionTag: "Placement Support",
        title: "2 Months Placement Support",
        description: [
            "Receive our support for job placement",
            "Get help with recruiter connections",
            "Prepare for interviews with continuous feedback",
            "Track your progress and improve performance with mentor support"
        ],
        timeline: "Post Program",
        phase: "Placement Assistance Phase",
        icon: Rocket,
        color: "bg-[#BCF0DA]", // Pastel Green
        borderColor: "border-[#84E1BC]"
    }
];

export default function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 relative overflow-hidden" id="journey">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        See your <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-xl text-muted">
                        One Step at a Time
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-primary"
                        />
                    </div>

                    {/* Left Line (Mobile) */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-primary"
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 md:space-y-24 relative">
                        {journeyData.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col-reverse md:flex-row items-center justify-between w-full`}
        >
            {/* Timeline Marker (Desktop - Center) */}
            <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 bg-background border-2 border-primary rounded-full z-20 -translate-x-1/2 items-center justify-center transform transition-transform hover:scale-125" />

            {/* Timeline Marker (Mobile - Left) */}
            <div className="md:hidden absolute left-4 top-[3.5rem] w-3 h-3 bg-background border-2 border-primary rounded-full z-20 -translate-x-1/2" />

            {/* Content Card Side */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto md:order-last'}`}>
                <div className={`relative p-8 rounded-xl shadow-sm ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}>
                    {/* Speech Bubble Triangle (Desktop) */}
                    <div
                        className={`hidden md:block absolute top-8 w-6 h-6 rotate-45 ${item.color} 
              ${isEven ? '-right-3' : '-left-3'}`} />

                    {/* Speech Bubble Triangle (Mobile) */}
                    <div className={`md:hidden absolute top-8 -left-3 w-6 h-6 rotate-45 ${item.color}`} />

                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">
                                {item.sectionTag}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                {item.title}
                            </h3>
                        </div>
                        <div className="p-3 bg-white rounded-full shadow-sm">
                            <item.icon className="w-5 h-5 text-primary" />
                        </div>
                    </div>

                    <ul className="space-y-2">
                        {item.description.map((point: string, i: number) => (
                            <li key={i} className="text-foreground/80 leading-relaxed text-sm md:text-base flex items-start gap-2">
                                <span className="mt-2 md:mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground/60 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Timeline Text Side */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 mb-2 md:mb-0 md:mt-0 ${!isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} md:px-6`}>
                <div className="flex flex-col items-start md:block">
                    <span className="text-lg md:text-xl font-bold text-foreground block mb-1">
                        {item.timeline}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                        {item.phase}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
