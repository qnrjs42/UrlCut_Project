import React from "react";

import MainLayout from './MainLayout/MainLayout';
import SubLayout from "./MainLayout/SubLayout";
import SecondSubLayout from "./MainLayout/SecondSubLayout";
import FooterLayout from "./MainLayout/FooterLayout";

const AppLayout = () => {

  return (
    <>
      <MainLayout />
      <SubLayout />
      <SecondSubLayout />
      <FooterLayout />
    </>
  );
};

export default AppLayout;
