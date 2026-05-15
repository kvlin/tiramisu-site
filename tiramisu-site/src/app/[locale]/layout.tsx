import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { Playfair_Display, Lato } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

//Improve SEO - multilingual title and description per locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://littlemisu.com.au";

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${baseUrl}/${loc}`])
  );

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
    },

    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },

    title:
      locale === "en"
        ? "Little Misu | Sydney"
        : "Little Misu | 悉尼",

    description:
      locale === "en"
        ? "Fresh handmade tiramisu and desserts available at Sydney markets and festivals. Currently locations in Eastwood, Hornsby, Hurstville and Wolli Creek."
        : "新鲜手工现做提拉米苏和甜点，每周在不同市集和活动等你来吃！",
  };
}

