import React, { useRef } from "react";
import styles from "./ServicesDevelopment.module.scss";
import { Row, Col } from "antd";
import { Arrow, SliderLeftIcon, SliderRightIcon } from "../../Icon/icon";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";

const ServiceDevelopment = () => {
  const Ref = useRef();

  const HandlePrevButton = (scrollOffset) => {
    Ref.current.scrollLeft -= scrollOffset;
  };

  const HandleNextButton = (scrollOffset) => {
    Ref.current.scrollLeft += scrollOffset;
  };
  const animation = { duration: 5000, easing: (t) => t };

  const [sliderRef, instanceRef] = useKeenSlider({}, [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.software_container}>
        <div className={styles.software_content_container}>
          <Row className={styles.row_container}>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className={styles.software_image}>
                <div ref={sliderRef} className="keen-slider">
                  <div className="keen-slider__slide">
                    <img
                      src="/Assets/macbook_1.png"
                      className={styles.mobile_img}
                    />
                  </div>
                  <div className="keen-slider__slide">
                    <img
                      src="/Assets/macbook_4.png"
                      className={styles.mobile_img}
                    />
                  </div>
                  <div className="keen-slider__slide">
                    <img
                      src="/Assets/macbook_3.png"
                      className={styles.mobile_img}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className={styles.software_content}>
                <h1>Web & Mobile Application Development</h1>
                <p>
                  Incorporated, we are specializes in providing web and mobile
                  application development services to businesses and
                  organizations of all sizes. Our team of experienced developers
                  and designers are experts in creating custom web and mobile
                  applications that are tailored to meet the specific needs of
                  our customers.
                </p>
                <p>
                  Whether you need a simple website, a complex web application,
                  or a mobile app, our team has the skills and expertise to
                  deliver. We use the latest technologies and industry best
                  practices to ensure that the solutions we deliver are not only
                  functional and efficient, but also scalable and secure.
                </p>
                <Link href="/contact">
                  <p>Learn more</p> <Arrow />
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.slider_container}>
          <div className={styles.slider}>
            <button type="" onClick={() => HandlePrevButton(150)}>
              <SliderLeftIcon />
            </button>
            <div className={styles.slider_content} ref={Ref}>
              <div className={styles.card}>
                <img
                  preview={false}
                  src="/Assets/service/education.png"
                  alt=""
                />
                <p>Education</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/sports.png" alt="" />
                <p>Sports</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/fintech.png" alt="" />
                <p>Fintech</p>
              </div>

              <div className={styles.card}>
                <img
                  preview={false}
                  src="/Assets/service/life_style.png"
                  alt=""
                />
                <p>Lifestyle</p>
              </div>

              <div className={styles.card}>
                <img preview={false} src="/Assets/service/care.png" alt="" />
                <p>Healthcare</p>
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

export default ServiceDevelopment;
