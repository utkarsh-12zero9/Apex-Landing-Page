"use client";


import feature_1 from "../public/feature_1.jpg"
import feature_2 from "../public/feature_2.jpg"
import feature_3 from "../public/feature_3.jpg"
import feature_4 from "../public/feature_4.jpg"
import linkedin from "../public/linkedin.webp"
import FadeInSection from "./FadeInSection"
import youtube from "../public/YouTube.png"
import insta from "../public/instagram.svg"
import { useState } from 'react';
import Image from 'next/image'

const faculty = [
    {
        name: "Shashikant Burnwal",
        subheading: "B.Tech, IIT Kharagpur | MBA, ISB Hyderabad",
        credential: `Over 15 years, Shashikant has worked with Tata Group, founded two tech startups, Trillbit and Hubcredo, and built their businesses worth millions of dollars from the ground up. In the last 5 years, he has helped 27+ companies build their sales and growth systems through consulting and hands-on sales training. He doesn't teach sales theory. He teaches the exact system he used to take companies from cold outreach to closed deals. At Apex, he brings that entire playbook into the classroom, now infused with AI-first tools and strategies built for how business actually works today.`,
        image: "/shashikant_burnwal.jpg",
        linkedin: "https://www.linkedin.com/in/shashikantburnwal/",
        insta: "https://www.instagram.com/shashikant_burnwal/?hl=en",
        youtube: "https://youtube.com/@shashikant.burnwal?si=n3n9FuVGVgrjd_31"
    },
    {
        name: "Ian Jason Creado",
        subheading: "10+ Years in B2B Sales and Marketing",
        credential: `Ian has consulted 20+ companies across India and the US on sales growth, and built a 6-figure dollar income independently through Upwork. He knows what it takes to sell, what clients actually look for, and how to position yourself to win in a competitive market. He teaches from real deals, not textbooks.`,
        image: "/ian_jason_creado.jpg",
        linkedin: "https://www.linkedin.com/in/ian-jason-creado-365a3119b/"
    },
    {
        name: "Anurag Bhatnagar",
        subheading: "30+ Years Experience | Citibank, HDFC, MaxLife | Founder, ShiftAltCap",
        credential: `Anurag has spent three decades at the highest levels of corporate finance and business. As founder of a wealthTech company, he understands both the corporate world you're entering and what it takes to build something from scratch. He gives you the insider perspective and real tips to excel in your career.`,
        image: "/anurag_bhatnagar.jpg",
        linkedin: "https://www.linkedin.com/in/leobhatnagar/ "
    }
];

const featuredIn = [
    {
        image: feature_1,
        link: "https://www.digitalfirstmagazine.com/pandemic-becomes-an-unexpected-catalyst-for-deep-tech-start-ups/"
    },
    {
        image: feature_2,
        link: "https://www.retail4growth.com/products/new-technology-to-help-retailers-map-customer-data-with-sound-waves-4209"
    },
    {
        image: feature_3,
        link: "https://www.ivycapventures.com/portfolio/trillbit"
    },
    {
        image: feature_4,
        link: "https://yourstory.com/2021/09/funding-alert-deeptech-startup-trillbit-raises-funds"
    },
]


function FacultyCard({ person }: { person: typeof faculty[0] }) {
    const [expanded, setExpanded] = useState(false);
    const isTruncatable = person.credential.split(' ').length > 20;

    return (
        <article className="faculty-card bg-card rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-300 flex flex-col">
            <div className="overflow-hidden rounded-t-2xl flex-shrink-0">
                <img src={person.image} alt={person.name} className="h-64 lg:h-80 w-full object-cover object-top transition-all duration-300" loading="lazy" />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                <h4 className="mt-1 text-sm font-medium text-primary">{person.subheading}</h4>
                <p className={`mt-2 text-sm text-muted leading-relaxed ${!expanded ? 'line-clamp-4' : ''}`}>
                    {person.credential}
                </p>
                <div className="mt-1 h-5">
                    {isTruncatable && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                        >
                            {expanded ? 'See less' : 'See more'}
                        </button>
                    )}
                </div>
                <div className="mt-4 flex items-center gap-4 flex-wrap">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-110 transition-opacity">
                        <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
                    </a>
                    {person.insta && (
                        <a href={person.insta} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-110 transition-opacity">
                            <Image src={insta} alt="Instagram" width={30} height={30} />
                        </a>
                    )}
                    {person.youtube && (
                        <a href={person.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-110 transition-opacity">
                            <Image src={youtube} alt="YouTube" width={30} height={30} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Faculty() {
    return (
        <FadeInSection id="faculty" className="scroll-mt-18 px-4 font-sans py-10 sm:px-6 lg:px-8" delay={0.25}>
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
                    Our Faculties from <span className="text-primary">IIT, ISB, ICAI</span>
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {faculty.map((person) => (
                        <FacultyCard key={person.name} person={person} />
                    ))}
                </div>

                <div className="mt-7 rounded-2xl p-5">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
                        Faculties <span className="text-primary">Featured In</span>
                    </h2>
                    <div className="mt-4 relative flex overflow-x-hidden group mask-linear-fade">
                        <div className="animate-marquee whitespace-nowrap flex items-center">
                            {[...featuredIn, ...featuredIn, ...featuredIn].map((item, idx) => (
                                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-primary/10 bg-white w-47.5 h-30 mr-6 shrink-0 flex items-center justify-center p-2 hover:border-primary/30 transition-colors">
                                    <Image src={item.image} alt={`Featured ${idx + 1}`} width={120} height={40} className="object-contain w-full h-full" />
                                </a>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-primary/5 to-transparent z-10"></div>
                        <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-primary/5 to-transparent z-10"></div>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}
