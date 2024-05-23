import React from "react";
import Input from "../Input/Input";
import JobList from "../JobList/JobList";
import styles from "./CareersAt.module.scss";

const CareersAt = () => {
  return (
    <div className={styles.careers_container}>
      <div className={styles.service_header_container}>
        {/* <h2>Careers</h2> */}
        {/* <p>
          As the years progressed, Brisk Tech has developed a strong standing in
          the marketplace for delivering the best IT Solutions.
        </p> */}
        {/* <Input
          id="outlined-basic"
          label="Search Job"
          type="search"
          variant="outlined"
          fullWidth
        /> */}
      </div>
      <JobList />
      {/* <JobList />
      <JobList />
      <JobList />
      <JobList />
      <JobList /> */}
    </div>
  );
};

export default CareersAt;
