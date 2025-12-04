# 3. INTERFACE, DESIGN & SEO (Source : Art Director) - UPDATE V2

🤖 **NOTE À L'AGENT CLAUDE CODE :**
Ceci est la spécification Frontend MISE À JOUR pour **Asma Nutrisanté**.
Nous intégrons maintenant une stratégie d'images "Macro-Organic" et un système de modales interactives pour les services.

## 3.1 Setup UI & Animations
Gardons les mêmes bases, mais assure-toi que `Dialog` est bien installé :
```bash
npx shadcn@latest add dialog scroll-area aspect-ratio
3.2 Design System & Assets Visuels
A. Stratégie Iconographique & Mapping
Règle d'Or : Bannir les photos de stock génériques. Le style est "Macro-Organic" (textures naturelles, biologie esthétique). Format : TOUTES les images sont en .webp avec placeholder="blur".

Utilise les chemins d'accès suivants pour les images dans public/images :

Hero Image (Portrait/Ambiance) : nutrition.jpg

Placement : Droite de l'écran (Desktop) / Haut (Mobile).

Service Thumbnails (Images des Cards & Modales) :

Service Oncologie : cells.jpg

Service Santé Digestive : aloe-vera.jpg

Service Fatigue/Burn-out : burn-out.jpg

Service Cupping Therapy : cupping.jpg

B. Palette (Rappel)
Primary: #016a4e (Deep Green)

Secondary: #c8daa9 (Sage)

Accent: #ec8579 (Coral)

Background: #e7efe1 (Pale Mint)

3.3 Composants Clés (Mise à Jour Interactions)
A. Feature : "Service Clinical Modal" (La Card Explicative)
Au lieu d'un simple accordéon, utilise le composant Dialog de Shadcn pour créer une expérience immersive.

Trigger : Le bouton "En savoir plus" sur la carte service.

Comportement :

Ouvre une modale centrée.

Backdrop : backdrop-blur-sm bg-primary/20 (Effet verre fumé vert).

Animation : Fade in + Scale up (doux).

Design de la Modale (Interne) :

Header : Image du service (les chemins définis ci-dessus) en bandeau (hauteur 150px, object-cover).

Titre : Police Playfair Display, couleur primary.

Corps : Utilise ScrollArea si le texte est long.

Close : Une croix visible en haut à droite + possibilité de cliquer en dehors.

CTA Interne : Un bouton "Prendre RDV pour ce motif" qui redirige vers la page contact.

B. Code Structure pour la "Service Card"
Voici la structure logique à implémenter :

TypeScript

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
      En savoir plus
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[500px] bg-white border-none shadow-2xl overflow-hidden rounded-xl p-0">
    {/* Image Banner */}
    <div className="relative h-32 w-full">
       {/* Utilise ici la variable image correspondant au service */}
       <Image src={serviceImage} fill className="object-cover" alt="Detail du service" />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-serif text-primary mb-2">
          {serviceTitle}
        </DialogTitle>
        <DialogDescription className="text-gray-600 leading-relaxed text-base">
          {/* Texte détaillé du service ici */}
          Ici, tu détailles l'approche scientifique spécifique (ex: protocole anti-inflammatoire, durée des séances, bénéfices attendus).
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-6 flex justify-end">
        <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
          Réserver ce soin
        </Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
C. Responsive Strategy
Images : Sur mobile, les images des modales ne doivent pas prendre plus de 20% de la hauteur de l'écran.

Touch Target : La croix de fermeture doit être assez grande (min 44x44px).