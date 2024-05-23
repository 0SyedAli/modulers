import { Col, Modal, Row } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { companyName } from "../../utils/constant";
import { DarkButton } from "../Button/Button";
import ContactModal from "../ContactModal/ContactModal";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {

  const [modal,setModal] = useState(false)
  const router = useRouter();

  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={styles.roadmap_container}>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={10}>
            <div className={styles.title_container}>
              <h1>Our Workflow</h1>
              <p>
              {companyName} endeavors to present the best development idea
                worldwide, so our mission is to guarantee the best relationship
                with our customers, both during and after their objectives have
                been met.
              </p>
              <DarkButton
                text={"Get a quote"}
                onClick={() => setModal(true)}
              />
            </div>
          </Col>
          <Col xs={24} md={24} lg={14}>
            <div className={styles.roadmap_image_content}>
              <img
                src={"/Assets/header/workflow.png"}
                alt={"workflow image"}
              />
            </div>
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

export default Roadmap;
