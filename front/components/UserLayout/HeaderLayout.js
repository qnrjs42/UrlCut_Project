import React from "react";
import { Layout, Menu, Row, Col, Input, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

import DrawerSection from "./SiderSection/DrawerSection";

const { Header } = Layout;
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
    <Header style={{ backgroundColor: "white", padding: "0 20px" }}>
      <Row>
        <DrawerSection />

        <Col xs={14}>
          <Search
            className="user-header-serach user-header-button-icon"
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
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar
                  className="user-header-button-icon"
                  size="large"
                  icon={<UserOutlined />}
                  style={{ backgroundColor: "rgba(94, 203, 161, 0.9)" }}
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
