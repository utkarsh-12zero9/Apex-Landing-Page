"use client";

import {
    Users,
    Search,
    Mail,
    Linkedin,
    Phone,
    Network,
    Cpu,
    BriefcaseBusiness,
    Rocket,
} from 'lucide-react'
import FadeInSection from './FadeInSection'

const modules = [
    { title: 'Customer Research (ICP)', icon: Users },
    { title: 'Lead Prospecting', icon: Search },
    { title: 'Email Outreach (Infrastructure)', icon: Mail },
    { title: 'LinkedIn Systems', icon: Linkedin },
    { title: 'Cold Calling Mastery', icon: Phone },
    { title: 'Multi-Channel Engine', icon: Network },
    { title: 'AI & Automation', icon: Cpu },
    { title: 'Business Execution', icon: BriefcaseBusiness },
    { title: 'Career Launch', icon: Rocket },
]

const modulesNew = [
    {
        "module": "Module 1",
        "heading": "Know Your Customer Before Targeting",
        "description": "Understand who your ideal customer is before you reach out. Learn how to clearly define the right type of buyers for your product or service.",
        "tags": [
            "Live guidance",
            "3W framework",
            "Customer profile template",
            "AI prompt sheet",
            "Practice assignments"
        ]
    },
    {
        "module": "Module 2",
        "heading": "Build a Smart Prospect List",
        "description": "Turn your customer profile into a real list of potential buyers. Use smart filters and buying signals to find qualified leads.",
        "tags": [
            "Prospect list template",
            "Buying signal examples",
            "Hands-on exercises",
            "List review and feedback"
        ]
    },
    {
        "module": "Module 3",
        "heading": "Set Up Email Outreach That Works",
        "description": "Learn how to set up professional email campaigns that stay healthy and get replies.",
        "tags": [
            "Campaign setup sheet",
            "Step-by-step email setup guide",
            "Domain safety basics",
            "Email writing frameworks",
            "AI writing prompts"
        ]
    },
    {
        "module": "Module 4",
        "heading": "Reach Buyers on LinkedIn",
        "description": "Send messages that feel human, clear and relevant. Learn how to do it manually and how to automate safely.",
        "tags": [
            "Message templates",
            "Customer aligned scripts",
            "Aimfox automation guide",
            "Message review and feedback"
        ]
    },
    {
        "module": "Module 5",
        "heading": "Confident Cold Calling",
        "description": "Learn simple call flows that improve conversations and reduce fear.",
        "tags": [
            "Call scripts",
            "Practice assignments",
            "Call structure guide",
            "Call recording review",
            "Objection handling practice"
        ]
    },
    {
        "module": "Module 6",
        "heading": "Build a Multi Channel Outreach System",
        "description": "Combine email, LinkedIn and calls into one structured system. Learn how to run outreach in an organized and repeatable way.",
        "tags": [
            "Multi channel campaign structure",
            "Daily outreach plan",
            "Process documentation guide",
            "Execution checklist"
        ]
    },
    {
        "module": "Module 7",
        "heading": "Automate Your Outreach with AI",
        "description": "See how modern teams automate lead generation and messaging using AI tools.",
        "tags": [
            "Automation workflow examples",
            "AI messaging templates",
            "Step-by-step automation guide",
            "Example automation library"
        ]
    },
    {
        "module": "Module 8",
        "heading": "Become 10X Better in Your Role",
        "description": "Improve how you handle objections, client conversations and follow ups.",
        "tags": [
            "Practical objection handling training",
            "Champion client meeting guide",
            "Account management basics",
            "Daily performance system"
        ]
    },
    {
        "module": "Module 9",
        "heading": "Prepare and Crack the Job",
        "description": "Get ready to confidently apply for sales and business roles.",
        "tags": [
            "Resume building support",
            "Portfolio creation guide",
            "Interview question practice",
            "Mock interview sessions",
            "Application strategy guidance"
        ]
    }
];

const TAG_COLORS = [
    { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-200" },
    { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
    { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" },
    { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
    { bg: "bg-pink-100", text: "text-pink-800", border: "border-pink-200" },
];

export default function Modules() {
    return (
        <FadeInSection id="modules" className="px-4 py-10 sm:px-6 lg:px-8" delay={0.15}>
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Course <span className="text-primary">Modules</span>
                    </h2>
                    <p className="mt-4 text-muted text-lg">
                        A detailed breakdown of the 9-module execution playbook.
                    </p>
                </div>

                <div className="space-y-8 bg-primary/10 p-8 rounded-xl">
                    {modulesNew.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white w-full rounded-xl px-8 py-6 border border-primary/10 shadow-sm hover:border-primary/30 transition-all hover:shadow-md"
                            >
                                <div className="mb-2">
                                    <span className="text-sm font-black uppercase tracking-widest text-primary/80 ">
                                        {item.module}
                                    </span>
                                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                                        {item.heading}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-primary/5 my-4 border-t border border-primary/10"></div>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, tagIndex) => {
                                        const color = TAG_COLORS[tagIndex % TAG_COLORS.length];
                                        return (
                                            <span
                                                key={tagIndex}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border ${color.bg} ${color.text} ${color.border}`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </FadeInSection>
    )
}
