import {
  Users, Building2, Briefcase, Phone, FileText, MapPin,
  GraduationCap, Mail, Heart, Landmark, Palette, Mic, BookOpen, Music,
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
    label: "Associations, structures d\u2019hébergement et collectivités",
    tagline: "Pour l\u2019accompagnement de vos publics et le fonctionnement de votre institution.",
    accent: "mauve",
    icon: Building2,
    path: "/prestations/associations",
  },
  {
    id: "professionnels",
    label: "Autres professionnels et structures culturelles",
    tagline: "Professions libérales, entreprises, artistes et structures culturelles.",
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

export const TARIFS_INTRO = [
  "Exer\u00E7ant mon activit\u00E9 d\u2019\u00E9crivain public dans le cadre juridique d\u2019une auto-entreprise, mes tarifs et factures sont \u00E9tablis hors TVA, non applicable en vertu de l\u2019article 293\u00A0B du CGI (Code g\u00E9n\u00E9ral des imp\u00F4ts).",
  "Chaque demande est diff\u00E9rente, chaque tarif l\u2019est donc aussi. Plut\u00F4t qu\u2019une grille fig\u00E9e, je pr\u00E9f\u00E8re prendre le temps de comprendre votre besoin avant de vous proposer un prix juste et transparent.",
];

export const TARIFS_PRIX = [
  "Lettres, démarches administratives, constitution de dossiers administratifs : 30\u00A0€, ramené à 20\u00A0€ pour un courrier simple",
  "CV : 30\u00A0€ ; lettre de motivation 30\u00A0€ ; CV + lettre de motivation : 50\u00A0€",
  "Permanence d\u2019écrivain public : 40\u00A0€ de l\u2019heure",
  "Rédaction ou correction des pièces de dossiers pour professionnels : 40\u00A0€ de l\u2019heure",
  "Documents de communication, outils de promotion du secteur culturel : 40\u00A0€ de l\u2019heure, ramené à un forfait de 25\u00A0€ pour les documents simples",
  "Discours : 20\u00A0€ la page",
  "Ecrits litt\u00E9raires\u00A0: biographies, r\u00E9cits de vie, portraits de personnes m\u00E9ritantes, monographies\u2026\u00A0: soit \u00E0 l\u2019heure d\u2019entretien factur\u00E9e 120\u00A0\u20AC. Le tarif inclut les enregistrements, la saisie du document, les corrections et la livraison du papier, sur cl\u00E9 USB ou par e-mail.",
  "Correction simple (orthographe, grammaire, typographie) : 5\u00A0€ / 1 500 signes\u00B9",
  "Correction approfondie, avec mise en page : 7\u00A0€ / 1 500 signes\u00B9",
  "Correction et réécriture : 10\u00A0€ / 1 500 signes\u00B9",
  "Saisie : 6\u00A0€ / 1 500 signes\u00B9",
  "Saisie et mise en page : 8\u00A0€ / 1 500 signes\u00B9",
  "Autres travaux : 40\u00A0€ de l\u2019heure.",
];

export const TARIFS_PRECISIONS = [
  "Réduction de 10 % pour les demandeurs d\u2019emploi et étudiants, sur justificatif.",
  "Devis gratuit. Il est obligatoire à partir de 100\u00A0€. Si vous me confiez des travaux longs, les devis seront ajustés.",
  "Déplacement gratuit dans un rayon de 20 km. Au-delà, il sera facturé à 0,50\u00A0€ / km puis tarif dégressif pour les distances >100 km.",
];

export const TARIFS_NOTE =
  "Pour information, une page standard comprend 1 500 signes (espaces comprises, avec une police de caract\u00E8res Times New Roman 12 ou Calibri 12)";

export const TARIFS_FOOTNOTE = "Espaces comprises.";

export const FONCTIONNEMENT_PARAGRAPHS = [
  "Toute demande émise par un particulier ou un professionnel nécessite un entretien téléphonique ou en présentiel, afin de définir précisément vos besoins. AMJ Écrivain public adapte ses prestations pour répondre au plus près à la demande formulée. L\u2019entretien et le devis sont gratuits.",
  "Le fonctionnement reste souple\u00A0: il est possible d\u2019organiser des rencontres ou de travailler à distance.",
  "Pour les travaux longs, le devis est réalisé après l\u2019entretien, ce qui permet de cerner exactement la demande exprimée et de réaliser une première ébauche, ou de travailler sur un échantillon de votre document. Cela permet d\u2019évaluer la durée nécessaire et de définir le prix de la prestation. Le test est gratuit.",
];

export const CHARTE_DEONTOLOGIE = {
  title: "Charte de déontologie",
  paragraphs: [
    "respecte les règles de déontologie et notamment le secret professionnel. Confidentialité et bienveillance sont aussi garantes de la confiance établie entre nous.",
    "refuse d\u2019écrire les lettres de menaces, chantage, insultes, tout document destiné à tromper son destinataire (fraude sur la date, faux, plagiat, détournement de textes dans le cadre d\u2019une évaluation\u2026).",
    {
      before: " ne conclut en aucun cas avec son client de pacte de ",
      emphasis: "quota litis",
      after: " (pourcentage sur des sommes recouvrées sur le montant d\u2019un contrat commercial).",
    },
    "n\u2019intervient pas sur le fond, ni pour une réécriture totale des travaux d\u2019étudiants rentrant dans le cadre d\u2019une évaluation ou d\u2019un diplôme. En revanche, la prestation peut porter sur la relecture, la correction et la mise en page.",
  ],
};

export const HOME_PUBLICS_ITEMS = [
  "Particuliers",
  "Associations, structures d\u2019hébergement et collectivités",
  "Autres professionnels et structures culturelles",
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
      text: "Bien que le courriel s\u2019impose de manière récurrente, nul n\u2019est à l\u2019abri de devoir rédiger une lettre pour revendiquer ses droits, pour des raisons professionnelles, pour exprimer ses convictions, ses sentiments, ou simplement communiquer avec un être cher. Je vous aide à ",
      textHighlight: "rédiger.",
      items: [
        "Lettres administratives ou à de hautes personnalités,",
        "Lettres de réclamation,",
        "Lettres professionnelles,",
        "Toute correspondance privée.",
      ],
    },
    {
      icon: Mic,
      title: "Vos discours et autres écrits personnels",
      text: "Vous êtes touché par un évènement concernant vos proches et vous désirez le marquer d\u2019une pierre blanche.",
      items: [
        "Discours à l\u2019occasion d\u2019un mariage, un départ en retraite, la naissance d\u2019un enfant, des retrouvailles,||une éloge funèbre\u2026",
      ],
    },
    {
      icon: BookOpen,
      title: "Des histoires à raconter\u2026 transmettre ses souvenirs",
      text: "Votre activité, professionnelle ou amateure, est singulière comme votre vie, ou plutôt quelques moments de vie particulièrement marquants. Je saurai vous écouter attentivement pour restituer et mettre en valeur ces épisodes mémorables.",
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
  title: "Prestations pour associations d\u2019aide aux personnes, structures d\u2019accueil et d\u2019hébergement, collectivités",
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
        "Écrits professionnels\u00A0: comptes rendus, rapports, résumés de conférences,||notes de présentation d\u2019un projet, montage de dossiers de subventions",
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
      "Préserver votre cœur de métier. Je me charge d\u2019apporter une plus-value à la qualité de vos écrits professionnels (relecture et correction, rédaction).",
    ],
    items: [
      "Travaux de secrétariat",
      "Écrits professionnels\u00A0: comptes rendus, rapports, résumés de conférences,||notes de présentation d\u2019un projet, montage de dossiers de subventions (liste non exhaustive)",
      "Documents de communication",
      "Monographie de la société",
    ],
  },
  artistique: {
    title: "Artistes et structures culturelles",
    icon: Palette,
    intro: [
      "Ces prestations s\u2019adressent aux artistes, professeurs d\u2019enseignement artistique, structures culturelles (conservatoires de musique, danse et théâtre\u00A0; établissements dédiés au spectacle vivant, au patrimoine, aux arts visuels), et maisons d\u2019édition.",
      "Musicien, danseur, comédien\u2026 votre parcours artistique est souvent jalonné de sacrifices pour atteindre un haut niveau\u00A0: un travail acharné, de longues répétitions, des représentations publiques et parfois l\u2019enseignement de la discipline. Mais la passion n\u2019a pas de prix\u00A0! Artistes, professionnels ou amateurs avertis, je révèle votre parcours à travers une monographie, un récit de vie voué au théâtre ou à l\u2019apprentissage d\u2019un instrument. Je reste également au service des structures culturelles pour corriger des documents complexes, aider à monter des dossiers ou développer vos outils de communication.",
    ],
    items: [
      "Monographie d\u2019artiste, biographie, récit d\u2019un moment de vie marquant\u00A0;||monographie de la structure culturelle, livret de l\u2019établissement",
      "Votre institution\u00A0: statuts associatifs, projets d\u2019établissement, demandes de subvention",
      "Dossiers de promotion\u00A0: plaquette de saison, dossier pédagogique,||dossier de presse, dossier de mécénat ou de financement participatif",
      "Écriture artistique\u00A0: textes à l\u2019appui des œuvres, textes pour le spectacle vivant, contes musicaux",
      "Documents de communication\u00A0: flyers, newsletter du programme,||programme distribué à l\u2019entrée du spectacle, livret d\u2019exposition\u2026",
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
    "Pendant plus de 25 ans, j\u2019ai développé mes compétences rédactionnelles au sein des collectivités territoriales pour des écrits allant du simple courrier administratif à la note de présentation d\u2019un projet structurant pour demande de subvention européenne, sans oublier les comptes rendus, rapports, argumentaires juridiques et autres documents traités au quotidien.",
    "Par ailleurs, mon investissement dans l\u2019univers associatif et culturel a permis de diversifier mon style d\u2019écriture en m\u2019orientant vers la création de textes pour le spectacle vivant. Je me suis également consacrée à d\u2019autres missions (création d\u2019un dossier de mécénat, statuts associatifs\u2026).",
    <>
      Aujourd&rsquo;hui, je souhaite mettre mes compétences rédactionnelles au service des personnes ayant besoin d&rsquo;un
      accompagnement pour des DEMARCHES ADMINISTRATIVES{" "}
      <span className="text-highlight">
        ou la rédaction de <span className="intro-caps">VOS</span> ECRITS PERSONNELS
      </span>{" "}
      ou PROFESSIONNELS.
    </>,
  ],
};

