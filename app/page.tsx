import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";
import { MobileNav } from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <MobileNav />
      <main className="min-h-screen">
        <div id="home">
          <Hero />
        </div>
        <Timeline />
        <div id="services">
          <ServicesGrid />
        </div>
        <div id="contact">
          <CTASection />
        </div>
        {/* Spacer for mobile bottom nav */}
        <div className="h-16 md:h-0" />
      </main>
      <footer className="bg-primary text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-secondary">
            © 2024 Asma Nutrisanté - Tous droits réservés
          </p>
        </div>
      </footer>
    </>
  );
}
