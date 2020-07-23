import React, { useCallback, useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Layout,
  Menu,
  Dropdown,
  Form,
  Card,
  Divider,
} from "antd";
import {
  LinkOutlined,
  DownOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import { MenuItemGroup } from "rc-menu";
import { useDispatch, useSelector } from 'react-redux';
import { urlCutRequestAction } from "../reducers/reducer_url";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const AppLayout = () => {
  const dispatch = useDispatch();
  const urlInfo = useSelector(state => state.url);

  const [url, setUrl] = useState("");
  const [changeUrl, setChangeUrl] = useState('');
  const [copyed, setCopyed] = useState(false);

  const onChangeUrl= useCallback((e) => {
    setChangeUrl(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    setUrl(changeUrl);
    setCopyed(true);

    dispatch(urlCutRequestAction());

  }, [changeUrl])

  return (
    <>
      <Layout className="layout">
        <div className="nav" style={{ marginTop: "5vh" }}>
          <Menu mode="horizontal">
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
        </div>

        <Content style={{ padding: "0 50px", margin: "16px 0" }}>
          <FormWrapper onFinish={onSubmitForm}>
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
                  name="url"
                  placeholder="URL Paste"
                  value={changeUrl}
                  onChange={onChangeUrl}
                  required
                  autoComplete="off"
                  style={{ borderRadius: "0px" }}
                  prefix={<LinkOutlined />}
                  suffix={
                    <Button
                      type="primary"
                      style={{ height: "40px", borderRadius: "0px" }}
                      htmlType="submit"
                    >
                      CUT
                    </Button>
                  }
                />
              </Col>
            </Row>

            {copyed ? (
              <Row justify="center" style={{ margin: "4vh 0 4vh 0" }}>
                <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 7 }}>
                  <div className="site-card-border-less-wrapper">
                    <Card
                      title={url}
                      bordered={false}
                      style={{ borderRadius: "0px" }}
                    >
                      <div>
                        <p
                          style={{
                            display: "inline-block",
                            marginRight: "5px",
                          }}
                        >
                          단축링크 : {urlInfo.url}
                        </p>
                        <p style={{ display: "inline-block" }}></p>
                      </div>
                      <Divider dashed />
                      <div style={{ textAlign: "center" }}>
                        <Button
                          type="primary"
                          size="large"
                          style={{ borderRadius: "0px" }}
                        >
                          로그인
                        </Button>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            ) : (
              <div></div>
            )}

            <Row justify="center">
              <p>loeram</p>
            </Row>
          </FormWrapper>
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
