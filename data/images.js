import heroAccueil from "@/assets/placeholders/hero-accueil.jpg";

function picsum(seed, width, height) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export const IMAGES = {
  heroAccueil,
  contactPhoto: picsum("amj-contact", 700, 900),
  cardParticuliers: picsum("amj-particuliers", 600, 500),
  cardAssociations: picsum("amj-associations", 600, 500),
  cardProfessionnels: picsum("amj-professionnels", 600, 500),
  cardQuiSuisJe: picsum("amj-qui-suis-je", 600, 500),
  cardTarifs: picsum("amj-tarifs", 600, 500),
};