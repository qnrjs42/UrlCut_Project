import React, { useCallback, useEffect } from "react";
import { Layout, Menu, Row, Col, Input, Avatar, Dropdown, Spin } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { logoutRequestAction } from "../../reducers/reducer_user";

import DrawerSection from "./SiderSection/DrawerSection";

const { Header } = Layout;
const { Search } = Input;
const antIcon = <LoadingOutlined spin />;

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
  const { logOutLoading, logOutDone, logInDone } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (logOutDone && !logInDone) {
      Router.push("/");
    }
  }, [logOutDone]);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
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
      <RowPaddingTopWrapper align="middle">
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
                {!logOutLoading ? (
                  <AvatarWrapper
                    className="user-header-button-icon"
                    size="large"
                    icon={<UserOutlined />}
                  />
                ) : (
                  <AvatarWrapper
                    className="user-header-button-icon"
                    size="large"
                    icon={<Spin indicator={antIcon} />}
                  />
                )}
              </a>
            </Dropdown>
          </Row>
        </Col>
      </RowPaddingTopWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLayout;
