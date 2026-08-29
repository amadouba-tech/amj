# Art des Mots Justes — site web (Next.js)

Site vitrine pour Art des Mots Justes, écrivain public, construit avec **Next.js 14**
(App Router) — vraies pages/URLs, métadonnées SEO par page, polices auto-hébergées
via `next/font`, images optimisées via `next/image`.

## Refonte « portail moderne » (26/08)

À la demande du client, le style visuel a été modernisé en s'inspirant de la page
paris.fr/evenements (bandeau promo, hero photo + pastilles colorées, encart d'infos
pratiques coloré, carrousels de découverte, footer enrichi). La palette et le logo déjà
validés ont été conservés — seul le langage visuel (blocs de couleur, badges, cartes)
a été modernisé, pour rester cohérent avec l'identité de marque.

### Photos à remplacer

Toutes les photos du site sont pour l'instant des photos aléatoires libres de droit
(service [Picsum](https://picsum.photos)), à titre de repère visuel. **Elles sont
toutes centralisées dans `data/images.js`** avec des commentaires expliquant comment
les remplacer une par une — un seul fichier à modifier.

### Nouveaux éléments de cette refonte

- **Bandeau promotionnel** en haut du site (`components/PromoBanner.jsx`) — contenu
  réel (met en avant la page Associations & collectivités), fermable, à adapter selon
  l'actualité.
- **Page d'accueil** : hero photo + titre + pastilles de couleur par public, section
  « À découvrir aussi » (carrousel de cartes qui renvoient vers les vraies pages du
  site, pas des articles inventés).
- **Page Contact** : encart d'infos pratiques coloré (zone d'intervention, prise de
  rendez-vous, devis) avec une carte OpenStreetMap intégrée (gratuite, sans clé API,
  actuellement centrée sur l'Yonne à titre indicatif — à ajuster avec l'adresse exacte).
- **Newsletter** dans le footer — comme le formulaire de contact, l'inscription
  affiche une confirmation mais n'est pas encore reliée à un vrai service d'envoi.
- **Icônes réseaux sociaux** dans le footer — pas encore de liens réels (les profils
  n'existent pas encore) ; `components/Footer.jsx` contient un commentaire `TODO` à
  l'endroit exact où ajouter les liens une fois les comptes créés.
- **Nouvelles pages** : `/mentions-legales`, `/accessibilite`, `/politique-cookies`
  (contenus à compléter — voir avertissement légal ci-dessous) et `/plan-du-site`
  (page réelle et fonctionnelle, générée à partir des pages existantes).

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:3000`.

> Le tout premier `npm run build` (ou `npm run dev`) télécharge les polices Google
> Fonts (Cormorant Garamond, Jost) pour les auto-héberger. Une connexion internet est
> donc nécessaire à ce moment-là, mais plus jamais ensuite : les polices sont servies
> depuis votre propre site, pas depuis Google.

## Construire pour la mise en ligne

```bash
npm run build
npm start        # pour vérifier le build en local avant mise en ligne
```

Ce projet peut être déployé tel quel sur **Vercel** (créateur de Next.js, zéro
configuration), ou sur tout hébergeur compatible Node.js. Dites-moi si vous voulez
plutôt un export 100% statique (`output: "export"` dans `next.config.mjs`) pour un
hébergement mutualisé classique — le formulaire de contact devra alors être branché
sur un service externe (voir plus bas), ce qui est de toute façon recommandé.

## Pages du site

| URL                              | Contenu                                          |
| ---------------------------------- | ------------------------------------------------- |
| `/`                                 | Accueil                                           |
| `/prestations`                      | Vue d'ensemble + sélecteur de public (3 boutons)  |
| `/prestations/particuliers`         | Prestations — Particuliers                       |
| `/prestations/associations`         | Prestations — Associations & collectivités        |
| `/prestations/professionnels`       | Prestations — Professionnels & secteur culturel   |
| `/qui-suis-je`                      | Formation & expérience                           |
| `/tarifs`                           | Fonctionnement des devis                         |
| `/contact`                          | Formulaire de contact                            |

Chaque page a son propre `<title>` et sa propre meta description (visibles dans
`export const metadata` en haut de chaque fichier `page.jsx`) — un vrai gain pour le
référencement par rapport à une application mono-page.

## Structure du projet

```
app/                 une route = un dossier = un page.jsx (App Router de Next.js)
  layout.jsx           structure commune (Header, Footer, polices, métadonnées globales)
  globals.css          palette de couleurs, typographies, styles
  icon.png              favicon (généré depuis le monogramme AMJ)
assets/               logo (header, hero, monogramme) — importés via next/image
data/content.js        tout le texte du site, repris du fichier Excel fourni
components/            Header, Footer, ContactForm, éléments UI réutilisables
```

## Palette de couleurs (assombrie)

À la demande du client, la palette a été assombrie par rapport à la version précédente.
Les contrastes texte/fond ont été vérifiés (norme WCAG AA, ratio ≥ 4.5:1 pour le texte
courant) pour garder une bonne lisibilité :

| Rôle           | Nouvelle valeur | Ancienne valeur |
| ---------------- | ---------------- | ------------------ |
| Encre (texte)     | `#2B3541`         | `#37424F`           |
| Bleu-gris         | `#47586D`         | `#5E7189`           |
| Mauve             | `#7E5B89`         | `#96789F`           |
| Terracotta        | `#A96042`         | `#BF8269`           |
| Bois clair        | `#E5D5B8`         | `#F3EDE2`           |
| Gris coloré       | `#D6CBB6`         | `#E7E2D8`           |
| Blanc cassé       | `#F3EDDD`         | `#FBF9F4`           |

Ces variables sont définies dans `app/globals.css` (`:root`). Pour ajuster une teinte,
il suffit de changer sa valeur hexadécimale à cet endroit — tout le site se met à jour.

## ⚠️ Avant la mise en ligne définitive

1. **Photos** — à remplacer partout (voir `data/images.js` ci-dessus), y compris le
   bandeau promotionnel et les cartes « À découvrir aussi ».
2. **Formulaire de contact et newsletter** — `components/ContactForm.jsx` et
   `components/NewsletterForm.jsx` affichent une confirmation mais n'envoient rien
   nulle part pour l'instant. À relier à un service d'envoi (Formspree, Resend, une
   Route Handler Next.js, ou le système natif de votre hébergement).
3. **Réseaux sociaux** — ajouter les vrais liens dans `components/Footer.jsx` une fois
   les comptes créés (recherchez le commentaire `TODO`).
4. **Carte du encart Contact** — actuellement centrée sur l'Yonne à titre indicatif
   (`components/InfoSidebar.jsx`) ; à ajuster avec l'adresse exacte si vous souhaitez
   une localisation plus précise.
5. **`metadataBase`** — dans `app/layout.jsx`, l'URL `https://www.artdesmotsjustes.fr`
   est un espace réservé. À remplacer par le nom de domaine définitif dès qu'il est
   choisi (utilisé pour les aperçus de partage sur les réseaux sociaux).
6. **Charte de déontologie** — la page Prestations affiche un encart « bientôt
   disponible » : le texte définitif reste à rédiger et à intégrer.
7. **Mentions légales / Accessibilité** — ces pages contiennent un texte d'attente
   honnête plutôt que des informations inventées (SIRET, etc.) : à compléter avec vos
   vraies informations légales avant publication.

## Intégration WordPress / Astra

Si l'objectif final est bien un site Astra (WordPress), ce projet sert de maquette
validée : structure des pages, contenu final et palette sont prêts à être repris tels
quels dans le constructeur de pages Astra. Dites-moi si vous voulez que je prépare le
contenu page par page dans ce format.
