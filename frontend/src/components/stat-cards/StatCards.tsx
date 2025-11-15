import styles from "./StatCards.module.css";
import { type StatCard } from "../../data/statCardsContent";
//import { statCardsContent } from "../../data/statCardsContent";
import Card from "../card/Card";
import { cardContent } from "../../data/cardContent";

export interface StatCardProps {
  items: StatCard[];
}

export const StatCards = ({ items }: StatCardProps) => {
  const explainerCard = cardContent.find(
    (card) => card.id === "explainer-paragraph-01"
  );

  return (
    <>
      <section className={styles.textbox}>
        <div className={styles.textboxContainer}>
            {items.map((item: StatCard, index: number) => (
              <div className={styles.textboxContainerShapes} key={index}>
                <span className={styles.shapeBadge} role="presentation">
                  <picture className={styles.shapeBadgeImage}>
                    <source srcSet={item.imageAvif} type="image/webp" />
                    <img
                      src={item.imageWebp}
                      alt=""
                      className={styles.textboxContainerShapesIcon}
                    />
                  </picture>
                </span>
                <p className={styles.textbox__para}>
                  <span className={styles.textbox__text}>{item.text}</span>
                  <span className={styles.textbox__subtext}>
                    {item.subtext}
                  </span>
                </p>
              </div>
            )
          )}
        </div>
        <section className={styles.textboxCardMobileTablets}>
          {explainerCard ? (
            <Card key={explainerCard.id} {...explainerCard} />
          ) : null}
        </section>
      </section>
    </>
  );
};
