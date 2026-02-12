"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4de] text-[#7A3E1E] border-b border-[#7A3E1E]/10">
            <div className="mx-auto max-w-7xl px-6">
                <nav className="flex h-16 items-center justify-between">

                    {/* Logo */}

                    <a href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Little Misu"
                            width={200}
                            height={100}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </a>
                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#6B4F3A]">
                        {["Tiramisus", "Wafer Rolls", "Almond Crisps", "About"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="hover:text-[#5A3E2B] transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="md:hidden text-brandBrown"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 pb-4 pt-4 border-t border-[#E5DED6]" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col gap-5 text-sm font-medium text-[#6B4F3A]">
                        {["Tiramisus", "Wafer Rolls", "Almond Crisps", "About"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
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