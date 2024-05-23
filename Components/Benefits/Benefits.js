import React from "react";
import { companyName } from "../../utils/constant";
import styles from "./Benefits.module.scss";
const Benefits = () => {
  return (
    <div className={styles.benefits_container}>
      <h3>Team Benefits</h3>
      <p>
        Other than providing a healthy space to work at,{companyName} also ensures
        providing all kinds of compensation & benefits to the team
      </p>
      <div className={styles.benefits_cards}>
        {Array(8)
          .fill()
          .map((item) => (
            <div className={styles.benefits_card}>
              <img src="./Assets/increment.webp" alt="" />
              <h5>Bi Annual Increments</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Benefits;
