
const Footer = () => {
    return (
        <footer className="bg-emerald-700 text-white text-center py-8 mt-20">
            <p className="text-sm">
                © {new Date().getFullYear()} WhatMenWant — All Rights Reserved.
            </p>
            <p className="text-xs text-emerald-200 mt-2">
                Built with honesty, empathy, and understanding.
            </p>
        </footer>
    );
};

export default Footer;