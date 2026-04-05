import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";
import Image from "next/image";
import Background from "@/public/assets/slysl.webp"

const X2Y1Half = () => {
    return (
        <AnimateSsr
            className="relative overflow-hidden max-h-screen"
            activeClass="animate-fade-in-left opacity-100"
        >
            <Image
                src={Background}
                alt="Background"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black/95" />
        </AnimateSsr>
    );
};

export default X2Y1Half;