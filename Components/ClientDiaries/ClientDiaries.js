import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./ClientDiaries.module.scss";

const ClientDiaries = () => {
  return (
    <div className={styles.client_diaries_container}>
      <div className={styles.client_diaries_content_container}>
        <div className={styles.title_container}>
          <h1>Our Clients</h1>
          <h3>Giving wings to your ideas is our forte</h3>
          <p>
            We are dedicated to providing the necessary resources and support to
            bring your ideas to life. We believe in giving wings to your ideas
            and helping them to soar, reaching new heights and achieving their
            full potential.
          </p>
          <hr />
        </div>
        <div className={styles.our_client_list_container}>
          <Marquee speed={100}>
            <div className={styles.list_container}>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_1.png`} />
              </div>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_2.png`} />
              </div>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_3.png`} />
              </div>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_4.png`} />
              </div>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_5.png`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_12.png`} />
              </div>
            </div>
          </Marquee>
          <br />
          <br />
          <Marquee direction="right" speed={100}>
            <div className={styles.list_container}>
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_6.png`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_7.png`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_8.png`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_9.png`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_10.webp`} />
              </div>{" "}
              <div className={styles.client_list}>
                <img src={`/Assets/clients/client_11.png`} />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ClientDiaries;
