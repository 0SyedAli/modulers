import React, { useRef } from "react";
import styles from "./ServiceResources.module.scss";
import { Row, Col, Image } from "antd";
import { Arrow, SliderLeftIcon, SliderRightIcon } from "../../Icon/icon";
import Link from "next/link";
// import useOnScreen from "../../Hooks/useOnScreen";

const ServiceResources = () => {
  // const [isDisabled, setIsDisabled] = useState(false)

  const Ref = useRef();

  // const cardRef = useRef()

  // const isVisible = useOnScreen(cardRef)

  const HandlePrevButton = (scrollOffset) => {
    Ref.current.scrollLeft -= scrollOffset;
  };
  const HandleNextButton = (scrollOffset) => {
    // setIsDisabled(false)
    Ref.current.scrollLeft += scrollOffset;

    // if(isVisible){
    //   setIsDisabled(true)
    //   // Ref.current.scrollLeft = 0

    // }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.resources_container}>
        <div className={styles.resources_content_container}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className={styles.resources_content}>
                <h1>Staff Augmentation</h1>
                <p>
                  We provide Resource Augmentation services to businesses of all
                  sizes. We understand that as companies grow and evolve, they
                  often require additional resources to help them achieve their
                  goals and stay competitive in the market. That's where we come
                  in.
                </p>
                <p>
                  If you're looking for a resource augmentation partner that can
                  help you achieve your business objectives, look no further. We
                  are here to support you and your business every step of the
                  way.
                </p>
                <Link href="/contact">
                  <p>Built your team</p> <Arrow />
                </Link>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className={styles.resources_image}>
                <img src="/Assets/header/mobile.png" />
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.slider_content_container}>
          <div className={styles.slider}>
            <button type="" onClick={() => HandlePrevButton(150)}>
              <SliderLeftIcon />
            </button>
            <div className={styles.slider_content} ref={Ref}>
              <div className={styles.card}>
                <img preview={false} src="/Assets/service/atom.png" alt="" />
                <p>React JS</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/next.png" alt="" />
                <p>Next JS</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/python.png" alt="" />
                <p>Python</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/gatsby.png" alt="" />
                <p>Gatsby JS</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/node-js.svg" alt="" />
                <p>Node JS</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/devops.png" alt="" />
                <p>DevOps</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/atom.png" alt="" />
                <p>React Native</p>
              </div>

              <div className={styles.card}>
                <img
                  preview={false}
                  src="/Assets/res_aug/flutter_icon.png"
                  alt=""
                />
                <p>Flutter</p>
              </div>
            </div>
            <button onClick={() => HandleNextButton(150)}>
              <SliderRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceResources;
