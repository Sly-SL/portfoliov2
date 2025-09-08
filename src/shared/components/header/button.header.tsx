'use client'

import type {ButtonHeaderProps} from "@/shared/types/header-button.type";
import Link from "next/link";
import {useEffect} from "react";
import {allSubdivs} from "@/shared/enums/subdivs.enums";
import {SUBDIV} from "@/shared/enums/buttons-header.enum";

export default function ButtonHeader({link, children, className, getElementByIdAction, id}: ButtonHeaderProps) {

    useEffect(() => {
        if (!id || !getElementByIdAction) return;

        const thisElement = document.getElementById(id);
        const toShow = document.getElementById(getElementByIdAction);
        const subdivsList = allSubdivs
            .map(subdiv => document.getElementById(subdiv+SUBDIV))
            .filter((el): el is HTMLElement => el !== null);
        const rootSubdiv = document.getElementById("global-nav-subdiv");

        if (!thisElement || !toShow || !rootSubdiv) return;

        const show = () => {
            subdivsList.forEach(subdiv => {
                subdiv.classList.remove("block");
                subdiv.classList.add("hidden");
            });

            rootSubdiv.classList.remove("hidden");rootSubdiv.classList.add("block")
            toShow.classList.remove("hidden");toShow.classList.add("block")
        };
        const hide = () => {
            rootSubdiv.classList.remove("hidden");rootSubdiv.classList.add("block")
            toShow.classList.add("hidden"); toShow.classList.remove("block");
        };



        thisElement.addEventListener("mouseenter", show);
        toShow.addEventListener("mouseenter", show);
        toShow.addEventListener("mouseleave", hide);

        return () => {
            thisElement.removeEventListener("mouseenter", show);
            toShow.removeEventListener("mouseenter", show);
            toShow.removeEventListener("mouseleave", hide);
        };
    }, [id, getElementByIdAction]);

    return (
        <li data-subdiv id={id} className={`${className ? className : ""} text-primaryText`}>
                <Link href={link}>
                    <span className="text-[#ffffff]/80 font-normal hover:text-[#ffffff]">
                        {children}
                    </span>
                </Link>
        </li>
    );
}