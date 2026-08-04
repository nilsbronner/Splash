# SPLASH — site web

Site vitrine du projet SPLASH (« Ou comment heal le game. »), média sur la santé, l'inclusion et
les enjeux sociaux du jeu vidéo. Un projet porté par **Skillcamp**, produit par **BEMOTION**, avec
la caution scientifique et associative de **RESET**.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — design system SPLASH (vert « heal », bleu « Chug
  Splash », glassmorphism léger)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [lucide-react](https://lucide.dev/) pour les icônes

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # lint
```

## Structure

- `app/page.tsx` — assemble toutes les sections de la page d'accueil, dans l'ordre de
  l'arborescence du brief (Hero, Le concept, Notre mission, Le podcast, La Zone Splash, Notre
  engagement, Les épisodes, Ressources, La communauté, Témoigner, Le projet RESET, Nos soutiens,
  Pourquoi nous soutenir, Participer au projet, Presse, FAQ).
- `components/sections/` — une section = un composant.
- `components/ui/` — briques réutilisables (Navbar, Footer, Button, Section, Container, Badge,
  LegalPage).
- `lib/data.ts` — contenu structuré (épisodes, FAQ, soutiens, cartes de participation, presse).
- `lib/nav.ts` — liens de navigation et de footer.
- `app/{mentions-legales,confidentialite,cgu,cgv,cookies}/` — pages légales.

## Contenu V1 — à savoir

- Les visuels (plateau, logos partenaires, photos presse) sont pour l'instant des placeholders
  stylisés (dégradés, initiales) en attendant les assets définitifs de la DA.
- Le formulaire « Témoigner » est fonctionnel côté interface (validation, états) mais n'est pas
  encore relié à un backend / service d'envoi — à connecter avant mise en production.
- La section Presse liste les livrables attendus, marqués « Bientôt disponible » : à remplacer par
  les vrais fichiers téléchargeables dès qu'ils existent.
- Les mentions légales contiennent des champs `[à compléter]` (SIREN, adresse, hébergeur) à
  remplir avec les informations réelles de la structure porteuse.
- La rubrique **Ressources** est positionnée comme différenciant stratégique V1 (recommandation du
  brief) ; les fiches ressource détaillées par épisode restent à construire à mesure que les
  épisodes sortent.
