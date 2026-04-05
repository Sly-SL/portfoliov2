"use client"

import {useEffect, useRef, useState,} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {BasicButton} from "@/shared/components/libs/basic/button.component";
import {BasicInput} from "@/shared/components/libs/basic/input.component";
import {CONSTANTS} from "@/shared/consts/consts.consts";
import {BasicH2} from "@/shared/components/libs/basic/text/h2.text";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";

const OrderConsultationForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen && dialogRef.current) {
            setTimeout(() => {
                dialogRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 50); // 50ms обычно достаточно
        }

        if (isOpen) {
            setTimeout(() => {
                const scrollY = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.overflow = 'hidden';
            },1000)
        }


        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollY);
        };
    }, [isOpen]);


    const openDialog = () => setIsOpen(true)

    const closeDialog = () => setIsOpen(false);

    return (
        <>
            <AnimateSsr activeClass={"animate-fade-in-down"} className={"grid items-center backdrop-blur-xl hover:shadow-white/25 shadow-sm hover:shadow-xl transition-all"}>
                <BasicButton
                    size={"lg"}
                    variant={"solid"}
                    onClick={openDialog}
                    className="px-6 py-3"
                >
                    Zamów konsultację
                </BasicButton>
            </AnimateSsr>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-99999 flex items-center h-full backdrop-blur-2xl justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.dialog
                            open
                            ref={dialogRef}
                            className="static m-0 w-full max-w-xl sm:max-w-2xl p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/90 dark:bg-[rgba(18,18,19,0.95)] backdrop-blur-xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                            <form action="https://formsubmit.co/el/luhuxu"
                                  method="POST"
                                  id={"request-consultation-modal"}
                                  className="w-full max-w-full flex flex-col gap-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Darmowa
                                    konsultacja</h2>
                                <BasicInput type="text" placeholder="Imię i nazwisko"
                                            name={"name"} required
                                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>
                                <BasicInput
                                    type="tel"
                                    name="phone"
                                    placeholder="+48 XXX XXX XXX"
                                    required
                                    onInput={(e) => {
                                        const target = e.target as HTMLInputElement;
                                        target.value = target.value.replace(/[^0-9+\s()-]/g, "");

                                    }}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"
                                />

                                <BasicH2 className={"text-2xl font-bold text-gray-900 dark:text-gray-100"}>Czas Kontaktu</BasicH2>


                                <div className={"grid grid-cols-2 gap-5 p-5"}>
                                    <BasicInput type="text" placeholder="Od godziny"
                                                name={"od"}
                                                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>

                                    <BasicInput type="text" placeholder="Do godziny"
                                                name={"do"}
                                                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all dark:border-gray-600 dark:bg-[rgba(28,28,30,1)] dark:text-gray-100"/>

                                </div>

                                <input type="hidden" name="_next" value={CONSTANTS.FRONTEND_DOMEN+"/formsubmited"}/>
                                <input type="hidden" name="_captcha" value="false"/>

                                <div className="flex justify-end gap-3 mt-2">
                                    <button type="button" onClick={closeDialog}
                                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 hover:dark:bg-gray-700 transition-all">Anuluj
                                    </button>
                                    <button type={"submit"}
                                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-lg hover:shadow-lg transition-all duration-300">Wyślij
                                    </button>
                                </div>
                            </form>
                        </motion.dialog>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default OrderConsultationForm;