import ProductCard from "@/components/ProductCard";

type Props = {
    locale: string;
};

export default function AlmondCrispsSection({ locale }: Props) {
    const title =
        locale === "cn" ? "杏仁瓦片" : "Almond Crisps";

    const subtitle =
        locale === "cn"
            ? "薄脆香甜，精选杏仁烘焙而成。"
            : "Thin, crisp and delicately baked with premium almonds.";

    const product = {
        name: locale === "cn" ? "杏仁瓦片" : "Almond Crisps",
        price: 10,
        image: "/images/almond-crisps1.jpg",
        slug: "almond-crisps",
    };

    return (
        <section
            id="almond-crisps"
            className="scroll-mt-24 py-36 bg-cream"
        >
            <div className="mx-auto max-w-5xl px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="font-display text-5xl md:text-6xl font-semibold mb-6">
                        {title}
                    </h2>

                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        {subtitle}
                    </p>
                </div>

                {/* Centered Single Card */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <ProductCard
                            {...product}
                            imageHeight="h-[280px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
