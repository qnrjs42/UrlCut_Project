import React, { useCallback, useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Layout,
  Form,
  Card,
  Divider,
} from "antd";
import {
  LinkOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import MainLayout from './Main';

const { Header, Content, Footer } = Layout;


const AppLayout = () => {

  return (
    <>
      <MainLayout />

      <Layout
        className="layout"
        style={{ height: "60vh", backgroundColor: "#fafaf9", paddingTop: '80px' }}
      >
        <Row justify="center" style={{ top: "50%" }}>
          <h1>링크는 CUT으로 간단하게, 그것뿐이니까</h1>
          <p>고객을 놓치지 않고 매출로 연결하며, 떠나간 고객도 메시지를 보내 돌아오게 합니다.
            꼭 필요한 팀 메신저도 무료로 제공됩니다.
          </p>
        </Row>
      </Layout>
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
