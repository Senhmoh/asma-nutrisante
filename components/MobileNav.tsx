"use client";

import { Home, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    label: "Accueil",
    href: "#home",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    label: "Services",
    href: "#services",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    label: "RDV",
    href: "#contact",
  },
];

export function MobileNav() {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface border-t border-primary/10 shadow-xl">
        <div className="flex items-center justify-around h-16 px-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full",
                "text-primary/60 hover:text-primary transition-colors duration-200"
              )}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-primary/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-serif font-bold text-primary">
              Asma Nutrisanté
            </div>

            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-primary/80 hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
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
