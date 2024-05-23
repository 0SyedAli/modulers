import React from "react";
import { Progress, Space } from "antd";
import styles from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats_container}>
      <div className={styles.stats}>
        <Progress
          type="circle"
          percent={90}
          format={(percent) => `05+`}
          className={styles.progress_container}
          width={200}
          strokeColor={"#292b30"}
        />
        <h2>Years Of Experience</h2>
      </div>
      <div className={styles.stats}>
        <Progress
          type="circle"
          percent={90}
          format={(percent) => `100+`}
          className={styles.progress_container}
          width={200}
          strokeColor={"#292b30"}
        />
        <h2>Projects Completed</h2>
      </div>
      <div className={styles.stats}>
        <Progress
          type="circle"
          percent={90}
          format={(percent) => `10+`}
          className={styles.progress_container}
          width={200}
          strokeColor={"#292b30"}
        />
        <h2>Industries Catered</h2>
      </div>
      <div className={styles.stats}>
        <Progress
          type="circle"
          percent={99}
          format={(percent) => `99%`}
          className={styles.progress_container}
          width={200}
          strokeColor={"#292b30"}
        />
        <h2>Satisfied Clients</h2>
      </div>
    </div>
  );
};

export default Stats;
