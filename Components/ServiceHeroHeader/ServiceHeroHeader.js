import React from "react";
import styles from "./ServiceHeroHeader.module.scss";
const ServiceHeroHeader = () => {
  return (
    <div className={styles.serivce_heroheader_container}>
      <div className={styles.service_heroheader_content}>
        <div className={styles.service_content_container}>
          <h1>Services</h1>
          <p>
            We are here to provide discrete solutions for your business with our
            Experienced Resource Augmentation, Dedicated Software Development
            and Exceptional Blockchain Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroHeader;
