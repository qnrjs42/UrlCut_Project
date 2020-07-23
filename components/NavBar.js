import React from 'react';
import {
  Menu,
} from "antd";
import { MenuItemGroup } from "rc-menu";
import Link from "next/link";

const { SubMenu } = Menu;

const NavBar = () => {
    return (
      <div className="nav" style={{ marginTop: "1vh" }}>
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Link href="/"><a>Main</a></Link>
          </Menu.Item>
          <Menu.Item key="2">URL 안전검사</Menu.Item>
          <Menu.Item key="3">부가 서비스</Menu.Item>

          <Menu.Item key="signUp" style={{ float: "right" }}>
            회원가입
          </Menu.Item>

          <Menu.Item key="logIn" style={{ float: "right" }}>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </Menu.Item>

          <SubMenu style={{ float: "right" }} title={<span>서비스 안내</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </div>
    );
}

export default NavBar;
