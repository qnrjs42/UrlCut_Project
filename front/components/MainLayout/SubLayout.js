import React, { useCallback, useState } from "react";
import { Row, Col, Button, Layout } from "antd";
import { WechatOutlined, PushpinFilled, TeamOutlined } from "@ant-design/icons";
import styled from "styled-components";

const RowWrapper = styled(Row)`
  padding-top: 3vh;
`;

const ColWrapper = styled(Col)`
  margin-right: 3vw;
`;

const SubLayout = () => {
  const [ImgName, setImgName] = useState("Chat");

  const onButtonClick = useCallback((e) => {
    setImgName(e);
  });

  return (
    <Layout className="layout sub-layout-one">
      <Row justify="center" style={{ textAlign: "center" }}>
        <Col xs={{ span: 22 }} md={{ span: 24 }}>
          <h1>링크는 CUT으로 간단하게, 그것뿐이니까</h1>
        </Col>
      </Row>
      <Row justify="center" style={{ textAlign: "center" }}>
        <Col xs={{ span: 21 }} md={{ span: 24 }}>
          <p className="sub-layout-font-medium">
            고객을 놓치지 않고 매출로 연결하며, 떠나간 고객도 메시지를 보내
            돌아오게 합니다. 꼭 필요한 팀 메신저도 무료로 제공됩니다.
          </p>
        </Col>
      </Row>
      <br />
      <RowWrapper justify="center">
        <ColWrapper>
          <Button
            type="dashed"
            icon={<WechatOutlined />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("Chat")}
          >
            채팅 상담
          </Button>
        </ColWrapper>

        <ColWrapper>
          <Button
            type="dashed"
            icon={<PushpinFilled />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("Marketing")}
          >
            마케팅
          </Button>
        </ColWrapper>

        <Col>
          <Button
            type="dashed"
            icon={<TeamOutlined />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("Team")}
          >
            팀 메신저
          </Button>
        </Col>
      </RowWrapper>

      <RowWrapper justify="center">
        <div className="sub-layout-one-image">
          <img src={`/static/${ImgName}.jpg`} />
        </div>
      </RowWrapper>
    </Layout>
  );
};

export default SubLayout;
