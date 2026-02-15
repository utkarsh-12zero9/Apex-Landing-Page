"use client";

import { Linkedin, Instagram, Twitter, Mail, ArrowUpRight, Phone, MapPin } from 'lucide-react';

const quickLinks = [
    { name: 'Curriculum', href: '#modules' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Testimonials', href: '#faculty' },
    { name: 'FAQ', href: '#faq' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/shashikantburnwal-careers/' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@apexschool.com' },
];

export default function Footer() {
    return (
        <footer className="bg-foreground text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#hero" className="flex items-center gap-3 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
                                <span className="text-sm font-extrabold text-white">AI</span>
                            </div>
                            <div>
                                <div className="text-base font-bold">Apex</div>
                                <div className="text-xs text-white/50">School of Business</div>
                            </div>
                        </a>
                        <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
                            Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional.
                        </p>
                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get Started */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Get Started
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-5">
                            Ready to launch your career in the AI-driven business world?
                        </p>
                        <a
                            href="#final-cta"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300"
                        >
                            Enroll Now
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white/80">Phone</p>
                                    <a href="tel:+918049765241" className="text-sm text-white/60 hover:text-primary transition-colors">+91 8049765241</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white/80">Email</p>
                                    <a href="mailto:support@salesacademy.com" className="text-sm text-white/60 hover:text-primary transition-colors">support@salesacademy.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white/80">Address</p>
                                    <p className="text-sm text-white/60 leading-relaxed">Rainmakers Workspace, J.P Nagar, 3rd Phase, Bangalore, Karnataka India 560078</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-white/50">© 2026 SalesAI Academy</p>
                        <p className="text-xs text-white/40">Owned by Hubcredo Solutions Private Limited</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
