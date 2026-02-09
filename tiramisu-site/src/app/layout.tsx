import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "500", "600", "700"],
});

const lato = Lato({
    subsets: ["latin"],
    variable: "--font-body",
    weight: ["300", "400", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <body>
                <Header />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}