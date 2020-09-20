import React, { forwardRef, useState, useImperativeHandle } from "react";
import {
  Typography,
  Row,
  Col,
  Drawer,
  Button,
  Space,
  Divider,
  Mentions,
} from "antd";

import {
  ButtonPurpleWrapper,
  ButtonGreenWrapper,
} from "../../css/overlap-styled";

const { Option } = Mentions;
const { Text, Link } = Typography;

// UserLayout - LinkTable
const LinkDrawer = forwardRef((props, ref) => {
  const [Visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showDrawer() {
      setVisible(true);
    },
  }));

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="링크 정보"
        placement="right"
        width={350}
        closable={false}
        onClose={onClose}
        visible={Visible}
      >
        {/* {console.log(props.RowClickData)} */}
        <div>
          <Row justify="start">
            <Link target="_blank">{props.RowClickData.shortenUrl}</Link>
          </Row>
          <Row justify="end">
            <Space>
              <ButtonGreenWrapper>수정</ButtonGreenWrapper>
              <ButtonPurpleWrapper>링크 복사</ButtonPurpleWrapper>
            </Space>
          </Row>
        </div>

        <Divider />

        <div>
          <Mentions
            style={{ width: "100%", height: "120px" }}
            placeholder={props.RowClickData.originalUrl}
            readOnly
          >
            <Option value="afc163">afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
          </Mentions>
          <Row justify="space-between" style={{ paddingTop: "8px" }}>
            <p>생성일: {props.RowClickData.createdAt}</p>
            <a>
              <Text type="danger">삭제</Text>
            </a>
          </Row>
        </div>

        <Divider />

        <div>
          <Row justify="space-between">
            <p>클릭 수: {props.RowClickData.clickCount} 클릭</p>
            <a>통계페이지 이동</a>
          </Row>

          <div style={{ textAlign: "right" }}>
            <a>
              <Text>보관함 이동</Text>
            </a>

            <br />
            <a>
              <Text>QR코드</Text>
            </a>
            <br />
            <a>
              <Text>Facebook 공유</Text>
            </a>
            <br />
            <a>
              <Text>Twitter 공유</Text>
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
});

export default LinkDrawer;
