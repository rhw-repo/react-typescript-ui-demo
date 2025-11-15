import styles from "./Card.module.css";
import { useState, useId } from "react";
import type { CardData } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  heading,
  subheading,
  subtextPreview,
  fullSubtext,
}: CardData) => {
  const subtextPanelId = useId();

  const isHeading = !!heading && heading.length > 0;
  const isSubheading = !!subheading && subheading.length > 0;
  const isExpandableSubtext =
    !!subtextPreview &&
    subtextPreview.length > 0 &&
    !!fullSubtext &&
    fullSubtext.length > 0;

  const [expandedSubtext, setExpandedSubtext] = useState(false);

  const handleToggleSubtext: () => void = () => {
    setExpandedSubtext((prev: boolean) => !prev);
  };

  const dropDownIcon = (
    <FontAwesomeIcon icon={faChevronDown} className={styles.cardDropdownIcon} />
  );

  const closeDropDownIcon = <FontAwesomeIcon icon={faChevronUp} />;

  return (
    <section className={styles.card}>
      {isHeading && <h2 className={styles.cardHeading}>{heading}</h2>}
      {isSubheading && <h3 className={styles.cardSubheading}>{subheading}</h3>}

      {isExpandableSubtext && (
        <>
          <div id={subtextPanelId} className={styles.cardExpandableRow}>
            <p
              className={
                expandedSubtext
                  ? styles.cardSubtext
                  : styles.cardSubtextCollapsed
              }
            >
              {expandedSubtext ? fullSubtext : subtextPreview}
            </p>

            <div className="sr-only" aria-live="polite" aria-atomic="true">
              {expandedSubtext ? fullSubtext : ""}
            </div>

            <button
              type="button"
              className={`interactive--state ${styles.cardToggleButtonInline} ${
                expandedSubtext ? styles.cardToggleButton : ""
              }`}
              aria-expanded={expandedSubtext}
              aria-controls={subtextPanelId}
              onClick={handleToggleSubtext}
            >
              {expandedSubtext ? (
                <>Show Less {closeDropDownIcon}</>
              ) : (
                <>Read More {dropDownIcon}</>
              )}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Card;
