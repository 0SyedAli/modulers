import React from "react";
import styles from "./WhyBrisktech.module.scss";
import { Row, Col } from "antd";
import { companyName } from "../../utils/constant";
const WhyBrisktech = () => {
  return (
    <div className={styles.whybrisktech_container}>
      <div className={styles.whybrisktech_content_container}>
        <Row>
          <Col sm={24} md={24} lg={12}>
            <div className={styles.image_wrapper}>
              <img src="./Assets/phone.webp" alt="" />
            </div>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <div className={styles.content_wrapper}>
              <h1>
                <span>Why</span>
              </h1>
              <h1>{companyName}</h1>
              <p>
              {companyName} has always been vocal about following an unorthodox
                yet much needed approach to a healthy workplace
              </p>
              <p>
                Culture has been given utmost importance at {companyName} because we
                believe a safe & healthy work environment can ensure commendable
                efficiency in deliverables. Our vision towards our team and
                their needs has helped us in growing exceptionally.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyBrisktech;
