"use client";

import FadeInSection from './FadeInSection'
import SparkleButton from './SparkleButton'

export default function FinalCTA() {
    return (
        <FadeInSection id="final-cta" className="scroll-mt-18 px-4 pb-14 pt-4 sm:px-6 lg:px-8" delay={0.4}>
            <div className="mx-auto max-w-7xl rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/5 p-8 sm:p-12 shadow-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary leading-snug">
                    After this program, you won&apos;t just &lsquo;hope&rsquo; for a job… you&apos;ll be ready for it.
                </h2>

                <div className="mt-8 space-y-4 text-foreground font-medium text-base sm:text-lg">
                    <p className="text-muted text-sm font-semibold uppercase tracking-widest">Imagine This...</p>
                    <p>You get that job offer.</p>
                    <p>You call your parents and say, <span className="font-bold">&ldquo;Mujhe job mil gayi!&rdquo;</span></p>
                    <p>They laugh. You feel proud!</p>
                </div>

                <SparkleButton
                    href="#hero"
                    className="mt-10 text-xl rounded-2xl bg-primary px-18 py-3 font-semibold text-white transition hover:bg-primary/90"
                >
                    Enroll Now
                </SparkleButton>
            </div>
        </FadeInSection>
    )
}