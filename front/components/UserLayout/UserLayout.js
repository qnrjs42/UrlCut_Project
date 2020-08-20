import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Input } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from "@ant-design/icons";

import SiderMenu from './SiderMenu';

const { Header, Content, Footer, Sider } = Layout;

const UserLayout = () => {
    const [Cllapsed, setCllapsed] = useState(false);


    const toggle = () => {
      setCllapsed(!Cllapsed);
    };


    return (
      <div className="user">
        <Layout style={{ minHeight: "100vh" }}>
          <SiderMenu />

          <Layout className="site-layout">
            
            <Header className="site-layout-background" style={{ padding: 0 }} />

            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Row className="footer-terms" justify="center">
              We Are ©2020 Created by sistinafibel And qnrjs42
            </Row>
          </Layout>
        </Layout>
      </div>
    );
}

export default UserLayout
