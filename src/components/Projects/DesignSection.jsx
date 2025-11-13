import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./DesignSection.module.css";

const illustrations = [
  { src: "design/poster/1.png", category: "Poster" },
  { src: "design/poster/2.png", category: "Poster" },
  { src: "design/poster/3.png", category: "Poster" },
  { src: "design/poster/4.png", category: "Poster" },
  { src: "design/poster/5.png", category: "Poster" },
  { src: "design/poster/6.png", category: "Poster" },

  { src: "design/vocabulary/1.png", category: "Vocabulary" },
  { src: "design/vocabulary/2.png", category: "Vocabulary" },
  { src: "design/vocabulary/3.png", category: "Vocabulary" },
  { src: "design/vocabulary/4.png", category: "Vocabulary" },
  { src: "design/vocabulary/5.png", category: "Vocabulary" },
  { src: "design/vocabulary/6.png", category: "Vocabulary" },
  { src: "design/vocabulary/7.png", category: "Vocabulary" },
  { src: "design/vocabulary/8.png", category: "Vocabulary" },
];

const categories = ["All", "Poster", "Vocabulary"];

const DesignSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [allRandom, setAllRandom] = useState([]);

  const visibleCount = 4;

  React.useEffect(() => {
    setStartIndex(0); // reset slider
    if (selectedCategory === "All") {
      setAllRandom([...illustrations].sort(() => Math.random() - 0.5));
    }
  }, [selectedCategory]);

  const filtered = selectedCategory === "All" ? allRandom : illustrations.filter((i) => i.category === selectedCategory);

  const next = () => {
    if (startIndex + visibleCount < filtered.length) setStartIndex(startIndex + 1);
  };
  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  React.useEffect(() => setStartIndex(0), [selectedCategory]);

  // Mở lightbox
  const openLightbox = (src) => setLightbox({ open: true, src });
  const closeLightbox = () => setLightbox({ open: false, src: "" });

  return (
    <div className={styles.wrapper}>
      {/* Bộ lọc thể loại */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button key={cat} className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prev} disabled={startIndex === 0}>
          <ChevronLeft size={26} />
        </button>

        <div className={styles.sliderContainer}>
          <div className={styles.slider} style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
            {filtered.map((item, i) => (
              <div className={styles.card} key={i}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.image}
                  onClick={() => openLightbox(item.src)} // click mở ảnh full
                />
                <p className={styles.title}>{item.title}</p>
                <span className={styles.tag}>{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowRight} onClick={next} disabled={startIndex + visibleCount >= filtered.length}>
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightbox.src} alt="Full view" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
};

export default DesignSection;
