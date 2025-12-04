"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
            Prêt(e) à reprendre votre santé en main ?
          </h2>
          <p className="text-xl text-primary/70 mb-12 max-w-3xl mx-auto">
            Réservez votre consultation personnalisée et découvrez comment la science
            nutritionnelle peut transformer votre quotidien.
          </p>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface rounded-xl shadow-2xl overflow-hidden border border-primary/10"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/senhajistudent/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
