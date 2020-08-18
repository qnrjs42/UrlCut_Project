import React from "react";

import MainLayout from './MainLayout';
import SubLayout from './SubLayout';
import SecondSubLayout from "./SecondSubLayout";
import FooterLayout from "./FooterLayout";

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
