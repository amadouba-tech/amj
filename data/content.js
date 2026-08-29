import {
  Users, Building2, Briefcase, Phone, FileText, MapPin,
  GraduationCap, Mail, BookOpen, Heart, Landmark, Palette,
} from "lucide-react";
import { IMAGES } from "./images.js";

/* ============================================================
   CONTENT — sourced from the client's site-content workbook
   (0_Site_WEB_Pages) and organised by audience.
   ============================================================ */

export const NAV_ITEMS = [
  { id: "accueil", label: "Accueil", path: "/" },
  { id: "prestations", label: "Des prestations pour vous", path: "/prestations" },
  { id: "qui-suis-je", label: "Qui suis-je\u00A0?", path: "/qui-suis-je" },
  { id: "tarifs", label: "Tarifs", path: "/tarifs" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const AUDIENCES = [
  {
    id: "particuliers",
    label: "Particuliers",
    tagline: "Étudiant, salarié, retraité\u2026 pour tous vos écrits du quotidien.",
    accent: "terracotta",
    icon: Users,
    path: "/prestations/particuliers",
  },
  {
    id: "associations",
    label: "Associations, structures d\u2019hébergement & collectivités",
    tagline: "Pour l\u2019accompagnement de vos publics et le fonctionnement de votre institution.",
    accent: "mauve",
    icon: Building2,
    path: "/prestations/associations",
  },
  {
    id: "professionnels",
    label: "Professionnels & secteur culturel",
    tagline: "Professions libérales, entreprises, artistes et organismes culturels.",
    accent: "bleuGris",
    icon: Briefcase,
    path: "/prestations/professionnels",
  },
];

export const FONCTIONNEMENT_STEPS = [
  {
    icon: Phone,
    title: "Un entretien gratuit",
    text: "Par téléphone ou en présentiel, pour cerner précisément votre besoin.",
  },
  {
    icon: FileText,
    title: "Un devis sur mesure",
    text: "Établi après l\u2019entretien \u2014 précédé d\u2019un test gratuit pour les travaux longs.",
  },
  {
    icon: MapPin,
    title: "Présentiel ou à distance",
    text: "Un fonctionnement souple, où que vous soyez.",
  },
];

export const FONCTIONNEMENT_PARAGRAPHS = [
  "Toute demande émise par un particulier ou un professionnel nécessite un entretien téléphonique ou en présentiel, afin de définir précisément vos besoins. Art des Mots Justes adapte ses prestations pour répondre au plus près à la demande formulée. L\u2019entretien et le devis sont gratuits.",
  "Le fonctionnement reste souple\u00A0: il est possible d\u2019organiser des rencontres ou de travailler à distance.",
  "Pour les travaux longs, le devis est réalisé après l\u2019entretien, ce qui permet de cerner exactement la demande exprimée et de réaliser une première ébauche, ou de travailler sur un échantillon de votre document. Cela permet d\u2019évaluer la durée nécessaire et de définir le prix de la prestation. Le test est gratuit.",
];

export const PARTICULIERS = {
  intro: "Que vous soyez étudiant, demandeur d\u2019emploi, salarié, retraité, ou tout simplement soucieux d\u2019un écrit de qualité destiné à une administration, à votre famille, vos amis ou votre employeur, je vous accompagne dans vos écrits.",
  sections: [
    {
      icon: GraduationCap,
      title: "Des écrits scolaires à la recherche d\u2019emploi",
      text: "Tout élève ou étudiant est un jour confronté à la rédaction d\u2019un rapport de stage, d\u2019un mémoire ou d\u2019une thèse universitaire. La qualité du document tient à sa structure, son orthographe, le respect des règles grammaticales, la syntaxe et, bien sûr, le contenu. J\u2019interviens sur la présentation et la correction, jamais sur le contenu qui reste du ressort de l\u2019étudiant. Pour s\u2019immerger dans le monde du travail, je peux aussi vous accompagner.",
      items: [
        "Rapport de stage, mémoire et thèse universitaire\u00A0: relecture et correction",
        "Soutien scolaire en français, aide aux devoirs",
        "Aide à la recherche d\u2019emploi, CV et lettres de motivation",
      ],
    },
    {
      icon: FileText,
      title: "Démarches et formalités administratives",
      text: "Face aux lourdeurs administratives et à la dématérialisation, je suis là pour vous simplifier la vie et vous aider à comprendre les documents administratifs, commerciaux et juridiques.",
      items: [
        "Démarches administratives, formalités et rédaction des écrits",
        "Constitution de dossiers pour faire valoir vos droits (dossier de retraite, aide sociale, APA, logement, etc.)",
      ],
    },
    {
      icon: Mail,
      title: "Des lettres de toutes sortes",
      text: "Bien que le courriel s\u2019impose de manière récurrente, nul n\u2019est à l\u2019abri de devoir rédiger une lettre pour revendiquer ses droits, pour des raisons professionnelles, pour exprimer ses convictions, ses sentiments, ou simplement communiquer avec un être cher. Je vous aide à rédiger des lettres administratives ou à de hautes personnalités, des lettres de réclamation, des lettres professionnelles, ou toute correspondance privée.",
      items: [],
    },
    {
      icon: BookOpen,
      title: "Des histoires à raconter\u2026 transmettre ses souvenirs",
      text: "Votre activité, professionnelle ou amateure, est singulière. Comme votre vie, ou plutôt quelques moments de vie particulièrement marquants. Je saurai vous écouter attentivement pour restituer et mettre en valeur ces épisodes mémorables.",
      items: [
        "Récits de moments de vie\u00A0: voyage, rencontre étonnante, parcours atypique\u2026, biographie",
        "Monographie de votre activité, d\u2019un lieu",
      ],
    },
  ],
  callout: {
    text: "Vous êtes salarié et souhaitez de l\u2019aide pour vos écrits professionnels\u00A0?",
    linkLabel: "Voir les prestations pour professionnels",
    target: "professionnels",
  },
};

export const ASSOCIATIONS = {
  title: "Associations d\u2019aide aux personnes, structures d\u2019accueil et d\u2019hébergement, collectivités",
  subtitle: "EHPAD, résidences séniors, centres pour personnes en situation de handicap, et autres structures.",
  intro: "Je vous propose mes compétences pour une assistance administrative aux personnes en difficulté, mais également pour des missions liées au fonctionnement de votre institution.",
  sections: [
    {
      icon: Users,
      title: "Missions en permanence d\u2019écrivain public, ou en direct avec les personnes",
      text: "Face aux lourdeurs administratives et à la dématérialisation, je suis là pour simplifier la vie de vos publics et les aider à comprendre les documents administratifs, commerciaux et juridiques.",
      items: [
        "Effectuer des démarches et formalités administratives pour faire valoir leurs droits",
        "Rédiger des lettres administratives, des lettres de réclamation",
        "Assurer le soutien scolaire en français",
        "Aider à la recherche d\u2019emploi, CV et lettres de motivation",
      ],
    },
    {
      icon: Heart,
      title: "Les écrits de la vie privée",
      text: "Accueillie dans une structure d\u2019hébergement pour séniors, un centre de réadaptation fonctionnelle ou toute autre structure, la personne accompagnée trouve souvent le moment de se poser, de réfléchir, de donner un sens à sa vie. Et pourquoi pas envisager un écrit qui touchera ses proches\u00A0?",
      items: [
        "Correspondance privée",
        "Récit de moments de vie\u00A0: voyage, rencontre étonnante, parcours atypique\u2026",
        "Biographie",
      ],
    },
    {
      icon: Building2,
      title: "Les écrits professionnels pour l\u2019institution",
      text: "La rédaction de vos documents dans les règles de l\u2019art peut paraître fastidieuse, et le temps manque souvent pour un travail rédactionnel minutieux, sur le fond comme sur la forme. Pourtant, vos écrits reflètent l\u2019image de votre institution. C\u2019est le moment de faire appel à un écrivain public pour les valoriser\u00A0:",
      items: [
        "Travaux de secrétariat",
        "Écrits professionnels\u00A0: comptes rendus, rapports, résumés de conférences, notes de présentation d\u2019un projet, montage de dossiers de subventions",
        "Documents de communication, livret d\u2019accueil pour les nouveaux arrivants ou les résidents",
        "Monographie d\u2019une commune, d\u2019un lieu-dit, d\u2019un élément de patrimoine, d\u2019une association, d\u2019une institution",
      ],
    },
  ],
};

export const PROFESSIONNELS = {
  liberaux: {
    title: "Professionnels libéraux, entreprises",
    icon: Briefcase,
    intro: [
      "Vous exercez une activité libérale, vous intervenez dans le secteur tertiaire (presse spécialisée, tourisme, voyages\u2026), vous êtes artisan ou entrepreneur\u00A0: peu importe votre domaine, vous souhaitez valoriser votre société par la qualité de vos écrits professionnels, votre communication, voire une monographie de votre activité. Je vous accompagne dans cette démarche.",
      "Votre activité vous accapare et vous tenez à préserver votre cœur de métier\u00A0: ne vous laissez pas déborder par la partie administrative. J\u2019apporte une plus-value à la qualité de vos écrits professionnels, en relecture-correction comme en rédaction.",
    ],
    items: [
      "Travaux de secrétariat",
      "Écrits professionnels\u00A0: comptes rendus, rapports, résumés de conférences, notes de présentation d\u2019un projet, montage de dossiers de subventions (liste non exhaustive)",
      "Documents de communication",
      "Monographie de la société",
    ],
  },
  artistique: {
    title: "Artistes et organismes culturels",
    icon: Palette,
    intro: [
      "Ces prestations s\u2019adressent aux artistes, professeurs d\u2019enseignement artistique, structures culturelles (conservatoires de musique, danse et théâtre\u00A0; établissements dédiés au spectacle vivant, au patrimoine, aux arts visuels), et maisons d\u2019édition.",
      "Musicien, danseur, comédien\u2026 votre parcours artistique est souvent jalonné de sacrifices pour atteindre un haut niveau\u00A0: un travail acharné, de longues répétitions, des représentations publiques et parfois l\u2019enseignement de la discipline. Mais la passion n\u2019a pas de prix\u00A0! Artistes, professionnels ou amateurs avertis, je révèle votre parcours à travers une monographie, un récit de vie voué au théâtre ou à l\u2019apprentissage d\u2019un instrument. Je reste également au service des structures culturelles pour corriger des documents complexes, aider à monter des dossiers ou développer vos outils de communication.",
    ],
    items: [
      "Monographie d\u2019artiste, biographie, récit d\u2019un moment de vie marquant\u00A0; monographie de la structure culturelle, livret de l\u2019établissement",
      "Votre institution\u00A0: statuts associatifs, projets d\u2019établissement, demandes de subvention",
      "Dossiers de promotion\u00A0: plaquette de saison, dossier pédagogique, dossier de presse, dossier de mécénat ou de financement participatif",
      "Écriture artistique\u00A0: textes à l\u2019appui des œuvres, textes pour le spectacle vivant, contes musicaux",
      "Documents de communication\u00A0: flyers, newsletter du programme, programme distribué à l\u2019entrée du spectacle, livret d\u2019exposition\u2026",
      "Correction de scénarii, de romans",
    ],
  },
};

export const QUI_SUIS_JE_INTRO = {
  title: (
    <>
      Marie-José Sabard — <span className="intro-caps">AMJ</span>{" "}
      <span className="intro-caps">Écrivain</span> public
    </>
  ),
  paragraphs: [
    "Pendant une trentaine d\'années, j\'ai développé mes compétences rédactionnelles au sein des collectivités territoriales pour des écrits allant du simple courrier administratif à la note de présentation d\'un projet structurant pour demande de subvention européenne, sans oublier les comptes rendus, rapports, argumentaires juridiques et autres documents traités au quotidien.",
    "Par ailleurs, mon investissement dans l\'univers associatif et culturel a permis de diversifier mon style d\'écriture en m\'orientant vers la création de textes pour le spectacle vivant. Je me suis également consacrée à d\'autres missions (création d\'un dossier de mécénat, statuts associatifs\u2026).",
    <>
      Aujourd\'hui, je souhaite mettre mes compétences rédactionnelles au service des personnes ayant besoin d\'un
      accompagnement pour des DEMARCHES ADMINISTRATIVES OU LA RÉDACTION DE <span className="intro-caps">VOS</span> ECRITS PERSONNELS OU PROFESSIONNELS.
    </>,
  ],
};

export const FORMATION = [
  { text: "Formation d\u2019écrivain public au Centre national privé de formation à distance (CNFDI)" },
  { text: "Stages d\u2019écrivain conseil au cabinet Françoise Peters (GREC), à Castelnau-le-Lez (34)" },
  { text: "Formation de correcteur au Centre d\u2019écriture et de communication (CEC) à Paris, avec Jacques Décourt, auteur d\u2019ouvrages sur la langue française et enseignant à l\u2019École supérieure de journalisme de Lille" },
  {
    text: "Licence Conception et mise en œuvre de projets culturels, université d\u2019Aix-Marseille",
    sub: [
      <>Mémoire : <em>Musiques nomades</em>&nbsp;: tziganes, gitanes et jazz manouche</>,
      "Stage dans un théâtre (programmation et communication)",
      "Stage au service culturel / spectacle vivant d\u2019une communauté d\u2019agglomération",
    ],
  },
  { text: "Lauréate du concours d\u2019attaché territorial (droit administratif et autres branches du droit)" },
  { text: "DEUG de Droit, Lille" },
  { text: "DUT Gestion des administrations et des entreprises, option finances \u2013 comptabilité" },
];

export const EXPERIENCE_GROUPS = [
  {
    title: "Une expérience dédiée aux particuliers",
    icon: Users,
    items: [
      "CV et lettres de motivation",
      "Courriers administratifs et juridiques",
      "Démarches et formalités pour demandes de visas, cartes de séjour",
      "Discours pour éloges funèbres",
      "Récits de vie, monographie d\u2019activité",
    ],
  },
  {
    title: "25 ans au service des collectivités",
    icon: Landmark,
    items: [
      "Plus de 25 ans au service de communes de 2\u00A0000 à 3\u00A0600 habitants, en tant que directrice générale des services",
      "Spécialisation en droit de l\u2019urbanisme, droit des marchés publics, finances publiques et droit privé (litiges des particuliers)",
      "Rédaction des pièces de marchés publics, des documents de plan local d\u2019urbanisme (PLU)",
      "Comptes rendus de commissions, de conseils municipaux et de diverses réunions\u00A0; rapports divers",
      "Présentations de budgets, rapports d\u2019orientations budgétaires",
      "Constitution de dossiers de subventions",
    ],
  },
  {
    title: "Mon engagement dans le domaine culturel",
    icon: Palette,
    items: [
      "Membre du conseil d\u2019administration d\u2019un orchestre d\u2019harmonie (budgets, comptes rendus de réunions, élaboration de projets, affiches et programmes de concerts)",
      "Musicienne dans des orchestres d\u2019harmonie et une banda (clarinette, saxophone)",
      "Création d\u2019un livret sur le mécénat",
      "Bonne connaissance du fonctionnement des conservatoires de musique, danse et théâtre",
      "Élaboration de textes de présentation de concerts",
      "Création de récits pour des concerts-lectures, des contes musicaux",
      "Mémoire sur les musiques nomades\u00A0: tziganes, gitanes et jazz manouche",
      "Documents de communication et de programmation pour un théâtre",
      "Préparation d\u2019une plaquette de programme de saison pour une communauté d\u2019agglomération",
    ],
  },
];

/* ============================================================
   "À DÉCOUVRIR AUSSI" — cartes de découverte façon portail
   institutionnel, mais qui renvoient vers les vraies pages
   du site (pas d'articles inventés).
   ============================================================ */
export const DISCOVER_CARDS = [
  {
    tag: "Particuliers",
    accent: "terracotta",
    title: "Des écrits du quotidien à la recherche d'emploi",
    path: "/prestations/particuliers",
    image: IMAGES.cardParticuliers,
  },
  {
    tag: "Associations & collectivités",
    accent: "mauve",
    title: "Un accompagnement pour vos publics et votre institution",
    path: "/prestations/associations",
    image: IMAGES.cardAssociations,
  },
  {
    tag: "Professionnels & culture",
    accent: "bleuGris",
    title: "Vos écrits professionnels et artistiques valorisés",
    path: "/prestations/professionnels",
    image: IMAGES.cardProfessionnels,
  },
  {
    tag: "Qui suis-je\u00A0?",
    accent: "terracotta",
    title: "25 ans d'expérience au service des mots",
    path: "/qui-suis-je",
    image: IMAGES.cardQuiSuisJe,
  },
  {
    tag: "Tarifs",
    accent: "mauve",
    title: "Un devis gratuit, sur mesure, sans engagement",
    path: "/tarifs",
    image: IMAGES.cardTarifs,
  },
];
