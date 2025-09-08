import type {ReactNode} from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/shared/components/header";
import Loader from "@/shared/components/loader";

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Slysl",
  description: "Typescript Upper-Middle Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Loader/>
        <Header />
        {children}
      </body>
    </html>
  );
}
