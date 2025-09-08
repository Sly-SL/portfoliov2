import ButtonHeader from "@/shared/components/header/button.header";
import {BUTTONS} from "@/shared/enums/buttons-header.enum";
import SidebarChangeButton from "@/shared/components/header/sidebar-change.button";
import MediaSubdiv from "@/shared/components/header/subdivs/subdivs/media.subdiv";
import ContactSubdiv from "@/shared/components/header/subdivs/subdivs/contact.subdiv";
import ProjectsSubdiv from "@/shared/components/header/subdivs/subdivs/projects.subdiv";
import AboutSubdiv from "@/shared/components/header/subdivs/subdivs/about.subdiv";


const Header = () => {

    return (
        <header className="bg-[rgba(22,22,23,0.8)] w-full hover:bg-[rgb(22,22,23)] fixed z-[9999] backdrop-blur-[20px] backdrop-saturate-180">
            <h1 className={"hidden"}>Slysl</h1>
            <div className={"h-full"}>

                {/*Desktop nav*/}
                <div className={'select-none hidden lg:block z-[2] h-full py-4 min-w-[1024px] ps-[22px] pe-[22px]'}>
                    <nav className={"h-full"}>
                        <ul className={'flex sm:gap-2 md:gap-9 text-center h-full items-center justify-center'}>
                            <div className={"translate-x-[4px] z-[3] text-primaryText"}>
                                <ButtonHeader link={BUTTONS[0].link}>
                                    {BUTTONS[0].children}
                                </ButtonHeader>
                            </div>
                            {BUTTONS.filter((_,i)=>i !== 0).map((button)=>(
                                <ButtonHeader
                                    className={button.className+" text-sm"}
                                    getElementByIdAction={button.getElementByIdAction}
                                    id={button.id} key={button.id}
                                    link={button.link}>
                                    {button.children}
                                </ButtonHeader>
                            ))}
                        </ul>
                        <li id={"global-nav-subdiv"}
                            className={"hidden justify-center"}>
                            <MediaSubdiv/>
                            <ProjectsSubdiv/>
                            <AboutSubdiv/>
                            <ContactSubdiv/>
                        </li>
                    </nav>
                </div>

                {/*Mobile nav*/}
                <nav
                    className={'block h-full lg:hidden  py-9 bg-[rgba(22,22,23,0.8)] text-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.48)]'}>
                    <ul className={'flex justify-center'}>
                        <div className={"absolute left-1 translate-x-[4px]  top-3 z-[3]"}>
                            <ButtonHeader link={BUTTONS[0].link}>
                                {BUTTONS[0].children}
                            </ButtonHeader>
                        </div>

                        <div className={"absolute right-3 top-4 translate-x-[4px] z-[3]"}>
                            <SidebarChangeButton/>
                        </div>
                        <div>
                            <aside id={"global-sidebar"} className={'hidden animate-out'}>
                                <ul className={"flex flex-col justify-center gap-2 pt-5"}>
                                    {BUTTONS.filter((_,i)=>i !== 0).map((button)=>(
                                        <ButtonHeader
                                            className={button.className+" text-2xl border-b text-white border-[rgba(255,255,255,0.48)]"}
                                            getElementByIdAction={button.getElementByIdAction}
                                            id={button.id} key={button.id}
                                            link={button.link}>
                                            {button.children}
                                        </ButtonHeader>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;