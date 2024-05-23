import React, { useState } from "react";
import { Col, Modal, Row } from "antd";
import { DarkButton } from "../Button/Button";
import styles from "./OurValues.module.scss";
import { useRouter } from "next/router";
import { companyName } from "../../utils/constant";
import ContactModal from "../ContactModal/ContactModal";

const OurValues = () => {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  return (
    <>
      <div className={styles.our_values_container}>
        <div className={styles.our_values_content}>
          <Row>
            <Col sm={24} md={24}>
              <section className={styles.sec_left}>
                {/* <h1>OUR VALUES</h1> */}
                {/* <p>
              {companyName} endeavors to present the best development idea
                worldwide, so our mission is to guarantee the best relationship
                with our customers, both during and after their objectives have
                been met.
              </p>
              <DarkButton
                text={"Get a quote"}
                onClick={() => setModal(true)}
              /> */}
              </section>
            </Col>
            <Col sm={24} md={24}>
              <section className={styles.sec_right}>
                <div className={styles.boxes_container}>
                  <div className={styles.box_item}>
                    <img src="/Assets/values/1.png" />
                    <h4>Relationship Building</h4>
                    <p>
                      We specialize in building strong relationships with our
                      clients. By understanding their needs, we help them
                      achieve their goals and grow their businesses.
                    </p>
                  </div>
                  <div className={styles.box_item}>
                    <img src="/Assets/values/2.png" />
                    <h4>Exceeding Expectations</h4>
                    <p>
                      We strive to constantly improve, exceed expectations and
                      deliver the highest quality services. Always pushing
                      boundaries to outshine ourselves and raise the bar for our
                      industry.
                    </p>
                  </div>
                  <div className={styles.box_item}>
                    <img src="/Assets/values/3.png" />
                    <h4>Mastering the art of leadership</h4>
                    <p>
                      We provide training and development for leaders to master
                      the art of leadership, developing skills in effective
                      communication, decision making, and strategic planning.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        open={modal}
        centered
        footer={false}
        onCancel={() => setModal(false)}
        closable={false}
      >
        <ContactModal setModal={setModal} />
      </Modal>
    </>
  );
};

export default OurValues;
