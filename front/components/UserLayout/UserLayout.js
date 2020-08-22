import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Input, Avatar, Dropdown } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  DownOutlined,
} from "@ant-design/icons";

import SiderMenu from './SiderSection/SiderMenu';
import HeaderLayout from './HeaderLayout';
import MainManageLayout from './Dashboard/MainManageLayout';


const { Footer } = Layout;

const UserLayout = () => {
    return (
      <div className="user">
        <Layout style={{ minHeight: "100vh" }}>
          <SiderMenu />

          <Layout className="site-layout">
            <HeaderLayout />
            <MainManageLayout />

            <Row className="footer-terms" justify="center">
              We Are ©2020 Created by sistinafibel And qnrjs42
            </Row>
          </Layout>
        </Layout>
      </div>
    );
}

export default UserLayout
