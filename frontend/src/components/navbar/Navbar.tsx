import styles from "./Navbar.module.css";
import ScrollToContactFormTemplate from "../ui-elements/scroll-to-contact-form-template/ScrollToContactFormTemplate";
import GoHomeLinkTemplate from "../ui-elements/go-home-link-template/GoHomeLinkTemplate";
import { useState, useEffect, useRef, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faChevronDown,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import LogoWebp from "../../assets/images/LogoAccentTransparent.webp";
import LogoAvif from "../../assets/images/LogoAccentTransparent.avif";

interface NavbarProps {
  onContactClick: () => void;
  message?: string;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const message = "LOGOTYPE";
  const location = useLocation();
  const { pathname } = location;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    buttonRef.current?.focus({ preventScroll: true });
  }, [location.key]);

  const navPanelUseId = useId();
  const navPanelId = `nav-panel${navPanelUseId}`;

  const isHome =
    pathname === "/home-one" ||
    pathname === "/home-two" ||
    pathname === "/home-three";
  const isVideoHome = pathname === "/";
  const isPages = !isHome && !isVideoHome;

  const contentClassName = isHome
    ? styles.navContentContainer
    : `${styles.navContentContainer} ${styles.navContentContainerPages}`;
  const navClassName = isHome ? styles.nav : `${styles.nav} ${styles.navPages}`;

  const menuItems = [
    { to: "/", label: "Default Home" },
    { to: "/home-one", label: "Home One" },
    { to: "/home-two", label: "Home Two" },
    { to: "/home-three", label: "Home Three" },
    { to: "/animated-counters", label: "Animated Counters" },
    { to: "/wave-section-divider", label: "Wave Section Divider" },
    { to: "/shapes-examples", label: "Shapes Examples" },
    { to: "/page-one-01", label: "Simple Page Example" },
  ];

  const toggleMenuVisibility = () => setOpen((prevOpen) => !prevOpen);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const closeMenuOnLinkClick = () => {
    close();
  };

  useEffect(() => {
    if (!open) return;
    const closeMenuOnEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };

    window.addEventListener("keydown", closeMenuOnEscapeKeyDown, true);
    return () => {
      window.removeEventListener("keydown", closeMenuOnEscapeKeyDown, true);
    };
  }, [open, menuItems.length]);


  const logoWebp = LogoWebp;
  const logoAvif = LogoAvif;

  const goToHomepageIcon = (
    <FontAwesomeIcon icon={faHouseChimney} className={styles.navIcon} />
  );
  const contactIcon = (
    <FontAwesomeIcon icon={faHeadset} className={styles.navIcon} />
  );
  const goToContactIcon = (
    <FontAwesomeIcon icon={faChevronDown} className={styles.navIcon} />
  );

  const videoHome: React.ReactNode = isVideoHome ? (
    <>
      <div className={styles.navBrand}>
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img
            src={logoAvif}
            alt="Generic logo"
            loading="lazy"
            className={styles.navBrandLogo}
          />
        </picture>
        <h1 className={styles.navBrandText}>{message}</h1>
      </div>
    </>
  ) : null;

  const pagesTemplate = (
    <>
      <div className={styles.navBrand}>
        <picture className={styles.navBrandLogo}>
          <source srcSet={logoWebp} type="image/webp" />
          <img
            src={logoAvif}
            alt="Generic logo"
            loading="lazy"
            className={styles.navBrandLogo}
          />
        </picture>
        <h1 className={styles.navBrandText}>{message}</h1>
      </div>

      <div className={styles.navRightGroup}>
        <GoHomeLinkTemplate goHomeLinkValue={goToHomepageIcon} />
        <ScrollToContactFormTemplate
          linkValue={
            <>
              {contactIcon} {goToContactIcon}
            </>
          }
          onClick={onContactClick}
        />
      </div>
    </>
  );

  const homePagesTemplate = (
    <div className={styles.navScrollToContactForm}>
      <ScrollToContactFormTemplate
        linkValue={
          <>
            {contactIcon} {goToContactIcon}
          </>
        }
        onClick={onContactClick}
      />
    </div>
  );

  const mainTemplate: React.ReactNode = isPages
    ? pagesTemplate
    : homePagesTemplate;

  return (
    <header className={navClassName} role="banner">
      <section className={contentClassName}>
        <div>
          <button
            ref={buttonRef}
            type="button"
            className={`${styles.navHamburgerContainer} interactive--state`}
            onClick={toggleMenuVisibility}
            aria-label="Site navigation"
            aria-expanded={open}
            aria-controls={navPanelId}
          >
            <span aria-hidden="true" className={styles.navHamburger} />
            <span aria-hidden="true" className={styles.navHamburger} />
            <span aria-hidden="true" className={styles.navHamburger} />
          </button>
        </div>

        {open && (
          <div
            className={styles.modalOverlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby={navPanelId}
            onClick={close}
          >
            <nav
              id={navPanelId}
              ref={panelRef}
              aria-label="Primary"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className={styles.navLinks}>
                {menuItems.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={styles.navLink}
                      aria-current={pathname === to ? "page" : undefined}
                      onClick={closeMenuOnLinkClick}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        {videoHome}
        {mainTemplate}
      </section>
    </header>
  );
};

export default Navbar;
