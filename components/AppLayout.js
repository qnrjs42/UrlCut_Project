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

import { useDispatch, useSelector } from 'react-redux';
import { urlCutRequestAction } from "../reducers/reducer_url";

const { Header, Content, Footer } = Layout;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const AppLayout = () => {
  const dispatch = useDispatch();
  const urlInfo = useSelector(state => state.url);
  const { me } = useSelector((state) => state.user);

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
      <Layout className="layout" style={{ height: "60vh" }}>
        <FormWrapper onFinish={onSubmitForm} style={{ padding: "5% 0" }}>
          <Row justify="center">
            <h2>링크는 간단하게 CUT</h2>
          </Row>

          <Row justify="center">
            {/* xs: <576, sm: >=576 md: >=768, lg: >=992, xl: >=1200 */}
            <Col
              xs={32}
              sm={14}
              md={12}
              lg={10}
              xl={7}
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
              <Col xs={32} sm={14} md={12} lg={10} xl={7}>
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
      </Layout>
      <br />

      <Layout className="layout" style={{ height: "60vh" }}>
        <div>레이아웃2</div>
      </Layout>
      <br />

      <Layout className="layout" style={{ height: "60vh" }}>
        <div>레이아웃3</div>
      </Layout>
      
      <Footer style={{ textAlign: "center" }}>
        We Are ©2020 Created by Ant UED
      </Footer>
    </>
  );
};

export default AppLayout;
