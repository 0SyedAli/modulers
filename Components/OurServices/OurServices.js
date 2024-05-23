import { Col, Image, Row } from "antd";
import React from "react";
import { createWordFromString } from "../../utils/helpers";
import styles from "./OurServices.module.scss";

const OurServices = ({ data }) => {
  return (
    <div className={styles.our_services_container}>
      <div className={styles.our_services_header_container}>
        <h2>
          Our <span>{data?.special}</span> Services are designed to deliver your
          project
          <br />
          successfully with quality and on-time.
        </h2>
        <p>{data?.description}</p>
      </div>
      <div className={styles.our_services}>
        <Row gutter={[20]}>
          {data?.list?.map((item, i) => {
            return (
              <Col
                key={i}
                sm={24}
                md={12}
                lg={8}
                className={styles.col_container}
              >
                <div className={styles.service_card}>
                  <h4>{item?.text}</h4>
                  <p>{item?.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
