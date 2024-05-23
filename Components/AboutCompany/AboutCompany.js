import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Col, Row, Timeline, Image } from "antd";
import styles from "./AboutCompany.module.scss";
import { companyName } from "../../utils/constant";

const MissionContent = () => {
  return (
    <div className={styles.content_sec}>
      <h1>Our Mission</h1>
      <p>
        {companyName} endeavors to present the best development idea worldwide,
        so our mission is to guarantee the best relationship with our customers,
        both during and after their objectives have been met. We help our
        customers by introducing a professional front to the marketplace - and
        this is why we offer designs, development, and significantly more that
        will meet your financial plan!
      </p>
    </div>
  );
};

const VsionContent = () => {
  return (
    <div className={styles.content_sec}>
      <h1>Our Vision</h1>
      <p>
        Our vision is To align with your business values and goals! To give an
        effective procedure, we reliably work on our advancement cycle to meet
        the needs of our clients. We proceed to make you succeed further with
        our perfect strategies. {companyName} always wanted to achieve our
        clients desired results.
      </p>
    </div>
  );
};

const HistoryContent = () => {
  return (
    <div className={styles.content_sec}>
      <h1>Our History</h1>
      <p>
        {companyName} was conceived in the 2015 with a group of 3 and today
        expanded into full-cycle of dedicated developers with over five years of
        experience.To date, over 50 grants added to the repertoire and earned
        customers trust through assisting in the best possible way.
      </p>
    </div>
  );
};

// const MissionImage = () => {
//   return (
//     <div className={styles.image_sec}>
//       <Image preview={false} alt="Or Mission" src="/Assets/mission.png" />
//     </div>
//   );
// };

// const VisionImage = () => {
//   return (
//     <div className={styles.image_sec}>
//       <Image preview={false} alt="Or Vision" src="/Assets/visionary.png" />
//     </div>
//   );
// };

// const HistoryImage = () => {
//   return (
//     <div className={styles.image_sec}>
//       <Image preview={false} alt="Or History" src="/Assets/history.png" />
//     </div>
//   );
// };

const AboutCompany = () => {
  return (
    <div
      className={`${styles.about_company_container} about_company_container`}
    >
      <div className={styles.about_company_content}>
        <Row className={styles.row_container}>
          <Col sm={24} md={16}>
            <div className={styles.timeline_section}>
              {/* <Timeline mode={"left"}> */}
              {/* <Timeline.Item dot={<MissionImage />}> */}
              <MissionContent />
              {/* </Timeline.Item> */}
              {/* <Timeline.Item dot={<VisionImage />}> */}
              <VsionContent />
              {/* </Timeline.Item> */}
              {/* <Timeline.Item dot={<HistoryImage />}> */}
              <HistoryContent />
              {/* </Timeline.Item> */}
              {/* </Timeline> */}
            </div>
          </Col>
          <Col sm={24} md={8}>
            <div className={styles.image_container}>
              <img src={"/Assets/3d_bulb.png"} alt={"bulb icon"} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutCompany;
