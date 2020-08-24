import React from "react";

import UserLayout from "../../components/UserLayout";
import MainManageLayout from "../../components/UserLayout/Dashboard/MainManageLayout";

const UserIndex = () => {

  return (
    <>
      <UserLayout>
        <MainManageLayout />
      </UserLayout>
    </>
  );
};

export default UserIndex;
