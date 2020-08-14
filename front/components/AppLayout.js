import React, { useCallback, useState } from "react";
import {
  Row,
  Col,
  Button,
  Layout,
} from "antd";
import {
  WechatOutlined,
  PushpinFilled,
  TeamOutlined,
} from "@ant-design/icons";

import MainLayout from './MainLayout';
import SubLayout from './SubLayout';

const { Footer } = Layout;

const AppLayout = () => {
  const [ImgName, setImgName] = useState('chat');

  const onButtonClick = useCallback(async (e) => {
    setImgName(e);
  
  }, []);
  

  return (
    <>
      <MainLayout />
      <SubLayout />

      
      <br />

      <Layout
        className="layout"
        style={{ height: "60vh", backgroundColor: "#fafaf9" }}
      >
        <div>레이아웃3</div>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        We Are ©2020 Created by Ant UED
      </Footer>
    </>
  );
};

export default AppLayout;
