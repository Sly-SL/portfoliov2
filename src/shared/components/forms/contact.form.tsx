'use client'

import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import * as AOS from "aos";
import {Mail, MessageSquare, Send, User} from "lucide-react";


interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('loading');

        try {
            // Get form data
            const form = e.target as HTMLFormElement;

            // Submit form (replace with your API endpoint or form submission logic)
            await form.submit();

            setStatus('success');

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
            <div>
            <form
                action="https://formsubmit.co/4d85d61d2935f811c96c0279d224b7f3"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="relative group"
                >
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-500/30 transition-all duration-300 hover:border-gray-500/30 disabled:opacity-50"
                        required
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="relative group"
                >
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-300  transition-colors" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-500/30 transition-all duration-300 hover:ring-gray-500/30 disabled:opacity-50"
                        required
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="relative group"
                >
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-300  transition-colors" />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-500/30 transition-all duration-300 hover:ring-gray-400/30 h-[9.9rem] disabled:opacity-50"
                        required
                    />
                </div>
            </form>
            {status === 'loading' && (
                <p className="mt-2 text-sm text-gray-500">Sending message…</p>
            )}
            {status === 'success' && (
                <p className="mt-2 text-sm text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
            )}

                <button
                    data-aos="fade-up"
                    data-aos-delay="400"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-gradient-to-r from-black/80 to-gray-950/80 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </div>
    );
};

export default ContactForm;