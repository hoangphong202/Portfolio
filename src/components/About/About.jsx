
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import { Mail, Phone, MapPin } from "lucide-react";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>{t("about.title")}</h2>

      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.profile_card}>
          <div className={styles.image_container}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
          </div>

          <div className={styles.profile_info}>
            <h3 className={styles.name}>{t("about.name")}</h3>
            <p className={styles.job_title}>{t("about.jobTitle")}</p>
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
              <span>{t("about.location")}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.content_right}>
          <div className={styles.bio_container}>
            <div className={styles.bio_text}>
              <p>
                {t("about.bio1.start")}{" "}
                <span className={styles.highlight}>
                  {t("about.bio1.role")}
                </span>{" "}
                {t("about.bio1.middle")}{" "}
                <span className={styles.highlight}>
                  {t("about.bio1.frontend")}
                </span>{" "}
                {t("about.bio1.and")}{" "}
                <span className={styles.highlight}>
                  {t("about.bio1.backend")}
                </span>
                {t("about.bio1.end")}
              </p>

              <p>
                {t("about.bio2.start")}{" "}
                <span className={styles.highlight}>ReactJS</span>,{" "}
                <span className={styles.highlight}>Java (Spring Boot)</span>,{" "}
                {t("about.bio2.building")}{" "}
                <span className={styles.highlight}>RESTful APIs</span>{" "}
                {t("about.bio2.workingWith")}{" "}
                <span className={styles.highlight}>MySQL</span>{" "}
                {t("about.bio2.and")}{" "}
                <span className={styles.highlight}>SQL Server</span>.{" "}
                {t("about.bio2.end")}
              </p>

              <p>
                {t("about.bio3.start")}{" "}
                <span className={styles.highlight}>JLPT N3</span>{" "}
                {t("about.bio3.end")}
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className={styles.skills_container}>
            <div className={styles.skill_box}>
              <h4 className={styles.skill_title}>
                {t("about.hardSkills")}
              </h4>

              <div className={styles.tags}>
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Java",
                  "Spring Boot",
                  "REST API",
                  "MySQL",
                  "SQL Server",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skill_box}>
              <h4 className={styles.skill_title}>
                {t("about.softSkills")}
              </h4>

              <div className={styles.tags}>
                {[
                  "teamwork",
                  "communication",
                  "problemSolving",
                  "timeManagement",
                  "selfLearning",
                ].map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {t(`about.softSkillItems.${skill}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className={styles.btn_wrapper}>
            <button
              className={styles.cv_button}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1MvzXyczw6YygRxkQK15iAkUN4WIU8FTX/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              {t("about.viewCV")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
