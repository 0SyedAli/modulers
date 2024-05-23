import React from "react";
import CareersAt from "../Components/CareersAt/CareersAt";
import CareersHeroHeader from "../Components/CareersHeroHeader/CareersHeroHeader";
import BasicLayout from "../Layouts/BasicLayout/BasicLayout";

const Careers = () => {
  return (
    <BasicLayout>
      <CareersHeroHeader />
      <CareersAt />
    </BasicLayout>
  );
};

export default Careers;
