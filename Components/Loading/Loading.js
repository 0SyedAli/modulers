import React from "react";
import Image from "next/image";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <img
        src="/Assets/loader.gif"
        alt="Loading Imager"
        // width={500}
        // height={500}
      />
    </div>
  );
};

export default Loading;
