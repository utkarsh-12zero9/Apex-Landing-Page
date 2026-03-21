"use client";

import { useState } from 'react'
import { Plus, X, Banknote, Play, Users, CheckSquare, Layers, MessageCircle, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        q: 'What is your fee?',
        a: `Nothing upfront. Zero. Not a rupee. <br/><br/>
        You pay us ₹20,000 + GST only after you land a job of 4 LPA or above, and only after your first month's salary hits your account. If you don't get placed within 3 months of completing the program, you owe us nothing.
        <br/><br/>We do ask you to sign a simple good- faith agreement, because we're putting our time, money, and effort into your career before you pay us a single rupee. That's how much we believe in you.
        <br/><br/>Additionally, while attending the program, some students choose to make a small "Pay as You Wish" contribution to help us cover our costs and keep this program alive for thousands of others on the same journey.Completely optional, always appreciated.`,
        icon: <Banknote className="w-5 h-5 text-primary" />
    },
    {
        q: 'Are the courses conducted live?',
        a: 'The program includes structured recorded modules along with live sessions for doubt solving, discussions and practical reviews.',
        icon: <Play className="w-5 h-5 text-primary" />
    },
    {
        q: 'Do the courses have any live interaction?',
        a: 'Yes. Live sessions include Q&A, assignment reviews, mock interviews and practical walkthroughs.',
        icon: <Users className="w-5 h-5 text-primary" />
    },
    {
        q: 'Are there any criteria for joining the courses?',
        a: 'This program is for students, fresh graduates and early professionals who want to build a career in sales, growth, business development and AI driven business roles.',
        icon: <CheckSquare className="w-5 h-5 text-primary" />
    },
    {
        q: 'Can I enroll in multiple courses?',
        a: 'Yes, you can enroll in multiple courses to broaden your skill set in AI-driven business operations and revenue growth.',
        icon: <Layers className="w-5 h-5 text-primary" />
    },
    {
        q: 'Is there a community that I can join?',
        a: 'Yes, all students get access to an exclusive community for networking, peer-to-peer learning, and industry updates.',
        icon: <MessageCircle className="w-5 h-5 text-primary" />
    },
    {
        q: 'What if I get a job on my own after the program?',
        a: `That's honestly a win we'd celebrate with you. 
<br/><br/>But if our program, mentors, or resources played any part in getting you there, and you land a job within 3 months of completing the program, we humbly request you honour the agreement and pay our fee. Not just for us, but for the next person who's exactly where you were before you joined.
<br/><br/>Your ₹20,000 keeps this dream alive for thousands of others.
<br/><br/>And beyond that, the goodwill you build stays with you. We actively refer, recommend, and open doors for those who grow with integrity. Your career doesn't end at placement. It's just the beginning.
`,
        icon: <MessageCircle className="w-5 h-5 text-primary" />
    },
    {
        q: 'Whom do I contact in case of any issues or concerns?',
        a: 'You can reach our support team via email or WhatsApp for any technical or course related queries.',
        icon: <MessageSquare className="w-5 h-5 text-primary" />,
        cta: "Need Support? WhatsApp Us"
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="faq" className="scroll-mt-18 bg-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIndex === idx
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`rounded-xl border-2 transition-all duration-300 ${isOpen ? 'border-primary shadow-md' : 'border-primary/10'
                                    }`}
                            >
                                <button
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`${isOpen ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-foreground/70'}`}>
                                            {item.q}
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0">
                                        {isOpen ? (
                                            <X className="h-6 w-6 text-primary transition-transform rotate-0" />
                                        ) : (
                                            <Plus className="h-6 w-6 text-primary/70 transition-transform" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-14 pb-6">
                                                <p className="text-muted leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: item.a }}>
                                                </p>
                                                {item.cta && (
                                                    <button className="mt-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                                                        {item.cta}
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
