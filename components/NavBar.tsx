"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const links = [
    { name: 'Curriculum', href: '#modules' },
    { name: 'About', href: '#apex' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'FAQ', href: '#faq' },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 transition-all duration-500">
            <nav
                className={`
                    mx-auto flex items-center justify-between rounded-2xl px-5 py-2.5 relative
                    transition-all duration-500 ease-in-out
                    border border-white/20
                    ${scrolled
                        ? 'bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-white/30'
                        : 'bg-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)]'
                    }
                `}
                style={{ backdropFilter: 'blur(20px) saturate(1.5)', WebkitBackdropFilter: 'blur(20px) saturate(1.5)' }}
            >
                {/* Logo - left */}
                <a href="#hero" className="flex items-center gap-3 group">
                    <div className="flex relative h-12 w-[180px] items-center justify-start transition-all duration-300 group-hover:scale-105">
                        <Image src="/logo.png" alt="Apex Logo" fill className="object-contain object-left" />
                    </div>

                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-foreground/70 hover:text-primary px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right CTA (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#final-cta"
                        className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300"
                    >
                        Join Now
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white bg-white shadow-[0_16px_48px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-1 md:hidden overflow-hidden"
                            style={{ backdropFilter: 'blur(40px) saturate(1.5)', WebkitBackdropFilter: 'blur(40px) saturate(1.5)' }}
                        >
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 px-3 py-2.5 rounded-xl transition-all duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="border-black/5 my-1" />
                            <a
                                href="#final-cta"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
                            >
                                Join Now
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    )
}
