import React, {useCallback} from 'react'
import { Row, Col, Button, Input, Layout, Menu, Dropdown} from "antd";
import {
  LinkOutlined,
  DownOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuItemGroup } from 'rc-menu';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const AppLayout = () => {

  const handleClick = useCallback((e) => {
    console.log("click ", e);

  }, []);

  return (
    <>
      <Layout className="layout">
        <div className="nav" style={{ marginTop: "5vh" }}>
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="1">Main</Menu.Item>
            <Menu.Item key="2">URL 안전검사</Menu.Item>
            <Menu.Item key="3">부가 서비스</Menu.Item>

            <Menu.Item key="6" style={{ float: "right" }}>
              회원가입
            </Menu.Item>

            <Menu.Item key="5" style={{ float: "right" }}>
              로그인
            </Menu.Item>

            <SubMenu
              style={{ float: "right" }}
              title={<span>서비스 안내</span>}
            >
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
          {/* <Row>
            <Col span={2} offset={3}>
              Main
            </Col>
            <Col span={2}>URL 안전검사</Col>
            <Col span={2}>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  부가 서비스 <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={2} offset={7}>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  서비스 안내 <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={2}>로그인</Col>
            <Col span={2}>회원가입</Col>
          </Row> */}
        </div>

        <Content style={{ padding: "0 50px", margin: "16px 0" }}>
          <Row justify="center">
            <h2>링크는 간단하게 CUT</h2>
          </Row>

          <Row justify="center">
            <Col
              xs={{ span: 32 }}
              md={{ span: 16 }}
              lg={{ span: 7 }}
              style={{ textAlign: "center" }}
            >
              <Input
                size="large"
                placeholder="URL Paste"
                style={{ borderRadius: "0px" }}
                prefix={<LinkOutlined />}
                suffix={
                  <Button
                    type="primary"
                    style={{ height: "40px", borderRadius: "0px" }}
                  >
                    CUT
                  </Button>
                }
              />
            </Col>
          </Row>

          <Row justify="center">
            <p>loeram</p>
          </Row>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          We Are ©2020 Created by Ant UED
        </Footer>
      </Layout>
      ,
    </>
  );
};

export default AppLayout;
