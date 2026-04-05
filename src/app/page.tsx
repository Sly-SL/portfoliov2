import X1Y1Half from "@/shared/components/custom/pages/home/halfs/x1y1.half";
import X2Y1Half from "@/shared/components/custom/pages/home/halfs/x2y1.half";
import X2Y2Half from "@/shared/components/custom/pages/home/halfs/x2y2.half";
import X1Y2Half from "@/shared/components/custom/pages/home/halfs/x1y2.half";
import AboutHeader from "@/shared/components/custom/pages/home/headers/about.header";
import X1Y3Half from "@/shared/components/custom/pages/home/halfs/x1y3.half";
import X1Y4Half from "@/shared/components/custom/pages/home/halfs/x1y4.half";
import X1Y5Half from "@/shared/components/custom/pages/home/halfs/x1y5.half";
import X2Y5Half from "@/shared/components/custom/pages/home/halfs/x2y5.half";

export default function Home() {

  return (
    <div>
        <section className="grid grid-cols-1 lg:grid-cols-2">
            <X1Y1Half/>
            <div className={"hidden sm:grid md:grid lg:grid xl:grid"}><X2Y1Half/></div>
        </section>
        <hr className={"blur-xs"}/>
        <AboutHeader/>
        <section id={"about"} className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <X1Y2Half/>
            <X2Y2Half/>
        </section>
        <X1Y3Half/>
        <hr className={"blur-xs"}/>
            <X1Y4Half/>
        <hr className={"blur-xs"}/>
        <section className={"grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-5"}>
            <X1Y5Half/>
            <X2Y5Half/>
        </section>
    </div>
  );
}
