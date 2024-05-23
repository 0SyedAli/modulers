import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import { companyName } from "../../utils/constant";
// import { Technology_Icon } from "../../Icon/icon";
import styled from "./technology.module.scss";
const Technology = () => {
  return (
    <>
      <div className={styled.container}>
        <div>
          {/* <Technology_Icon /> */}
          <p>Technologies</p>
          <small>
          {companyName} at your service with their expertise in various
            technologies!
          </small>
        </div>
        <div className={styled.catogories}>
          <Row gutter={12}>
            <Col span={8}>
              <small>Frontend</small>
              <strong>
                <Link href={"/technologies/react"}>React.js</Link>
              </strong>
              <strong>
                <Link href={"/technologies/next"}>Next.js</Link>
              </strong>
              <strong>
                <Link href={"/technologies/vue"}> Vue.js</Link>
              </strong>
            </Col>
            <Col span={8}>
              <small>Mobile App</small>
              <strong>
                <Link href={"/technologies/reactNative"}>React Native</Link>
              </strong>
              <strong>
                <Link href={"/technologies/flutter"}>Flutter</Link>
              </strong>
            </Col>
            <Col span={8}>
              <small>Backend</small>
              <strong>
                <Link href={"/technologies/node"}> Node.js</Link>
              </strong>
              <strong>
                <Link href={"/technologies/python"}> Python</Link>
              </strong>
            </Col>
          </Row>
        </div>
        <div className={styled.catogories}>
          <Row gutter={12}>
            <Col span={8}>
              <small>Web 3.0</small>
              <strong>
                <Link href={"/technologies/blockChain"}> Block Chain</Link>
              </strong>
            </Col>
            <Col span={8}>
              <small>
                <Link href={"/technologies/react"}> QA</Link>
              </small>
              <strong>
                <Link href={"/technologies/manual"}> Mannual</Link>
              </strong>
              <strong>
                <Link href={"/technologies/automation"}> Automation</Link>
              </strong>
            </Col>
            <Col span={8}>
              <small>Other</small>
              <strong>
                <Link href={"/technologies/devOps"}> DevOps</Link>
              </strong>
              <strong>
                <Link href={"/technologies/mernStack"}> Mern-stack</Link>
              </strong>
              <strong>
                <Link href={"/technologies/projectManagement"}>
                  Project Management
                </Link>
              </strong>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Technology;
