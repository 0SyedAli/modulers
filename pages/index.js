import React from "react";
import BasicLayout from "../Layouts/BasicLayout/BasicLayout";
import HeroHeader from "../Components/HeroHeader/HeroHeader";
import ResourceServices from "../Components/ResourceServices/ResourceServices";

import BlockchainServices from "../Components/BlockchainServices/BlockchainServices";
import ClientDiaries from "../Components/ClientDiaries/ClientDiaries";
import ContactUs from "../Components/ContactUs/ContactUs";

import SoftwareServices from "../Components/SotwareServices/SoftwareServices";
import Testimonials from "../Components/Testimonials/Testimonials";

import { Col, Row, Skeleton } from "antd";
import styles from "../styles/home.module.scss";
import Stats from "../Components/Stats/Stats";
import Modal from "../Components/ContactModal/ContactModal";

const Home = () => {
  return (
    <BasicLayout>
      <HeroHeader />
      {/* <ResourceServices /> */}
      <SoftwareServices />
      <BlockchainServices />
      <Testimonials />
      {/* <Stats /> */}
      <ContactUs />
      {/* <ClientDiaries /> */}
      {/* <Modal/> */}
    </BasicLayout>
  );
};

export default Home;
