import styles from "./Experience.module.css";

const experiences = [
  {
    year: "2025 — PRESENT",
    role: "DPP DESIGNER",
    company: "Fullbridge",
    logo: "/images/company/fullbridge.png",

    description:
      "Working on DPP production, artwork preparation and prepress tasks for production-ready files.",

    responsibilities: [
      "Prepare and adjust design files for production",
      "Work with artwork and production requirements",
      "Check layout, typography and technical details",
      "Prepare files for final output",
      "Handle design adjustments and production revisions",
    ],

    skills: [
      "DPP Production",
      "Prepress",
      "Photoshop",
      "Illustrator",
      "InDesign",
    ],

    images: [
      "/images/fullbridge/work-1.jpg",
      "/images/fullbridge/work-2.jpg",
    ],
  },

  {
    year: "08/2024 — 10/2024",
    role: "INTERN — FRONT-END DEVELOPER",
    company: "0hStem Company",
    logo: "/images/company/0hstem.png",

    project: "Competition Management Website",

    description:
      "Worked as a Front-end Developer, focusing on interface development, UI optimization and bug fixing.",

    responsibilities: [
      "Develop website interfaces from project requirements",
      "Build and adjust front-end components",
      "Optimize UI layout and user experience",
      "Identify and fix UI-related bugs",
      "Work with the team during development",
    ],

    skills: [
      "ReactJS",
      "Front-end",
      "UI Development",
      "UI Optimization",
      "Bug Fixing",
    ],
  },

  {
    year: "04/2024 — 07/2024",
    role: "INTERN — FRONT-END / BACK-END",
    company: "Urban VietNam Co.,Ltd",
    logo: "/images/company/urban-vietnam.png",

    project: "Personnel Management Website",

    description:
      "Worked mainly on Front-end development while supporting Back-end tasks for a personnel management system.",

    responsibilities: [
      "Develop employee management interfaces",
      "Build CRUD functions for employee data",
      "Integrate RESTful APIs",
      "Implement image upload functionality",
      "Support Back-end development",
      "Work collaboratively in a team of 6",
    ],

    skills: [
      "ReactJS",
      "RESTful API",
      "CRUD",
      "Image Upload",
      "Front-end",
      "Back-end",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className={styles.experience_section}
      id="experience"
    >
      {/* ================= HEADER ================= */}

      <div className={styles.experience_header}>

        <div>
          <h2>WORK EXPERIENCE</h2>
        </div>
      </div>

      {/* ================= TIMELINE ================= */}

      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <article
            className={styles.experience_item}
            key={`${item.company}-${item.year}`}
          >
            {/* ================= LEFT ================= */}

            <div className={styles.timeline_left}>
              <span className={styles.dot}></span>

              {index !== experiences.length - 1 && (
                <span className={styles.line}></span>
              )}

              <span className={styles.year}>
                {item.year}
              </span>
            </div>

            {/* ================= CONTENT ================= */}

            <div className={styles.experience_content}>
              {/* COMPANY */}

              <div className={styles.company_info}>
                <div className={styles.logo_box}>
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className={styles.company_logo}
                    />
                  ) : (
                    <span className={styles.logo_fallback}>
                      {item.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <p className={styles.role}>
                    {item.role}
                  </p>

                  <h3>{item.company}</h3>
                </div>
              </div>

              {/* PROJECT */}

              {item.project && (
                <div className={styles.project_block}>
                  <span className={styles.block_label}>
                    PROJECT
                  </span>

                  <h4>{item.project}</h4>
                </div>
              )}

              {/* DESCRIPTION */}

              <p className={styles.description}>
                {item.description}
              </p>

              {/* WHAT I DID */}

              <div className={styles.responsibilities}>
                <span className={styles.block_label}>
                  WHAT I DID
                </span>

                <ul>
                  {item.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        <span className={styles.bullet}>
                          +
                        </span>

                        <span>
                          {responsibility}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* SKILLS */}

              <div className={styles.skills_block}>
                <span className={styles.block_label}>
                  SKILLS
                </span>

                <div className={styles.tags}>
                  {item.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* WORK IMAGES */}

              {item.images &&
                item.images.length > 0 && (
                  <div className={styles.work_block}>
                    <span className={styles.block_label}>
                      SELECTED WORK
                    </span>

                    <div className={styles.work_images}>
                      {item.images.map(
                        (image, imageIndex) => (
                          <div
                            className={
                              styles.image_wrapper
                            }
                            key={image}
                          >
                            <img
                              src={image}
                              alt={`${item.company} work ${
                                imageIndex + 1
                              }`}
                            />

                            <span>
                              0{imageIndex + 1}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}