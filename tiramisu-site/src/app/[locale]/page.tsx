import Image from "next/image";
import Hero from "@/components/Hero";
import TiramisuSection from "@/components/TiramisuSection";
import WaferRollSection from "@/components/WaferRollSection";
import AlmondCrispsSection from "@/components/AlmondCrispsSection";

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
      <WaferRollSection locale={locale} />
      <AlmondCrispsSection locale={locale} />
      <section
        id="about"
        className="scroll-mt-24 py-36 bg-[#f8f3ec]"
      >
        <div className="mx-auto max-w-4xl px-8 text-center">

          <h2 className="font-display text-5xl md:text-6xl font-semibold mb-10">
            Our Story
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            What started as a small market stall has grown through dedication,
            consistency, and the trust of customers who return week after week.
            We never compromise on quality — premium mascarpone, rich espresso,
            and handcrafted layers prepared with care.
            <span className="block mt-4 text-foreground font-medium">
              We’re at the Eastwood Night Market every Saturday — come visit and taste it fresh.
            </span>
          </p>

        </div>
      </section>
    </>
  );
}
