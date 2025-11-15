import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faBluesky,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Thumbnail latest-news icon imports
import greenChartWebp from "../assets/thumbnails/round-icons-zNHJIGbP8KY-unsplash.webp";
import greenChartAvif from "../assets/thumbnails/round-icons-zNHJIGbP8KY-unsplash.avif";
import twoToneTruckWebp from "../assets/thumbnails/round-icons-UlxLBVOKN4o-unsplash.webp";
import twoToneTruckAvif from "../assets/thumbnails/round-icons-UlxLBVOKN4o-unsplash.avif";
import pieChartWebp from "../assets/thumbnails/harisankar-sahoo-hie18uKBWZE-unsplash.webp";
import pieChartAvif from "../assets/thumbnails/harisankar-sahoo-hie18uKBWZE-unsplash.avif";
import laptopWebp from "../assets/thumbnails/harisankar-sahoo-icPjxeqjT4Y-unsplash.webp";
import laptopAvif from "../assets/thumbnails/harisankar-sahoo-icPjxeqjT4Y-unsplash.avif";

// Thumbnail video imports
import droneFootage from "../assets/mp4/7226223-hd_1920_1080_30fps.mp4";

//Thumbnail credit images imports
import greenCanoesWebp from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.webp";
import greenCanoesAvif from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.avif";
import airportWebp from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.webp";
import airportAvif from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.avif";
import graduationWebp from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.webp";
import graduationAvif from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.avif";
import rollsRoyceWebp from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.webp";
import rollsRoyceAvif from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.avif";
import woodenDeckchairsWebP from "../assets/images/aaron-burden-cEukkv42O40-unsplash.webp";
import woodenDeckChairsAvif from "../assets/images/aaron-burden-cEukkv42O40-unsplash.avif";
import metalDockWebp from "../assets/images/pexels-lukas-dlutko-1278617-2440257.webp";
import metalDockAvif from "../assets/images/pexels-lukas-dlutko-1278617-2440257.avif";
import hotelBellWebp from "../assets/images/pexels-olly-3771110.webp";
import hotelBellAvif from "../assets/images/pexels-olly-3771110.avif";
import computerImageWebp from "../assets/images/vertex-designs-uW0Tj-GgaZw-unsplash.webp";
import computerImageAvif from "../assets/images/vertex-designs-uW0Tj-GgaZw-unsplash.avif";

export interface AbsoluteLinkTemplateIcon {
  id: string;
  name: string;
  url: string;
  section: "footer" | "menu" | "latest-news" | string;
  icon: IconDefinition;
}

export interface AbsoluteLinkTemplateNoIcon {
  id: string;
  name: string;
  url: string;
  section: "footer" | "menu" | "attribution-list" | "copyright" | string;
  icon?: never;
  thumbnailWebp?: string;
  thumbnailAvif?: string;
  thumbnailAlt?: string;
  videoUrl?: string;
  videoAlt?: string;
}

export const iconLinks: AbsoluteLinkTemplateIcon[] = [
  {
    id: "Instagram",
    name: "Instagram",
    url: "https://www.instagram.com/",
    section: "footer",
    icon: faInstagram,
  },
  {
    id: "Facebook",
    name: "Facebook",
    url: "https://www.facebook.com/",
    section: "footer",
    icon: faFacebook,
  },
  {
    id: "Bluesky",
    name: "Bluesky",
    url: "https://bsky.app/",
    section: "footer",
    icon: faBluesky,
  },
  {
    id: "LinkedIn",
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    section: "footer",
    icon: faLinkedin,
  },
];

