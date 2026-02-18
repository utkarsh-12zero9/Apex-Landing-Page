"use client";

import { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';
import SparkleButton from './SparkleButton';

const roles = [
    "Business Development", "Sales & Marketing", "AI automations"
];

export default function Hero() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[index];

        const type = () => {
            if (isDeleting) {
                setText(prev => prev.slice(0, -1));
            } else {
                setText(prev => currentRole.slice(0, prev.length + 1));
            }
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && text === currentRole) {
            timer = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 50 : 100;
            timer = setTimeout(type, speed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);
    return (
        <FadeInSection id="hero" className="relative scroll-mt-18 overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-48">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-96 w-96 rounded-full bg-primary/20 blur-[130px]" />
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content - 60% width */}
                    <div className="w-full lg:w-3/5">
                        <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-medium text-primary">
                            India’s First Execution Focused Business School
                        </p>
                        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-45xl text-black">
                            Launch Your Career in the <span className="text-violet-600">AI-Driven</span> World in <span className="text-violet-600">Just 21 Days</span>.
                        </h1>

                        <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">
                            Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional. <br />
                            <span className="text-black">We Help You Build a Real Career in Business roles such as </span><span className="text-violet-600 font-semibold bg-violet-100 px-2 md:py-1 border-r-4">{text}.</span><span className="animate-pulse"></span>
                        </p>



                        <div className="mt-8 flex flex-col min-[420px]:flex-row gap-2">
                            <SparkleButton
                                href="#final-cta"
                                className="rounded-2xl bg-primary px-7 py-3 text-center font-semibold text-white shadow-md hover:shadow-lg transform transition duration-200 ease-out hover:scale-102 focus:outline-none focus:ring-4 focus:ring-primary/30 active:translate-y-1"
                            >
                                Enroll Now
                            </SparkleButton>
                            <SparkleButton
                                href="#modules"
                                className="rounded-2xl border border-black bg-background/0 px-7 py-3 text-center font-semibold text-foreground transition duration-200 ease-out hover:bg-primary/5 hover:border-primary/30 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-black active:translate-y-1"
                            >
                                View Curriculum
                            </SparkleButton>
                        </div>
                    </div>

                    {/* Right Video - 40% width on desktop, responsive on mobile */}
                    {/* Right Video - 40% width on desktop, responsive on mobile */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden max-w-[480px]">
                            <iframe
                                src="https://www.youtube.com/embed/JpRhFScdXmk?si=We9gYQI7L74op4U3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}
