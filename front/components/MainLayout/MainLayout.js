import React, { useCallback, useState } from "react";
import { Row, Col, Button, Input, Layout, Form, Card, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { urlCutRequestAction } from "../../reducers/reducer_url";

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const Main = () => {
    const dispatch = useDispatch();
    const urlInfo = useSelector((state) => state.url);
    const { me } = useSelector((state) => state.user);
    
    const [Url, setUrl] = useState("");
    const [ChangeUrl, setChangeUrl] = useState("");
    const [UrlLoading, setUrlLoading] = useState(false);
    const [Copyed, setCopyed] = useState(false);

    const [MainLayout, setMainLayout] = useState("main-layout-before");

    const onChangeUrl = useCallback((e) => {
      setChangeUrl(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
      setUrlLoading(true);
      setUrl(ChangeUrl);
      setCopyed(true);
      setMainLayout("main-layout-after");

      dispatch(urlCutRequestAction());

      setUrlLoading(false);
    }, [ChangeUrl]);

    return (
      <>
        <Layout className={`layout ${MainLayout}`}>
          <div className="main-bg-image"></div>
          <div className="main-bg-text">
            <FormWrapper onFinish={onSubmitForm}>
              <Row justify="center">
                <h1>링크는 간단하게 CUT</h1>
              </Row>

              <Row justify="center">
                {/* xs: <576, sm: >=576 md: >=768, lg: >=992, xl: >=1200 */}
                <Col
                  xs={32}
                  sm={15}
                  md={13}
                  lg={10}
                  xl={9}
                  style={{ textAlign: "center" }}
                >
                  <Input
                    size="large"
                    name="url"
                    placeholder="URL Paste"
                    value={ChangeUrl}
                    onChange={onChangeUrl}
                    required
                    autoComplete="off"
                    style={{
                      borderRadius: "0px",
                      padding: "0 0 0 11px",
                      height: "55px",
                    }}
                    prefix={<LinkOutlined />}
                    suffix={
                      <Button
                        type="primary"
                        style={{ height: "55px", borderRadius: "0px" }}
                        htmlType="submit"
                        loading={UrlLoading}
                      >
                        CUT
                      </Button>
                    }
                  />
                </Col>
              </Row>

              {Copyed ? (
                <Row justify="center" style={{ marginTop: "4vh" }}>
                  <Col xs={32} sm={14} md={12} lg={10} xl={7}>
                    <div className="site-card-border-less-wrapper">
                      <Card
                        title={Url}
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
                            style={{ height: "45px", borderRadius: "0px" }}
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

              <Row justify="center" style={{ marginTop: "4vh" }}>
                <p>URL이 너무 길다구요? 'CUT'하면 짧아지는 마술~</p>
              </Row>
            </FormWrapper>

            <Row justify="center" style={{ marginTop: "6vh" }}>
              <div className="main-image-container">
                <div className="main-image-list">
                  <div className="main-image-item main-image-margin">
                    <img src="../static/IU1.jpg" className="main-image-content" />
                  </div>
                  <div className="main-image-item main-image-margin">
                    <img src="../static/IU2.jpg" className="main-image-content" />
                  </div>
                  <div className="main-image-item">
                    <img src="../static/IU3.jpg" className="main-image-content" />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Layout>
      </>
    );
}

export default Main