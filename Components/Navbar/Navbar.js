import { Button } from "antd";
import React, { useState } from "react";
import Technology from "../Technology/Technology";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import NavSm from "../NavSm/NavSm";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const items1 = [
    {
      key: "2",
      label: <Technology />,
    },
  ];
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [modal, setModal] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <>
        <div className={`${styles.navbar_container} navbar_container`}>
          <div className={`${styles.navbar} navbar`}>
            <img
              onClick={() => router.push("/")}
              src="/Assets/white_logo.png"
              alt="Modulers logo"
            />
            <ul>
              <li>
                <Link href={"#"}>Full Stack Developement</Link>
              </li>
              <li>
                <Link href={"#"}>Machine Learning</Link>
              </li>
              <li>
                <Link href={"#"}>Artificial Intelligence</Link>
              </li>
              <li>
                <Link href={"#"}>DevOps</Link>
              </li>
              <li>
                <Link href={"#"}>Blogs</Link>
              </li>
              <li>
                <Link href={"#"}>Teaching</Link>
              </li>
              {/* <Dropdown menu={{ items: items1 }} placement="bottom" arrow>
                <li>
                  TECHNOLOGIES <DownIcon />
                </li>
              </Dropdown> */}
              {/* 
              <li>
                <Link href={"/careers"}>careers</Link>
              </li>
              <li>
                {" "}
                <Link href={"/about"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/contact"}>contact us</Link>
              </li> */}
            </ul>
            <div className={styles.talks}>
              {/* <div>
                <p>Talk with us?</p>
                <a href="tel:+13022024853">+1 (302) 202-4853</a>
              </div> */}
              {/* <LightButton text="Contact Us" onClick={() => setModal(true)} /> */}
              <Button>
                <Link href={"#contact_container"}>Contact Us</Link>
              </Button>
            </div>
            {/* <div className={styles.Icon} onClick={showDrawer}>
              <LightButton text="Get a Qoute" />
              <Menu />
            </div> */}
          </div>
        </div>
        <div className={styles.NavSm}>
          <NavSm />
        </div>
        {/* <Modal
          open={modal}
          centered
          footer={false}
          onCancel={() => setModal(false)}
          closable={false}
        >
          <ContactModal setModal={setModal} />
        </Modal> */}
      </>
    </>
  );
};

export default Navbar;
