import React, { useRef } from "react";
import styles from "./ServicesBlockchain.module.scss";
import { Row, Col } from "antd";
import { Arrow, SliderLeftIcon, SliderRightIcon } from "../../Icon/icon";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../public/Assets/header/blockchain.json";
const ServiceBlockchain = () => {
  const Ref = useRef();

  const HandlePrevButton = (scrollOffset) => {
    Ref.current.scrollLeft -= scrollOffset;
  };
  const HandleNextButton = (scrollOffset) => {
    Ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blockchain_container}>
        <div className={styles.blockchain_content_container}>
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
                  objectives, look no further. We are here to support you and
                  your business every step of the way."
                </p>
                <Link href="/contact">
                  <p>Learn more</p> <Arrow />
                </Link>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className={styles.blockchain_image}>
                {/* <img
                  src="/Assets/blockchain.webp"
                  className={styles.mobile_img}
                ></img> */}
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
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            {/* <button type="" onClick={() => HandlePrevButton(150)}>
              <SliderLeftIcon />
            </button> */}
            <div className={styles.slider_content} ref={Ref}>
              <div className={styles.card}>
                <img preview={false} src="/Assets/service/nft.png" alt="" />
                <p>NFT</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/web3.png" alt="" />
                <p>Web 3.0</p>
              </div>

              <div className={styles.card}>
                <img
                  preview={false}
                  src="/Assets/service/ethereum.png"
                  alt=""
                />
                <p>Ethereum</p>
              </div>
            </div>
            {/* <button onClick={() => HandleNextButton(150)}>
              <SliderRightIcon />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlockchain;
