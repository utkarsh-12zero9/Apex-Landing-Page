"use client";

import React, { useCallback, useRef } from "react";

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    angle: number;
    distance: number;
}

const SPARKLE_COLORS = [
    "#7c3aed",
    "#8b5cf6",
    "#a78bfa",
    "#6d28d9",
    "#9333ea",
];

function FourPointStar({ size, color, style }: { size: number; color: string; style: React.CSSProperties }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            style={style}
            className="sparkle-star"
        >
            <path d="M12 0C12 0 14 8 12 12C12 12 8 12 0 12C0 12 8 12 12 12C12 12 12 16 12 24C12 24 12 16 12 12C12 12 16 12 24 12C24 12 16 12 12 12C12 12 12 8 12 0Z" />
        </svg>
    );
}

export default function SparkleButton({
    children,
    href,
    className,
}: {
    children: React.ReactNode;
    href: string;
    className: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sparkleContainerRef = useRef<HTMLDivElement>(null);
    const sparkleIdRef = useRef(0);

    const createSparkle = useCallback((): Sparkle => {
        const id = sparkleIdRef.current++;
        // Spawn on edges: pick a random edge (top, bottom, left, right)
        const edge = Math.floor(Math.random() * 4);
        let x: number, y: number, angle: number;
        switch (edge) {
            case 0: // top
                x = Math.random() * 100; y = -5;
                angle = 250 + Math.random() * 40; // upward
                break;
            case 1: // bottom
                x = Math.random() * 100; y = 105;
                angle = 70 + Math.random() * 40; // downward
                break;
            case 2: // left
                x = -5; y = Math.random() * 100;
                angle = 160 + Math.random() * 40; // leftward
                break;
            default: // right
                x = 105; y = Math.random() * 100;
                angle = -20 + Math.random() * 40; // rightward
                break;
        }
        return {
            id,
            x,
            y,
            size: Math.random() * 14 + 10,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
            delay: Math.random() * 250,
            angle,
            distance: Math.random() * 25 + 20,
        };
    }, []);

    const burstSparkles = useCallback(() => {
        const container = sparkleContainerRef.current;
        if (!container) return;

        const count = 3;
        for (let i = 0; i < count; i++) {
            const sparkle = createSparkle();
            const el = document.createElement("div");
            el.className = "sparkle-particle";

            const angleRad = (sparkle.angle * Math.PI) / 180;
            const tx = Math.cos(angleRad) * sparkle.distance;
            const ty = Math.sin(angleRad) * sparkle.distance;

            el.style.cssText = `
                position: absolute;
                left: ${sparkle.x}%;
                top: ${sparkle.y}%;
                pointer-events: none;
                animation: sparkle-burst 600ms ${sparkle.delay}ms ease-out forwards;
                --tx: ${tx}px;
                --ty: ${ty}px;
                z-index: 50;
            `;

            el.innerHTML = `<svg width="${sparkle.size}" height="${sparkle.size}" viewBox="0 0 24 24" fill="${sparkle.color}" style="filter: drop-shadow(0 0 3px ${sparkle.color});">
                <path d="M12 0 C13.5 7.5 16.5 10.5 24 12 C16.5 13.5 13.5 16.5 12 24 C10.5 16.5 7.5 13.5 0 12 C7.5 10.5 10.5 7.5 12 0Z"/>
            </svg>`;

            container.appendChild(el);
        }
    }, [createSparkle]);

    const handleMouseEnter = useCallback(() => {
        burstSparkles();
    }, [burstSparkles]);

    const handleMouseLeave = useCallback(() => {
        const container = sparkleContainerRef.current;
        if (container) container.innerHTML = '';
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative block w-full sm:w-auto sm:inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={href} className={`${className} inline-block w-full sm:w-auto`}>
                {children}
            </a>
            <div
                ref={sparkleContainerRef}
                className="pointer-events-none absolute inset-0 overflow-visible"
                aria-hidden="true"
            />
        </div>
    );
}
