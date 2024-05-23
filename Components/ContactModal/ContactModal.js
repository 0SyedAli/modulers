import { Select } from "antd";
import React, { useState, useEffect } from "react";
import styles from "./ContactModal.module.scss";
import TextArea from "../TextArea/TextArea";
import Input from "../Input/Input";
import { LightButton } from "../Button/Button";
import { useForm, ValidationError } from "@formspree/react";
import { message } from "antd";
import validator from "validator";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {RxCross2} from 'react-icons/rx'

const ContactModal = ({ setModal }) => {

  const [size, setSize] = useState("middle");
  let [clientErr, setClientErr] = useState({});
  let [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [UserInfo, SetUserInfo] = useState({
    Name: "",
    Email: "",
    Phone: "",
    SkpeID: "",
    textarea: "",
    getSelect: "",
  });
  const options = [
    {
      label: "Software Development",
      value: "software-development",
    },
    {
      label: "Team Extension",
      value: "team-extension",
    },
    {
      label: "DevOps",
      value: "devops",
    },
    {
      label: "Application Development",
      value: "application-development",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  let name, value, Option;
  const getUserData = (event) => {
    name = event.target.name;
    Option = Select.Option;
    value = event.target.value;
    SetUserInfo({ ...UserInfo, [name]: value });
  };
  const FormDataSubmit = (data) => {
    let isErr = false;
    let clientError = {};

    if (!validator.isEmail(data.Email)) {
      isErr = true;
      clientError.Email = "Email is Invalid";
    }
    if (validator.isEmpty(data.Name)) {
      isErr = true;
      clientError.Name = "Name is Required";
    }
    if (validator.isEmpty(data.Email)) {
      isErr = true;
      clientError.Email = "Email is Required";
    }
    if (validator.isEmpty(data.Phone)) {
      isErr = true;
      clientError.Phone = "Phone is Required";
    }
    if (validator.isEmpty(data.SkpeID)) {
      isErr = true;
      clientError.SkpeID = "SkpeID is Required";
    }
    if (validator.isEmpty(data.getSelect)) {
      isErr = true;
      clientError.getSelect = "Please Select a value";
    
    }
    if (isErr) {
      isErr = false;
      setClientErr(clientError);
      

    } else {
      setIsLoading(true);
      handleSubmit(data);
      setModal(false)
      

    }
  };


  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const [state, handleSubmit] = useForm("xwkyyzar");
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
    }
  }, [state]);
  useEffect(() => {
    if (isSuccess) {
      setClientErr({});
      setIsLoading(false);
      SetUserInfo({
        Name: "",
        Email: "",
        Phone: "",
        SkpeID: "",
        textarea: "",
        getSelect: "",
      });
      success();
      // setIsSuccess(false);
    }
  }, [isSuccess]);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <>
     <div className={styles.contact_us_container}>
     {contextHolder}
     <div className={styles.contact_us_box}>
       <section className={styles.form_container}>
        <div className={styles.cancel_button}>
       <button onClick={() => setModal(false) } >
          <RxCross2 />
        </button>    
        </div>
         <h1>Contact Us</h1>
         <div className={styles.contactUs_inputs}>
           <div className={styles.inputs_container}>
             <div className={styles.inputs}>
               <Input
                 type="text"
                 placeholder="Name"
                 name="Name"
                 value={UserInfo.Name}
                 onChange={(e) => {
                   SetUserInfo({ ...UserInfo, Name: e?.target?.value });
                 }}
                 isError={clientErr?.Name}
                 
               />
               <Input
                 type="email"
                 placeholder="Email Address"
                 name="Email"
                 value={UserInfo.Email}
                 onChange={getUserData}
                 isError={clientErr?.Email}
               />
             </div>
             <div className={styles.inputs}>
               <Input
                 type="tel"
                 name="Phone"
                 placeholder="Phone Number"
                 value={UserInfo.Phone}
                 onChange={getUserData}
                 isError={clientErr?.Phone}
               />
               <Input
                 type="text"
                 placeholder="Skype ID"
                 name="SkpeID"
                 value={UserInfo.SkpeID}
                 onChange={getUserData}
                 isError={clientErr?.SkpeID}
               />
             </div>
           </div>
           <div className={styles.select_wrapper}>
             <Select
               size={size}
               value={
                 UserInfo.getSelect ? UserInfo.getSelect : "Your Interest"
               }
               onChange={(e) => SetUserInfo({ ...UserInfo, getSelect: e })}
               showArrow={true}
               style={{
                 width: "100%",
                 border: "none",
               }}
               options={options}
             />
             {clientErr?.getSelect && (
               <span className={styles.danger}>{clientErr?.getSelect}</span>
             )}
           </div>

           <TextArea
             name="textarea"
             placeholder="Message"
             width="100%"
             value={UserInfo.textarea}
             onChange={getUserData}
           />
         </div>
         <div className={styles.form_button}>
           <LightButton
             text={!isLoading ? "Send Now" : <Spin indicator={antIcon} />}
             onClick={() => FormDataSubmit(UserInfo)}
           />
         </div>
       </section>
     </div>
   </div>   
    </>
  );
};

export default ContactModal;
