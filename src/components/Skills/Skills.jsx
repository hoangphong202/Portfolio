
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaEllipsisH,
  FaPaintBrush,
  FaPalette,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";

import styles from "./Skills.module.css";
import TechnologyModal from "./TechnologyModal";
import OrtherModal from "./OrtherModal";
import DrawModal from "./DrawModal";
import DesignModal from "./DesignModal";
import UIDesignModal from "./UIDesignModal";
import GameModal from "./GameModal";

function Skills() {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: "web",
      icon: <FaCode />,
      title: "Web Developer",
      description: "Build web applications using ReactJS, Node.js, and Java. Focus on clean code and responsive interfaces.",
    },
    {
      id: "game",
      icon: <IoGameControllerSharp />,
      title: "Unity & 2D Game Art",
      description: "Create basic 2D game assets and implement simple gameplay in Unity. Interested in game development.",
    },
    {
      id: "uiux",
      icon: <MdDesignServices />,
      title: "UI/UX Design",
      description: "Design clean and responsive interfaces with a focus on usability and visual consistency.",
    },
    {
      id: "graphic",
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "Design posters and visual content with clear layout and strong visual appeal.",
    },
    {
      id: "drawing",
      icon: <FaPalette />,
      title: "Drawing / Illustration",
      description: "Draw anime-style characters and backgrounds, focusing on color and mood.",
    },
    {
      id: "others",
      icon: <FaEllipsisH />,
      title: "Others",
      description: "Teamwork, problem-solving, and adaptability. JLPT N3. Familiar with Figma, Photoshop, Illustrator, and Microsoft Office tools.",
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.skillsTitle}>
        {t("skills.title")}
      </h2>

      <p className={styles.subtitle}>
        {t("skills.subtitle")}
      </p>

      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.id}>
            <div className={styles.skillIcon}>
              {skill.icon}
            </div>

            <h3 className={styles.skillName}>
              {t(`skills.items.${skill.id}.title`)}
            </h3>

            <p className={styles.skillDescription}>
              {t(`skills.items.${skill.id}.description`)}
            </p>

            <button
              className={styles.viewBtn}
              onClick={() => setSelectedSkill(skill.id)}
            >
              {t("skills.view")}
            </button>
          </div>
        ))}
      </div>

      {selectedSkill === "web" && (
        <TechnologyModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}

      {selectedSkill === "game" && (
        <GameModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}

      {selectedSkill === "uiux" && (
        <UIDesignModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}

      {selectedSkill === "graphic" && (
        <DesignModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}

      {selectedSkill === "drawing" && (
        <DrawModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}

      {selectedSkill === "others" && (
        <OrtherModal
          isOpen
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
}

export default Skills;
