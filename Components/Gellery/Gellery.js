import { Row, Col } from "antd";
import React from "react";
import { companyName } from "../../utils/constant";
import styles from "./Gellery.module.scss";
const Gellery = () => {
  return (
    <div className={styles.gellery_container}>
      <h3>
        Work and Fun at {companyName} goes hand in hand. That’s how our unique way
        of working helps us in achieving our targets.
      </h3>
      <div className={styles.gellery_content_container}>
        <Row>
          <Col sm={24} md={24} lg={24} xl={12}>
            <div className={styles.left_images}>
              <img src="./Assets/layer.webp" alt="" />
            </div>
          </Col>
          <Col sm={24} md={24} lg={24} xl={12}>
            <Row>
              <div className={styles.right_images}>
                <Col sm={24} md={24} lg={24}>
                  <img
                    src="./Assets/layer2.webp"
                    className={styles.image_top}
                    alt=""
                  />
                </Col>
                <Col sm={24} md={24} lg={24}>
                  <div className={styles.wrapper}>
                    {" "}
                    <img
                      src="./Assets/layer3.webp"
                      className={styles.image_bottom}
                      alt=""
                    />
                    <img
                      src="./Assets/layer4.webp"
                      alt=""
                      className={styles.image_bottom}
                    />
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Gellery;
