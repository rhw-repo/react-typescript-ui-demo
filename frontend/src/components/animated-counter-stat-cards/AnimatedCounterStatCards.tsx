import styles from "./AnimatedCounterStatCards.module.css";
//import { type CounterTextShape } from "../../data/counterTextShapesContent";
import { type AnimatedCounterStatCard } from "../../data/animatedCounterStatCardsContent";
//import { animatedCounterStatsCardContent } from "../../data/animatedCounterStatCardsContent";
import Count from "../count/Count";

export interface AnimatedCounterStatCardsProps  {
  items: AnimatedCounterStatCard[];
}

export const AnimatedCounterStatCards = ({ items }: AnimatedCounterStatCardsProps) => {

  return (
    <>
      <section className={styles.textbox}>
        <div className={styles.textboxContainer}>
            {items.map((item: AnimatedCounterStatCard, index: number) => (
              <div className={styles.textboxContainerShapes} key={index}>
                <span className={styles.shapeBadge}>
                  <picture className={styles.shapeBadgeImage}>
                    <source srcSet={item.imageAvif} type="image/svg+xml" />
                    <img
                      src={item.imageWebp}
                      role="presentation"
                      className={styles.textboxContainerShapesIcon}
                    />
                  </picture>
                </span>
                <div className={styles.textboxPara}>
                  <span className={styles.textboxCount}><Count data={item}/></span>
                  <span className={styles.textboxText}>{item.text}</span>
                  <span className={styles.textboxSubtext}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};
