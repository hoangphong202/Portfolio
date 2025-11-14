import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./IllustrationSection.module.css";

// Character
import char1 from "../../assets/illustrations/character/1.png";
import char2 from "../../assets/illustrations/character/2.png";
import char3 from "../../assets/illustrations/character/3.png";
import char4 from "../../assets/illustrations/character/4.png";
import char5 from "../../assets/illustrations/character/5.png";
import char6 from "../../assets/illustrations/character/6.png";
import char7 from "../../assets/illustrations/character/7.png";
import char8 from "../../assets/illustrations/character/8.png";

// Background
import bg1 from "../../assets/illustrations/background/1.png";
import bg2 from "../../assets/illustrations/background/2.png";
import bg3 from "../../assets/illustrations/background/3.png";
import bg4 from "../../assets/illustrations/background/4.png";
import bg5 from "../../assets/illustrations/background/5.png";
import bg6 from "../../assets/illustrations/background/6.png";
import bg7 from "../../assets/illustrations/background/7.png";

// Sketch / Line
import line1 from "../../assets/illustrations/line/1.png";
import line2 from "../../assets/illustrations/line/2.png";
import line3 from "../../assets/illustrations/line/3.png";
import line4 from "../../assets/illustrations/line/4.png";
import line5 from "../../assets/illustrations/line/5.png";
import line6 from "../../assets/illustrations/line/6.png";

const illustrations = [
  // Character
  { src: char6, category: "Character" },
  { src: char8, category: "Character" },
  { src: char3, category: "Character" },
  { src: char1, category: "Character" },
  { src: char2, category: "Character" },
  { src: char4, category: "Character" },
  { src: char5, category: "Character" },
  { src: char7, category: "Character" },

  // Background
  { src: bg1, category: "Background" },
  { src: bg5, category: "Background" },
  { src: bg2, category: "Background" },
  { src: bg3, category: "Background" },
  { src: bg4, category: "Background" },
  { src: bg6, category: "Background" },
  { src: bg7, category: "Background" },

  // Sketch / Line
  { src: line1, category: "Sketch" },
  { src: line2, category: "Sketch" },
  { src: line3, category: "Sketch" },
  { src: line4, category: "Sketch" },
  { src: line5, category: "Sketch" },
  { src: line6, category: "Sketch" },
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
