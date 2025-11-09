import React from "react";
import { MdClose } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import styles from "./DesignModal.module.css";
import csp from "../../assets/logo/draw/csp.png";
import pts from "../../assets/logo/draw/pts.png";
import pa from "../../assets/logo/design/Pa.png";
import fm from "../../assets/logo/design/fm.png";

function DesignModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />

          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaPaintBrush className={styles.techIcon} />
              <h2>Graphic Design</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>Design Apps</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={fm} alt="Live 2D" loading="lazy" className={styles.imgLogo} />
              <p>Figma</p>
            </div>
            <div>
              <img src={csp} alt="Clip Studio Paint" loading="lazy" className={styles.imgLogo} />
              <p>Clip Studio Paint</p>
            </div>
            <div>
              <img src={pts} alt="Photoshop" loading="lazy" className={styles.imgLogo} />
              <p>Photoshop</p>
            </div>
            <div>
              <img src={pa} alt="picsart" loading="lazy" className={styles.imgLogo} />
              <p>Picsart</p>
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

export default DesignModal;
