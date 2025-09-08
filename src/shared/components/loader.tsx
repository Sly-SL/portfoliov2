'use client'

import {type ComponentType, type  FC, type SVGProps, useEffect, useState} from 'react';
import {AnimatePresence, easeInOut, motion} from 'framer-motion';
import {Code2, Globe, User} from 'lucide-react';

const Github: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
);


interface TypewriterEffectProps {
    text: string;
}

const TypewriterEffect: FC<TypewriterEffectProps> = ({text}) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 150);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block text-white font-mono text-lg sm:text-xl">
            {displayText}
        </span>
    );
};

const BackgroundEffect = () => (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-black via-gray-800 to-black" />
);

interface IconButtonProps {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
const IconButton :FC<IconButtonProps>= ({ Icon }) => (
    <div className="relative group cursor-pointer">
        <div className="relative p-2 rounded-full border border-gray-400/30 bg-gray-900/20">
            <Icon className="w-5 h-5 text-gray-300" />
        </div>
    </div>
);


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                ease: easeInOut,
                duration: 1.2,
            }
        },
        exit: {
            opacity: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeInOut,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const childVariants = {
        initial: { y: 10, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: easeInOut
            }
        },
        exit: {
            y: -10,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: easeInOut
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    return (
        isLoading && (
            <div className="flex items-center justify-center h-screen w-screen relative overflow-hidden bg-gradient-to-b from-black/90 via-gray-950/90 to-black/90">
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            className="fixed inset-0 bg-black"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <BackgroundEffect />

                            <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
                                <motion.div className="flex justify-center gap-6 mb-6" variants={childVariants}>
                                    {[Code2, User, Github].map((Icon, index) => (
                                        <IconButton key={index} Icon={Icon} />
                                    ))}
                                </motion.div>

                                <motion.h1 className="text-center md:text-5xl text-2xl font-semibold tracking-wide text-gray-300 space-y-4" variants={childVariants}>
                                    <div className="flex justify-center md:space-x-6 space-x-3">
                                        <span>
                                            Stefan
                                        </span>
                                        <span>
                                            Loish
                                        </span>
                                    </div>
                                    <div className="flex justify-center md:space-x-6 space-x-3">
                                        <span>
                                            Creative
                                        </span>
                                        <span>
                                            Portfolio
                                        </span>
                                        <span>
                                            Showcase
                                        </span>
                                    </div>
                                    <div className="mt-2 text-base md:text-sm font-light max-w-xl mx-auto text-gray-400">
                                        A curated collection of innovative projects and thoughtful designs by Stefan Loish.
                                    </div>
                                </motion.h1>

                                <motion.div className="mt-4" variants={childVariants}>
                                    <a
                                        href="https://www.linkedin.com/in/stefan-loish-965809347"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-400/30 cursor-pointer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe className="w-4 h-4 text-gray-300" />
                                        <span className="text-gray-300 font-mono text-lg sm:text-xl">
                                            <TypewriterEffect text="slysl.typescript.developer" />
                                        </span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    );
};

export default Loader;