import React from "react";
import styles from "./TextArea.module.scss";
const TextArea = ({ width, name, value, onChange, placeholder }) => {
  return (
    <div className={styles.textArea_wrapper} style={{ width: width }}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
