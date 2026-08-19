export const categories = [
  "Stéréotypes",
  "Préjugés",
  "Addiction",
  "Santé",
  "Diversité",
  "Mixité",
  "Joueuses",
] as const;

export type Category = (typeof categories)[number];

export interface Episode {
  id: string;
  number: number;
  title: string;
  summary: string;
  categories: Category[];
  guests: string;
  duration: string;
  releaseDate: string;
  announced?: boolean;
}

export const episodes: Episode[] = [
  {
    id: "stereotypes-prejuges",
    number: 1,
    title: "Stéréotypes, préjugés et préjudices",
    summary:
      "Le premier épisode de Splash sera consacré aux stéréotypes, aux préjugés et aux préjudices liés aux jeux vidéo et à l'esport.",
    categories: ["Stéréotypes", "Préjugés"],
    guests: "Aurélien Pelte, joueur · Olivier Luttringer, président de Reset",
    duration: "Durée à confirmer",
    releaseDate: "Premier mercredi d'octobre 2026",
    announced: true,
  },
  {
    id: "addiction-jeu-video",
    number: 2,
    title: "Quand peut-on parler d'addiction au jeu vidéo ?",
    summary:
      "Le deuxième épisode s'intéressera à ce qui se joue derrière une addiction au jeu vidéo.",
    categories: ["Addiction", "Santé"],
    guests:
      "Gabriel Fauré, joueur · Dr Louis-Marie D'Ussel, addictologue, responsable médical en addictologie aux Hôpitaux universitaires de Strasbourg",
    duration: "Durée à confirmer",
    releaseDate: "Premier mercredi de novembre 2026",
    announced: true,
  },
  {
    id: "mixite-esport",
    number: 3,
    title: "La mixité au sein des équipes est-elle un atout pour l'esport ?",
    summary:
      "Enregistré en public aux Strasbourg Esport Days : entre témoignage vécu, données de recherche sur la représentation et pistes concrètes pour les organisations, un état des lieux sans détour.",
    categories: ["Diversité", "Mixité", "Joueuses"],
    guests: "Joueuse compétitive · Sociologue du sport",
    duration: "55 min",
    releaseDate: "Premier mercredi de décembre 2026",
    announced: true,
  },
  {
    id: "episode-4",
    number: 4,
    title: "Épisode 4 — à venir",
    summary: "Thème, invités et durée seront annoncés prochainement.",
    categories: [],
    guests: "Intervenants à confirmer",
    duration: "—",
    releaseDate: "Premier mercredi de janvier 2027",
    announced: false,
  },
  {
    id: "episode-5",
    number: 5,
    title: "Épisode 5 — à venir",
    summary: "Thème, invités et durée seront annoncés prochainement.",
    categories: [],
    guests: "Intervenants à confirmer",
    duration: "—",
    releaseDate: "Premier mercredi de février 2027",
    announced: false,
  },
  {
    id: "episode-6",
    number: 6,
    title: "Épisode 6 — à venir",
    summary: "Thème, invités et durée seront annoncés prochainement.",
    categories: [],
    guests: "Intervenants à confirmer",
    duration: "—",
    releaseDate: "Premier mercredi de mars 2027",
    announced: false,
  },
];

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  body: string[];
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; external?: boolean };
}

