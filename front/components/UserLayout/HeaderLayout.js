import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  Avatar,
  Dropdown,
} from "antd";
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

import DrawerSection from "./SiderSection/DrawerSection";

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

const HeaderLayout = () => {
  return (
    <Header style={{ backgroundColor: "white" , padding: '0 20px'}}>
      <Row>
        <DrawerSection />

        <Col xs={14}>
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
        <Col flex={2}> 
        <Row justify="end">          
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
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderLayout;
