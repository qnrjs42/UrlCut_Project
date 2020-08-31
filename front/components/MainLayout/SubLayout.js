import React, { useCallback, useState } from "react";
import { Row, Col, Button, Layout } from "antd";
import { WechatOutlined, PushpinFilled, TeamOutlined } from "@ant-design/icons";

const SubLayout = () => {
  const [ImgName, setImgName] = useState("chat");

  const onButtonClick = useCallback(async (e) => {
    setImgName(e);
  }, []);

  return (
    <Layout className="layout sub-layout-one">
      <Row justify="center">
        <h1>링크는 CUT으로 간단하게, 그것뿐이니까</h1>
      </Row>
      <Row justify="center">
        <p className="sub-layout-font-medium">
          고객을 놓치지 않고 매출로 연결하며, 떠나간 고객도 메시지를 보내
          돌아오게 합니다. 꼭 필요한 팀 메신저도 무료로 제공됩니다.
        </p>
        <br />
      </Row>
      <Row justify="center" style={{ paddingTop: "3vh" }}>
        <Col style={{ marginRight: "3vw" }}>
          <Button
            type="dashed"
            icon={<WechatOutlined />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("chat")}
          >
            채팅 상담
          </Button>
        </Col>

        <Col style={{ marginRight: "3vw" }}>
          <Button
            type="dashed"
            icon={<PushpinFilled />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("marketing")}
          >
            마케팅
          </Button>
        </Col>

        <Col>
          <Button
            type="dashed"
            icon={<TeamOutlined />}
            size="large"
            className="sub-layout-button-size"
            onClick={() => onButtonClick("team")}
          >
            팀 메신저
          </Button>
        </Col>
      </Row>

      <Row justify="center" style={{ paddingTop: "3vh" }}>
        <div className="sub-layout-one-image">
          <img
            src={`/static/${ImgName}.jpg`}
            style={{ minWidth: "900px", width: "1200px", height: "700px" }}
          />
        </div>
      </Row>
    </Layout>
  );
};

export default SubLayout;