export const newsItems: NewsItem[] = [
  {
    id: "conf-splash-sed",
    date: "6 septembre 2026",
    title: "Enregistrement public de Splash aux SED",
    body: [
      "Le troisième épisode de SPLASH sera enregistré en public le 6 septembre à 10h, au Palais de la musique et des congrès de Strasbourg, dans le cadre des Strasbourg Esport Days.",
      "La mixité des équipes est-elle un atout pour l'esport ?",
      "Venez assister à l'enregistrement de l'épisode 3 et découvrir la conversation en direct.",
    ],
    primary: { label: "Venir aux SED", href: "https://www.strasbourg-esport.fr", external: true },
    secondary: { label: "En savoir plus sur l'épisode 3", href: "/episodes" },
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "podcast",
    label: "Le podcast",
    items: [
      {
        question: "Sur quelles plateformes écouter SPLASH ?",
        answer:
          "Le podcast est disponible sur Spotify, YouTube et les principales plateformes d'écoute. De nouveaux épisodes sont publiés tout au long de la saison 1.",
      },
      {
        question: "Combien d'épisodes compte la saison 1 ?",
        answer:
          "La saison 1 compte 6 épisodes, chacun construit autour d'un format en triptyque : un vécu, un regard d'expert, une facilitation et une ouverture.",
      },
    ],
  },
  {
    id: "temoignages",
    label: "Les témoignages",
    items: [
      {
        question: "Puis-je témoigner de manière anonyme ?",
        answer:
          "Oui. Le formulaire de contact propose trois options : témoignage public, témoignage anonyme, ou simple prise de contact sans obligation de diffusion.",
      },
      {
        question: "Que devient mon témoignage une fois envoyé ?",
        answer:
          "Chaque témoignage est lu par l'équipe éditoriale. Rien n'est publié ou utilisé sans votre accord explicite, quel que soit le format choisi.",
      },
    ],
  },
  {
    id: "discord",
    label: "Discord",
    items: [
      {
        question: "Le Discord est-il ouvert à tous ?",
        answer:
          "Oui, la communauté SPLASH est ouverte à toute personne concernée par le jeu vidéo : joueurs, professionnels, associations, chercheurs et curieux.",
      },
      {
        question: "Quels types de salons y trouve-t-on ?",
        answer:
          "Des salons métiers, santé, inclusion, découverte, entraide, veille, ainsi que des viewing parties et annonces d'événements SPLASH.",
      },
    ],
  },
  {
    id: "partenariats",
    label: "Les partenariats",
    items: [
      {
        question: "Quelle différence entre sponsor, mécène et partenaire ?",
        answer:
          "Un sponsor finance le projet avec un objectif de visibilité, un mécène soutient sans contrepartie commerciale, un partenaire contribue techniquement ou humainement (production, expertise, outillage).",
      },
      {
        question: "Comment devenir partenaire de SPLASH ?",
        answer:
          "Rendez-vous dans la section « Participer au projet » ou écrivez-nous directement via le formulaire de contact pour échanger sur les formats possibles.",
      },
    ],
  },
  {
    id: "confidentialite",
    label: "La confidentialité",
    items: [
      {
        question: "Mes données personnelles sont-elles protégées ?",
        answer:
          "Oui, conformément au RGPD. Consultez notre politique de confidentialité pour le détail des traitements réalisés et vos droits.",
      },
      {
        question: "Les témoignages anonymes sont-ils réellement anonymisés ?",
        answer:
          "Oui, aucune donnée identifiante n'est conservée ni diffusée pour les témoignages soumis en mode anonyme.",
      },
    ],
  },
  {
    id: "moderation",
    label: "La modération",
    items: [
      {
        question: "Comment la communauté Discord est-elle modérée ?",
        answer:
          "Une charte de modération encadre les échanges. Une équipe dédiée veille au respect des règles et à la bienveillance des espaces d'entraide.",
      },
      {
        question: "Comment signaler un comportement problématique ?",
        answer:
          "Via les outils de signalement Discord ou directement par le formulaire « Nous contacter » en sélectionnant l'option « Signaler un cas ».",
      },
    ],
  },
];

export type SupportTier = "sponsors" | "mecenes" | "partenaires";

export interface Supporter {
  name: string;
  description: string;
  tier: SupportTier;
  href?: string;
}

export const supporters: Supporter[] = [
  {
    name: "Skillcamp",
    description: "Structure porteuse du projet SPLASH.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "BEMOTION",
    description: "Partenaire production audiovisuelle : podcast, plateau, direction artistique vidéo.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "RESET",
    description: "Association partenaire, caution scientifique et associative sur les enjeux santé et inclusion.",
    tier: "partenaires",
    href: "/reset",
  },
];

export interface ParticiperCard {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export const participerCards: ParticiperCard[] = [
  {
    title: "Devenir bénévole",
    description:
      "Recherche audio, community management, recherche documentaire, design, développement web : chaque compétence compte.",
    cta: "Proposer mon aide",
    href: "#temoigner",
  },
  {
    title: "Devenir partenaire",
    description: "Contribuez techniquement ou humainement au projet et gagnez en visibilité auprès de notre communauté.",
    cta: "Devenir partenaire",
    href: "#temoigner",
  },
  {
    title: "Devenir sponsor",
    description: "Soutenez financièrement SPLASH et associez votre marque à un projet à impact durable.",
    cta: "Devenir sponsor",
    href: "#temoigner",
  },
  {
    title: "Devenir mécène",
    description: "Un soutien libre, sans objectif commercial, pour permettre à SPLASH de rester indépendant.",
    cta: "Devenir mécène",
    href: "#temoigner",
  },
  {
    title: "Proposer une expertise",
    description: "Chercheur, professionnel de santé, juriste, spécialiste esport : partagez votre regard avec la communauté.",
    cta: "Proposer une expertise",
    href: "#temoigner",
  },
  {
    title: "Intervenir dans un épisode",
    description: "Vécu, expertise ou facilitation : rejoignez le triptyque d'un prochain épisode SPLASH.",
    cta: "Candidater",
    href: "#temoigner",
  },
  {
    title: "Organiser un événement ensemble",
    description: "Viewing party, conférence, tournoi solidaire : construisons un temps fort commun.",
    cta: "Proposer un événement",
    href: "#temoigner",
  },
];

export interface PressAsset {
  label: string;
  description: string;
}

export const pressAssets: PressAsset[] = [
  { label: "Press kit complet", description: "Dossier de présentation du projet SPLASH (PDF)" },
  { label: "Logos SPLASH", description: "Fichiers vectoriels et rasterisés, fonds clair et sombre" },
  { label: "Charte graphique", description: "Palette, typographies et règles d'usage de la marque" },
  { label: "Photos", description: "Visuels plateau et équipe en haute définition" },
  { label: "Biographies", description: "Présentation de l'équipe et des intervenants" },
  { label: "Communiqué de presse", description: "Annonce officielle du lancement du projet" },
];
