import styles from "./AttributionList.module.css";
import AbsoluteLinkTemplate from "../ui-elements/absolute-link-template/AbsoluteLinkTemplate";
import { noIconLinks } from "../../data/absoluteLinks";

const AttributionList = (): React.JSX.Element => {
  const attributionListLinks = noIconLinks.filter(
    (link) => link.section === "attribution-list"
  );

  return (
    <ul className={styles.attributionList}>
      {attributionListLinks.map(
        ({
          id,
          name,
          url,
          thumbnailWebp,
          thumbnailAvif,
          thumbnailAlt,
          videoUrl,
          videoAlt,
        }) => (
          <li key={id}>
            <AbsoluteLinkTemplate url={url}>
              <div className={styles.attributionListItem}>
                {videoUrl ? (
                  <div className={styles.thumbnailWrapper}>
                    <video
                      className={styles.thumbnailVideo}
                      src={videoUrl}
                      muted
                      preload="metadata"
                      playsInline
                      aria-label={videoAlt}
                    />
                  </div>
                ) : (
                  thumbnailWebp &&
                  thumbnailAvif && (
                    <picture className={styles.thumbnailWrapper}>
                      <source srcSet={thumbnailWebp} type="image/webp" />
                      <img
                        src={thumbnailAvif}
                        alt={thumbnailAlt}
                        className={styles.thumbnailImage}
                      />
                    </picture>
                  )
                )}
                <div className={styles.attributionListItemText}>
                  <span>{name}</span>
                </div>
              </div>
            </AbsoluteLinkTemplate>
          </li>
        )
      )}
    </ul>
  );
};

export default AttributionList;
