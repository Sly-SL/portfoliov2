import Link from "next/link";
import type {CascadeShortcutsType} from "@/shared/types/shortcuts.type";
import {shortcutsSlysl} from "@/shared/consts/enums/shortcuts.enum";
import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";

const Buttons:{label:string,linkClassName:string,buttons:
        {
            name:string,
            href:CascadeShortcutsType,
        }[]
}[]=[
    {label:"Slysl",linkClassName:'text-3xl',buttons:[
            {name:"Youtube", href:shortcutsSlysl.yt},
            {name:"Github", href:shortcutsSlysl.github},
            {name:"Tiktok", href:shortcutsSlysl.tiktok},
            {name:"Instagram", href:shortcutsSlysl.instagram},
        ]},
]

const MediaSubdiv = () => {
    return (
        <SubdivConstructor id={"media"}>
            <div className={"grid items-start justify-center gap-18"}>
                {Buttons.map((item, i) => (
                    <div className={"grid grid-cols-1"} key={i}>
                        <label className={"text-sm font-light pb-1 text-[rgb(134,134,139)]"}>
                            {item.label}
                        </label>

                        {item.buttons.map((button, i) => ((
                            <AnimateSsr activeClass={i % 4 == 1 ? "animate-fade-in-right" : i % 4 == 2 ?  "animate-fade-in-down": i % 4 == 3 ? "animate-fade-in-up" : "animate-fade-in-left"} key={i}>
                                <Link className={item.linkClassName+" text-white/90 hover:text-white font-medium hover:scale-105 duration-500"} href={button.href} >
                                    {button.name}
                                </Link>
                            </AnimateSsr>
                        )))}
                    </div>
                ))}
            </div>
        </SubdivConstructor>
    );
};

export default MediaSubdiv;