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
import { useState } from 'react'
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
        "heading": "Know Your Customer with Data and AI",
        "description": "Understand who your ideal customer is before you reach out. Use data thinking and AI prompts to clearly define the right type of buyers for your product or service.",
        "tags": [
            "Live guidance",
            "3W customer clarity framework",
            "AI assisted customer research prompts",
            "Customer profile template",
            "Practice assignments"
        ]
    },
    {
        "module": "Module 2",
        "heading": "Build a Smart Prospect List Using AI Signals",
        "description": "Turn your customer profile into a real list of potential buyers. Use smart filters, buying signals, and AI insights to find qualified leads faster.",
        "tags": [
            "Prospect list template",
            "Buying signal examples",
            "AI assisted lead filtering guide",
            "Hands on exercises",
            "List review and feedback"
        ]
    },
    {
        "module": "Module 3",
        "heading": "Launch AI Powered Email Campaigns",
        "description": "Build simple, healthy email campaigns using AI that reach inboxes and start real conversations. Learn how to structure, write, and optimize outreach with AI support.",
        "tags": [
            "Campaign setup sheet",
            "Step by step email setup guide",
            "Domain safety basics",
            "AI email writing frameworks",
            "AI prompt library for personalization",
            "Performance tracking guide"
        ]
    },
    {
        "module": "Module 4",
        "heading": "Reach Buyers on LinkedIn with Smart Automation",
        "description": "Send messages that feel human, clear, and relevant. Combine manual outreach with AI assisted personalization and safe automation systems.",
        "tags": [
            "AI assisted message templates",
            "Customer aligned scripts",
            "Automation setup guide",
            "Message review and feedback"
        ]
    },
    {
        "module": "Module 5",
        "heading": "Confident Cold Calling with AI Preparation",
        "description": "Learn simple call flows that improve conversations and reduce fear. Use AI to prepare scripts, objection responses, and call simulations before real conversations.",
        "tags": [
            "Call scripts",
            "AI objection handling prompts",
            "Call structure guide",
            "Call recording review",
            "Practice assignments"
        ]
    },
    {
        "module": "Module 6",
        "heading": "Build a Multi Channel Outreach System",
        "description": "Combine email, LinkedIn, calls, and AI workflows into one structured system. Run outreach in an organized, measurable, and repeatable way.",
        "tags": [
            "Multi channel campaign structure",
            "Daily outreach execution plan",
            "Process documentation guide",
            "Execution checklist",
            "Tracking dashboard framework"
        ]
    },
    {
        "module": "Module 7",
        "heading": "Build AI Driven Outreach Automation",
        "description": "See how modern teams automate lead generation, follow ups, and workflows using AI tools. Design simple automation systems that save time and increase output.",
        "tags": [
            "Automation workflow examples",
            "AI messaging templates",
            "Step by step automation guide",
            "Example automation library",
            "System building assignments"
        ]
    },
    {
        "module": "Module 8",
        "heading": "Perform Like a Top 10 Percent Professional",
        "description": "Improve how you handle objections, client conversations, follow ups, and account growth. Use AI to refine communication and prepare for high stakes conversations.",
        "tags": [
            "Practical objection handling training",
            "Champion client meeting guide",
            "Account management basics",
            "AI conversation refinement prompts",
            "Daily performance system"
        ]
    },
    {
        "module": "Module 9",
        "heading": "Prepare and Crack the Job with AI Positioning",
        "description": "Get ready to confidently apply for sales and business roles. Use AI to refine your resume, portfolio, and interview responses.",
        "tags": [
            "Resume building support",
            "AI optimized resume prompts",
            "Portfolio creation guide",
            "Interview question practice",
            "Mock interview sessions",
            "Application strategy guidance"
        ]
    }
]


const TAG_COLORS = [
    { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-200" },
    { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
    { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-200" },
    { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
    { bg: "bg-pink-100", text: "text-pink-800", border: "border-pink-200" },
];

export default function Modules() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <FadeInSection id="modules" className="scroll-mt-18 px-4 py-10 sm:px-6 lg:px-8" delay={0.15}>
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
                        const isHiddenOnMobile = !isExpanded && index >= 3;
                        return (
                            <div
                                key={index}
                                className={`bg-white w-full rounded-xl px-8 py-6 border border-primary/10 shadow-sm hover:border-primary/30 transition-all hover:shadow-md ${isHiddenOnMobile ? 'hidden min-[480px]:block' : ''}`}
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
                    {!isExpanded && (
                        <div className="flex justify-center mt-6 min-[760px]:hidden">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                            >
                                SEE MORE
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </FadeInSection>
    )
}
