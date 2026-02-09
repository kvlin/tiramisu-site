"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4EFEA] border-b border-[#E5DED6]">
            <div className="mx-auto max-w-7xl px-6">
                <nav className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-semibold text-[#5A3E2B] tracking-wide"
                    >
                        Dolce Tiramisù
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#6B4F3A]">
                        {["Tiramisus", "Biscuits", "Almond Crisps", "About"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="hover:text-[#5A3E2B] transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Cart */}
                        <button className="relative p-2">
                            <ShoppingBag className="h-5 w-5 text-[#5A3E2B]" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-pink-400 text-white text-[10px] flex items-center justify-center font-semibold">
                                0
                            </span>
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-[#5A3E2B]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 pb-4 pt-4 border-t border-[#E5DED6]" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col gap-5 text-sm font-medium text-[#6B4F3A]">
                        {["Tiramisus", "Biscuits", "Almond Crisps", "About"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="block hover:text-[#5A3E2B] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;