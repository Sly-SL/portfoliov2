import SubdivConstructor from "@/shared/components/header/subdivs/subdiv-constructor.subdiv";
import Link from "next/link";
import type {CascadeShortcutsType} from "@/shared/types/shortcuts.type";
import {shortcutsSlysl, shortcutsSwift, shortcutsTS} from "@/shared/enums/shortcuts.enum";

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
    {label:"Swift",linkClassName:'text-xl',buttons:[
            {name:"Youtube", href: shortcutsSwift.yt},
            {name:"Github", href:shortcutsSwift.github},
            {name:"Tiktok", href:shortcutsSwift.tiktok},
        ]},
    {label:"TS",linkClassName:'text-lg',buttons:[
            {name:"Youtube", href:shortcutsTS.yt},
            {name:"Github", href:shortcutsTS.github},
            {name:"Tiktok", href:shortcutsTS.tiktok},
        ]}
]

const MediaSubdiv = () => {
    return (
        <SubdivConstructor id={"media"}>
            <div className={"grid grid-cols-3 items-start justify-center gap-18"}>
                {Buttons.map((item, i) => (
                    <div className={"grid grid-cols-1"} key={i}>
                        <label className={"text-sm font-light pb-1 text-[rgb(134,134,139)]"}>
                            {item.label}
                        </label>

                        {item.buttons.map((button, i) => ((
                            <Link className={item.linkClassName+" text-white/90 hover:text-white font-medium"} href={button.href} key={i}>
                                {button.name}
                            </Link>
                        )))}
                    </div>
                ))}
            </div>
        </SubdivConstructor>
    );
};

export default MediaSubdiv;