import React from "react";
import styles from "./SoftwareServices.module.scss";
import { Row, Col } from "antd";
import { useKeenSlider } from "keen-slider/react";

const SoftwareServices = () => {
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

  // let softwareTechArr = [
  //   {
  //     name: "Health",
  //     image: "/Assets/software_develop/heart.png",
  //   },
  //   {
  //     name: "Sports",
  //     image: "/Assets/software_develop/sport.png",
  //   },
  //   {
  //     name: "Education",
  //     image: "/Assets/software_develop/education.png",
  //   },
  //   {
  //     name: "Fintech",
  //     image: "/Assets/software_develop/fintech.png",
  //   },
  //   {
  //     name: "Lifestyle",
  //     image: "/Assets/software_develop/health.png",
  //   },
  //   {
  //     name: "More",
  //     image: "/Assets/software_develop/more.png",
  //   },
  // ];

  return (
    <div className={styles.wrapper} id="software">
      <div className={styles.software_container}>
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
              <p className={styles.Paragraph}>
                We are a company that specializes in providing web and mobile
                application development services to businesses and organizations
                of all sizes. Our team of experienced developers and designers
                are experts in creating custom web and mobile applications that
                are tailored to meet the specific needs of our customers.
              </p>
              <p>
                Whether you need a simple website, a complex web application, or
                a mobile app, our team has the skills and expertise to deliver.
                We use the latest technologies and industry best practices to
                ensure that the solutions we deliver are not only functional and
                efficient, but also scalable and secure.
              </p>

              {/* <div className={styles.icons_container}>
                {softwareTechArr?.map((item, i) => {
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
        </Row>
      </div>
    </div>
  );
};

export default SoftwareServices;
