import React, { useCallback, useState } from "react";
import { Row, Col, Button, Input, Layout, Form, Card, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { urlCutRequestAction } from "../../reducers/reducer_url";

/* Did't use css/overlap-styled */
const FormWrapper = styled(Form)`
  padding: 150px 10px 10px 10px;
`;

const InputWrapper = styled(Input)`
  border-radius: 25px;
  border-color: white !important;
  outline: none !important;
  padding: 0 0 0 11px;
  border-right: 0;
  height: 55px;
`;

const ButtonWrapper = styled(Button)`
  height: 55px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 90px;
  background-color: rgba(113, 117, 216, 0.8);
  border-color: rgba(113, 117, 216, 0.8);

  &:hover {
    background-color: rgba(113, 117, 216, 0.3);
    border-color: rgba(113, 117, 216, 0.3);
  }

  span {
    color: #fff;
  }
`;

const ColWrapper = styled(Col)`
  text-align: center;
`;

const RowWrapper = styled(Row)`
  margin-top: 4vh;
`;

const CardWrapper = styled(Card)`
  border-radius: 20px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const { urlCutLoading, urlCutDone, shortenUrl } = useSelector(
    (state) => state.url
  );

  const [OriginalUrl, setOriginalUrl] = useState("");
  const [ChangeUrl, setChangeUrl] = useState("");

  const onChangeUrl = useCallback((e) => {
    setChangeUrl(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    setOriginalUrl(ChangeUrl);

    dispatch(urlCutRequestAction());
  }, [ChangeUrl]);

  return (
    <Layout className="layout main-layout">
      <div>
        <FormWrapper onFinish={onSubmitForm}>
          <Row justify="center">
            <h1>링크는 간단하게 CUT</h1>
          </Row>
          <Row justify="center">
            {/* xs: <576, sm: >=576 md: >=768, lg: >=992, xl: >=1200 */}
            <ColWrapper xs={23} sm={23} md={17} lg={15} xl={10}>
              <InputWrapper
                size="large"
                name="url"
                placeholder="URL Paste"
                value={ChangeUrl}
                onChange={onChangeUrl}
                required
                autoComplete="off"
                prefix={<LinkOutlined />}
                suffix={
                  <ButtonWrapper
                    type="primary"
                    htmlType="submit"
                    loading={urlCutLoading}
                  >
                    <span>CUT</span>
                  </ButtonWrapper>
                }
              />
            </ColWrapper>
          </Row>

          {/* url cut이 끝나면 단축된 링크 노출 */}
          {urlCutDone ? (
            <RowWrapper justify="center">
              <Col xs={23} sm={23} md={17} lg={15} xl={10}>
                <div className="site-card-border-less-wrapper">
                  <CardWrapper title={OriginalUrl} bordered={false}>
                    <div>
                      <p
                        style={{
                          display: "inline-block",
                          marginRight: "5px",
                        }}
                      >
                        단축링크 : {shortenUrl}
                      </p>
                      <p style={{ display: "inline-block" }}></p>
                    </div>
                    <Divider dashed />
                    <div style={{ textAlign: "center" }}>
                      {/* <ButtonWrapper type="primary" size="large">
                        로그인
                      </ButtonWrapper> */}
                      <img src="../../static/QRCodeImg_153.jpg" />
                    </div>
                  </CardWrapper>
                </div>
              </Col>
            </RowWrapper>
          ) : (
            <div></div>
          )}

          <RowWrapper justify="center">
            <p>URL이 너무 길다구요? 'CUT'하면 짧아지는 마술~</p>
          </RowWrapper>
        </FormWrapper>

        <RowWrapper justify="center">
          <div className="main-image-container">
            <div className="main-image-list">
              <div className="main-image-item main-image-margin">
                <img src="/static/IU1.jpg" className="main-image-content" />
              </div>
              <div className="main-image-item main-image-margin">
                <img src="/static/IU2.jpg" className="main-image-content" />
              </div>
              <div className="main-image-item">
                <img src="/static/IU3.jpg" className="main-image-content" />
              </div>
            </div>
          </div>
        </RowWrapper>
      </div>
    </Layout>
  );
};

export default Main;
