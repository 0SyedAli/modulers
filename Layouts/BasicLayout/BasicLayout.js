import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./BasicLayout.module.scss";
import { NextSeo } from "next-seo";

const BasicLayout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <NextSeo
        title="Modulers"
        description="Modulers Ltd provides digital transformation services and strategy consulting to enterprises and start-ups via mobile and web app development."
        canonical="https://www.modulers.co/"
      />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
