import styles from "./PagesCard.module.css";
import type { CardData, ImageItem } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBullhorn,
  faBusinessTime,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const PagesCard = ({
  heading,
  subheading,
  images = [],
  bottomImages = [],
  overlayText,
  text,
  listItems = [],
}: CardData): React.JSX.Element => {
  const listIcons = [faBusinessTime, faLocationDot, faBullhorn, faClipboardCheck];

  const isHeading = !!heading && heading.length > 0;
  const headingElement = isHeading ? (
    <h2 className={styles.cardWrapperHeading}>{heading}</h2>
  ) : null;

  const isSubheading = !!subheading && subheading.length > 0;
  const subheadingElement = isSubheading ? (
    <h3 className={styles.cardWrapperSubheading}>{subheading}</h3>
  ) : null;

  const isImages = Array.isArray(images) && images.length > 0;
  const imageListElement = isImages ? (
    <ul className={styles.imageList}>
      {images.map((img: ImageItem, idx: number) => (
        <li key={idx} className={styles.imageListItem}>
          <picture className={styles.imageTop}>
            <source srcSet={img.imageWebp} type="image/webp" />
            <img src={img.imageAvif} alt={img.imageAlt} className={`${styles.imageTop} topImage`} fetchPriority="high" />
          </picture>
          {overlayText && idx === 0 && (
            <span className={styles.overlayText}>{overlayText}</span>
          )}
        </li>
      ))}
    </ul>
  ) : null;

  const isText = !!text && text.length > 0;
  const textElement = isText
    ? text.split(/\n{2,}/).map((paragraph, idx) => (
        <p key={idx} className={styles.cardWrapperText}>
          {paragraph}
        </p>
      ))
    : null;

  let iconIndex = 0;
  const listNodes: React.ReactNode[] = [];
  if (Array.isArray(listItems) && listItems.length > 0) {
    for (let i = 0; i < listItems.length; i++) {
      const item = listItems[i];
      listNodes.push(
        <li key={i} className={styles.listItem}>
          <FontAwesomeIcon
            icon={listIcons[iconIndex]}
            className={styles.listIcon}
          />
          {item}
        </li>
      );

      iconIndex++;
      if (iconIndex === listIcons.length) {
        iconIndex = 0;
      }
    }
  }

  const listElement =
    listNodes.length > 0 ? <ul className={styles.list}>{listNodes}</ul> : null;

  const isBottomImages = Array.isArray(bottomImages) && bottomImages.length > 0;
  const bottomImageElement = isBottomImages ? (
    <ul className={`${styles.imageList} ${styles.bottomImageList}`}>
      {bottomImages.map((img: ImageItem, idx: number) => (
        <li key={idx} className={styles.imageListItem}>
          <picture className={styles.imageBottom}>
            <source srcSet={img.imageWebp} type="image/webp" />
            <img src={img.imageAvif} alt={img.imageAlt} loading="lazy" />
          </picture>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <>
      <section className={styles.pageCardsSection}>
        <div className={styles.pageCardsSectionCardWrapper}>
          {imageListElement}
          {headingElement}
          {subheadingElement}
          <div className={styles.cardWrapperTextGroup}>
            {textElement}
            {listElement}
            {bottomImageElement}
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesCard;
