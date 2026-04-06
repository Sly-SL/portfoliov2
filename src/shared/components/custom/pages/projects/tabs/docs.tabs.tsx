import {getDocumentsQuery} from "@/lib/firebase/queries/get-document.query";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";
import {ToggleButtonProjects} from "@/shared/components/custom/pages/projects/toggle-show.projects";
import DocumentBody from "@/shared/components/custom/body/projects/document.body";

const DocsTabs = async () => {
    const documents = await getDocumentsQuery();
    return (
        <div className="container mx-auto">
            {/* Mobile Grid (show less) */}
            <div id="documents-mobile-show-less" className="grid grid-cols-1 md:hidden gap-5">
                {documents.slice(0, 4).map((doc, index) => (
                    <AnimateSsr
                        key={doc.id || index}
                        className={
                            index % 4 === 0
                                ? "animate-fade-in-right"
                                : index % 4 === 1
                                    ? "animate-fade-in-up"
                                    : index % 4 === 2  ? "animate-fade-in-left" : "animate-fade-in-down"
                        }
                        duration={index % 3 === 0 ? 1000 : index % 3 === 1 ? 1200 : 1000}
                    >
                        <DocumentBody Img={doc.image} />
                    </AnimateSsr>
                ))}
            </div>

            {/* Desktop Grid (show less) */}
            <div
                id="documents-desktop-show-less"
                className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
            >
                {documents.slice(0, 6).map((doc, index) => (
                    <AnimateSsr
                        key={doc.id || index}
                        className={
                            index % 3 === 0
                                ? "animate-fade-in-right"
                                : index % 3 === 1
                                    ? "animate-fade-in-up"
                                    : "animate-fade-in-left"
                        }
                        duration={index % 3 === 0 ? 1000 : index % 3 === 1 ? 1200 : 1000}
                    >
                        <DocumentBody
                            Img={doc.image}
                        />
                    </AnimateSsr>
                ))}
            </div>

            {/* Show full grid */}
            <div
                id="documents-show-more"
                className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5"
            >
                {documents.map((doc, index) => (
                    <AnimateSsr
                        key={doc.id || index}
                        className={
                            index % 3 === 0
                                ? "animate-fade-in-right"
                                : index % 3 === 1
                                    ? "animate-fade-in-up"
                                    : "animate-fade-in-left"
                        }
                        duration={index % 3 === 0 ? 1000 : index % 3 === 1 ? 1200 : 1000}
                    >
                        <DocumentBody
                            Img={doc.image}
                        />
                    </AnimateSsr>
                ))}
            </div>

            <div className="md:hidden block">
                {documents.length > 4 && (
                    <div className="mt-6 w-full flex justify-start">
                        <ToggleButtonProjects showMore type="documents" />
                    </div>
                )}
            </div>

            <div className="hidden md:block">
                {documents.length > 6 && (
                    <div className="mt-6 w-full flex justify-start">
                        <ToggleButtonProjects showMore type="documents" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DocsTabs;