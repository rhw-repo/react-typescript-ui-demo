import styles from "./Footer.module.css";
import footerContent from "../../data/footerContent";
import type React from "react";
import AbsoluteLinkTemplate from "../ui-elements/absolute-link-template/AbsoluteLinkTemplate";
import { iconLinks } from "../../data/absoluteLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MockForm from "../mock-form/MockForm";
import AttributionListDialog from "../attribution-list-dialog/AttributionListDialog";

interface FooterProps {
  contactRef: React.Ref<HTMLElement>;
  onContactClick: () => void;
}

const Footer = ({ contactRef }: FooterProps): React.JSX.Element => {
  const {
    titleOne,
    companyNumberOne,
    addressOneLineOne,
    addressOneLineTwo,
    addressOneLineThree,
    telephoneOne,
    telephoneTwo,
    titleTwo,
    addressTwoLineOne,
    addressTwoLineTwo,
    addressTwoLineThree,
    companyNumberTwo,
    additionalInfoTwo,
    subtext,
  } = footerContent;

  const footerAbsoluteLinks = iconLinks.filter(
    (link) => link.section === "footer"
  );

  return (
    <>
      <footer className={styles.footer}>
        <section>
          <div className={styles.footerLinksSection}>
            <ul>
              {footerAbsoluteLinks.map((link) => (
                <li key={link.id} className={styles.footerLinksSectionListItem}>
                  <AbsoluteLinkTemplate url={link.url} className={styles.listItemLink}>
                    <FontAwesomeIcon
                      icon={link.icon}
                      className={styles.linkIcon}
                    />
                    <span className="sr-only">{link.name}</span>
                  </AbsoluteLinkTemplate>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div className={styles.footerCompaniesContainer}>
            <div className={styles.footerCompanyOne}>
              <h2 className={styles.footerTitle}>{titleOne}</h2>
              <p className={styles.footerText}>{addressOneLineOne}</p>
              <p className={styles.footerText}>{addressOneLineTwo}</p>
              <p className={styles.footerText}>{addressOneLineThree}</p>
              <p className={styles.footerText}>{telephoneOne}</p>
              <p className={styles.footerCompanyNumber}>{companyNumberOne}</p>
            </div>
            <div className={styles.footerCompanyTwo}>
              <h2 className={styles.footerTitle}>{titleTwo}</h2>
              <p className={styles.footerText}>{addressTwoLineOne}</p>
              <p className={styles.footerText}>{addressTwoLineTwo}</p>
              <p className={styles.footerText}>{addressTwoLineThree}</p>
              <p className={styles.footerText}>{telephoneTwo}</p>
              <p className={styles.footerCompanyNumber}>{companyNumberTwo}</p>
              <p className={styles.footerAdditionalInfo}>{additionalInfoTwo}</p>
            </div>
          </div>
          <p className={styles.footerAdditionalInfoWiderScreens}>
            {additionalInfoTwo}
          </p>
          <p className={styles.footerSubtext}>{subtext}</p>
        </section>
        <section ref={contactRef}>
          <MockForm />
        </section>
        <AttributionListDialog />
      </footer>
    </>
  );
};

export default Footer;
