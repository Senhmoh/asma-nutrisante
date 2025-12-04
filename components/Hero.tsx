"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const titleWords = "Votre santé n'est pas un hasard, c'est une science.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium">
                Biochimiste & Nutritionniste Fonctionnelle
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl"
            >
              De la R&D pharmaceutique à la nutrisanté. J'accompagne vos combats
              (oncologie, auto-immunité, fatigue) avec une expertise aseptique et
              une vision holistique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="group bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
              >
                Réserver ma consultation (BXL/Visio)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nutrition.jpg"
                alt="Asma Nutrisanté - Expert en nutrition"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background"
           style={{
             clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
           }}
      />
    </section>
  );
}
