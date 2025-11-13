import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./IllustrationSection.module.css";

const illustrations = [
  { src: "illustrations/character/6.png", category: "Character" },
  { src: "illustrations/character/8.png", category: "Character" },
  { src: "illustrations/character/3.png", category: "Character" },
  { src: "illustrations/character/2.png", category: "Character" },
  { src: "illustrations/character/1.png", category: "Character" },
  { src: "illustrations/character/4.png", category: "Character" },
  { src: "illustrations/character/5.png", category: "Character" },
  { src: "illustrations/character/7.png", category: "Character" },

  { src: "illustrations/background/5.png", category: "Background" },
  { src: "illustrations/background/6.png", category: "Background" },
  { src: "illustrations/background/1.png", category: "Background" },
  { src: "illustrations/background/2.png", category: "Background" },
  { src: "illustrations/background/3.png", category: "Background" },
  { src: "illustrations/background/4.png", category: "Background" },
  { src: "illustrations/background/7.png", category: "Background" },

  { src: "illustrations/line/4.png", category: "Sketch" },
  { src: "illustrations/line/5.png", category: "Sketch" },
  { src: "/illustrations/line/1.png", category: "Sketch" },
  { src: "/illustrations/line/2.png", category: "Sketch" },
  { src: "illustrations/line/3.png", category: "Sketch" },
  { src: "illustrations/line/6.png", category: "Sketch" },
];

const categories = ["All", "Character", "Background", "Sketch"];

const IllustrationSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [allRandom, setAllRandom] = useState([]);

  const visibleCount = 3;

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

export default IllustrationSection;
