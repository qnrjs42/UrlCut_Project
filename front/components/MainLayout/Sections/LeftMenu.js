import React from "react";
import { Menu } from "antd";
import Link from "next/link";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="2">
        <Link href="/">
          <a>URL 안전검사</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/">
          <a>부가 서비스</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
