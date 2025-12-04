import { Phone, Mail, Instagram } from "lucide-react";
import { stylizeAmpersands } from "@/lib/typography";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 sm:mb-3">
              Asma Nutrisanté
            </h3>
            <p className="text-secondary text-xs sm:text-sm">
              {stylizeAmpersands("Biochimiste & nutritionniste fonctionnelle")}
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+32XXXXXXXXX"
                className="flex items-center justify-center gap-2 text-secondary hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+32 XXX XX XX XX</span>
              </a>
              <a
                href="mailto:contact@asmanutrisante.be"
                className="flex items-center justify-center gap-2 text-secondary hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contact@asmanutrisante.be</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Suivez-moi</h4>
            <a
              href="https://instagram.com/asmanutrisante"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs sm:text-sm"
            >
              <Instagram className="w-5 h-5" />
              <span>@asmanutrisante</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-secondary text-xs sm:text-sm">
            © 2024 Asma Nutrisanté - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
