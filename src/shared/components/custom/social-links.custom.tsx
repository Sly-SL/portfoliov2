import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";
import {SocialLinksEnum} from "@/shared/consts/enums/social-links.enum";
import {ExternalLink} from "lucide-react";

const SocialLinksCustom = () => {

    const primaryLink = SocialLinksEnum.find(link => link.isPrimary);

    const linksMap = SocialLinksEnum.filter(link => !link.isPrimary);

    return (

            <div
                className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-6">
                <AnimateSsr
                    activeClass={"animate-fade-in-right"}
                    duration={700}>
                    <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-3 tracking-tight">
                        <span className="inline-block w-8 h-[2px] bg-indigo-500/80 rounded-full"></span>
                        Moje media
                    </h3>
                </AnimateSsr>

                <div className="flex flex-col gap-4">
                    {/* LinkedIn - Primary Row */}
                    {primaryLink && (
                        <AnimateSsr
                            activeClass={"animate-fade-in-left"}
                            duration={700}>
                            <a
                                href={primaryLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between p-5 rounded-xl bg-white/[0.04] border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500"
                            >
                                {/* Hover Gradient Background */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500
                    bg-gradient-to-r ${primaryLink.gradient}`}
                                />

                                {/* Content Container */}
                                <div className="relative flex items-center gap-4">
                                    {/* Icon Container */}
                                    <div className="relative flex items-center justify-center">
                                        <div
                                            className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                                            style={{backgroundColor: primaryLink.color}}
                                        />
                                        <div className="relative p-2.5 rounded-lg">
                                            <primaryLink.icon
                                                className="w-6 h-6 transition-all duration-500 group-hover:scale-110"
                                                style={{color: primaryLink.color}}
                                            />
                                        </div>
                                    </div>

                                    {/* Text Container */}
                                    <div className="flex flex-col">
                        <span
                            className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                        {primaryLink.displayName}
                            </span>
                                        <span
                                            className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {primaryLink.subText}
                         </span>
                                    </div>
                                </div>

                                {/* External Link */}
                                <ExternalLink
                                    className="relative w-5 h-5 text-gray-500 group-hover:text-white
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        transform group-hover:translate-x-0 -translate-x-1"
                                />

                                {/* Shine Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"/>
                                </div>
                            </a>
                        </AnimateSsr>

                    )}


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {linksMap.map((link, i) => (
                            <AnimateSsr
                                key={link.name}
                                activeClass={i % 2 == 0 ? "animate-fade-in-left" : "animate-fade-in-right"}
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center gap-3 p-4.5 rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500"
                                >
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}/>

                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                                             style={{backgroundColor: link.color}}/>
                                        <div className="relative p-2 rounded-md">
                                            <link.icon
                                                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                                style={{color: link.color}}
                                            />
                                        </div>
                                    </div>

                                    {/* Text Container */}
                                    <div className="flex flex-col min-w-0">
                    <span
                        className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                    </span>
                                        <span
                                            className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                    {link.subText}
                    </span>
                                    </div>

                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"/>

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"/>
                                    </div>
                                </a>
                            </AnimateSsr>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default SocialLinksCustom;