import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
    name: string;
    image: string;
    slug: string;
    badge?: string;
    prices?: {
        label: string;
        value: number;
    }[];
    price?: number; // fallback single price
};

export default function ProductCard({
    name,
    price,
    image,
    slug,
    badge,
    prices
}: ProductCardProps) {
    return (
        <div className="group rounded-2xl bg-white backdrop-blur-sm 
        shadow-lg border border-border
        overflow-hidden transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-2">

            {/* Image (dominant ~70%) */}
            <div className="relative h-[420px] overflow-hidden">
                {badge && (
                    <span className="absolute top-5 left-5 z-10 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-accent-foreground">
                        {badge}
                    </span>
                )}

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6">
                    {name}
                </h3>

                <div className="mt-6 min-h-[70px] flex flex-col justify-center">
                    {prices && prices.length > 0 ? (
                        <div className="space-y-2">
                            {prices.map((p, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between text-lg"
                                >
                                    <span className="text-sm text-muted-foreground">
                                        {p.label}
                                    </span>
                                    <span className="font-semibold">
                                        A${p.value.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-xl font-semibold text-left">
                            A${price?.toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}