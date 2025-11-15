import type React from "react";
import styles from "./ScrollToContactFormTemplate.module.css";

interface ScrollToContactFormTemplateProps {
  onClick: () => void;
  linkValue: React.ReactNode;
}

const ScrollToContactFormTemplate = ({
  onClick,
  linkValue,
}: ScrollToContactFormTemplateProps): React.JSX.Element => {
  return (
    <>
      <section className={styles.scrollToContactSection}>
        <a
          href="#contact"
          className="interactive navbar-interactive interactive--state"
          onClick={onClick}
          aria-label="Jump to Contact Form"
        >
          {linkValue}
        </a>
      </section>
    </>
  );
};

export default ScrollToContactFormTemplate;
