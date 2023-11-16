import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/module/navbar/navbar";
import Footer from "@/components/module/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
        </body>
    </html>
  );
}