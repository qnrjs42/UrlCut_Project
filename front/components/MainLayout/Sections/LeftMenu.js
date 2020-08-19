import React from 'react';
import { Menu } from 'antd';
import Link from "next/link";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/">URL 안전검사</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/">부가 서비스</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu