import hotelBellWebp from "../assets/images/pexels-olly-3771110.webp";
import hotelBellAvif from "../assets/images/pexels-olly-3771110.avif";
import airportWebp from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.webp";
import airportAvif from "../assets/images/jeshoots-com-mSESwdMZr-A-unsplash.avif";
import rollsRoyceWebp from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.webp";
import rollsRoyceAvif from "../assets/images/zoe-holling-PScacPyJE5U-unsplash.avif";
import greenCanoesWebp from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.webp";
import greenCanoesAvif from "../assets/images/anthony-cantin-JRV04uSiMr4-unsplash.avif";
import graduationWebp from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.webp";
import graduationAvif from "../assets/images/himal-rana-HdVeYMcIzfw-unsplash.avif";

export interface HomeLink {
  slug:
    | "page-one-01"
    | "page-two-01"
    | "page-three-01"
    | "page-four-01"
    | "page-five-01"
    | "latest-news-01";
  heading?: string;
  subheading?: string;
  preview?: string;
  imageWebp?: string;
  imageAvif: string;
  imageAlt?: string;
  newsHeading?: string;
}

export const homeLinks: readonly HomeLink[] = [
  {
    slug: "page-one-01",
    heading: "Heading",
    subheading: "Optional Subheading",
    preview: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultric ... `,
    imageWebp: hotelBellWebp,
    imageAvif: hotelBellAvif,
    imageAlt:
      "Antique brass hotel desk bell and reception sign at the front of house desk (photo shown on the link).",
  },
  {
    slug: "page-two-01",
    heading: "Heading",
    subheading: "Optional Subheading",
    preview: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultric ...`,
    imageWebp: airportWebp,
    imageAvif: airportAvif,
    imageAlt:
      "A man sits in an airport departures lounge watching a plane take off (photo shown on the link).",
  },
  {
    slug: "page-three-01",
    heading: "Heading",
    subheading: "Optional Subheading",
    preview: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, utlric...`,
    imageWebp: rollsRoyceWebp,
    imageAvif: rollsRoyceAvif,
    imageAlt:
      "A Rolls Royce in front of a hotel door (photo shown on the link).",
  },
  {
    slug: "page-four-01",
    heading: "Heading",
    subheading: "Optional Subheading",
    preview: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultric ... `,
    imageWebp: greenCanoesWebp,
    imageAvif: greenCanoesAvif,
    imageAlt:
      "Green canoes waiting at a lakeside jetty (photo shown on the link).",
  },
  {
    slug: "page-five-01",
    heading: "Heading",
    subheading: "Optional Subheading",
    preview: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultric ... `,
    imageWebp: graduationWebp,
    imageAvif: graduationAvif,
    imageAlt:
      "Rear view of a graduate in gown and cap looking out to sea (photo shown on the link).",
  },
] as const;
