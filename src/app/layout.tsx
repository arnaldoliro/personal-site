import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import Background from "@/components/Background";
// import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Meu Portfólio Pessoal",
  description: "Desenvolvedor Full Stack & Designer de Experiências Digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg font-sans">
        {/* <Background /> */}
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}