export type CardID =
  | "explainer-paragraph-01"
  | "explainer-fulltext-01"
  | "page-one-01"
  | "page-one-02"
  | "page-two-01"
  | "page-two-02"
  | "page-three-01"
  | "page-three-02"
  | "page-three-03"
  | "page-three-04"
  | "page-three-05"
  | "page-four-01"
  | "page-four-02"
  | "latest-news-01"
  | "latest-news-02"
  | "latest-news-03"
  | "latest-news-04"
  | "page-five-01"
  | "page-five-02"
  | "page-five-03"
  | "contact-01"
  | "animated-counters"
  | "wave-section-divider"
  | "shapes-examples"
 

export type ImageItem = {
  imageWebp: string;
  imageAvif: string;
  imageAlt: string;
};

export type CardData = {
  id: CardID;
  slug?: string;
  heading?: string;
  subheading?: string;
  text?: string;
  preview?: string;
  fullText?: string;
  subtextPreview?: string;
  fullSubtext?: string;
  subtext?: string;
  images?: ImageItem[];
  textBottom?: string;
  bottomImages?: ImageItem[];
  secondTextBottom?: string;
  secondBottomImages?: ImageItem[];
  thirdTextBottom?: string;
  thirdBottomImages?: ImageItem[];
  overlayText?: string;
  newsHeading?: string;
  section?: "footer" | "menu" | "latest-news" | "attribution-list" | "copyright" | string;
  listItems?: string[];
};
