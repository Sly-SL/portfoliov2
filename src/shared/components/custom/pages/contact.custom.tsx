import {ButtonsContactEnum} from "@/shared/consts/enums/buttons-contact.enum";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";

const ContactCustom = () => {
    return (
        <div className={"grid grid-cols-1 items-start justify-center"}>
            {ButtonsContactEnum.map((item, i) => (
                <div className={"grid grid-cols-1 pt-2"} key={i}>
                    <label className={"font-bold dark:text-white/80 text-black/80 pb-1 px-1 text-3xl "}>
                        {item.label}
                    </label>

                    {item.buttons.map((button, i) => ((
                        <AnimateSsr activeClass={`${i % 4 == 1 ? "animate-fade-in-right" : i % 4 == 2 ?  "animate-fade-in-down": i % 4 == 3 ? "animate-fade-in-up" : "animate-fade-in-left"} ${item.linkClassName}`} key={i}>
                            {button.element}
                        </AnimateSsr>
                    )))}
                </div>
            ))}
        </div>
    );
};

export default ContactCustom;