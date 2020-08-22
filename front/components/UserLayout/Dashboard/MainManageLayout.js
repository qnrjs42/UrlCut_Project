import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Button, Card} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  DownOutlined,
  DownloadOutlined,
  LinkOutlined
} from "@ant-design/icons";
import HeaderLayout from '../HeaderLayout';


const { Content } = Layout;

const MainManageLayout = () => {
    return (
        <Content style={{ margin: "20px 16px" }}>
            <Row justify="end" st> 
                <Button type="primary" icon={<LinkOutlined />} size="large">
                    단축 URL 추가
                </Button>
            </Row>

            <Row gutter={[16, 16]} justify="center" style={{ paddingTop: '20px' }}>
                <Col xs={16}>
                    <Card style={{ height: 350 }}>
                        <p>Test</p>
                    </Card>
                </Col>
                <Col xs={16}>
                    <Card style={{ height: 350 }}>
                        <p>Test</p>
                    </Card>
                </Col>
            </Row>
            <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
            ></div>
      </Content>
    )
}

export default MainManageLayout