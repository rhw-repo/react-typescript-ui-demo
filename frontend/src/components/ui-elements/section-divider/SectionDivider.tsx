import styles from "./SectionDivider.module.css";

const SectionDivider = (): React.JSX.Element => (
  <div className={styles.sectionDividerWrapper}>
    <hr className={styles.sectionDivider} />
  </div>
);

export default SectionDivider;
