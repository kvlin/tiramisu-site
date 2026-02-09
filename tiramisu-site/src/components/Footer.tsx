import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="about" className="bg-black text-white py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Dolce Tiramisù
                        </h3>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            Crafting authentic Italian desserts with passion since 1985.
                            Every bite tells a story of tradition and excellence.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#products" className="text-white/70 hover:text-white transition-colors">
                                    Our Products
                                </a>
                            </li>
                            <li>
                                <a href="#biscuits" className="text-white/70 hover:text-white transition-colors">
                                    Biscuits
                                </a>
                            </li>
                            <li>
                                <a href="#crisps" className="text-white/70 hover:text-white transition-colors">
                                    Almond Crisps
                                </a>
                            </li>
                            <li>
                                <Link href="/flavours" className="text-white/70 hover:text-white transition-colors">
                                    All Flavours
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Information
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-white/70 hover:text-white transition-colors">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-white/70 hover:text-white transition-colors">
                                    Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-white/70 mt-1" />
                                <span className="text-white/70">
                                    Via Roma 42, 00100 Rome, Italy
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-white/70" />
                                <span className="text-white/70">
                                    +39 06 1234 5678
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-white/70" />
                                <span className="text-white/70">
                                    ciao@dolcetiramisu.it
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Dolce Tiramisù. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;