import React, { useState } from "react";
import styles from "./JobList.module.scss";
import { Button, Col, Collapse, Modal, Row } from "antd";
import { DarkButton } from "../Button/Button";
const { Panel } = Collapse;
import { CaretRightOutlined } from "@ant-design/icons";
import ModalForm from "../ModalForm/ModalForm";

const JobList = () => {
  let [modal, setModal] = useState(false);
  let [modalExpand, setModalExpand] = useState(false);
  const onChange = (key) => {
    // console.log(key);
  };
  return (
    <div className={`${styles.job_list_container} accordion_container`}>
      <Modal
        open={modal}
        centered
        footer={false}
        onCancel={() => setModal(false)}
        closable={false}
      >
        <ModalForm setModal={setModal} />
      </Modal>
      <Collapse
        expanded={modalExpand}
        className={styles.accordion}
        expandIconPosition={"end"}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 270 : 90} />
        )}
      >
        <Panel
          header={
            <div className={styles.header}>
              <h4>Experienced React JS Developer</h4>
              <p>F128495DBA</p>
            </div>
          }
        >
          <div className={styles.accordion_summary}>
            <h4>The Role</h4>
            <p className={styles.description}>
              We are seeking an experienced React Developer to join our team.
              The ideal candidate will have a strong understanding of React.js
              and its principles, as well as experience with modern JavaScript
              development practices. Responsibilities include:
            </p>
            <Row className={styles.grid_container} gutter={5}>
              <Col xs={24} md={12}>
                <div className={styles.requirements_container}>
                  <h4>Requirements</h4>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Building and maintaining user-facing features using
                      React.js
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Collaborating with cross-functional teams to define,
                      design, and ship new features
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Staying up-to-date with the latest industry trends and
                      technologies in React development
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Participating in code reviews and ensuring the codebase
                      adheres to best practices
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className={styles.nice_to_have_container}>
                  <h4>Qualifications:</h4>
                  <div className={styles.list}>
                    <span></span>
                    <p>Strong experience with React.js and its principles</p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Experience with modern JavaScript development practices,
                      including ES6+
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Experience with front-end build tools such as Webpack,
                      Babel, and npm
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>
                      Strong understanding of web performance optimization
                      techniques
                    </p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>Experience with Git and version control</p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>Strong problem-solving and analytical skills</p>
                  </div>
                  <div className={styles.list}>
                    <span></span>
                    <p>Excellent written and verbal communication skills</p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className={styles.btn_container_second}>
              <DarkButton onClick={() => setModal(true)} text={"Apply Now"} />
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default JobList;
