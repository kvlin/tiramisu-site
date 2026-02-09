import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="tiramisus" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">Tiramisus</h2>
        {/* content */}
      </section>

      <section id="biscuits" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">Biscuits</h2>
      </section>

      <section id="almond-crisps" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">Almond Crisps</h2>
      </section>

      <section id="about" className="min-h-screen py-20">
        <h2 className="text-3xl font-bold">About</h2>
      </section>
    </>
  );
}