"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { stylizeAmpersands } from "@/lib/typography";

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
    <section className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] bg-primary flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-4 lg:py-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Hero Image - Top on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full lg:col-start-2 lg:row-start-1 order-2"
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nutrition.jpg"
                alt="Asma Nutrisanté - Expert en nutrition"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-white lg:col-start-1 lg:row-start-1 order-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-xs sm:text-sm font-medium">
                {stylizeAmpersands("Biochimiste & nutritionniste fonctionnelle")}
              </span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight"
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
              className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl"
            >
              {stylizeAmpersands(
                "De la R&D pharmaceutique à la nutrisanté. J'accompagne vos combats (oncologie, auto-immunité, fatigue) avec une expertise aseptique et une vision holistique."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="group bg-accent text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-medium inline-flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="truncate">Réserver ma consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
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
