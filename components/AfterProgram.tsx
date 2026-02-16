"use client";

import { Check } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SparkleButton from './SparkleButton';

export default function AfterProgram() {
    const benefits = [
        "We refine your resume to match real hiring standards.",
        "We conduct structured mock interviews with role specific scenarios.",
        "We help you position your projects and practical work confidently.",
        "We guide you on where and how to apply strategically.",
        "We support you during interview rounds with feedback and improvements.",
        "You stay part of a focused career community with ongoing guidance."
    ];

    return (
        <FadeInSection className="py-10 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                        What Happens <span className="text-primary">After the Program ?</span>
                    </h2>
                    <p className="text-xl text-muted">
                        We stay with you until you are confident and market ready.
                    </p>
                </div>

                <div className="space-y-6 max-w-3xl mx-auto mb-16 border border-primary rounded-2xl p-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                            </div>
                            <p className="text-lg text-foreground/80 font-medium">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-8">
                    <div className="space-y-2">
                        <p className="text-lg font-medium text-foreground">
                            The goal is simple.
                        </p>
                        <p className="text-xl font-bold italic text-foreground">
                            You should feel ready when you walk into an interview.
                        </p>
                    </div>

                    <div className="flex justify-center pt-4">
                        <SparkleButton
                            href="#enroll"
                            className="rounded-xl bg-primary px-8 py-4 text-center text-lg font-semibold text-white shadow-lg hover:shadow-xl transform transition duration-200 ease-out hover:scale-105 active:scale-95"
                        >
                            Start Your Career Journey
                        </SparkleButton>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}
