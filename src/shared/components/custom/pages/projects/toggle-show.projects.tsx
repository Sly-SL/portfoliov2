import type {AllSectionsProjectsType} from "@/shared/types/all-sections-projects.type";
import type {FC} from "react";

export const dynamic = "force-static"

interface ToggleButtonProps {
    showMore: boolean;
    type:AllSectionsProjectsType;
}

const toggleShowMore = (type: AllSectionsProjectsType) => {
    const allProjects = document.getElementById(`${type}-show-more`);
    const desktopShowLess = document.getElementById(`${type}-desktop-show-less`);
    const mobileShowLess = document.getElementById(`${type}-mobile-show-less`);

    const isHiddenNow = allProjects?.classList.contains("hidden");

    if (isHiddenNow) {
        desktopShowLess?.classList.add("hidden");
        desktopShowLess?.classList.remove("grid");
        mobileShowLess?.classList.add("hidden");
        mobileShowLess?.classList.remove("grid");

        allProjects?.classList.remove("hidden");
        allProjects?.classList.add("grid");
    } else {
        allProjects?.classList.add("hidden");
        allProjects?.classList.remove("grid");

        desktopShowLess?.classList.remove("hidden");
        desktopShowLess?.classList.add("grid");
        mobileShowLess?.classList.remove("hidden");
        mobileShowLess?.classList.add("grid");
    }
};

export const ToggleButtonProjects:FC<ToggleButtonProps> = ({ showMore,type }) => (
    <button
        onClick={()=>toggleShowMore(type)}
        className="
      px-3 py-1.5
      text-slate-300
      hover:text-white
      text-sm
      font-medium
      transition-all
      duration-300
      ease-in-out
      flex
      items-center
      gap-2
      bg-white/5
      hover:bg-white/10
      rounded-md
      border
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
    >
    <span className="relative z-10 flex items-center gap-2">
      {showMore ? "See More": "See Less"}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`
          transition-transform 
          duration-1000 
          ${showMore ? "group-hover:translate-y-0.5" : "group-hover:-translate-y-0.5"}
        `}
        >
        <polyline points={showMore ? "6 9 12 15 18 9" : "18 15 12 9 6 15"}></polyline>
      </svg>
    </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
    </button>
);