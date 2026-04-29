"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    const productItems = [
        { label: "Tiramisus", href: "#tiramisus" },
        { label: "Wafer Rolls", href: "#wafer-rolls" },
        { label: "Almond Crisps", href: "#almond-crisps" },
    ];

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
                    <ul className="hidden md:flex items-center gap-10 text-base font-semibold text-[#6B4F3A]">
                        <li className="group relative">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 text-base hover:text-[#5A3E2B] transition-colors duration-200"
                            >
                                Products
                                <span className="text-xs">▾</span>
                            </button>
                            <div className="invisible absolute left-0 top-full z-10 mt-3 min-w-[220px] rounded-3xl border border-[#E5DED6] bg-white p-4 text-left shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                                {productItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="block rounded-2xl px-4 py-3 text-sm text-[#6B4F3A] hover:bg-[#F8F3EC]"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </li>
                        <li>
                            <a
                                href="#order-by-email"
                                className="hover:text-[#5A3E2B] transition-colors duration-200"
                            >
                                Order
                            </a>
                        </li>
                        <li>
                            <a
                                href="#availability"
                                className="hover:text-[#5A3E2B] transition-colors duration-200"
                            >
                                Visit us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-[#5A3E2B] transition-colors duration-200"
                            >
                                About us
                            </a>
                        </li>
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
                    <ul className="flex flex-col gap-5 text-base font-medium text-[#6B4F3A]">
                        <li>
                            <button
                                className="flex w-full items-center justify-between text-left hover:text-[#5A3E2B] transition-colors"
                                type="button"
                                onClick={() => setIsProductOpen((current) => !current)}
                            >
                                Product
                                <span>{isProductOpen ? "▴" : "▾"}</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isProductOpen ? "max-h-60" : "max-h-0"}`}>
                                <ul className="mt-3 flex flex-col gap-2 pl-4">
                                    {productItems.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.href}
                                                className="block hover:text-[#5A3E2B] transition-colors"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsProductOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#availability"
                                className="block hover:text-[#5A3E2B] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Find us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block hover:text-[#5A3E2B] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;