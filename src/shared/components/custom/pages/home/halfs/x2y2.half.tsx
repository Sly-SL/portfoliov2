import {Code, FileText} from "lucide-react";
import AnimateSsr from "@/shared/components/custom/ssr/animate.ssr";

const X2Y2Half = () => {
    return (
        <div className={"w-full flex flex-col items-center justify-center px-2"}>
            <div className="w-full mx-auto pt-2 sm:pt-4 relative">
                <div className="flex flex-col-reverse p-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <AnimateSsr activeClass={"animate-fade-in-right"}>
                            <h2
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Cześć jestem
              </span>
                                <AnimateSsr className={"animate-blob"} duration={1300}>
                                    <span className="block mt-2 text-gray-200">
                Slysl
              </span>
                                </AnimateSsr>
                            </h2>
                        </AnimateSsr>

                        <AnimateSsr activeClass={"animate-fade-in-right"} duration={1500}>
                            <p
                                className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                            >
                                Cześć, jestem Stefan Loish (Slysl), jestem fullstack developerem, który koncentruje się na znajdowaniu najlepszych rozwiązań w trudnych sytuacjach podczas tworzenia aplikacji webowych, bądź mobilnych. Preferuję pracę z frontendem w Next.js oraz backendem tworzonym przy użyciu NestJS/Actix/Axum. Na tej stronie możesz zobaczyć moje projekty, certyfikaty oraz technologie w których pracuję najchętniej.
                            </p>
                        </AnimateSsr>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                            <a href="https://drive.google.com/drive/folders/1OOln-2lKdBpamJqrj5KUe150TlTC9NBX" className="w-full lg:w-auto">
                                <AnimateSsr
                                    activeClass={"animate-fade-in-up"}
                                    duration={800}
                                >
                                    <button
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                                    >
                                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Pobierz CV
                                    </button>
                                </AnimateSsr>
                            </a>
                            <a href="#showcase" className="w-full lg:w-auto">
                                <AnimateSsr activeClass={"animate-fade-in-up"}>
                                    <button
                                        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                                    >
                                        <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Zobacz Projekty
                                    </button>
                                </AnimateSsr>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default X2Y2Half;