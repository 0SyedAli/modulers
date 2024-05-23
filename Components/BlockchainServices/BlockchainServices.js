import React from "react";
import styles from "./BlockchainServices.module.scss";
import { Row, Col } from "antd";
import animationData from "../../public/Assets/header/blockchain.json";
import { Player } from "@lottiefiles/react-lottie-player";

const BlockchainServices = () => {
  // let blockchainTechArr = [
  //   {
  //     name: "NFT",
  //     image: "/Assets/blockchain.gif",
  //   },
  //   {
  //     name: "Web 3.0",
  //     image: "/Assets/blockchain_services/web-30.png",
  //   },
  //   {
  //     name: "Education",
  //     image: "/Assets/blockchain_services/ethereum.png",
  //   },
  // ];
  return (
    <div className={styles.wrapper} id="blockchain">
      <div className={styles.blockchain_container}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.blockchain_content}>
              <h1>Blockchain & Web3 Application Development</h1>
              <p>
                We are a company that specializes in providing Blockchain and
                web3 application development services to businesses and
                organizations of all sizes. Our team of experienced developers
                and designers are experts in creating custom decentralized
                applications (dApps) and smart contracts that are tailored to
                meet the specific needs of our customers.
              </p>
              <p>
                We use various blockchain platforms such as Ethereum, EOS, and
                others to build decentralized applications and smart contracts
                for various use cases like Supply Chain Management, Digital
                Identity, Payment and remittance, and many more.
              </p>
              <p>
                If you're looking for a blockchain and web3 application
                development partner that can help you achieve your business
                objectives, look no further. We are here to support you and your
                business every step of the way."
              </p>
              {/* <div className={styles.icons_container}>
                {blockchainTechArr?.map((item, i) => {
                  return (
                    <div key={i} className={styles.icon_item}>
                      <div className={styles.img_container}>
                        <img src={item?.image}></img>
                      </div>
                      <p>{item?.name}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.blockchain_image}>
              <Player
                autoplay
                loop
                src={animationData}
                className="player_icon"
              ></Player>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlockchainServices;
