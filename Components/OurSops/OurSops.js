import React from "react";
import Image from "next/image";
import styles from "./OurSops.module.scss";

const OurSops = ({ data }) => {
  return (
    <div className={styles.our_sops_container}>
      <div className={styles.our_sops_header_container}>
        <h2>
          Our <span>{data?.special}</span>
        </h2>
      </div>
      <div className={styles.our_sops_list}>
        {data?.list.map((item, i) => {
          return (
            <div className={styles.list_item} key={i}>
              <img src={"/Assets/check.png"} alt={"check icon"} />
              <p>{item?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSops;
