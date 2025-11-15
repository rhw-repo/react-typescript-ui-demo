import { Link } from "react-router-dom";
import type { HomeLink } from "../../../data/homeLinks";
import "../../../styles/global.css";
import styles from "./ExerptLinkTemplate.module.css";

type Props = {
  links: readonly HomeLink[];
};

const ExcerptLinkTemplate = ({ links }: Props): React.JSX.Element => {
  return (
    <>
      <section className={styles.linkSection}>
        <ul className={styles.list}>
          {links.map(
            ({
              slug,
              heading,
              subheading,
              preview,
              imageWebp,
              imageAvif,
              imageAlt,
            }) => (
              <li key={slug} className={styles.listItem}>
                <Link
                  to={`/${slug}`}
                  className={`${styles.listItemLink} ${styles.listItemGrid}`}
                >
                  {/* Row One */}
                  {imageWebp && imageAvif && (
                    <picture className={styles.listItemCardImageWrapper}>
                      <source srcSet={imageWebp} type="image/webp" />
                      <img
                        src={imageAvif}
                        alt={imageAlt!}
                        className={styles.cardImageWrapperCardImage}
                      />
                    </picture>
                  )}
                  {/* Row Two */}
                  <h2 className={styles.listItemHeading}>{heading}</h2>
                  {/* Row Three */}
                  {subheading && (
                    <h3 className={styles.listItemSubheading}>{subheading}</h3>
                  )}
                  {/* Row Four */}
                  {preview && (
                    <p className={styles.listItemPreview}>{preview}</p>
                  )}
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default ExcerptLinkTemplate;
