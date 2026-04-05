import type {ReactNode} from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/shared/components/header";
import {Toaster} from "@/shared/components/libs/basic/sonner/root.sonner";
import Cookie from "@/shared/components/libs/basic/cookie.component"
import Footer from "@/shared/components/footer";
import {Montserrat} from "next/font/google";

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Slysl",
    description: "Portfolio of an Upper-Middle TypeScript/Rust Developer with strong Swift skills, showcasing projects, certificates, and professional experience in modern web and mobile development.",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100","200", "300","400", "500", "600", "700","800"],
  subsets: ["latin"],
  display: "swap",
},);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased max-w-screen ${montserrat.variable}`}
      >
        <Header />
        <main className="pt-20">
            {children}
        </main>
        <Cookie/>
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
