"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, Battery, Wind } from "lucide-react";
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

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
}

const services: Service[] = [
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Oncologie Intégrative",
    description: "Soutien nutritionnel pendant et après chimiothérapie. Jeûne thérapeutique et alimentation anti-inflammatoire.",
    image: "/images/cells.jpg",
    detailedDescription: "L'accompagnement en oncologie intégrative combine les approches scientifiques de la médecine conventionnelle avec des stratégies nutritionnelles ciblées. Mon protocole comprend : un soutien nutritionnel adapté aux différentes phases du traitement (chimiothérapie, radiothérapie, post-traitement), l'utilisation du jeûne thérapeutique pour potentialiser l'efficacité des traitements et réduire les effets secondaires, une alimentation anti-inflammatoire personnalisée, ainsi qu'une supplémentation ciblée pour renforcer le système immunitaire. Chaque plan est élaboré en collaboration avec votre équipe médicale pour une prise en charge optimale et sécurisée.",
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Santé Digestive",
    description: "Traitement de la dysbiose intestinale et restauration du microbiote.",
    image: "/images/aloe-vera.jpg",
    detailedDescription: "La santé digestive est au cœur de notre bien-être global. Mon approche se concentre sur l'identification et le traitement de la dysbiose intestinale, la restauration d'un microbiote équilibré, et la réparation de la muqueuse intestinale. J'utilise des protocoles de nutrition fonctionnelle incluant l'élimination des aliments déclencheurs, l'introduction progressive de prébiotiques et probiotiques adaptés, ainsi que des stratégies pour réduire l'inflammation intestinale. Cette approche permet de traiter efficacement le syndrome de l'intestin irritable, les intolérances alimentaires, et d'améliorer l'absorption des nutriments.",
  },
  {
    icon: <Battery className="w-10 h-10" />,
    title: "Fatigue & Burn-out",
    description: "Revitalisation cellulaire et équilibre thyroïdien.",
    image: "/images/burn-out.jpg",
    detailedDescription: "La fatigue chronique et le burn-out nécessitent une approche globale et personnalisée. Mon protocole vise à : restaurer l'énergie cellulaire par une nutrition ciblée en micronutriments essentiels (fer, magnésium, vitamines B, CoQ10), optimiser la fonction thyroïdienne et l'équilibre hormonal, réguler le cortisol et les rythmes circadiens, et soutenir les surrénales. L'accompagnement inclut également des conseils sur la gestion du stress, l'amélioration du sommeil, et l'adaptation progressive de votre mode de vie pour une récupération durable et efficace.",
  },
  {
    icon: <Wind className="w-10 h-10" />,
    title: "Cupping Therapy",
    description: "Drainage et détoxification par la méthode des ventouses (Medical Cupping).",
    image: "/images/cupping.jpg",
    detailedDescription: "La Cupping Therapy (Hijama) est une méthode thérapeutique ancestrale que j'ai étudiée auprès du Dr. Ait Mhammed. Cette technique de drainage par ventouses permet de : stimuler la circulation sanguine et lymphatique, éliminer les toxines accumulées dans les tissus, réduire les inflammations et les douleurs musculaires, et renforcer le système immunitaire. Les séances sont personnalisées selon vos besoins spécifiques et peuvent être combinées avec l'accompagnement nutritionnel pour une approche holistique optimale. Pratiquée dans le respect des protocoles d'hygiène les plus stricts.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group bg-surface p-8 rounded-xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>

          <h3 className="text-2xl font-serif font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-primary/70 leading-relaxed flex-grow">
            {service.description}
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
              {service.title}
            </DialogTitle>
            <DialogDescription asChild>
              <ScrollArea className="max-h-[400px] pr-4">
                <p className="text-gray-700 leading-relaxed text-base">
                  {service.detailedDescription}
                </p>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-end">
            <a href="#contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                Réserver ce soin
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Mes Accompagnements
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Une approche sur-mesure, scientifique et holistique pour répondre à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
