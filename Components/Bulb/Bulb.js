import React, { useEffect, useState } from "react";
import styles from "./Bulb.module.scss";

const Bulb = ({ children, onChange, limit }) => {
  const [isShow, setShow] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!isShow);
    }, 2000);
    return () => {
      setIndex(index === limit - 1 ? 0 : index + 1);
      clearInterval(interval);
    };
  }, [isShow]);

  useEffect(() => {
    onChange && onChange(index);
  }, [index]);

  return (
    <div className={styles.bulb_container}>
      <div className={styles.lamp_container}>
        <img src="/Assets/lamp.png" className={styles.lamp} alt="" />

        <img
          src="/Assets/light.png"
          className={styles.light}
          id="light"
          alt=""
          style={{ opacity: isShow ? 1 : 0 }}
        />
        <div
          className={styles.bulb_content_container}
          style={{ opacity: isShow ? 1 : 0 }}
        >
          {children}
          {/* <h4>{data[0]?.title}</h4>
          <span>{data[0]?.description}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Bulb;
