export interface StatCard {
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

export const statCardsContent: StatCard[] = [
  {
    text: "Headline",
    subtext: "Subheading",
    imageWebp: "/icons/benefits.webp",
    imageAvif: "/icons/benefits.avif",
  },
  {
    text: "Headline",
    subtext: "Subheading*",
    imageWebp: "/icons/graph.webp",
    imageAvif: "/icons/graph.avif",
  },
  {
    text: "Headline",
    subtext: "Subheading",
    imageWebp: "/icons/location.webp",
    imageAvif: "/icons/location.avif",
  },
  {
    text: "Headline",
    subtext: "Subheading*",
    imageWebp: "/icons/insurance.webp",
    imageAvif: "/icons/insurance.avif",
  },
];
