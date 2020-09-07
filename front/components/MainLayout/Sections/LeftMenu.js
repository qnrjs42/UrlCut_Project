import React from "react";
import { Menu } from "antd";
import Link from "next/link";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home" className="main-nav-home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="url_check">
        <Link href="/">
          <a>URL 안전검사</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="service">
        <Link href="/">
          <a>부가 서비스</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
