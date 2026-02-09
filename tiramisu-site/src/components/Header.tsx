"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
            <div className="mx-auto max-w-7xl px-4 py-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-semibold text-primary"
                    >
                        Dolce Tiramisù
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <a href="#products" className="hover:text-primary transition-colors font-medium">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#biscuits" className="hover:text-primary transition-colors font-medium">
                                Biscuits
                            </a>
                        </li>
                        <li>
                            <a href="#crisps" className="hover:text-primary transition-colors font-medium">
                                Almond Crisps
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-primary transition-colors font-medium">
                                About
                            </a>
                        </li>
                    </ul>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4">
                        {/* Cart */}
                        <button className="relative p-2">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center font-semibold">
                                0
                            </span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 border-t pt-4">
                        <ul className="flex flex-col gap-4">
                            {["Products", "Biscuits", "Almond Crisps", "About"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(" ", "")}`}
                                            className="block font-medium hover:text-primary transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;