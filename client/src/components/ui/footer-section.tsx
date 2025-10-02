'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, MapPin, Phone, Mail } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Services',
        links: [
            { title: 'Wealth Management', href: '/services#wealth' },
            { title: 'Investment Management', href: '/services#investment' },
            { title: 'Retirement Planning', href: '/services#retirement' },
            { title: 'Tax Strategies', href: '/services#tax' },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Our Team', href: '/about#team' },
            { title: 'Calculators', href: '/calculator' },
            { title: 'Blog', href: '/blog' },
        ],
    },
    {
        label: 'Contact',
        links: [
            { title: '(604) 588-9688', href: 'tel:6045889688', icon: Phone },
            { title: 'info@westgroupfinancial.com', href: 'mailto:info@westgroupfinancial.com', icon: Mail },
            { title: 'South Surrey, BC', href: '#location', icon: MapPin },
        ],
    },
    {
        label: 'Social',
        links: [
            { title: 'Facebook', href: '#', icon: FacebookIcon },
            { title: 'Instagram', href: '#', icon: InstagramIcon },
            { title: 'Youtube', href: '#', icon: YoutubeIcon },
            { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl md:rounded-t-6xl border-t px-6 py-12 lg:py-16">
            <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">WestGroup Financial</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Fee-only fiduciary advisors providing comprehensive financial planning for high-net-worth individuals and families.
                    </p>
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()} WestGroup Financial Management Inc. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-xs font-semibold text-foreground mb-4">{section.label}</h3>
                                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-foreground inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-1.5 size-4" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>

            <div className="w-full border-t border-border/20 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p className="text-xs">
                        Suite #210 – 2411 160 St, South Surrey, BC, V3Z 0C8
                    </p>
                    <div className="flex gap-6 text-xs">
                        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return children;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
