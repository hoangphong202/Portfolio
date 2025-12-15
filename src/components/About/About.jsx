import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import Btn from "../Button/Btn";
About.propTypes = {};

function About(props) {
  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.container}>
        <div className={styles.image_wrapper}>
          <img src={avatar} alt="About" className={styles.image} />
        </div>

        <div className={styles.text_content}>
          <h3 className={styles.hello}>
            Hello, I’m <span>Hoang Trung Phong</span>
          </h3>

          <p>I am a programmer with a passion for web development, capable of working in both Front-end and Back-end.</p>
          <p>I have experience using technologies such as ReactJS, Java and proficient in design tools to optimize user interfaces, providing intuitive and friendly experiences.</p>
          <p>I always strive to learn, improve professional skills as well as creative thinking to create effective, stable and easy-to-use products.</p>
          <p>I currently have a Japanese language proficiency level equivalent to N3, where I can continue to develop myself, learn new technologies and contribute value to the business.</p>

          <div className={styles.btn_group}>
            <Btn onClick={() => window.open("https://drive.google.com/file/d/1YhkjdcALascqjf-Z742EU5orzYm1JSjO/view?usp=drive_link", "_blank")}>View CV</Btn>{" "}
            <a href="https://github.com/hoangphong202" target="_blank" rel="noopener noreferrer" className={styles.github_icon}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
