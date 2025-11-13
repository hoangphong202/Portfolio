import React, { useState } from "react";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "./DevModal.module.css";

const DevModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <MdClose size={24} />
        </button>

        <div className={styles.imageSlider}>
          <button className={styles.arrow} onClick={prevImage}>
            <MdChevronLeft size={28} />
          </button>
          <img src={project.images[currentImage]} alt={`${project.title}-${currentImage}`} className={styles.sliderImage} />
          <button className={styles.arrow} onClick={nextImage}>
            <MdChevronRight size={28} />
          </button>
        </div>

        <h2>{project.title}</h2>
        <p>{project.desc}</p>

        <div className={styles.tagRow}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {/* {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              🔗 Live Demo
            </a>
          )} */}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevModal;
