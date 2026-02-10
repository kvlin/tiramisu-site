import ProductCard from "@/components/ProductCard";

type Props = {
    locale: string;
};

export default function WaferRollSection({ locale }: Props) {
    const title =
        locale === "cn" ? "手工蛋卷" : "Artisan Wafer Rolls";

    const subtitle =
        locale === "cn"
            ? "酥脆轻盈，经典与创新口味结合。"
            : "Light, crisp and delicately rolled. Crafted in classic and modern flavours.";

    const products = [
        {
            name: locale === "cn" ? "香草蛋卷" : "Vanilla Wafer Rolls",
            price: 12,
            image: "/images/wafer-vanilla6.jpg",
            slug: "wafer-vanilla",
        },
        {
            name: locale === "cn" ? "抹茶蛋卷" : "Matcha Wafer Rolls",
            price: 12,
            image: "/images/wafer-matcha.jpg",
            slug: "wafer-matcha",
        },
        {
            name: locale === "cn" ? "巧克力蛋卷" : "Chocolate Wafer Rolls",
            price: 12,
            image: "/images/wafer-chocolate.jpg",
            slug: "wafer-chocolate",
        },
        {
            name: locale === "cn" ? "芝麻蛋卷" : "Sesame Wafer Rolls",
            price: 12,
            image: "/images/wafer-sesame.jpg",
            slug: "wafer-sesame",
        },
    ];

    return (
        <section
            id="wafer-rolls"
            className="scroll-mt-24 py-36 bg-secondary"
        >
            <div className="mx-auto max-w-7xl px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-display text-5xl md:text-6xl font-semibold mb-6">
                        {title}
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        {subtitle}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} imageHeight="h-[300px]" />
                    ))}
                </div>

            </div>
        </section>
    );
}