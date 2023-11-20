import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/module/navbar/navbar";
import Footer from "@/components/module/footer/footer";

export const metadata: Metadata = {
  title: "Estimar custo de um software",
  description: "WebSite com o proposito de estimar o custo de um software",
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
