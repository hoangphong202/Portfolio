import React, { useState } from "react";
import { FaCode, FaEllipsisH, FaPaintBrush, FaPalette } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import styles from "./Skills.module.css";
import TechnologyModal from "./TechnologyModal";
import OrtherModal from "./OrtherModal";
import DrawModal from "./DrawModal";
import DesignModal from "./DesignModal";
import UIDesignModal from "./UIDesignModal";
import { IoGameControllerSharp } from "react-icons/io5";

Skills.propTypes = {};

function Skills(props) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      icon: <FaCode />,
      title: "Web Developer",
      description: "Build web applications using ReactJS, Node.js, and Java. Focus on clean code and responsive interfaces.",
    },
    {
      icon: <IoGameControllerSharp />,
      title: "Unity & 2D Game Art",
      description: "Create basic 2D game assets and implement simple gameplay in Unity. Interested in game development.",
    },
    {
      icon: <MdDesignServices />,
      title: "UI/UX Design",
      description: "Design clean and responsive interfaces with a focus on usability and visual consistency.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "Design posters and visual content with clear layout and strong visual appeal.",
    },
    {
      icon: <FaPalette />,
      title: "Drawing / Illustration",
      description: "Draw anime-style characters and backgrounds, focusing on color and mood.",
    },
    {
      icon: <FaEllipsisH />,
      title: "Others",
      description: "Teamwork, problem-solving, and adaptability. JLPT N3. Familiar with Figma, Photoshop, Illustrator, and Microsoft Office tools.",
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.skillsTitle}>SKILLS</h2>
      <p className={styles.subtitle}>A showcase of my technical and creative abilities</p>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.title}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>
            <button className={styles.viewBtn} onClick={() => setSelectedSkill(skill.title)}>
              View
            </button>
          </div>
        ))}
      </div>
      {selectedSkill === "Web Developer" && <TechnologyModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "UI/UX Design" && <UIDesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "Graphic Design" && <DesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "Drawing / Illustration" && <DrawModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "Others" && <OrtherModal isOpen onClose={() => setSelectedSkill(null)} />}
    </section>
  );
}

export default Skills;
