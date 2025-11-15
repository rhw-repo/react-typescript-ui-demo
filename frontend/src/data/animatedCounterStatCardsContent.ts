export interface AnimatedCounterStatCard {
  id: string;
  number: string;
  duration: string;
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

export const animatedCounterStatsCardContent: AnimatedCounterStatCard[] = [
  {
    id: "001",
    duration: "600",
    number: "25.5",
    text: "Decimal Numbers",
    subtext: "Subtext",
    imageWebp: "/icons/benefits.webp",
    imageAvif: "/icons/benefits.avif",
  },
  {
    number: "17",
    duration: "1200",
    id: "002",
    text: "Whole Numbers",
    subtext: "Subtext",
    imageWebp: "/icons/graph.webp",
    imageAvif: "/icons/graph.avif",
  },
  {
    number: "20,500",
    duration: "2400",
    id: "003",
    text: "With Commas",
    subtext: "Subtext",
    imageWebp: "/icons/location.webp",
    imageAvif: "/icons/location.avif",
  },
  {
    number: "100",
    duration: "3000",
    id: "004",
    text: "All timings flexible",
    subtext: "Subtext",
    imageWebp: "/icons/insurance.webp",
    imageAvif: "/icons/insurance.avif",
  },
];
