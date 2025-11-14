import React, { useState } from "react";
import styles from "./CvButton.module.css";

// 1️⃣ Import các file PDF CV
import cvEN from "../../assets/cv/HoangTrungPhong_EN.pdf";
import cvJP from "../../assets/cv/HoangTrungPhong_JP.pdf";
import cvVN from "../../assets/cv/HoangTrungPhong_VN.pdf";

// 2️⃣ Định nghĩa các option cho dropdown
const cvOptions = [
  { label: "English", file: cvEN },
  { label: "Japanese", file: cvJP },
  { label: "Vietnamese", file: cvVN },
];

function CvButton() {
  const [selected, setSelected] = useState(cvEN); // default English

  return (
    <div className={styles.cv_wrapper}>
      {/* Dropdown chọn CV */}
      <select onChange={(e) => setSelected(e.target.value)} value={selected} className={styles.cv_select}>
        {cvOptions.map((cv) => (
          <option key={cv.label} value={cv.file}>
            {cv.label}
          </option>
        ))}
      </select>

      {/* PDF hiển thị trực tiếp */}
      <div className={styles.pdf_container}>
        <iframe src={selected} width="100%" height="600px" title="CV Viewer" style={{ border: "none", borderRadius: "10px" }}></iframe>
      </div>
    </div>
  );
}

export default CvButton;
