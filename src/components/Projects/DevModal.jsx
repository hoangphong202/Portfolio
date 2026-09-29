import React, { useState } from "react";
import {
  MdClose,
  MdChevronLeft,
  MdChevronRight,
  MdOpenInNew,
} from "react-icons/md";
import { FaReact, FaServer, FaGithub } from "react-icons/fa";
import styles from "./DevModal.module.css";

const DevModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close modal"
        >
          <MdClose size={24} />
        </button>

        {/* =========================
            LEFT - IMAGE
        ========================= */}

        <div className={styles.visual}>

          <div className={styles.imageBox}>

            <img
              src={project.images[currentImage]}
              alt={`${project.title} ${currentImage + 1}`}
              className={styles.mainImage}
            />

            {project.images.length > 1 && (
              <>
                <button
                  className={`${styles.arrow} ${styles.prev}`}
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <MdChevronLeft />
                </button>

                <button
                  className={`${styles.arrow} ${styles.next}`}
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <MdChevronRight />
                </button>
              </>
            )}

            <div className={styles.counter}>
              <span>
                {String(currentImage + 1).padStart(2, "0")}
              </span>

              <i>/</i>

              {String(project.images.length).padStart(2, "0")}
            </div>

          </div>

          {/* THUMBNAILS */}

          {project.images.length > 1 && (
            <div className={styles.thumbnails}>
              {project.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${
                    currentImage === index
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentImage(index)
                  }
                >
                  <img
                    src={image}
                    alt=""
                  />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* =========================
            RIGHT - INFORMATION
        ========================= */}

        <div className={styles.info}>

          {/* META */}

          <div className={styles.meta}>

            <span className={styles.number}>
              PROJECT
            </span>

            <span className={styles.line}></span>

            <span>
              {project.title}
            </span>

          </div>


          {/* TITLE */}

          <h2 className={styles.title}>
            {project.title}
          </h2>


          {/* DESCRIPTION */}

          <p className={styles.description}>
            {project.desc}
          </p>


          {/* TECHNOLOGY */}

          <div className={styles.section}>

            <div className={styles.sectionTitle}>
              TECHNOLOGY
            </div>

            <div className={styles.tags}>
              {project.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                </span>
              ))}
            </div>

          </div>


          {/* LINKS */}

          <div className={styles.links}>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.live}
              >
                <MdOpenInNew />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubFE && (
              <a
                href={project.githubFE}
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                <FaReact />
                <span>Frontend</span>
              </a>
            )}

            {project.githubBE && (
              <a
                href={project.githubBE}
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                <FaServer />
                <span>Backend</span>
              </a>
            )}

          </div>


          {/* GITHUB LABEL */}

          {(project.githubFE ||
            project.githubBE) && (
            <div className={styles.githubLabel}>
              <FaGithub />
              Source code available on GitHub
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default DevModal;