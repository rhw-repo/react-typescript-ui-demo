import { StatCards } from "../stat-cards/StatCards";
import { statCardsContent } from "../../data/statCardsContent";
import HomeHeroImage from "../home-hero-image/HomeHeroImage";
import styles from "./HomeHero.module.css";
import { useLocation } from "react-router-dom";

const HomeHero = () => {
  const { pathname } = useLocation();
  const isVideo = pathname === "/";

  let HeroImage;
  switch (pathname) {
    case "/":
      HeroImage = null;
      break;
    case "/home-one":
      HeroImage = <HomeHeroImage />;
      break;
    case "/home-two":
      HeroImage = <HomeHeroImage />;
      break;
    case "/home-three":
      HeroImage = <HomeHeroImage />;
      break;
    default:
      HeroImage = <HomeHeroImage />;
  }

  return (
    <>
      <section
        className={`${styles.homeHeroSection} ${isVideo ? styles.homeVideo : ""}`}
      >
        {HeroImage}
        <div className={styles.homeHeroShapesContainer}>
          <StatCards items={statCardsContent} />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
