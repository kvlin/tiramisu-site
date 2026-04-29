import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
    };
    return (
        <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/hero-tiramisu.jpg"
                alt="Authentic Italian Tiramisu"
                fill
                priority
                className="object-cover"
            />

            {/* Soft Gradient Overlay (fade from left) */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto max-w-7xl w-full px-6">

                    <div className="max-w-xl mt-64 pb-12 sm:pb-0">

                        {/* Heading */}
                        <h1 className="font-display text-6xl md:text-2xl lg:text-8xl font-semibold leading-tight mb-6">
                            Authentic <br />
                            <span className="text-accent">Tiramisu</span>
                        </h1>

                        {/* Description */}
                        <p className="text-muted-foreground text-lg mb-8">
                            Freshly made with care and tradition.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row">

                            <ScrollButton
                                targetId="tiramisus"
                                className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
                            >
                                Explore Collection
                            </ScrollButton>

                            <ScrollButton
                                targetId="availability"
                                className="rounded-lg border border-white/30 bg-white/90 text-foreground px-6 py-3 font-medium hover:bg-white transition"
                            >
                                Find Us
                            </ScrollButton>

                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}