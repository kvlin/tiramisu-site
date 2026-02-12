import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16">
            <div className="mx-auto max-w-6xl px-8 text-center">

                {/* Brand */}
                <h3 className="font-display text-2xl font-semibold mb-8">
                    Little Misu
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-10">

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/littlemisu_desserts?igsh=MXJkZnpwZ2M1dGhtMA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Instagram className="w-8 h-8" />
                    </a>

                    {/* Xiaohongshu */}
                    <a
                        href="https://xhslink.com/m/17BNrYQZNmh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <img
                            src="/xiaohongshu.svg"
                            alt="Xiaohongshu"
                            className="w-8 h-8 filter invert"
                        />
                    </a>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-primary-foreground/20 pt-6">
                    <p className="text-sm text-primary-foreground/60">
                        © {new Date().getFullYear()} Little Misu. Made fresh every week.
                    </p>
                </div>

            </div>
        </footer>
    );
}