import {Globe} from "lucide-react"
import ContactCustom from "@/shared/components/custom/pages/contact.custom";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";
import {GoogleMaps} from "@/shared/components/custom/google-maps.custom";
import {StatCard} from "@/shared/components/custom/stats-card.custom";

export const dynamic = "force-static"

const AboutPage = () => {

    const startDate = new Date("2021-05-12");
    const today = new Date();
    const YearExperience =
        today.getFullYear() - startDate.getFullYear() -
        (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);


    function getYearWord(n:number) {
        if (n === 1) return "rok";

        const lastDigit = n % 10;
        const lastTwoDigits = n % 100;

        if (
            lastDigit >= 2 &&
            lastDigit <= 4 &&
            !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
        ) {
            return "lata";
        }

        return "lat";
    }

    const value = `${YearExperience} ${getYearWord(YearExperience)}`;

    const statsData = [
        {
            icon: Globe,
            color: "from-white/20 to-gray-200/20",
            value: value,
            label: "Jestem na rynku",
            description: "Stabilność to podstawa!",
        },
    ];

    return (
        <section
            className="h-auto pb-[10%] text-white overflow-hidden sm:px-[5%] mt-10 sm-mt-0"
            id="About"
        >
            <div className="grid lg:grid-cols-2 gap-8 justify-center items-center">
                <AnimateSsr activeClass={"animate-fade-in-right"}>
                    <GoogleMaps />
                </AnimateSsr>


                <div className={"grid grid-rows-2 items-center"}>
                    <div>
                        <AnimateSsr activeClass={"animate-fade-in-down"}>
                            <h1 className={"font-bold text-2xl pt-5 text-black dark:text-white"}>SlySL Coder</h1>
                        </AnimateSsr>

                        <div
                            className="grid grid-cols-1 pt-8 grid-rows-1 gap-3 cursor-pointer"
                        >
                            {statsData.map((stat,i) => (
                                <AnimateSsr activeClass={i % 4 == 1 ? "animate-fade-in-right" : i % 4 == 2 ?  "animate-fade-in-down": i % 4 == 3 ? "animate-fade-in-up" : "animate-fade-in-left"} key={i}>
                                    <StatCard key={stat.label} {...stat} />
                                </AnimateSsr>
                            ))}
                        </div>
                    </div>
                    <ContactCustom/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;