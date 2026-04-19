"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Skills", href: "#skills" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#inicio" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Code2 className="text-slate-950" size={24} />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            Sergio<span className="text-cyan-400">.dev</span>
          </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="px-5 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-500 hover:text-slate-950 transition-all"
                    >
                        Contrátame
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;