"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Featured", href: "#featured" },
        { name: "Trending", href: "#trending" },
        { name: "Stories", href: "#stories" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    const isWhiteText = !scrolled && !menuOpen;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-30 transition-all ${
                scrolled || menuOpen
                    ? "bg-white backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="flex justify-between items-center px-6 md:px-12 py-6 transition-colors duration-300">
                <Link
                    to="/"
                    className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isWhiteText ? "text-white" : "text-emerald-600"
                    }`}
                >
                    WhatMenWant
                </Link>

                <nav
                    className={`hidden md:flex gap-8 font-medium transition-colors duration-300 text-lg ${
                        isWhiteText ? "text-white" : "text-gray-800"
                    }`}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className={`hover:text-emerald-400 transition-colors`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 ${
                        isWhiteText ? "text-white" : "text-gray-800"
                    }`}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-gray-200 shadow-md"
                    >
                        <ul className="flex flex-col p-6 space-y-4 text-gray-700 text-base font-medium">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block hover:text-emerald-600 transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;