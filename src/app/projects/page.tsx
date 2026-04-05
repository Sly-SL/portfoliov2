import {BasicH1} from "@/shared/components/libs/basic/text/h1.text";
import {getProjectsQuery} from "@/lib/firebase/queries/get-projects.query";
import type {ProjectType} from "@/shared/types/project.type";
import ProjectBody from "@/shared/components/custom/body/projects/project.body";

const Project = async () => {
    const data = await getProjectsQuery()

    return (
        <article>
            <BasicH1 className="flex md:text-4xl text-xl p-4 md:p-12">
                Moje projekty i współprace{" :"}
                <span className="pl-2 text-purple-400">{data.length}</span>
            </BasicH1>
            <section className={"grid grid-cols-1 lg:grid-cols-2 pt-5 p-8 gap-3"}>
                {data.length > 0 &&
                    data.map((project: ProjectType, i) => (
                        <div
                            key={i}
                            className="hover:scale-[1.02] duration-300"
                        >
                            <ProjectBody
                            Img={project.image}
                            Title={project.name}
                            Description={project.description}
                            Link={project.deployment_url}
                            id={project.id}
                            />
                        </div>
                    ))
                }
            </section>
        </article>
    );
};

export default Project;