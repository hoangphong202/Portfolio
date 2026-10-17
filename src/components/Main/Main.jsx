
import React from "react";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.css";
import Btn from "../Button/Btn";
import Loader from "./Loader.jsx";

function Main() {
  const { t } = useTranslation();

  return (
    <div id="home" className={styles.main_container}>
      <div className={styles.container}>
        <p className={styles.hello}>
          {t("main.hello")} <span>{t("main.name")}</span>
        </p>

        <h2 className={styles.title}>
          {t("main.imA")}{" "}
          <span>
            <ReactTyped
              strings={t("main.roles", { returnObjects: true })}
              typeSpeed={100}
              backSpeed={60}
              backDelay={1500}
              loop
            />
          </span>
        </h2>

        <p className={styles.description}>
          {t("main.description")}
        </p>

        <div className={styles.btn_container}>
          <Btn
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1MvzXyczw6YygRxkQK15iAkUN4WIU8FTX/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            {t("main.viewCV")}
          </Btn>{" "}

          <a
            href="https://github.com/hoangphong202"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github_icon}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <Loader />
    </div>
  );
}

export default Main;
