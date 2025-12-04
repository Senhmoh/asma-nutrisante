"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { stylizeAmpersands } from "@/lib/typography";

interface Service {
  iconSvg: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
}

const services: Service[] = [
  {
    iconSvg: "/images/svg/oncologie.svg",
    title: "Oncologie intégrative",
    description: "Soutien nutritionnel pendant et après chimiothérapie. Jeûne thérapeutique et alimentation anti-inflammatoire.",
    image: "/images/cells.jpg",
    detailedDescription: "L'accompagnement en oncologie intégrative combine les approches scientifiques de la médecine conventionnelle avec des stratégies nutritionnelles ciblées. Mon protocole comprend : un soutien nutritionnel adapté aux différentes phases du traitement (chimiothérapie, radiothérapie, post-traitement), l'utilisation du jeûne thérapeutique pour potentialiser l'efficacité des traitements et réduire les effets secondaires, une alimentation anti-inflammatoire personnalisée, ainsi qu'une supplémentation ciblée pour renforcer le système immunitaire. Chaque plan est élaboré en collaboration avec votre équipe médicale pour une prise en charge optimale et sécurisée.",
  },
  {
    iconSvg: "/images/svg/digestive.svg",
    title: "Santé digestive",
    description: "Traitement de la dysbiose intestinale et restauration du microbiote.",
    image: "/images/aloe-vera.jpg",
    detailedDescription: "La santé digestive est au cœur de notre bien-être global. Mon approche se concentre sur l'identification et le traitement de la dysbiose intestinale, la restauration d'un microbiote équilibré, et la réparation de la muqueuse intestinale. J'utilise des protocoles de nutrition fonctionnelle incluant l'élimination des aliments déclencheurs, l'introduction progressive de prébiotiques et probiotiques adaptés, ainsi que des stratégies pour réduire l'inflammation intestinale. Cette approche permet de traiter efficacement le syndrome de l'intestin irritable, les intolérances alimentaires, et d'améliorer l'absorption des nutriments.",
  },
  {
    iconSvg: "/images/svg/burn-out.svg",
    title: "Fatigue - burn-out",
    description: "Revitalisation cellulaire et équilibre thyroïdien.",
    image: "/images/burn-out.jpg",
    detailedDescription: "La fatigue chronique et le burn-out nécessitent une approche globale et personnalisée. Mon protocole vise à : restaurer l'énergie cellulaire par une nutrition ciblée en micronutriments essentiels (fer, magnésium, vitamines B, CoQ10), optimiser la fonction thyroïdienne et l'équilibre hormonal, réguler le cortisol et les rythmes circadiens, et soutenir les surrénales. L'accompagnement inclut également des conseils sur la gestion du stress, l'amélioration du sommeil, et l'adaptation progressive de votre mode de vie pour une récupération durable et efficace.",
  },
  {
    iconSvg: "/images/svg/cupping.svg",
    title: "Cupping therapy",
    description: "Drainage et détoxification par la méthode des ventouses (Medical Cupping).",
    image: "/images/cupping.jpg",
    detailedDescription: "La Cupping Therapy (Hijama) est une méthode thérapeutique ancestrale que j'ai étudiée auprès du Dr. Ait Mhammed. Cette technique de drainage par ventouses permet de : stimuler la circulation sanguine et lymphatique, éliminer les toxines accumulées dans les tissus, réduire les inflammations et les douleurs musculaires, et renforcer le système immunitaire. Les séances sont personnalisées selon vos besoins spécifiques et peuvent être combinées avec l'accompagnement nutritionnel pour une approche holistique optimale. Pratiquée dans le respect des protocoles d'hygiène les plus stricts.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);

  const handleReserve = useCallback(() => {
    setOpen(false);

    if (typeof window === "undefined") {
      return;
    }

    window.requestAnimationFrame(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#contact");
      }
    });
  }, [setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group bg-surface p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 sm:mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Image
              src={service.iconSvg}
              alt={`${service.title} icône`}
              width={48}
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-primary mb-2 sm:mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
            {stylizeAmpersands(service.title)}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-primary/70 leading-relaxed flex-grow">
            {stylizeAmpersands(service.description)}
          </p>

          <div className="mt-6 pt-4 border-t border-primary/10">
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                En savoir plus →
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </motion.div>

      <DialogContent className="sm:max-w-[600px] bg-white border-none shadow-2xl overflow-hidden rounded-xl p-0">
        {/* Image Banner */}
        <div className="relative h-32 md:h-40 w-full">
          <Image
            src={service.image}
            fill
            className="object-cover"
            alt={`${service.title} - Détail`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-serif text-primary mb-4">
              {stylizeAmpersands(service.title)}
            </DialogTitle>
            <DialogDescription asChild>
              <ScrollArea className="max-h-[400px] pr-4">
                <p className="text-gray-700 leading-relaxed text-base">
                  {stylizeAmpersands(service.detailedDescription)}
                </p>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-end">
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8"
              onClick={handleReserve}
            >
              Réserver ce soin (30 min)
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-3 sm:mb-4">
            Mes accompagnements
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 max-w-2xl mx-auto px-2">
            Une approche sur-mesure, scientifique et holistique pour répondre à vos besoins
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
