import SubdivConstructor from "@/shared/components/header/subdivs/subdiv-constructor.subdiv";
import ContactForm from "@/shared/components/forms/contact.form";
import SocialLinks from "@/shared/components/header/subdivs/subdivs/contact/social-links.contact";

const ContactSubdiv = () => {


    return (
        <SubdivConstructor id="contact">
            <div className="w-full h-full grid grid-cols-2 gap-20">
                <ContactForm/>
                <div className={"text-2xl text-center"}>
                    <SocialLinks/>
                </div>
            </div>
        </SubdivConstructor>
    );
};

export default ContactSubdiv;