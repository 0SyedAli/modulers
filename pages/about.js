import React from "react";
import AboutCompany from "../Components/AboutCompany/AboutCompany";
import AboutHeroHeader from "../Components/AboutHeroHeader/AboutHeroHeader";
import OverValues from "../Components/OurValues/OurValues";
import Stats from "../Components/Stats/Stats";
import BasicLayout from "../Layouts/BasicLayout/BasicLayout";

const about = () => {
  return (
    <BasicLayout>
      <AboutHeroHeader />
      <AboutCompany />
      <OverValues />
      {/* <Stats /> */}
    </BasicLayout>
  );
};

export default about;
