import { useLocation } from "react-router-dom";
import "../../styles/global.css";
import styles from "./Home.module.css";
import HomeHero from "../../components/home-hero/HomeHero";
import ExcerptLinkTemplate from "../../components/ui-elements/excerpt-link-template/ExcerptLinkTemplate";
import LatestNews from "../../components/latest-news/LatestNews";
import { homeLinks } from "../../data/homeLinks";
import SectionDivider from "../../components/ui-elements/section-divider/SectionDivider";
import HomeHeroVideo from "../../components/home-hero-video/HomeHeroVideo";
import RelativeLinkTemplate from "../../components/ui-elements/relative-link-template/RelativeLinkTemplate";

const Home = (): React.JSX.Element => {
  const { pathname } = useLocation();
  const isDefaultHome = pathname === "/";

  let ContentTemplate: React.JSX.Element;
  switch (pathname) {
    case "/":
      ContentTemplate = <RelativeLinkTemplate links={homeLinks} />;
      break;
    case "/home-one":
      ContentTemplate = <RelativeLinkTemplate links={homeLinks} />;
      break;
    case "/home-two":
      ContentTemplate = <ExcerptLinkTemplate links={homeLinks} />;
      break;
    case "/home-three":
      ContentTemplate = <RelativeLinkTemplate links={homeLinks} />;
      break;
    default:
      ContentTemplate = <ExcerptLinkTemplate links={homeLinks} />;
  }

  return (
    <>
      {isDefaultHome && <HomeHeroVideo />}
      <section className={styles.homeContainer}>
        <HomeHero />
        {ContentTemplate}
        <LatestNews />
        <SectionDivider />
      </section>
    </>
  );
};

export default Home;
