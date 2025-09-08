import type {ButtonHeaderProps} from "@/shared/types/header-button.type";
import {shortcuts} from "@/shared/enums/shortcuts.enum";
import Image from "next/image";

const slysl = "/assets/slysl.svg";

export const SUBDIV = "-subdiv"

export const BUTTONS: ButtonHeaderProps[] = [
    {
        link:shortcuts.home,
        children:<Image src={slysl} alt={"slysl"} height={50} width={50} />,
        id:shortcuts.home.slice(1),
    },
    {
        link:shortcuts.media,
        children:"Media",
        id: shortcuts.media.slice(1),
        getElementByIdAction: shortcuts.media.slice(1) + SUBDIV
    },
    {
        link:shortcuts.projects,
        children:"Projects",
        id:shortcuts.projects.slice(1),
        getElementByIdAction: shortcuts.projects.slice(1) + SUBDIV
    },
    {
        link:shortcuts.about,
        children:"About",
        id:shortcuts.about.slice(1),
        getElementByIdAction: shortcuts.about.slice(1) + SUBDIV
    },
    {
        link:shortcuts.contact,
        children:"Contact",
        id:shortcuts.contact.slice(1),
        getElementByIdAction: shortcuts.contact.slice(1) + SUBDIV
    }
] as const;