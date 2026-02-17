import daalchini from "../public/daalchini.png";
import eureka from "../public/eureka.png";
import peeko from "../public/peeko.png";
import verda from "../public/verda.png";
import Medlyze from "../public/Medlyze.png";
import SmileID from "../public/SmileID.png";
import FIT4PRIVACY from "../public/FIT4PRIVACY.png";
import Fintent from "../public/Fintent.png";


const partners = [
    { src: daalchini.src, alt: "Daalchini" },
    { src: eureka.src, alt: "Eureka" },
    { src: peeko.src, alt: "Peeko" },
    { src: verda.src, alt: "Verda" },
    { src: Medlyze.src, alt: "Medlyze" },
    { src: SmileID.src, alt: "SmileID" },
    { src: FIT4PRIVACY.src, alt: "FIT4PRIVACY" },
    { src: Fintent.src, alt: "Fintent" },
    { src: daalchini.src, alt: "Daalchini" },
    { src: eureka.src, alt: "Eureka" },
    { src: peeko.src, alt: "Peeko" },
    { src: verda.src, alt: "Verda" },
    { src: Medlyze.src, alt: "Medlyze" },
    { src: SmileID.src, alt: "SmileID" },
    { src: FIT4PRIVACY.src, alt: "FIT4PRIVACY" },
    { src: Fintent.src, alt: "Fintent" },
];

export default function HiringPartners() {
    return (
        <div className="py-10 bg-slate-50/80 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                        Hiring <span className="text-primary">Partners</span>
                    </h2>
                    <p className="text-xl text-muted">
                        We have partnered with some of the best companies to provide you with the best opportunities.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex w-[100%] mx-auto overflow-x-hidden group mask-linear-fade">
                    <div className="animate-marquee flex items-center pr-12">
                        {/* First set */}
                        {partners.map((partner, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center h-24 w-40 transition-all duration-300 mr-12">
                                <img src={partner.src} alt={partner.alt} className="h-16 w-auto object-contain" />
                            </div>
                        ))}
                        {/* Second set for seamless loop */}
                        {partners.map((partner, index) => (
                            <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-40 transition-all duration-300 mr-12">
                                <img src={partner.src} alt={partner.alt} className="h-16 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}