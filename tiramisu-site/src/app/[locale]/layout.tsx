import { notFound } from "next/navigation";
import { locales } from "@/i18n";



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

  return <>{children}</>;
}