export const noIconLinks: AbsoluteLinkTemplateNoIcon[] = [
  {
    id: "latest-news-01",
    name: `Chris Temple: Gold, Uranium the Best Stories Now; Plus Silver Outlook`,
    url: "https://investingnews.com/chris-temple-gold-uranium-forecast/",
    section: "latest-news",
    thumbnailWebp: greenChartWebp,
    thumbnailAvif: greenChartAvif,
  },
  {
    id: "latest-news-02",
    name: `Australia's 5 Most Valuable Mineral Exports`,
    url: "https://investingnews.com/australia-most-valuable-mineral-exports",
    section: "latest-news",
    thumbnailWebp: twoToneTruckWebp,
    thumbnailAvif: twoToneTruckAvif,
  },
  {
    id: "latest-news-03",
    name: `Jeffrey Christian: Gold, Silver, PGMs — Short-term Prices and Key 
    Drivers`,
    url: "https://investingnews.com/jeffrey-christian-gold-forecast/",
    section: "latest-news",
    thumbnailWebp: pieChartWebp,
    thumbnailAvif: pieChartAvif,
  },
  {
    id: "latest-news-04",
    name: "Latest Gold GCQ5 Commodity Figures",
    url: "https://www.investing.com/commodities/gold",
    section: "latest-news",
    thumbnailWebp: laptopWebp,
    thumbnailAvif: laptopAvif,
  },
  {
    id: "attribution-list-01",
    url: "https://www.flaticon.com/authors/freepik",
    section: "attribution-list",
    name: "Freepik (Flaticon)",
    thumbnailWebp: "/icons/benefits.webp",
    thumbnailAvif: "/icons/benefits.avif",
    thumbnailAlt: "Business icon used in the homepage by artist",
  },
  {
    id: "attribution-list-02",
    url: "https://www.flaticon.com/authors/meaicon",
    section: "attribution-list",
    name: "meaicon (Flaticon)",
    thumbnailWebp: "/icons/graph.webp",
    thumbnailAvif: "/icons/graph.avif",
    thumbnailAlt: "Chart Icon used in the homepage by artist",
  },
  {
    id: "attribution-list-03",
    url: "https://www.flaticon.com/authors/freepik",
    section: "attribution-list",
    name: "Freepik (Flaticon)",
    thumbnailWebp: "/icons/location.webp",
    thumbnailAvif: "/icons/location.avif",
    thumbnailAlt: "Map Icon used in the homepage by artist",
  },
  {
    id: "attribution-list-04",
    url: "https://www.flaticon.com/authors/freepik",
    section: "attribution-list",
    name: "Freepik (Flaticon)",
    thumbnailWebp: "/icons/insurance.webp",
    thumbnailAvif: "/icons/insurance.avif",
    thumbnailAlt: "Check Icon used in the homepage by artist",
  },
  {
    id: "attribution-list-05",
    url: "https://www.pexels.com/@lukas-dlutko-1278617/",
    section: "attribution-list",
    name: "Lukáš Dlutko (Pexels)",
    thumbnailWebp: metalDockWebp,
    thumbnailAvif: metalDockAvif,
    thumbnailAlt:
      "View down a jetty bridge with river and sunset over trees in the background by artist ",
  },
  {
    id: "attribution-list-07",
    url: "https://www.pexels.com/@rhys-abel-2233101/",
    section: "attribution-list",
    name: "Rhys Abel (Pexels)",
    videoUrl: droneFootage,
    videoAlt:
      "Drone aerial view of a Canadian pine forest and lake, by artist ",
  },
  {
    id: "attribution-list-08",
    url: "https://unsplash.com/@aaronburden/",
    section: "attribution-list",
    name: "Aaron Burden (Unsplash)",
    thumbnailWebp: woodenDeckchairsWebP,
    thumbnailAvif: woodenDeckChairsAvif,
    thumbnailAlt: "Blue deckchairs on a beach by artist ",
  },
  {
    id: "attribution-list-10",
    url: "https://unsplash.com/@arizonanthony",
    section: "attribution-list",
    name: "Anthony Cantin (Unsplash)",
    thumbnailWebp: greenCanoesWebp,
    thumbnailAvif: greenCanoesAvif,
    thumbnailAlt: "Empty green canoes waiting at a jetty by artist ",
  },
  {
    id: "attribution-list-11",
    url: "https://unsplash.com/@himal_r",
    section: "attribution-list",
    name: "Himal Rana (Unsplash)",
    thumbnailWebp: graduationWebp,
    thumbnailAvif: graduationAvif,
    thumbnailAlt:
      "Rear view of a man dressed in full graduation robes gazing at the sea by artist ",
  },
  {
    id: "attribution-list-12",
    url: "https://unsplash.com/@zoeholling",
    section: "attribution-list",
    name: "Zoe Holling (Unsplash)",
    thumbnailWebp: rollsRoyceWebp,
    thumbnailAvif: rollsRoyceAvif,
    thumbnailAlt:
      "A Rolls Royce car parked in front of a luxury hotel by artist ",
  },
  {
    id: "attribution-list-13",
    url: "https://unsplash.com/@jeshoots",
    section: "attribution-list",
    name: "Jan Vasek of Jé Shoots (Unsplash)",
    thumbnailWebp: airportWebp,
    thumbnailAvif: airportAvif,
    thumbnailAlt:
      "A man watches a plane take off from a seat in an airport lounge by artist ",
  },
  {
    id: "attribution-list-14",
    url: "https://www.pexels.com/@olly/",
    section: "attribution-list",
    name: "Andrea Piacquadio (Pexels)",
    thumbnailWebp: hotelBellWebp,
    thumbnailAvif: hotelBellAvif,
    thumbnailAlt: "Reception desk with antique hotel bell by artist ",
  },
  {
    id: "attribution-list-15",
    url: "https://unsplash.com/@vertex_800",
    section: "attribution-list",
    name: "Vertex Designs (Unsplash)",
    thumbnailWebp: computerImageWebp,
    thumbnailAvif: computerImageAvif,
    thumbnailAlt: "A retro computer",
  },
  {
    id: "copyright-1",
    url: "https://github.com/rhw-repo?tab=repositories",
    section: "copyright",
    name: "© R Westnidge Brown, 2025",
  },
];
