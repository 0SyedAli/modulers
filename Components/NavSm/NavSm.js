import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-sm.module.scss";
import { DownIcon, Menu } from "../../Icon/icon";
import { LightButton } from "../Button/Button";
import { useRouter } from "next/router";
import { Modal } from "antd";
import ContactModal from "../ContactModal/ContactModal";

const NavSm = () => {
  const router = useRouter();
  let [isOpen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  let [isCategories, setisCategories] = useState(false);
  let navLinksRef = React.useRef(null);
  let navLogoRef = React.useRef(null);

  function hamburgerClick() {
    let drawer = navLinksRef.current.classList.toggle(styles.open);
    if (drawer) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    Array.from(navLinksRef.current.children).forEach((link) => {
      link.classList.toggle(styles.fade);
    });
    navLogoRef.current.children[0].className = styles.click_logo_animate;
    setTimeout(() => {
      navLogoRef.current.children[0].className = "";
    }, 500);
  }

  const onClose = () => {
    navLinksRef.current.classList.toggle(styles.open);
  };

  return (
    <>
      <nav className={styles.nav_sm_container}>
        <div className={styles.mobile_navbar}>
          <div className={styles.special_logo}>
            <Link href="/">
              <img src="/Assets/white_logo.png" alt="Moduler logo" />
              <h4>Modulers</h4>
            </Link>
          </div>
          <div className={styles.widgets_container}>
            <div
              className={styles.icons}
              onClick={hamburgerClick}
              ref={navLogoRef}
            >
              <Image
                src="/Assets/menu_icon.svg"
                width={155}
                height={57}
                layout="intrinsic"
                priority={true}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.nav_links} ref={navLinksRef}>
          <div className={styles.list}>
            <ul>
              <Link href={"#"}>
                <p>Full Stack Developement</p>
              </Link>
              <Link href={"#"}>
                <p>Machine Learning</p>
              </Link>
              <Link href={"#"}>
                <p>Artificial Intelligence</p>
              </Link>
              <Link href={"#"}>
                <p>DevOps</p>
              </Link>
              <Link href={"#"}>
                <p>Blogs</p>
              </Link>
              <Link href={"#"}>
                <p>Teaching</p>
              </Link>
              {/* <LightButton text="Get a Qoute" onClick={() => setModal(true)} /> */}
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        open={modal}
        centered
        footer={false}
        onCancel={() => setModal(false)}
        closable={false}
      >
        <ContactModal setModal={setModal} />
      </Modal>
    </>
  );
};

export default NavSm;