export const FORMATION = [
  { text: <><strong>Formation d&rsquo;écrivain public</strong> au Centre national privé de formation à distance (CNFDI)</> },
  { text: <><strong>Stages d&rsquo;écrivain conseil</strong> au cabinet Françoise Peters (GREC), à Castelnau-le-Lez (34)</> },
  { text: <><strong>Formation de correcteur</strong> au Centre d&rsquo;écriture et de communication (CEC) à Paris, avec Jacques Décourt, auteur d&rsquo;ouvrages sur la langue française et enseignant à l&rsquo;École supérieure de journalisme de Lille</> },
  {
    text: <><strong>Licence Conception et mise en œuvre de projets culturels</strong>, université d&rsquo;Aix-Marseille</>,
    sub: [
      <><strong>Mémoire&nbsp;:</strong> <em>Musiques nomades</em>&nbsp;: <span className="text-highlight"><em>tziganes, gitanes et jazz manouche</em></span></>,
      <><strong>Stage dans un théâtre</strong> (programmation et communication)</>,
      <><strong>Stage au service culturel / spectacle vivant</strong> d&rsquo;une communauté d&rsquo;agglomération</>,
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
      "Démarches administratives diverses et formalités pour demandes de visas, cartes de séjour",
      "Discours, récits de vie, monographie d\u2019activité",
    ],
  },
  {
    title: "25 ans au service des collectivités",
    icon: Landmark,
    items: [
      "Plus de 25 ans au service des communes de 2\u00A0000 à 3\u00A0600 habitants, en tant que directrice générale des services.",
      "Spécialisation en droit de l\u2019urbanisme, droit des marchés publics, finances publiques et droit privé (litiges des particuliers)",
      "Rédaction des pièces de marchés publics, des documents de plan local d\u2019urbanisme (PLU)",
      "Comptes rendus de conseils municipaux et diverses réunions\u00A0; rapports divers",
      "Courriers juridiques",
      "Présentation de budgets, rapports d\u2019orientations budgétaires",
      "Constitution de dossiers de subventions",
    ],
  },
  {
    title: "Mon engagement dans le domaine culturel",
    icon: Music,
    items: [
      "Musicienne dans des orchestres d\u2019harmonie (clarinette, saxophone)",
      "Membre du conseil d\u2019administration d\u2019un orchestre d\u2019harmonie (budgets, comptes rendus de réunions, élaboration de projets\u2026)",
      "Création d\u2019un livret sur le mécénat\u00A0; récits pour des concerts-lectures, contes musicaux",
      "Documents de communication et de programmation\u00A0; plaquette du programme de saison culturelle",
      "Bonne connaissance du fonctionnement des conservatoires de musique",
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
    tag: "Associations et collectivités",
    accent: "mauve",
    title: "Un accompagnement pour vos publics et votre institution",
    path: "/prestations/associations",
    image: IMAGES.cardAssociations,
  },
  {
    tag: "Professionnels et culture",
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
