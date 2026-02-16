import daalchini from "../public/daalchini.png";
import eureka from "../public/eureka.png";
import peeko from "../public/peeko.png";
import verda from "../public/verda.png";

export default function HiringPartners() {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                        Hiring <span className="text-primary">Partners</span>
                    </h2>
                    <p className="text-xl text-muted">
                        We have partnered with some of the best companies to provide you with the best opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex items-center justify-center">
                        <img src={daalchini.src} alt="Daalchini" className="h-24" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={eureka.src} alt="Eureka" className="h-24" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={peeko.src} alt="Peeko" className="h-24" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={verda.src} alt="Verda" className="h-24" />
                    </div>
                </div>
            </div>
        </div>
    );
}