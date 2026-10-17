
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Code, Palette, Image } from "lucide-react";

import DevSection from "./DevSection";
import IllustrationSection from "./IllustrationSection";
import DesignSection from "./DesignSection";

import styles from "./ProjectsPage.module.css";

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("dev");
  const { t } = useTranslation();

  return (
    <div className={styles.projectPage} id="projects">
      <div className={styles.header}>
        <h1 className={styles.title}>
          {t("projectsPage.title")}
        </h1>

        <p className={styles.subtitle}>
          {t("projectsPage.subtitle")}
        </p>

        <div className={styles.tabContainer}>
          <button
            onClick={() => setActiveTab("dev")}
            className={`${styles.tab} ${
              activeTab === "dev" ? styles.active : ""
            }`}
          >
            <Code size={20} />
            <span>{t("projectsPage.tabs.dev")}</span>
          </button>

          <button
            onClick={() => setActiveTab("design")}
            className={`${styles.tab} ${
              activeTab === "design" ? styles.active : ""
            }`}
          >
            <Palette size={20} />
            <span>{t("projectsPage.tabs.design")}</span>
          </button>

          <button
            onClick={() => setActiveTab("illustration")}
            className={`${styles.tab} ${
              activeTab === "illustration" ? styles.active : ""
            }`}
          >
            <Image size={20} />
            <span>{t("projectsPage.tabs.illustration")}</span>
          </button>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        {activeTab === "dev" && <DevSection />}
        {activeTab === "design" && <DesignSection />}
        {activeTab === "illustration" && <IllustrationSection />}
      </div>
    </div>
  );
};

export default ProjectPage;
