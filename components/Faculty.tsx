"use client";

import linkedin from "../public/linkedin.webp"
import insta from "../public/instagram.svg"
import youtube from "../public/YouTube.png"
import Image from 'next/image'
import FadeInSection from './FadeInSection'
import feature_1 from "../public/feature_1.jpg"
import feature_2 from "../public/feature_2.jpg"
import feature_3 from "../public/feature_3.jpg"
import feature_4 from "../public/feature_4.jpg"

const faculty = [
    {
        name: "Shashikant Burnwal",
        credential: "B.Tech- IIT Kharagpur. MBA- ISB Hyderabad. Worked with companies like Tata Group, Ola. Helped 27+ companies to grow their B2B Sales Pipeline",
        image: "/shashikant_burnwal.jpg",
        link: "https://www.linkedin.com/in/shashikantburnwal/",
        insta: "https://www.instagram.com/shashikant_burnwal/?hl=en",
        youtube: "https://youtube.com/@shashikant.burnwal?si=n3n9FuVGVgrjd_31"
    },
    {
        name: "Ian Jason Creado",
        credential: "10+ years in B2B Sales and Marketing. Sales Growth Consultant to 20+ Companies across India and USA. Earned 5-figure dollars income through Upwork.",
        image: "/ian_jason_creado.jpg",
        link: "https://www.linkedin.com/in/ian-jason-creado-365a3119b/"
    },
    {
        name: "Anurag Bhatnagar",
        credential: "30+ years of experience working with corporates like Citibank, HDFC, MaxLife. Also founder of wealthTech company ShiftAltCap",
        image: "/anurag_bhatnagar.jpg",
        link: "https://www.linkedin.com/in/leobhatnagar/ "
    }
]

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


export default function Faculty() {
    return (
        <FadeInSection id="faculty" className="px-4 font-sans py-10 sm:px-6 lg:px-8" delay={0.25}>
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
                    Our Faculties from <span className="text-primary">IIT, ISB, ICAI</span>
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {faculty.map((person) => (
                        <article key={person.name} className="faculty-card bg-card rounded-2xl overflow-hidden border border-primary/20 shadow-sm hover:shadow-md transition-shadow h-125">
                            <img src={person.image} alt={person.name} className="h-[60%] w-full object-cover object-top transition-all duration-300" loading="lazy" />
                            <div className="p-5 h-[40%] overflow-hidden">
                                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                                <p className="mt-2 text-sm text-muted">{person.credential}</p>
                                <div className="mt-4 flex items-center gap-4 flex-wrap">
                                    <a href={person.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-110 transition-opacity">
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
