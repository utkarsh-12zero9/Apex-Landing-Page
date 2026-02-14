"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Hira Mirza",
        role: "BD Executive",
        company: "Doubtnut",
        image: "/images/testimonials/hira-mirza.jpg",
        testimonial:
            "Just completed an outstanding Sales workshop by SalesAI Academy. The experience was both educational and inspiring, with a perfect blend of theory and practice. Kudos to SalesAI Academy for making professional growth so accessible."
    },
    {
        name: "Abhajeet Pandey",
        role: "Operations Analyst",
        company: "NatWest Group",
        image: "/images/testimonials/abhajeet-pandey.jpg",
        testimonial:
            "SalesAI Academy Workshop helped me to understand what B2B Sales is in a true sense. I also learned tools like Apollo.io, Instantly that I intend to use for my lead generation work. Also AI-based automation and workflows were eye-openers for me."
    },
    {
        name: "Kratika Gulwani",
        role: "Marketing Manager",
        company: "PadCare",
        image: "/images/testimonials/kratika-gulwani.jpg",
        testimonial:
            "As a marketing professional, I had always a curiosity to know sales side of the business. How a MQL becomes a SQL, lot of process goes behind that and SalesAI Academy workshop taught me that. Moreover, I learn some cool tools of lead generations."
    },
    {
        name: "Sachi B",
        role: "AI Strategist | Business Development",
        company: "",
        image: "/images/testimonials/sachi-b.jpg",
        testimonial:
            "Kudos to SalesAI Academy for making professional growth so accessible and impactful. The experience was both educational and inspiring, with a perfect blend of theory and practice. A big shoutout to SalesAI Academy and Team organizing this."
    },
    {
        name: "Yukta Kanjani",
        role: "Sr. BD Associate",
        company: "RegisterKaro",
        image: "/images/testimonials/yukta-kanjani.jpg",
        testimonial:
            "What stood out most was the focus on customer-centered selling—listening carefully, understanding needs, and offering helpful solutions. Also, the networking opportunities added great value, providing fresh perspectives and ideas."
    },
    {
        name: "Tapan Ghadge",
        role: "Sr. BD Manager",
        company: "My Cloud Crew",
        image: "/images/testimonials/tapan-ghadge.jpg",
        testimonial:
            "Attended the SalesAI Academy Bootcamp on B2B Sales, and it was truly hands-on filled with lot of learning and tools. It's not every day that you find workshops that combine learning with real-world application so seamlessly."
    }
];

export default function SocialProof() {
    const [page, setPage] = useState(0);
    const perPage = 3;
    const totalPages = Math.ceil(testimonials.length / perPage);

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
                                            src={item.image}
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
