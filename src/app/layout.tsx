import type {ReactNode} from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/shared/components/header";
import Head from 'next/head';
import {Toaster} from "@/shared/components/libs/basic/sonner/root.sonner";
import Cookie from "@/shared/components/libs/basic/cookie.component"
import Footer from "@/shared/components/footer";
import {Montserrat} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"

export const revalidate = 86400

export const metadata: Metadata = {
  metadataBase: new URL("https://slysl.vercel.app"),

  title: {
    default: "Slysl — TypeScript & Rust Developer",
    template: "%s | Slysl",
  },
  verification:{
    google:"Zqou63Uo6Hcg1k0Slp25AshdFqCTsaFY82fVJeCr0_c",
  },

  description:
      "Portfolio of an Upper-Middle TypeScript & Rust Developer with strong Swift skills. Building scalable web and mobile applications with modern technologies.",

  keywords: [
    "TypeScript Developer",
    "Rust Developer",
    "Next.js Portfolio",
    "Fullstack Developer",
    "Swift Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Slysl" }],
  creator: "Slysl",

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://slysl.vercel.app/",
    title: "Slysl — TypeScript & Rust Developer",
    description:
        "Explore projects, experience, and skills in modern web and mobile development.",
    siteName: "Slysl Portfolio",
    images: [
      {
        url: "/assets/render-full.webp", // положи в /public
        width: 1200,
        height: 630,
        alt: "Slysl Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Slysl — TypeScript & Rust Developer",
    description:
        "Portfolio showcasing modern web, mobile, and scalable applications.",
    images: ["/assets/render-full.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <Head>
        <meta name="google-site-verification" content="Zqou63Uo6Hcg1k0Slp25AshdFqCTsaFY82fVJeCr0_c" />
      </Head>
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
        <Analytics mode={"production"}/>
      </body>
    </html>
  );
}
