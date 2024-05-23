import React from "react";
import { companyName } from "../../utils/constant";
import styles from "./AboutHeroHeader.module.scss";
const AboutHeroHeader = () => {
  return (
    <div className={styles.about_heroheader_container}>
      <div className={styles.about_heroheader_content}>
        <h1>About Us</h1>
        <p>
        {companyName} is a software development company that specializes in
          providing innovative solutions to businesses and organizations of all
          sizes. We offer a wide range of services, including software
          development, consulting, integration, maintenance, and support. Our
          team of experienced developers and designers are experts in their
          field, and are dedicated to delivering high-quality, efficient, and
          user-friendly solutions that help our customers achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroHeader;
