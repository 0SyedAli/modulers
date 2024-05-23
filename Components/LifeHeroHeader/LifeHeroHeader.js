import React from "react";
import { companyName } from "../../utils/constant";
import styles from "./LifeHeroHeader.module.scss";
const LifeHeroHeader = () => {
  return (
    <div className={styles.life_heroheader_container}>
      <div className={styles.life_heroheader_content}>
        <h1>Life @ {companyName}</h1>
        <p>
        {companyName} is a place where the magic happens with a not-so-secret
          recipe; giving each other space, ensuring work-life balance, and
          getting into fits of laughter whenever there is a chance to do the
          job!
        </p>
      </div>
    </div>
  );
};

export default LifeHeroHeader;
