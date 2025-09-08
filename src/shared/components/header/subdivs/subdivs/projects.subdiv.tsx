import SubdivConstructor from "@/shared/components/header/subdivs/subdiv-constructor.subdiv";
import Link from "next/link";
import {shortcuts, shortcutsProjects, shortcutsVersions} from "@/shared/enums/shortcuts.enum";

const Buttons:{label:string,linkClassName:string,buttons:
        {
            name:string,
            href:string,
        }[]
}[]=[
    {label:"TS", linkClassName:"text-3xl", buttons:[
            {name: "Astral", href:shortcuts.projects + shortcutsProjects.Astral + shortcutsVersions.Web},
            {name: "TodoList", href: shortcuts.projects + shortcutsProjects.Todo + shortcutsVersions.Web},
            {name: "PastPages", href: shortcuts.projects + shortcutsProjects.PastPages + shortcutsVersions.Web},
        ]},
    {label:"Swift - Desktop", linkClassName:"text-2xl", buttons:[
            {name:"Mid (MacOs Dynamic Island)", href:shortcuts.projects + shortcutsProjects.Mid + shortcutsVersions.Desktop},
            {name: "TodoList", href:shortcuts.projects + shortcutsProjects.Todo + shortcutsVersions.Desktop},
            {name: "Astral", href: shortcuts.projects + shortcutsProjects.Astral + shortcutsVersions.Desktop},
        ]},
    {label:"Swift - Mobile", linkClassName:"text-xl", buttons:[
            {name: "Astral", href: shortcuts.projects + shortcutsProjects.Astral + shortcutsVersions.Mobile},
            {name: "TodoList", href: shortcuts.projects + shortcutsProjects.Todo + shortcutsVersions.Mobile},
        ]},
]

const ProjectsSubdiv = () => {
    return (
        <SubdivConstructor id={"projects"}>
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

export default ProjectsSubdiv;