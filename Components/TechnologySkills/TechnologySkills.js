import React, { useState } from "react";
import { Collapse, Tag, Col, Image, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Bulb from "../Bulb/Bulb";
import styles from "./TechnologySkills.module.scss";

const TechnologySkills = ({ data: { skills, hire } }) => {
  let [bulbIndex, setBulbIndex] = useState();
  const { Panel } = Collapse;

  const onChange = (key) => {
    // console.log(key);
  };
  // console.log(bulbIndex);
  return (
    <div className={styles.technology_skills_container}>
      <div className={styles.technology_skills_content_container}>
        <Row className={styles.row_container}>
          <Col sm={24} md={24} lg={14}>
            <div className={styles.technology_skills}>
              <div className={styles.skills_header_container}>
                <h2>
                  Our <span>{skills?.special}</span> advanced capabilities
                  result in the creation of disruptive business solutions.
                </h2>
                <p>{skills?.description}</p>
              </div>
              <div className={`${styles.skills_container} skills_container`}>
                <Collapse
                  bordered={false}
                  onChange={onChange}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                >
                  {skills?.skillList?.map((item, i) => (
                    <Panel header={<h4>{item?.title}</h4>} key={i + 1}>
                      <div className={styles.panal_container}>
                        {item?.list?.map((list, listIndex) => (
                          <Tag
                            key={listIndex}
                            className={styles.tag}
                            icon={
                              <Image
                                preview={false}
                                src={"/Assets/blur.png"}
                                alt={"icon logo"}
                              />
                            }
                          >
                            <small>
                              <a href="#">{list?.text}</a>
                            </small>
                          </Tag>
                        ))}
                      </div>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </div>
          </Col>
          <Col sm={24} md={24} lg={10}>
            <Bulb onChange={(e) => setBulbIndex(e)} limit={hire?.list?.length}>
              <div className={styles.bulb_container}>
                <h4>{hire?.list[bulbIndex]?.title}</h4>
                <span>{hire?.list[bulbIndex]?.description}</span>
              </div>
            </Bulb>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TechnologySkills;
