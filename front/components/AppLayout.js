import React from "react";

import NavBar from './MainLayout/NavBar';
import MainLayout from './MainLayout/MainLayout';
import SubLayout from "./MainLayout/SubLayout";
import SecondSubLayout from "./MainLayout/SecondSubLayout";
import FooterLayout from "./MainLayout/FooterLayout";

const AppLayout = () => {

  return (
    <>
      <NavBar />
      <MainLayout />
      <SubLayout />
      <SecondSubLayout />
      <FooterLayout />
    </>
  );
};

export default AppLayout;
