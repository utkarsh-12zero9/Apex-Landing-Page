"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Users, Clock, Radio, PlayCircle, ArrowRight } from 'lucide-react';

const slides = [
    { title: "Students", image: "/students.png" },
    { title: "Working Professionals", image: "/working_professionals.png" },
];

export default function CourseBrief() {
    const programName = "AI-Driven Business Career";
    const mode = "Life-time Access";
    const startDate = "21 Days Structured Learning";
    const live = "Live Sessions";
    const recorded = "Recorded Lectures";
    const applyLink = "#";
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setPrevIndex(activeIndex);
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    // Reset animation flag after transition completes
    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);
                setPrevIndex(null);
            }, 700);
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

    const getSlideStyle = (index: number): React.CSSProperties => {
        if (index === activeIndex) {
            return {
                transform: isAnimating ? 'translateX(0)' : 'translateX(0)',
                transition: isAnimating ? 'transform 700ms ease-in-out' : 'none',
                zIndex: 2,
            };
        }
        if (index === prevIndex && isAnimating) {
            return {
                transform: 'translateX(-100%)',
                transition: 'transform 700ms ease-in-out',
                zIndex: 1,
            };
        }
        return {
            transform: 'translateX(100%)',
            transition: 'none',
            zIndex: 0,
        };
    };

    const getTitleStyle = (index: number): React.CSSProperties => {
        if (index === activeIndex) {
            return {
                opacity: 1,
                transform: isAnimating ? 'translateX(0)' : 'translateX(0)',
                transition: isAnimating ? 'transform 700ms ease-in-out, opacity 700ms ease-in-out' : 'none',
            };
        }
        if (index === prevIndex && isAnimating) {
            return {
                opacity: 0,
                transform: 'translateX(-100%)',
                transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
            };
        }
        return {
            opacity: 0,
            transform: 'translateX(100%)',
            transition: 'none',
        };
    };

    return (
        <section className="bg-slate-50/80 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
                    {/* Left Section - Carousel Slideshow */}
                    <div className="lg:w-1/3 relative min-h-75 lg:min-h-auto overflow-hidden">
                        {/* Carousel slides */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.title}
                                className="absolute inset-0"
                                style={getSlideStyle(index)}
                            >
                                <Image
                                    src={slide.image}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                    alt={slide.title}
                                />
                            </div>
                        ))}

                        {/* Black to transparent gradient overlay (bottom to top) */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />

                        {/* Animated Title at bottom left */}
                        <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                            {slides.map((slide, index) => (
                                <h3
                                    key={slide.title}
                                    className="text-white text-xl lg:text-2xl font-bold drop-shadow-lg absolute bottom-0 left-0 whitespace-nowrap"
                                    style={getTitleStyle(index)}
                                >
                                    {slide.title}
                                </h3>
                            ))}
                            {/* Invisible placeholder to reserve space */}
                            <h3 className="text-white text-xl lg:text-2xl font-bold invisible">
                                {slides[activeIndex].title}
                            </h3>
                        </div>
                    </div>

                    {/* Right Section - Details */}
                    <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                        {/* Program Label */}
                        <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3">
                            Program Details
                        </p>

                        {/* Program Title */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                            {programName}
                        </h2>

                        {/* Tags Section */}
                        <div className="flex flex-wrap gap-3 mb-8">

                            {/* Live Tag */}
                            <div className="flex items-center gap-2 bg-slate-700 border border-emerald-500/30 rounded-full px-4 py-2">
                                <Radio className="text-emerald-400 w-4 h-4" />
                                <span className="text-slate-200 text-sm font-medium">{live}</span>
                            </div>

                            {/* Recorded Tag */}
                            <div className="flex items-center gap-2 bg-slate-700 border border-emerald-500/30 rounded-full px-4 py-2">
                                <PlayCircle className="text-emerald-400 w-4 h-4" />
                                <span className="text-slate-200 text-sm font-medium">{recorded}</span>
                            </div>

                            {/* Mode Tag */}
                            <div className="flex items-center gap-2 bg-slate-700 border border-emerald-500/30 rounded-full px-4 py-2">
                                <Users className="text-emerald-400 w-4 h-4" />
                                <span className="text-slate-200 text-sm font-medium">{mode}</span>
                            </div>

                            {/* Start Date Tag */}
                            <div className="flex items-center gap-2 bg-slate-700 border border-emerald-500/30 rounded-full px-4 py-2">
                                <Clock className="text-emerald-400 w-4 h-4" />
                                <span className="text-slate-200 text-sm font-medium">{startDate}</span>
                            </div>

                        </div>

                        {/* Apply Button */}
                        <div className="flex flex-wrap gap-2">
                            <a
                                href={applyLink}
                                className="bg-primary text-white font-bold text-sm lg:text-base pl-5 pr-3 py-3 rounded-full transition-all duration-300 flex items-center gap-4 w-fit hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group"
                            >
                                KNOW MORE
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                    <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
