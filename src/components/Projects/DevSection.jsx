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
      images: [
        "projects/weatherchill/2.png",
        "projects/weatherchill/1.png",
        "projects/weatherchill/6.png",
        "projects/weatherchill/3.png",
        "projects/weatherchill/4.png",
        "projects/weatherchill/5.png",
        "projects/weatherchill/7.png",
      ],
      // link: "https://your-demo-link.com",
      githubFE: "https://github.com/your-repo",
      githubBE: "https://github.com/your-repo",
    },
    {
      title: "Nihongo Learning",
      desc: "An interactive web app for learning Japanese, featuring vocabulary practice, grammar lessons, quizzes, and a clean, user-friendly interface.",
      tags: ["HTML", "CSS", "ReactJS", "Java"],
      images: ["projects/nihongo/1.jpg", "projects/nihongo/2.jpg", "projects/nihongo/3.jpg", "projects/nihongo/4.jpg", "projects/nihongo/5.jpg"],
      githubFE: "https://github.com/your-repo",
      githubBE: "https://github.com/your-repo",
    },
    {
      title: "Shop Anime",
      desc: "An online anime store offering figures, apparel, and collectibles with a fun and immersive shopping experience.",
      tags: ["HTML", "CSS", "ReactJS", "Java"],
      images: ["projects/shopanime/2.jpg", "projects/shopanime/1.jpg"],
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
