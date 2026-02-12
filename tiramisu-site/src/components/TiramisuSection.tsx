import ProductCard from "@/components/ProductCard";

type Props = {
    locale: string;
};

export default function TiramisuSection({ locale }: Props) {
    const title =
        locale === "cn" ? "招牌提拉米苏" : "Signature Tiramisù";

    const subtitle =
        locale === "cn"
            ? "每日新鲜制作，采用传统配方与优质原料。"
            : "Each creation is handcrafted daily using traditional recipes and the freshest ingredients we can find.";

    const products = [
        {
            name: locale === "cn" ? "原味提拉米苏" : "Original Tiramisu",
            image: "/images/tiramisu-original6.jpg",
            slug: "original-tiramisu",
            badge: "Best Seller",
            prices: [
                { label: "Non-Alcohol", value: 9.9 },
                { label: "Alcohol", value: 11.8 },
            ],
        },
        {
            name: locale === "cn" ? "荔枝提拉米苏" : "Lychee Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-lychee.jpg",
            slug: "lychee-tiramisu",
        },
        {
            name: locale === "cn" ? "草莓提拉米苏" : "Strawberry Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-strawberry.jpg",
            slug: "strawberry-tiramisu",
        },
        {
            name: locale === "cn" ? "抹茶提拉米苏" : "Matcha Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-matcha2.jpg",
            slug: "matcha-tiramisu",
        },
        {
            name: locale === "cn" ? "芒果提拉米苏" : "Mango Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-mango3.jpg",
            slug: "mango-tiramisu",
        },
        {
            name: locale === "cn" ? "香芋提拉米苏" : "Taro Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-taro4.jpg",
            slug: "durian-tiramisu",
        },
        {
            name: locale === "cn" ? "奥利奥提拉米苏" : "Oreo Tiramisu",
            price: 12.8,
            image: "/images/tiramisu-oreo.jpg",
            slug: "oreo-tiramisu",
        },
        {
            name: locale === "cn" ? "榴莲提拉米苏" : "Durian Tiramisu",
            price: 18.8,
            image: "/images/tiramisu-durian.jpg",
            slug: "durian-tiramisu",
            badge: "Exotic Seller",
        }
    ];

    return (
        <section
            id="tiramisus"
            className="scroll-mt-24 py-36 bg-rose-light"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}