import React from "react";
import styles from "./Button.module.scss";

export const DarkButton = ({ text, onClick }) => {
  return (
    <button className={styles.btn_dark} onClick={onClick}>
      {text}
    </button>
  );
};

export const LightButton = ({ text, onClick, disabled }) => {
  return (
    <button className={styles.btn_light} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
