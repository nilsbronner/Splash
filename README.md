# SPLASH — site web

Site vitrine du projet SPLASH (« Ça change la vie et le game ! L'onde de soin dans le jeu vidéo. »),
média sur la santé, l'inclusion et les enjeux sociaux du jeu vidéo. Un projet porté par
**Skillcamp**, produit par **Bemotion**, avec la caution scientifique et associative de **Reset**.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — design system SPLASH basé sur la charte graphique
  fournie : crème `#F8F0EA`, noir `#161616`, orange `#FF5011`, violet `#7F5CF9` / lavande `#A794D6`
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [lucide-react](https://lucide.dev/) pour les icônes

## Identité de marque

Les assets de marque (`public/brand/`) sont extraits de la charte graphique (DA/CG) fournie :
- `logo-wordmark-black.png` / `logo-wordmark-white.png` — le lettrage « Splash » façon graffiti
- `icon-orange.png` — le pictogramme éclaboussure/étincelle
- `pattern-blobs.png` — la texture organique utilisée comme bande décorative (masque CSS
  recolorable, voir `Hero.tsx`)

**Typographies** : la charte spécifie **Anton** (titres, condensé/majuscules) et **Satoshi** (texte
courant). Satoshi n'étant pas distribué via Google Fonts et Fontshare n'étant pas joignable depuis
cet environnement, le corps de texte utilise **Plus Jakarta Sans** en substitut proche (mêmes
proportions géométriques). Pour un rendu fidèle à 100 %, remplacer par les fichiers Satoshi
auto-hébergés (`@font-face`) dans `app/layout.tsx`.

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

## Architecture du site

Le site n'est plus une seule page à tiroirs : c'est une **home condensée** qui convertit, avec un
teaser court par grande partie du projet, chacun renvoyant vers une **page dédiée** plus fournie.

- `app/page.tsx` — la home : `Hero` puis un `Teaser` par section (voir `components/teasers/`),
  et un `CtaBanner` final vers `/temoigner`.
- Pages dédiées, chacune `PageHeader` (lien retour) + le(s) composant(s) complet(s) de
  `components/sections/` réutilisé(s) tel quel + un `CtaBanner` de conversion en bas quand
  pertinent :
  - `/le-projet` — `Concept` + `Mission`
  - `/podcast` — `Podcast`
  - `/episodes` — `Episodes`
  - `/zone-splash` — `ZoneSplash`
  - `/engagement` — `Engagement`
  - `/ressources` — `Ressources`
  - `/communaute` — `Communaute`
  - `/reset` — `Reset`
  - `/soutenir` — `Soutiens` + `PourquoiSoutenir` + `Participer` (fusionnés en une page de
    conversion unique)
  - `/presse` — `Presse`
  - `/faq` — `Faq`
  - `/temoigner` — `Temoigner`
  - `/{mentions-legales,confidentialite,cgu,cgv,cookies}` — pages légales

- `components/sections/` — le contenu complet de chaque partie (un composant = une page dédiée,
  ou un groupe de pages sur `/le-projet` et `/soutenir`).
- `components/teasers/` — la version condensée de chaque section pour la home, toujours avec un
  CTA « En savoir plus » vers sa page dédiée.
- `components/ui/Teaser.tsx` — le composant générique derrière tous les teasers (eyebrow, titre,
  description, CTA, visuel optionnel).
- `components/ui/PageHeader.tsx` / `CtaBanner.tsx` — chrome partagé des pages dédiées (lien retour,
  bannière de conversion en bas de page).
- `lib/data.ts` — contenu structuré (épisodes, FAQ, soutiens, cartes de participation, presse).
- `lib/nav.ts` — liens de navigation (pointent maintenant vers les pages dédiées, plus des ancres)
  et liens de footer.

Pour ajouter du contenu à une page dédiée, éditer directement le composant correspondant dans
`components/sections/` — il est partagé, donc toute modification s'applique à sa page.

## Contenu V1 — à savoir

- Les visuels (plateau, logos partenaires, photos presse) sont pour l'instant des placeholders
  stylisés (dégradés, initiales) en attendant les vraies photos/captures.
- Le formulaire « Témoigner » est relié à une route API (`app/api/temoigner/route.ts`) qui valide
  la soumission côté serveur puis envoie un email à l'équipe (+ un accusé de réception si un email
  a été fourni) via [Resend](https://resend.com). Copier `.env.example` en `.env.local` et
  renseigner `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` et `CONTACT_EMAIL` pour l'activer. Tant que ces
  variables ne sont pas configurées, le formulaire répond une erreur claire au lieu d'échouer
  silencieusement.
- La section Presse liste les livrables attendus, marqués « Bientôt disponible » : à remplacer par
  les vrais fichiers téléchargeables dès qu'ils existent.
- Les mentions légales contiennent des champs `[à compléter]` (SIREN, adresse, hébergeur) à
  remplir avec les informations réelles de la structure porteuse.
- La rubrique **Ressources** est positionnée comme différenciant stratégique V1 (recommandation du
  brief) ; les fiches ressource détaillées par épisode restent à construire à mesure que les
  épisodes sortent.
