import React from "react";
import { Row, Col } from "antd";
import { LightButton } from "../Button/Button";
import styles from "./ResourceServices.module.scss";

const ResourceServices = () => {
  let resourcesTechArr = [
    {
      name: "React",
      image: "/Assets/res_aug/atom.png",
    },
    {
      name: "NextJS",
      image: "/Assets/res_aug/next_icon.png",
    },
    {
      name: "Python",
      image: "/Assets/res_aug/python.png",
    },
    {
      name: "Node Js",
      image: "/Assets/res_aug/node-js.png",
    },
    {
      name: "DevOps",
      image: "/Assets/res_aug/devops.png",
    },
    {
      name: "React Native",
      image: "/Assets/res_aug/atom.png",
    },
    {
      name: "Flutter",
      image: "/Assets/res_aug/flutter_icon.png",
    },
    {
      name: "More",
      image: "/Assets/res_aug/more.png",
    },
  ];

  return (
    <div className={styles.wrapper} id={"resources"}>
      <div className={styles.resource_content_container}>
        <div className={styles.title_container}>
          <h1>OUR SERVICES</h1>
          <h3>Empowering your vision is our specialty</h3>
          <p>
            We are a software services company that is dedicated to providing
            our customers with the tools and solutions they need to achieve
            their goals and succeed in their respective industries.
          </p>
          <p>
            Our team of experienced software engineers and developers work
            closely with our customers to ensure that the solutions we deliver
            are not only functional and efficient, but also user-friendly and
            easy to use.
          </p>
          <hr />
        </div>

        <div className={styles.resources_container}>
          <Row>
            <Col xs={24} md={12} lg={12}>
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
                {/* <LightButton text="Contact Us" /> */}
                <br />
                <div className={styles.icons_container}>
                  {resourcesTechArr?.map((item, i) => {
                    return (
                      <div key={i} className={styles.icon_item}>
                        <div className={styles.img_container}>
                          <img src={item?.image}></img>
                        </div>
                        <p>{item?.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12}>
              <div className={styles.resources_image}>
                <img src="/Assets/header/mobile.png" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ResourceServices;
