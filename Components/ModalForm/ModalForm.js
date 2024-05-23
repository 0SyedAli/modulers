import React, { useState } from "react";
import styles from "./ModalForm.module.scss";
// import { Typography, Divider, TextField } from "@mui/material";
import Input from "../Input/Input";
import { DarkButton, LightButton } from "../Button/Button";
import validator from "validator";
import { message, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


const ModalForm = ({ setModal }) => {
  let [loading, setLoading] = useState(false);
  let [clientError, setClientError] = useState({});
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const [messageApi, contextHolder] = message.useMessage();

  const handleSend = () => {
    let isErr = false;
    let clientErr = {};
    if (!validator.isEmail(formData?.email)) {
      isErr = true;
      clientErr.email = "Email is invalid";
    }
    if (validator.isEmpty(formData?.name)) {
      isErr = true;
      clientErr.name = "Name is required";
    }
    if (validator.isEmpty(formData?.email)) {
      isErr = true;
      clientErr.email = "Email is required";
    }
    if (!formData?.resume?.name) {
      isErr = true;
      clientErr.resume = "Resume is required";
    }
    if (isErr) {
      isErr = false;
      setClientError(clientErr);
    } else {
      setClientError({});
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          resume: "",
        });
        messageApi.open({
          type: "success",
          content: "Successfully submited",
        });
        setModal(false);
      }, 2000);
    }
  };

  const checkIfFileIsPDF = (file) => {
    if (file?.type === "application/pdf") {
      return file;
    } else {
      messageApi.open({
        type: "error",
        content: "File format must be in pdf",
      });
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <div className={styles.modal_container}>
      {contextHolder}
      <div className={styles.modal_header_container}>
    
        <h3>We are always looking for new talent!</h3>
      </div>
      <div className={styles.modal_form_container}>
        <div className={styles.custom_input}>
          <Input
            value={formData?.name}
            isError={clientError?.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e?.target?.value })
            }
            placeholder="Full Name"
          />
        </div>
        <div className={styles.custom_input}>
          <Input
            value={formData?.email}
            isError={clientError?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e?.target?.value })
            }
            placeholder="Email"
          />
        </div>
        <div className={styles.custom_input}>
          <label
            for="getFile1"
            class="file_upload"
            className={styles.drop_zone_container}
          >
            <small>Drop your Resume here</small>
            <small>Or</small>
            <small className="primaryColor">Choose a file</small>
            <input
              type="file"
              id="getFile1"
              accept="application/pdf"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  resume: checkIfFileIsPDF(e?.target?.files[0]),
                });
              }}
            />
          </label>
          {clientError?.resume && (
            <span className={styles.danger}>{clientError?.resume}</span>
          )}
        </div>
        {formData?.resume && (
          <div className={styles.pdf_container}>
            <div className={styles.icon_and_name_container}>
              <Image
                preview={false}
                src={"/Assets/pdf-file.svg"}
                alt={"pdf file icon"}
              />
              <p>{formData?.resume?.name}</p>
            </div>
            <div className={styles.delete_icon_container}>
              <Image
                preview={false}
                src={"/Assets/delete_icon.svg"}
                alt={"delete icon"}
                onClick={() => setFormData({ ...formData, resume: "" })}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.btn_container}>
        <LightButton
          disabled={loading}
          text={!loading ? "Send" : <Spin indicator={antIcon} />}
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default ModalForm;
