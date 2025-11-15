import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import SectionDivider from "../../components/ui-elements/section-divider/SectionDivider";

const NotFound = () => {
  const [announce, setAnnounce] = useState("");
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      buttonRef.current?.focus();
      setTimeout(() => {
        setAnnounce(
          "We're sorry, the page you are looking for can't be found."
        );
      }, 50);
    }, 0);
  }, []);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section
        tabIndex={-1}
        className={styles.notFoundContainer}
        role="region"
        aria-label="404 Error: Page not found"
      >
        <h1>404 - Page Not Found</h1>
        <p aria-live="polite" aria-atomic="true">
          {announce}
        </p>
        <button
          ref={buttonRef}
          type="button"
          onClick={backToHome}
          className="interactive button--primary"
        >
          Go back to Home Page
        </button>
      </section>
      <SectionDivider />
    </>
  );
};

export default NotFound;
