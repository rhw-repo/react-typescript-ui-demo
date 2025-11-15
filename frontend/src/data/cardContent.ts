import type { CardData } from "../types/types";

import hotelBellWebp from "../assets/images/pexels-olly-3771110.webp";
import hotelBellAvif from "../assets/images/pexels-olly-3771110.avif";
import greenCanoesWebp from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.webp";
import greenCanoesAvif from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.avif";
import airportWebp from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.webp";
import airportAvif from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.avif";
import graduationWebP from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.webp";
import graduationAvif from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.avif";
import rollsRoyceWebp from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.webp";
import rollsRoyceAvif from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.avif";
import woodenDeckchairsWebP from "../assets/images/aaron-burden-cEukkv42O40-unsplash.webp";
import woodenDeckChairsAvif from "../assets/images/aaron-burden-cEukkv42O40-unsplash.avif";

export const cardContent: CardData[] = [
  {
    id: "explainer-paragraph-01",
    subtextPreview: `*  Lorem ipsum dolor sit amet ... `,
    fullSubtext: `*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id efficitur 
erat. Phasellus eget consectetur magna. Pellentesque nec magna varius, dictum 
dolor a, placerat tellus. Quisque gravida semper rutrum. Vestibulum eget 
sodales velit. Suspendisse in leo tristique, pellentesque magna id, efficitur 
mauris.`,
  },
  {
    id: "explainer-fulltext-01",
    text: `*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id efficitur 
erat. Phasellus eget consectetur magna. Pellentesque nec magna varius, dictum 
dolor a, placerat tellus. Quisque gravida semper rutrum. Vestibulum eget 
sodales velit. Suspendisse in leo tristique, pellentesque magna id, efficitur 
mauris.`,
  },
  {
    id: "page-one-01",
    heading: "Optional Heading Page 1 Card 1",
    subheading: "Optional Subheading: Card with text",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
    images: [
      {
        imageWebp: hotelBellWebp,
        imageAvif: hotelBellAvif,
        imageAlt:
          "Antique brass hotel desk bell and reception sign at the front of house desk (photo shown on the link).",
      },
    ],
    overlayText: "Strapline optional overlay.",
  },
  {
    id: "page-one-02",
    heading: "Optional Heading: Page 1 Card 2",
    subheading: "Optional Subheading: Card with list",
    listItems: [
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-two-01",
    heading: "Optional Heading Page 2 Card 1",
    subheading: "Optional Subheading: Card with text",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
    images: [
      {
        imageWebp: airportWebp,
        imageAvif: airportAvif,
        imageAlt: "A man sits in an airport lounge watching a plane take off.",
      },
    ],
  },
  {
    id: "page-two-02",
    heading: "Optional Heading: Page 2 Card 2",
    subheading: "Optional Subheading: Card with list",
    listItems: [
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-three-01",
    heading: "Optional Heading Page 3 Card 1",
    subheading: "Optional Subheading: Card with text",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
    images: [
      {
        imageWebp: rollsRoyceWebp,
        imageAvif: rollsRoyceAvif,
        imageAlt: "A Rolls Royce in front of a hotel door.",
      },
    ],
  },
  {
    id: "page-three-02",
    heading: "Optional Heading: Page 3 Card 2",
    subheading: "Optional Subheading: Card with list",
    listItems: [
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "page-four-01",
    heading: "Optional Heading Page 4 Card 1",
    subheading: "Optional Subheading: Card with text",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
    images: [
      {
        imageWebp: greenCanoesWebp,
        imageAvif: greenCanoesAvif,
        imageAlt: "Green canoes waiting at a lakeside jetty.",
      },
    ],
  },
  {
    id: "page-four-02",
    heading: "Page 4 Card 2",
    subheading: "Optional Subheading: Card with list",
    listItems: [
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "latest-news-01",
    heading: "Latest News",
    newsHeading: `Chris Temple: Gold, Uranium the Best Stories Now; Plus Silver Outlook`,
    section: "latest-news",
  },
  {
    id: "latest-news-02",
    newsHeading: `Jeffrey Christian: Gold, Silver, PGMs — Short-term Prices and Key 
    Drivers`,
    section: "latest-news",
  },
  {
    id: "latest-news-03",
    newsHeading: `Australia's 5 Most Valuable Mineral Exports`,
    section: "latest-news",
  },
  {
    id: "latest-news-04",
    newsHeading:
      "Germany, Italy Face Pressure to Repatriate US$245 Billion in Gold as Trust in US Custody Wavers",
    section: "latest-news",
  },
  {
    id: "page-five-01",
    heading: "Optional Heading Page 5 Card 1",
    subheading: "Optional Subheading: Card with text",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
    images: [
      {
        imageWebp: graduationWebP,
        imageAvif: graduationAvif,
        imageAlt:
          "Rear view of a graduate in gown and cap standing in front of the ocean.",
      },
    ],
  },
  {
    id: "page-five-02",
    heading: "Page 5 Card 2",
    subheading: "Optional Subheading: Card with list",
    listItems: [
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
      `Lorem ipsum dolor sit amet.`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "wave-section-divider",
    heading: "Shaped Section Dividers",
    subheading: "Section Edges Styling",
    listItems: [
      `Pages can de thematically divided using different background colors and section dividers`,
      `It could be a straight horizontal section end or more complex shapes`,
      `This example shows a simple wave pattern`,
      `Section ending shapes, dimensions & colours are adjustable`,
    ],
    bottomImages: [
      {
        imageWebp: woodenDeckchairsWebP,
        imageAvif: woodenDeckChairsAvif,
        imageAlt: "Blue deckchairs on a sandy beach facing the sea.",
      },
    ],
  },
  {
    id: "shapes-examples",
    heading: "Shapes Can Highlight Key Messages",
  },
];
