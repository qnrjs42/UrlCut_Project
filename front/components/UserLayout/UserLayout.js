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

import SiderMenu from './SiderMenu';


const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>프로필 설정</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a>로그아웃</a>
    </Menu.Item>
  </Menu>
);

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
            <Header style={{ backgroundColor: "white" }}>
              <Row gutter={[16, 16]}>
                <Col span={16}>
                  <Search
                    placeholder="input search text"
                    onSearch={(value) => console.log(value)}
                    size="large"
                    enterButton
                    style={{
                      paddingTop: "12px",
                      maxWidth: "60%",
                      minWidth: "40vw",
                    }}
                  />
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                  <Dropdown overlay={menu} trigger={["click"]} placement="bottomCenter">
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar
                        size="large"
                        icon={<UserOutlined />}
                        style={{ backgroundColor: "#3880FF" }}
                      />
                    </a>
                  </Dropdown>
                </Col>
              </Row>
            </Header>

            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              ></div>
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
