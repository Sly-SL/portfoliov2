'use client'

import {type ReactNode, useEffect, useRef, useState} from 'react';

function useInView(threshold = 0.1, triggerOnce = false) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);


    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        let mounted = true;


        if (observerRef.current) observerRef.current.disconnect();
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!mounted) return;
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (triggerOnce) {
                        observer.unobserve(node);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(node);

        return () => {
            mounted = false;
            observer.disconnect();
        };
    }, [ref.current,threshold, triggerOnce]);

    return [ref, isVisible] as const;
}

const AnimateSsr = ({
                        children,
                        className,
                        activeClass = 'opacity-100',
                        duration = 1000,
                    }: {
    children: ReactNode;
    className?: string;
    activeClass?: string;
    duration?: number;
}) => {
    const [ref, isVisible] = useInView();

    return (
        <article
            ref={ref}
            className={`transition-all ${className} ${isVisible ? activeClass : ''}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </article>
    );
};

export default AnimateSsr;