import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Input, Avatar, Dropdown, Spin } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import { logoutRequestAction} from '../../actions/action_user'
import {
  SEARCH_URLS_REQUEST,
  RESET_SEARCH_URLS_REQUEST,
} from "../../actions/action_url";
import DrawerSection from "./SiderSection/DrawerSection";
import useInput from "../../hooks/useInput";

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
  const uRouter = useRouter();
  const { logOutLoading, logOutDone, logInDone } = useSelector(
    (state) => state.user
  );
  const { resetSearchUrlsDone } = useSelector((state) => state.url);
  const [SearchValue, onSearchValue, setSearchValue] = useInput("");

  useEffect(() => {
    if (logOutDone && !logInDone) {
      uRouter.push("/");
    }
  }, [logOutDone]);

  useEffect(() => {
    if (resetSearchUrlsDone) setSearchValue(null);
  }, [resetSearchUrlsDone]);

  const onSearch = useCallback((searchData) => {
    dispatch({
      type: SEARCH_URLS_REQUEST,
      data: searchData,
    });
    // 전체 링크관리 페이지로 이동해서 검색한 결과 출력
    uRouter.push("/user/[userPages]", "/user/manage_url");
  });

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href={"/user/[userPages]"} as={"/user/profile"}>
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
            value={SearchValue}
            onChange={onSearchValue}
            onSearch={(value) => onSearch(value)}
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
