import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <div className={styles.hero_header_container}>
      <Row gutter={10}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className={styles.content_container}>
            <div className={styles.title_container}>
              <img src={"/Assets/white_logo.png"} alt={"logo"} />
              <div>
                <h1>Modulers</h1>
              </div>
            </div>
            <div className={styles.description}>
              <p>
                We deal with your development through our assistance. We provide
                life-changing solutions with our business masterminds. Our elite
                programming techniques will boost up your advancement and to
                design your thoughts, we primely support you.
              </p>
              <p>
                We deal with your development through our assistance. We provide
                life-changing solutions with our business masterminds. Our elite
                programming techniques will boost up your advancement and to
                design your thoughts, we primely support you.
              </p>
              <Button size="large" type="dashed">
                Contact Us
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className={styles.image_container}>
            <img src={"/Assets/stream_logo.png"} alt={"hero header image"} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroHeader;
