import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MobileNav />
      <main className="min-h-screen pt-14 sm:pt-16 md:pt-16 lg:pt-20">
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
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
