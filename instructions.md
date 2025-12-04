INTERFACE, DESIGN & SEO (Source : Art Director) 🤖 NOTE À L'AGENT CLAUDE CODE : Ceci est ta spécification Frontend pour Asma Nutrisanté. Nous ne faisons pas un simple site vitrine, nous construisons une expérience de guérison digitale. Le design doit inspirer une confiance scientifique absolue (son passé de biochimiste/pharma) tout en dégageant une chaleur humaine et organique (son approche holistique).

L'objectif visuel : "Organic Science & Elegance".

3.1 Setup UI & Animations
Installe ces librairies pour garantir le rendu visuel et la fluidité :

Bash

# Core UI & Icons
npm install lucide-react clsx tailwind-merge

# Animations & Interactions (Vital pour la douceur de l'expérience)
npm install framer-motion

# Composants Headless (Accessibilité & Structure)
npm install @radix-ui/react-accordion @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-navigation-menu

# Shadcn Init (Si pas fait)
npx shadcn@latest init
3.2 Design System (Tailwind Config)
Modifie tailwind.config.ts et globals.css. Ne laisse rien au hasard.

L'Ambiance (Vibe) : Scientific Serenity. Propre, aseptisé (référence à son expertise aseptique) mais vivant.

Typographie :

Titres : Playfair Display (Serif, élégant, autoritaire, rassurant).

Corps : Plus Jakarta Sans (Sans-serif, moderne, clinique, lisible).

Utilise next/font/google.

Border Radius : 0.75rem (12px) - Doux mais structuré.

Palette de Couleurs (Copie ceci dans ta config) :

JavaScript

theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#016a4e', // Deep Medicinal Green (Confiance, Science)
        foreground: '#ffffff'
      },
      secondary: {
        DEFAULT: '#c8daa9', // Soft Sage (Apaisement, Nature)
        foreground: '#016a4e'
      },
      accent: {
        DEFAULT: '#ec8579', // Coral / Salmon (La Vie, l'Urgence, le Sang sain)
        foreground: '#ffffff'
      },
      background: '#e7efe1', // Pale Mint/White (Base stérile mais chaude)
      surface: '#ffffff', // Pour les cartes
    }
  }
}
3.3 Composants Clés (Spécifications Détaillées)
A. Hero Section (L'Autorité Scientifique)
Layout : Split screen asymétrique (60% texte / 40% visuel abstrait ou photo pro).

Fond : Couleur primary (#016a4e) unie. Texte en blanc et secondary.

Micro-Copywriting (CRITIQUE - Copie textuelle) :

Badge (Pill) : "Biochimiste & Nutritionniste Fonctionnelle"

Titre H1 : "Votre santé n'est pas un hasard, c'est une science."

Sous-titre : "De la R&D pharmaceutique à la nutrisanté. J'accompagne vos combats (oncologie, auto-immunité, fatigue) avec une expertise aseptique et une vision holistique."

Bouton CTA Principal : "Réserver ma consultation (BXL/Visio)" (Fond #ec8579, hover scale 1.05).

Animation : Le titre apparaît mot par mot avec framer-motion (staggerChildren).

B. Section "Mon Parcours" (Storytelling Interactif)
Concept : Ne fais pas un bloc de texte. Fais une Timeline Verticale.

Composant UI : Une ligne verticale verte qui connecte des cartes alternées gauche/droite.

Données à afficher :

Laborantine R&D (10 ans) : Icône éprouvette. "Rigueur scientifique et expertise en microbiologie aseptique."

Le Tournant (2014) : Icône cœur/vie. "Diagnostic stade 4 de mon père. Le choc, puis la recherche de solutions là où la médecine classique s'arrêtait."

La Formation : Icône livre/feuille. "Profilage alimentaire (Taty Lauwers), Nutrithérapie (Dr. Curtay), Cupping Therapy (Dr. Ait Mhammed)."

Aujourd'hui : Icône plante. "Une approche globale : Alimentation anti-inflammatoire + Soin du microbiote."

C. Grid Services (Bento Grid Style)
Style : Grille responsive. Cartes couleur surface (#ffffff) avec une bordure subtile border-primary/10.

Interaction : Au survol, la carte se soulève (y: -5px) et une lueur shadow-lg shadow-primary/10 apparaît. Le titre passe en couleur accent.

Cartes :

Oncologie Intégrative : "Soutien nutritionnel pendant et après chimiothérapie. Jeûne thérapeutique et alimentation anti-inflammatoire."

Santé Digestive : "Traitement de la dysbiose intestinale et restauration du microbiote."

Fatigue & Burn-out : "Revitalisation cellulaire et équilibre thyroïdien."

Cupping Therapy : "Drainage et détoxification par la méthode des ventouses (Medical Cupping)."

3.4 SEO & Métatags (Next.js Metadata)
Implémente cet objet Metadata strict dans layout.tsx pour capturer le trafic local et spécialisé :

TypeScript

export const metadata: Metadata = {
  title: {
    template: '%s | Asma Nutrisanté - Biochimiste & Nutritionniste',
    default: 'Asma Nutrisanté | Expert Nutrition Oncologie & Fonctionnelle',
  },
  description: 'Accompagnement nutritionnel scientifique (Cancer, Thyroïde, Perte de poids). Ancienne biochimiste R&D, je combine médecine fonctionnelle et profilage alimentaire. Consultations en Belgique, France et Visio.',
  keywords: ['Nutritionniste Oncologie', 'Taty Lauwers', 'Microbiote', 'Cupping Therapy Bruxelles', 'Nutrition Cancer', 'Médecine Fonctionnelle'],
  openGraph: {
    title: 'Asma Nutrisanté - La Science au service de votre Vitalité',
    description: 'De la biochimie à la guérison holistique. Prenez soin de votre santé avec une approche scientifique et naturelle.',
    type: 'website',
    locale: 'fr_BE',
  }
}
3.5 Responsive Strategy (Mobile First)
Navigation Mobile : Pas de menu hamburger classique en haut. Utilise une Bottom Navigation Bar fixe en bas de l'écran (comme une app) avec 3 icônes : "Accueil", "Services", "RDV". C'est plus ergonomique pour le pouce.

CTA Sticky : Sur les pages de services, le bouton "Prendre RDV" doit rester collé en bas de l'écran lors du scroll (sticky bottom-4 z-50).

Typographie : Ajuste le H1 sur mobile à text-4xl (au lieu de 6xl sur desktop) pour éviter les césures disgracieuses.