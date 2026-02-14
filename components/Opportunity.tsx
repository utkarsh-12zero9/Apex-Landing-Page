"use client";

import React, { useEffect, useRef } from 'react';
import { Users, User, IndianRupee } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

/**
 * Animated Counter Component
 */
const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            // Extract numeric value from string
            const match = value.replace(/,/g, '').match(/\d+/);
            const numericValue = match ? parseInt(match[0]) : 0;
            const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return (
        <motion.span ref={ref}>
            {value.includes('–') ? value : (
                <>
                    <motion.span>{rounded}</motion.span>
                    {suffix}
                </>
            )}
        </motion.span>
    );
};

export default function Opportunity() {
    const stats = [
        {
            icon: <Users />,
            value: "40,000",
            suffix: " +",
            label: "Business Careers Jobs every month",
            color: "bg-primary/10"
        },
        {
            icon: <User />,
            value: "8 LPA",
            prefix: "₹",
            suffix: " LPA",
            label: "Average Salary at Entry Level",
            color: "bg-primary/10"
        },
        {
            icon: <IndianRupee />,
            value: "₹15 – 40 LPA",
            label: "Average Salary at Mid level",
            color: "bg-primary/10"
        }
    ];

    return (
        <section className="bg-background py-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">

                {/* Animated Heading Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        Opportunity in <span className="text-primary">Business Careers</span>
                    </h2>

                    {/* Hand-drawn style wavy underline */}
                    <div className="flex justify-center mb-16">
                        <motion.svg
                            width="120" height="24" viewBox="0 0 100 20" fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            <path
                                d="M5 15C20 5 30 25 45 15C60 5 70 25 85 15"
                                stroke="#7c3aed"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </motion.svg>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-10">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Icon with animated circle background */}
                            <div className="relative mb-8">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 120, delay: index * 0.2 + 0.4 }}
                                    className={`absolute -top-3 -right-5 w-14 h-14 rounded-full shadow-lg ${item.color}`}
                                />
                                <div className="relative z-10 text-primary">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, {
                                        className: "w-14 h-14 text-foreground stroke-[1.5] drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                    })}
                                </div>
                            </div>

                            {/* Animated Numbers */}
                            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 flex items-center tracking-tight">
                                {item.prefix}
                                <Counter value={item.value} suffix={item.suffix} />
                            </h3>

                            {/* Description Label */}
                            <p className="text-muted text-base md:text-lg font-medium max-w-[220px] leading-snug opacity-90">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}