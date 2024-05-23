import React from "react";
import { companyName } from "../../utils/constant";
import styles from "./ContactHeroHeader.module.scss";

const ContactHeroHeader = () => {
  return (
    <div className={styles.contact_heroheader_container}>
      <div className={styles.contact_heroheader_content}>
        <h1>Contact Us</h1>
        <p>
          Contact us at {companyName} Software Company for all your tech needs. Our
          team is ready to assist you with any inquiries or support. Reach us
          via email, phone, or online form.
        </p>
      </div>
    </div>
  );
};

export default ContactHeroHeader;
