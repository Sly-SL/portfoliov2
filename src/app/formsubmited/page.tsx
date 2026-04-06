import Bg from "@/public/assets/bg.jpg";
import Link from "next/link"
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";

export const dynamic = "force-static"

const Page = () => {
    return (
        <article
            style={{backgroundImage: `url(${Bg.src})`,}}
                 className="flex -z-2 flex-col text-center items-center justify-center min-h-screen dark:text-white">
            <div className="relative p-5 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-[25px] border border-white/20 shadow-lg">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -z-1 inset-0 bg-white/5 backdrop-blur-[5px] rounded-2xl"/>
                    <div className="absolute -z-1 inset-0 rounded-2xl shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]"/>
                </div>

                <h1 className="text-6xl font-bold text-purple-500 mb-4">Sukces!</h1>
            <p className="text-xl mb-8 text-white/90"><b>Twoje złgoszenie zostało przyjęte!</b><br/> Niedługo skontaktuję się z tobą</p>
            <Link href={shortcuts.home} className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
                Wróć
            </Link>
            </div>
        </article>
    );
};

export default Page;