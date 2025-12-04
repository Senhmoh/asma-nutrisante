"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TestTube, Heart, BookOpen, Leaf } from "lucide-react";
import { stylizeAmpersands } from "@/lib/typography";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Laborantine R-D (2013)",
    description: "Rigueur scientifique et expertise en microbiologie aseptique.",
    position: "left",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Le tournant (2014)",
    description: "Mon papa est diagnostiqué avec un cancer stade IV. Début de ma quête de solutions naturelles, là où la médecine classique atteint ses limites.",
    position: "right",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "La formation",
    description: "Profilage alimentaire (Taty Lauwers), Nutrithérapie (Dr. Curtay), Cupping Therapy (Dr. Ait Mhammed).",
    position: "left",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Aujourd'hui",
    description: "Une approche globale : Alimentation anti-inflammatoire + Soin du microbiote.",
    position: "right",
  },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
      animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === "left" ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-2 sm:gap-4 md:gap-8 ${item.position === "right" ? "md:flex-row-reverse" : ""}`}
    >
      {/* Card */}
      <div className="flex-1">
        <div className="bg-surface p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <div className="scale-75 sm:scale-90 md:scale-100">
                {item.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-primary mb-1 sm:mb-2">
                {stylizeAmpersands(item.title)}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-primary/70 leading-relaxed">
                {stylizeAmpersands(item.description)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={mounted && isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 bg-accent rounded-full ring-4 ring-accent/20"
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Timeline() {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-3 sm:mb-4">
            Mon parcours
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 max-w-2xl mx-auto px-2">
            D'une passion pour la science à une quête de guérison holistique
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={mounted && isLineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-primary origin-top"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
