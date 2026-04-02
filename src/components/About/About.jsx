import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import { Mail, Phone, MapPin } from "lucide-react";

function About() {
  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>ABOUT ME</h2>

      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.profile_card}>
          <div className={styles.image_container}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
          </div>

          <div className={styles.profile_info}>
            <h3 className={styles.name}>HOANG TRUNG PHONG</h3>
            <p className={styles.job_title}>Full-stack Developer</p>
          </div>

          <div className={styles.contact_list}>
            <div className={styles.contact_item}>
              <Mail size={16} color="#00ffcc" />
              <span>hoangtrungphongit202@gmail.com</span>
            </div>
            <div className={styles.contact_item}>
              <Phone size={16} color="#00ffcc" />
              <span>0356344088</span>
            </div>
            <div className={styles.contact_item}>
              <MapPin size={16} color="#00ffcc" />
              <span>TP. Hồ Chí Minh, VN</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.content_right}>
          <div className={styles.bio_container}>
            <div className={styles.bio_text}>
              <p>
                I am a <span className={styles.highlight}>Full-stack Developer</span> specializing in web development, capable of working on both <span className={styles.highlight}>Front-end</span>{" "}
                and <span className={styles.highlight}>Back-end</span>.
              </p>

              <p>
                I have experience with <span className={styles.highlight}>ReactJS</span>, <span className={styles.highlight}>Java (Spring Boot)</span>, building{" "}
                <span className={styles.highlight}>RESTful APIs</span> and working with <span className={styles.highlight}>MySQL</span>, <span className={styles.highlight}>SQL Server</span>.
              </p>

              <p>My IT background provides strong logical thinking and the ability to build scalable systems.</p>

              <p>
                Currently, I hold a <span className={styles.highlight}>JLPT N3</span> and aim to work in a Japanese professional environment.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className={styles.skills_container}>
            <div className={styles.skill_box}>
              <h4 className={styles.skill_title}>Hard Skills</h4>
              <div className={styles.tags}>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>CSS</span>
                <span className={styles.tag}>JavaScript</span>
                <span className={styles.tag}>ReactJS</span>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>Spring Boot</span>
                <span className={styles.tag}>REST API</span>
                <span className={styles.tag}>MySQL</span>
                <span className={styles.tag}>SQL Server</span>
                <span className={styles.tag}>Git</span>
              </div>
            </div>

            <div className={styles.skill_box}>
              <h4 className={styles.skill_title}>Soft Skills</h4>
              <div className={styles.tags}>
                <span className={styles.tag}>Teamwork</span>
                <span className={styles.tag}>Communication</span>
                <span className={styles.tag}>Problem Solving</span>
                <span className={styles.tag}>Time Management</span>
                <span className={styles.tag}>Self-learning</span>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className={styles.btn_wrapper}>
            <button className={styles.cv_button} onClick={() => window.open("https://drive.google.com/file/d/16hW8BTKjn0Ouxu9wQieI-6Tch5sYQsgZ/view", "_blank")}>
              VIEW CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
