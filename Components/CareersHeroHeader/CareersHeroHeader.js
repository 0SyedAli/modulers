import React from "react";
import styles from "./CareersHeroHeader.module.scss";

const CareersHeroHeader = () => {
  return (
    <div className={styles.about_heroheader_container}>
      <div className={styles.about_heroheader_content}>
        <div className={styles.about_content_container}>
          <h1>Careers</h1>
          <p>
            Best companies are built when different teams have a shared
            understanding of each other's goals and values. Come join us and
            work with the latest technologies in a wide variety of projects,
            building amazing products for global audiences. Find a developer job
            today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroHeader;
