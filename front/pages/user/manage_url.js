import React from "react";

import UserLayout from '../../components/UserLayout';
import LinkManageLayout from "../../components/UserLayout/Dashboard/LinkManageLayout";

const manage_url = () => {
  return (
    <>
        <UserLayout>
            <LinkManageLayout />
        </UserLayout>
    </>
  );
};

export default manage_url;
