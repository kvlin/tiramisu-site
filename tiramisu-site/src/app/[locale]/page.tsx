import Image from "next/image";
import Hero from "@/components/Hero";
import TiramisuSection from "@/components/TiramisuSection";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Hero />
      <TiramisuSection locale={locale} />
      <section id="biscuits" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">Biscuits</h2>
      </section>

      <section id="almond-crisps" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">Almond Crisps</h2>
      </section>

      <section id="about" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">About</h2>
        We began at the weekly Eastwood Night Market, and to this day, you’ll still find us there — occasionally bringing our desserts to Chatswood and Hurstville as well.

        What started as a small market stall has grown through dedication, consistency, and the trust of customers who return week after week. We never compromise on quality — premium mascarpone, rich espresso, and handcrafted layers prepared with care. For us, freshness isn’t a marketing promise; it’s a ritual. Every dessert reflects the same attention and pride we’ve carried since that very first market day.
      </section>
    </>
  );
}
