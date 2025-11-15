import styles from "./Shapes.module.css";
import type { ReactElement } from "react";
import { mockShapesContent } from "../../data/shapes";
import SectionDivider from "../ui-elements/section-divider/SectionDivider";

const Shapes = (): ReactElement => {
  const { message } = mockShapesContent;
  const { circleMessage } = mockShapesContent;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.box}>
            <p className={styles.boxText}>
              {message.map((part, index) =>
                part.highlight ? (
                  <span key={index} className={styles.textAccent}>
                    {part.text}
                  </span>
                ) : (
                  <span key={index}>{part.text}</span>
                )
              )}
            </p>
          </div>
          <div className={styles.plainCircle}>
           <div className={styles.plaincircleText}>
              {circleMessage.map((part, index) =>
                part.highlight ? (
                  <div key={index} className={styles.textAccent}>
                    {part.text}
                  </div>
                ) : (
                  <div key={index}>{part.text}</div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default Shapes;
