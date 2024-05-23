import React from "react";
import styles from "./Input.module.scss";
const Input = ({
  width,
  type,
  placeholder,
  onChange,
  name,
  isError,
  value,
  bordered,
}) => {
  return (
    <>
      <div
        className={`${styles.input_wrapper} ${bordered ? styles.bordered : ""}`}
        style={{ width: width }}
      >
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
        {isError && <span className={styles.danger}>{isError}</span>}
      </div>
    </>
  );
};

export default Input;
