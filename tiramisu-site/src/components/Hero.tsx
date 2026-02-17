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

                    <div className="max-w-xl">

                        {/* Heading */}
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                            Authentic <br />
                            <span className="text-accent">Tiramisu</span>
                        </h1>

                        {/* Description */}
                        <p className="text-muted-foreground text-lg mb-8">
                            Freshly made with care and tradition.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4">

                            <ScrollButton
                                targetId="tiramisus"
                                className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
                            >
                                Explore Collection →
                            </ScrollButton>

                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}