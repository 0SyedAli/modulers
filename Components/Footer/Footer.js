import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
  TwitterIcon,
  UnitedStateIcon,
  YoutubeIcon,
} from "../../Icon/icon";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import styles from "./Footer.module.scss";
import { companyName, footerDetails } from "../../utils/constant";

const Footer = () => {
  const showInMapClicked = (lag, long) => {
    window.open("https://maps.google.com?q=" + lag + "," + long);
  };

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <Row gutter={24}>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <div className={styles.footer_item}>
              <img
                className={styles.footer_logo}
                src="/Assets/logo_white.png"
                alt="footer_logo1"
              />
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.footer_item}>
              <h4>
                <b>Company</b>
              </h4>

              <Link href={"/about"}>
                <p>Our Way Of Journey</p>
              </Link>
              {/* <Link href={"/about"}>
                <p>Life @ {companyName}</p>
              </Link> */}
              <Link href={"/contact"}>
                <p>Contact Us</p>
              </Link>
            </div>
          </Col>
          {/* <Col xl={4} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.footer_item}>
              <h4>
                <b>Why {companyName}</b>
              </h4>

              <Link href="/#testimonals">
                <p>Client Reviews</p>
              </Link>
              <Link href={"/careers"}>
                <p>Careers</p>
              </Link>
            </div>
          </Col> */}
          <Col xl={6} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.footer_item}>
              <h4>
                <b>Services</b>
              </h4>
              <a href={"#"}>
                <p>Full Stack Development</p>
              </a>
              <Link href={"#"}>
                <p>Machine Learning</p>
              </Link>
              <Link href={"#"}>
                <p>Block Chain</p>
              </Link>
              <Link href={"#"}>
                <p>Artificial Intelligence</p>
              </Link>
              <Link href={"#"}>
                <p>DevOps</p>
              </Link>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.footer_item}>
              <h4>
                <b>Get In Touch</b>
              </h4>

              <Link href={"mailto: info@modulers.co"}>
                <p>
                  <HiOutlineMail />
                  {footerDetails?.email}
                </p>
              </Link>
              {/* <p className={styles.textBold}>
                <TbBuildingSkyscraper />

                {footerDetails?.Address1?.location}
              </p> */}
              <p
                onClick={() =>
                  showInMapClicked(37.57514149308409, -122.03745347116431)
                }
              >
                <span>
                  <HiOutlineLocationMarker />
                </span>
                {footerDetails?.Address1?.streetAddress}
              </p>
              <Link href="tel:+1 510 585 3020">
                <p>
                  <BiPhoneCall />
                  {footerDetails?.Address1?.contactNumber}
                </p>
              </Link>
              <p className={styles.textBold}>
                <TbBuildingSkyscraper />

                {footerDetails?.Address2?.location}
              </p>
              <p onClick={() => showInMapClicked(24.850257, 67.181234)}>
                <span>
                  <HiOutlineLocationMarker />
                </span>
                {footerDetails?.Address2?.streetAddress}
              </p>
              <Link href="tel:+92-333-1310995">
                <p>
                  <BiPhoneCall />
                  {footerDetails?.Address2?.contactNumber}
                </p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className={styles.mediaIcon}>
        <strong>Follow Us :</strong>{" "}
        <Link href={"https://www.facebook.com/brisktechltd/"} target={"_blank"}>
          <FacebookIcon />
        </Link>{" "}
        <Link
          href={"https://www.linkedin.com/company/brisktechltd/"}
          target={"_blank"}
        >
          <LinkdinIcon />{" "}
        </Link>{" "}
        <Link
          href={"https://www.instagram.com/brisktechltd/"}
          target={"_blank"}
        >
          <InstagramIcon />{" "}
        </Link>
      </div> */}
      <div className={styles.mediaText}>
        &copy; 2023 All Rights Reserved {companyName}
      </div>
    </div>
  );
};

export default Footer;
