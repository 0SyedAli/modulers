import React, { useState } from "react";
import { Col, Image, Modal, Row } from "antd";
import { DarkButton } from "../Button/Button";
import styles from "./TechHeroHeader.module.scss";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";
import ContactModal from "../ContactModal/ContactModal";

const TechHeroHeader = ({ data }) => {
  const [modal,setModal] = useState(false)
 


  const router = useRouter();

  return (
    <>
    <div className={styles.tech_hero_container}>
      <div className={styles.tech_content_container}>
        <Row>
          <Col xs={24} md={11}>
            <div className={styles.tech_hero_content}>
              <h1>{data?.title}</h1>
              <p>{data?.description}</p>
              <div className={styles.list_items_container}>
                {data?.list?.map((item, i) => (
                  <div className={styles.list_item} key={i}>
                    <img src="/Assets/bullet-point.png" />
                    <p>{item?.text}</p>
                  </div>
                ))}
              </div>
              <div className={styles.button_container}>
                <DarkButton
                  text="Hire Now"
                  onClick={() => setModal(true)}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} md={13}>
            <div className={styles.image_container}>
              <Player
                autoplay
                loop
                src={data?.tech}
                className="player_icon"
              ></Player>
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
        <ContactModal  setModal={setModal} />
      </Modal>
      </>
  );
};

export default TechHeroHeader;
