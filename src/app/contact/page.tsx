import {BasicH1} from "@/shared/components/libs/basic/text/h1.text";
import OrderConsultationForm from "@/shared/components/forms/order-consultation.form";
import ContactCustom from "@/shared/components/custom/pages/contact.custom";
import SocialLinksCustom from "@/shared/components/custom/social-links.custom";
import {GoogleMaps} from "@/shared/components/custom/google-maps.custom";

const Contact = () => {

    return (
        <article
            className="h-full pb-[10%] bg-white/70 dark:bg-black/80 overflow-hidden sm:px-[5%] mt-10 sm-mt-0"
        >
            <BasicH1 className={"animate-fade-in-down text-purple-100 duration-500"}>W razie jakichkolwiek pytań<br/> Skontaktuj się ze mną</BasicH1>
            <div className="grid grid-cols-1 pt-5 md:pt-10 lg:grid-cols-2 gap-8">

                <section>
                    <article className={"grid grid-cols-1 gap-5 items-start"}>
                        <ContactCustom/>
                    </article>
                    <article className={"pt-5"}>
                        <SocialLinksCustom />
                    </article>
                </section>
                <GoogleMaps/>

                <section>
                    <OrderConsultationForm/>
                </section>
            </div>
        </article>
    );
};

export default Contact;