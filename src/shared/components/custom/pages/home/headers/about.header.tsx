import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";
import {Sparkles} from "lucide-react";

const AboutHeader = () => {
    return (
        <div className="text-center lg:mb-4 mb-2 px-[5%] pt-8">
            <div className="inline-block relative group">
                <AnimateSsr activeClass={"animate-zoom-in-up"} duration={1600}>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    >
                        O mnie
                    </h2>
                </AnimateSsr>
            </div>
            <AnimateSsr
                activeClass={"animate-zoom-in-up"}
                duration={800}>
                <p
                    className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
                    data-aos="zoom-in-up"
                >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Zmieniam pomysły w rzeczywistość
                    <Sparkles className="w-5 h-5 text-purple-400" />
                </p>
            </AnimateSsr>
        </div>
    );
};

export default AboutHeader;