import Link from "next/link";
import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import {getProjectsQuery} from "@/lib/firebase/queries/get-projects.query";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";

const ProjectsSubdiv = async () => {
    const projects = await getProjectsQuery()
    return (
        <SubdivConstructor id={"projects"}>
            <div className={"grid grid-cols-3 items-start justify-center gap-18"}>
                {projects.map((item, i) => (
                    <AnimateSsr activeClass={i % 4 == 1 ? "animate-fade-in-right" : i % 4 == 2 ?  "animate-fade-in-down": i % 4 == 3 ? "animate-fade-in-up" : "animate-fade-in-left"} key={i}>
                        <Link className={"text-black/90 hover:text-black dark:text-white/90  dark:hover:text-white text-3xl hover:scale-105 duration-500 font-medium"} href={shortcuts.projects + "/" + item.id} key={i}>
                            {item.name}
                        </Link>
                    </AnimateSsr>
                ))}
            </div>
        </SubdivConstructor>
    );
};

export default ProjectsSubdiv;