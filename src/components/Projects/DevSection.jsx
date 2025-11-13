import React, { useState } from "react";
import DevModal from "./DevModal";
import styles from "./DevSection.module.css";

const DevSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "WeatherChill",
      desc: "WeatherChill is a relaxing web app that blends music, visuals, and motion effects to create a chill and immersive experience.",
      tags: ["HTML", "CSS", "JS", "Java"],
      images: ["projects/2.png", "projects/3.png", "projects/1.png"],
      // link: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Shop Anime",
      desc: "An online anime store offering figures, apparel, and collectibles with a fun and immersive shopping experience.",
      tags: ["HTML", "CSS", "ReactJS", "Java"],
      images: ["projects/3.png", "/projects/3-2.png"],
      github: "https://github.com/your-repo",
    },
  ];

  return (
    <div className={styles.devContainer}>
      {projects.map((p, i) => (
        <div key={i} className={styles.card} onClick={() => setSelectedProject(p)}>
          <div className={styles.imageWrapper}>
            <img src={p.images[0]} alt={p.title} className={styles.image} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tagRow}>
              {p.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* modal hiển thị chi tiết */}
      {selectedProject && <DevModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default DevSection;
