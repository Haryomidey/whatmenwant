
const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-20">
            <h1 className="text-2xl font-extrabold text-emerald-600 tracking-tight">
                WhatMenWant
            </h1>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#featured" className="hover:text-emerald-600">Featured</a>
                <a href="#trending" className="hover:text-emerald-600">Trending</a>
                <a href="#stories" className="hover:text-emerald-600">Stories</a>
                <a href="#testimonials" className="hover:text-emerald-600">Testimonials</a>
                <a href="#faq" className="hover:text-emerald-600">FAQ</a>
            </nav>
        </header>
    );
};

export default Header;