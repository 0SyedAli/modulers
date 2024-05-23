import React from "react";
import { Col, Row } from "antd";
import styles from "./WhyHire.module.scss";

const WhyHire = ({ data }) => {
  return (
    <div className={styles.why_hire_container}>
      <div className={styles.why_hire_box}>
        <section className={styles.header_sec}>
          <h3>
            Why hire <span>{data?.special}</span> Developer from Briskteck
          </h3>
        </section>
        <section className={styles.why_content}>
          {data?.list.map((item, i) => (
            <div className={styles.item_container} key={i}>
              <div className={styles.item_header}>
                <img src={item?.image} />
                <p>{item?.title}</p>
              </div>
              <p>{item?.description}</p>
              <hr />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WhyHire;
