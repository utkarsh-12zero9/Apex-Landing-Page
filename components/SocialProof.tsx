"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { motion, AnimatePresence } from 'framer-motion';
import HiraMirza from "../public/Hira Mirza.png";
import AbhayjeetPandey from "../public/Abhayjeet Pandey.png";
import KratikaGulwani from "../public/Kratika Gulwani.png";
import SachiB from "../public/Sachi.png";
import YuktaKanjani from "../public/Yukta.png";
import TapanGhadge from "../public/Tapan.png";

const testimonials = [
    {
        name: "Hira Mirza",
        role: "BD Executive",
        company: "Doubtnut",
        image: HiraMirza,
        testimonial:
            "Just completed an outstanding Sales workshop by Apex School of Business. The experience was both educational and inspiring, with a perfect blend of theory and practice. Kudos to Apex School of Business for making professional growth so accessible."
    },
    {
        name: "Abhajeet Pandey",
        role: "Operations Analyst",
        company: "NatWest Group",
        image: AbhayjeetPandey,
        testimonial:
            "Apex School of Business Workshop helped me to understand what B2B Sales is in a true sense. I also learned tools like Apollo.io, Instantly that I intend to use for my lead generation work. Also AI-based automation and workflows were eye-openers for me."
    },
    {
        name: "Kratika Gulwani",
        role: "Marketing Manager",
        company: "PadCare",
        image: KratikaGulwani,
        testimonial:
            "As a marketing professional, I had always a curiosity to know sales side of the business. How a MQL becomes a SQL, lot of process goes behind that and Apex School of Business workshop taught me that. Moreover, I learn some cool tools of lead generations."
    },
    {
        name: "Sachi B",
        role: "AI Strategist | Business Development",
        company: "",
        image: SachiB,
        testimonial:
            "Kudos to Apex School of Business for making professional growth so accessible and impactful. The experience was both educational and inspiring, with a perfect blend of theory and practice. A big shoutout to Apex School of Business and Team organizing this."
    },
    {
        name: "Yukta Kanjani",
        role: "Sr. BD Associate",
        company: "RegisterKaro",
        image: YuktaKanjani,
        testimonial:
            "What stood out most was the focus on customer-centered selling — listening carefully, understanding needs, and offering helpful solutions. Also, the networking opportunities added great value, providing fresh perspectives and ideas."
    },
    {
        name: "Tapan Ghadge",
        role: "Sr. BD Manager",
        company: "My Cloud Crew",
        image: TapanGhadge,
        testimonial:
            "Attended the Apex School of Business Bootcamp on B2B Sales, and it was truly hands-on filled with lot of learning and tools. It's not every day that you find workshops that combine learning with real-world application so seamlessly."
    }
];

export default function SocialProof() {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setPerPage(2);
            } else {
                setPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(testimonials.length / perPage);

    // Reset page if it exceeds totalPages after resize
    useEffect(() => {
        if (page >= totalPages && totalPages > 0) {
            setPage(0);
        }
    }, [totalPages, page]);

    const visibleItems = testimonials.slice(page * perPage, page * perPage + perPage);

    const goNext = () => setPage((p) => (p + 1) % totalPages);
    const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

    return (
        <FadeInSection className="px-4 py-10 sm:px-6 lg:px-8 bg-card border-y border-primary/5" delay={0.3}>
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Success <span className="text-primary">Stories</span>
                    </h2>
                    <p className="mt-4 text-muted text-lg">
                        Hear from professionals who accelerated their careers with us.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {visibleItems.map((item) => (
                            <div
                                key={item.name}
                                className="bg-background rounded-2xl p-8 border border-primary/10 shadow-sm flex flex-col h-full relative group hover:border-primary/30 transition-colors"
                            >
                                {/* Quote Icon */}
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                                {/* Testimonial Text */}
                                <div className="flex-1">
                                    <p className="text-muted text-base leading-relaxed italic relative z-10">
                                        &ldquo;{item.testimonial}&rdquo;
                                    </p>
                                </div>

                                {/* Person Info */}
                                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-primary/5">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                                        <img
                                            src={item.image.src}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=7c3aed&color=fff`;
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm">{item.name}</h4>
                                        <p className="text-xs text-primary font-medium">
                                            {item.role}{item.company ? `, ${item.company}` : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                        onClick={goPrev}
                        className="p-3 rounded-full bg-background border border-primary/20 text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    {/* <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? 'bg-primary scale-125' : 'bg-primary/20 hover:bg-primary/40'}`}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div> */}

                    <button
                        onClick={goNext}
                        className="p-3 rounded-full bg-background border border-primary/20 text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </FadeInSection>
    );
}
