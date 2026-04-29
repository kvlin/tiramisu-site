import { Mail } from "lucide-react";

type Props = {
    locale: string;
};

export default function OrderByEmailSection({ locale }: Props) {
    const title = locale === "cn" ? "预订摊位取货" : "Order for Stall Pick-up";
    const subtitle =
        locale === "cn"
            ? "通过电子邮件预订您的甜点。\n发送邮件至 order@littlemisu.com.au 进行预订。"
            : "Order your desserts by email.\nSend your order to order@littlemisu.com.au.";
    const instructions = [
        locale === "cn" ? "商品名称" : "Item name",
        locale === "cn" ? "数量" : "Quantity",
        locale === "cn" ? "取货市场" : "Pick-up market",
        locale === "cn" ? "取货日期" : "Pick-up date",
    ];
    const buttonText = locale === "cn" ? "发送预订邮件" : "Send Order Email";
    const note = locale === "cn" ? "仅限取货。不提供送货服务。" : "Pick-up only. No delivery available.";

    return (
        <section
            id="order-by-email"
            className="scroll-mt-24 py-24 bg-secondary"
        >
            <div className="mx-auto max-w-4xl px-8">
                <div className="rounded-[32px] border border-[#e5d6cc] bg-white p-8 md:p-12 shadow-sm">
                    <div className="text-center mb-1">
                        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 ">
                            {title}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            {locale === "cn"
                                ? "通过电子邮件预订您的甜点。"
                                : "Order your desserts by email."}
                            <br />
                            {locale === "cn"
                                ? "发送邮件至 order@littlemisu.com.au "
                                : "Please send your order to:"}
                        </p>
                        <br />
                        <span className="font-bold text-[#7A3E1E] text-2xl">
                            order@littlemisu.com.au
                        </span>.
                    </div>
                    {/* 
                    <div className="mb-8 mx-auto max-w-md text-left">
                        <h3 className="font-semibold text-lg mb-4 text-[#6B4F3A]">
                            {locale === "cn" ? "请在邮件中包含以下信息：" : "Please include the following in your email:"}
                        </h3>
                        <ul className="space-y-3 text-muted-foreground">
                            {instructions.map((instruction, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#7A3E1E] rounded-full flex-shrink-0"></span>
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    {/* 
                    <div className="text-center mb-6">
                        <a
                            href="mailto:kevlin129@hotmail.com"
                            className="inline-flex items-center gap-3 bg-[#7A3E1E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5A3E2B] transition-colors duration-200 shadow-sm"
                        >
                            <Mail size={20} />
                            {buttonText}
                        </a>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        {note}
                    </p> */}
                </div>
            </div>
        </section>
    );
}
