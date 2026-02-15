"use client";

import FadeInSection from './FadeInSection'

export default function FinalCTA() {
    return (
        <FadeInSection id="final-cta" className="scroll-mt-18 px-4 pb-14 pt-4 sm:px-6 lg:px-8" delay={0.4}>
            <div className="mx-auto max-w-7xl rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/5 p-8 text-center shadow-lg sm:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Launch Your Career.</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted">
                    Join a program built for execution, not theory. Build high-income, AI-enabled business capabilities in weeks.
                </p>
                <a
                    href="#hero"
                    className="mt-8 inline-flex rounded-2xl bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary/90"
                >
                    Enroll Now
                </a>
            </div>
        </FadeInSection>
    )
}
