"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Accueil",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#footer",
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg border-b border-primary/10 shadow-sm">
        <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4">
          {/* Logo */}
          <a href="#home" className="text-lg sm:text-xl font-serif font-bold text-primary" onClick={closeMenu}>
            Asma Nutrisanté
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-surface border-b border-primary/10 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="block mx-4 my-2 px-4 py-3 bg-accent text-white text-center rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Réserver ma consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-primary/10 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="text-xl lg:text-2xl font-serif font-bold text-primary">
              Asma Nutrisanté
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm lg:text-base text-primary/80 hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg text-sm lg:text-base font-medium hover:scale-105 transition-transform duration-200 whitespace-nowrap"
              >
                Réserver
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
