import React from "react";
import { MdClose } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import styles from "./DesignModal.module.css";
import fm from "../../assets/logo/design/fm.png";
import { useTranslation } from "react-i18next";

function UIDesignModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />
          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaPaintBrush className={styles.techIcon} />
              <h2>{t("skills.items.uiux.title")}</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>{t("skills.items.uiux.tools")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={fm} alt="Live 2D" loading="lazy" className={styles.imgLogo} />
              <p>Figma</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.techSection}>
          <h3>Animation Tools</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={fm} alt="Live 2D" loading="lazy" className={styles.imgLogo} />
              <p>Figma</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default UIDesignModal;