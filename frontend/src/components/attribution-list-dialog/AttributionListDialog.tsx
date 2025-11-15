import { useRef, useState } from "react";
import AttributionList from "../attribution-list/AttributionList";
import styles from "./AttributionListDialog.module.css";
import AbsoluteLinkTemplate from "../ui-elements/absolute-link-template/AbsoluteLinkTemplate.tsx";
import {
  noIconLinks,
  type AbsoluteLinkTemplateNoIcon,
} from "../../data/absoluteLinks.ts";

const AttributionListDialog: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showCopyrightLink, setShowCopyrightLink] = useState(false);

  const handleShow = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const handleHide = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const targetLink: AbsoluteLinkTemplateNoIcon = noIconLinks.find(
    (link) => link.id === "copyright-1"
  ) as AbsoluteLinkTemplateNoIcon;

  return (
    <>
      <div className={styles.legalInfo}>
        {!showCopyrightLink ? (
          <button
            type="button"
            className="interactive button--primary"
            onClick={() => setShowCopyrightLink(true)}
          >
            {targetLink.name}
          </button>
        ) : (
          <AbsoluteLinkTemplate
            url={targetLink.url}
            className="interactive button--primary"
          >
            {targetLink.name}
          </AbsoluteLinkTemplate>
        )}

        {!isOpen && (
          <div className={styles.buttonWrapper}>
            <button
              type="button"
              className="interactive button--primary"
              onClick={handleShow}
            >
              Images & Video: Credits
            </button>
          </div>
        )}
      </div>

      <dialog ref={dialogRef} className={styles.attributionDialog}>
        <div className={styles.attributionLinksWrapper}>
          <h2>Icons, Images & Videos By</h2>
          <div className={styles.attributionList}>
            <AttributionList />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className="interactive button--primary"
            onClick={handleHide}
          >
            Hide Credits
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AttributionListDialog;
