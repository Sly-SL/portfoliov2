import {SubdivType} from "@/shared/types/subdiv.type";
import {SUBDIV} from "@/shared/enums/buttons-header.enum";

const SubdivConstructor = ({id, children}: SubdivType) => {
    return (
        <div
            id={id + SUBDIV}
            className="
            hidden
            min-w-full
            min-h-[30vh]
            max-h-[70vh]
            overflow-y-auto
            justify-center
            ">
            <div className={"h-full grid justify-center py-10 ps-[22px] pe-[22px] mx-auto max-w-[1024px]"}>
                {children}
            </div>
        </div>
    );
};

export default SubdivConstructor;