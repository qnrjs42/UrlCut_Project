import React, {
  FunctionComponent,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import { Layout } from "antd";

import SiderMenu from "./UserLayout/SiderSection/SiderMenu";
import HeaderLayout from "./UserLayout/HeaderLayout";
import FooterLayout from "./UserLayout/FooterLayout";

type childrenType =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
const UserLayout: FunctionComponent<childrenType> = ({ children }) => {
  return (
    <div className="user">
      <Layout style={{ minHeight: "100vh" }}>
        <SiderMenu />

        <Layout className="site-layout">
          <HeaderLayout />
          {children}

          <FooterLayout />
        </Layout>
      </Layout>
    </div>
  );
};

export default UserLayout;
