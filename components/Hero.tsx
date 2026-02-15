"use client";

import FadeInSection from './FadeInSection'
import SparkleButton from './SparkleButton'

export default function Hero() {
    return (
        <FadeInSection id="hero" className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pt-40">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-96 w-96 rounded-full bg-primary/20 blur-[130px]" />
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content - 60% width */}
                    <div className="w-full lg:w-3/5">
                        <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-medium text-primary">
                            Future-Proof Your Career
                        </p>
                        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-45xl bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #000000 0%, #10b981 30%, #3b82f6 60%, #8b5cf6 100%)' }}>
                            Launch Your Career in the AI-Driven Business World.
                        </h1>
                        <p className="mt-6 max-w-3xl text-base text-muted sm:text-lg">
                            Learn practical business skills, automation systems and execution frameworks that turn you into an industry-ready professional.
                        </p>
                        <div className="mt-8 flex flex-col min-[360px]:flex-row gap-2">
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
                    <div className="w-full lg:w-2/5 flex justify-center">
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
