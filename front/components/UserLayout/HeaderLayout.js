import React, { useCallback } from "react";
import { Layout, Menu, Row, Col, Input, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { logoutRequestAction } from "../../reducers/reducer_user";

import DrawerSection from "./SiderSection/DrawerSection";

const { Header } = Layout;
const { Search } = Input;

const HeaderWrapper = styled(Header)`
  background-color: white;
  padding: 0px 20px;
`;

const RowPaddingTopWrapper = styled(Row)`
  padding-top: 12px;
`;

const SearchWrapper = styled(Search)`
  max-width: 60%;
  min-width: 40vw;
`;

const AvatarWrapper = styled(Avatar)`
  background-color: rgba(94, 203, 161, 0.9);
`;

const HeaderLayout = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
    setTimeout(() => Router.push("/"), 1000);
  });

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/user/[userPages]" as="/user/profile">
          <a>프로필 설정</a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={onLogout}>
        <a>로그아웃</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <RowPaddingTopWrapper>
        <DrawerSection />

        <Col xs={14}>
          <SearchWrapper
            className="user-header-serach user-header-button-icon"
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            size="large"
            enterButton
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
                <AvatarWrapper
                  className="user-header-button-icon"
                  size="large"
                  icon={<UserOutlined />}
                />
              </a>
            </Dropdown>
          </Row>
        </Col>
      </RowPaddingTopWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLayout;
