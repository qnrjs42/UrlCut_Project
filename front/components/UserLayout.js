import React from 'react';
import { Layout,  Row } from "antd";
import PropTypes from 'prop-types';

import SiderMenu from './UserLayout/SiderSection/SiderMenu';
import HeaderLayout from './UserLayout/HeaderLayout';
import FooterLayout from './UserLayout/FooterLayout';

const UserLayout = ({ children }) => {
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
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserLayout
