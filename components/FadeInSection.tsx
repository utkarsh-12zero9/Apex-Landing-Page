"use client";

import { motion } from 'framer-motion'

export default function FadeInSection({ children, delay = 0, className = '', ...props }: { children: React.ReactNode, delay?: number, className?: string, [key: string]: any }) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
            {...props}
        >
            {children}
        </motion.section>
    )
}
