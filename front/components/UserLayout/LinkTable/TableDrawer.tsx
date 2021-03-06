import React, { useEffect, useState } from "react";
import { Typography, Row, Drawer, Space, Divider, Mentions } from "antd";

import {
  ButtonPurpleWrapper,
  ButtonGreenWrapper,
} from "../../../css/overlap-styled";
import { IurlInfo } from "../../../interface";

const { Option } = Mentions;
const { Text, Link } = Typography;

type LinkDrawerProps = {
  RowClickData: IurlInfo | null;
};

// UserLayout - LinkTable
const LinkDrawer = (props: LinkDrawerProps) => {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    // table row를 클릭한 데이터가 있으면 drawer open
    if (props.RowClickData !== null) {
      setVisible(true);
    }
  }, [props.RowClickData]);

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
        <div>
          <Row justify="start">
            {props.RowClickData !== null ? (
              <Link target="_blank">{props.RowClickData.shortenUrl}</Link>
            ) : null}
            {/*  */}
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
            placeholder={
              props.RowClickData !== null
                ? props.RowClickData.originalUrl
                : undefined
            }
            readOnly
          >
            <Option value="afc163">afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
          </Mentions>
          <Row justify="space-between" style={{ paddingTop: "8px" }}>
            {props.RowClickData !== null ? (
              <p>생성일: {props.RowClickData.createdAt}</p>
            ) : null}

            <a>
              <Text type="danger">삭제</Text>
            </a>
          </Row>
        </div>

        <Divider />

        <div>
          <Row justify="space-between">
            {props.RowClickData !== null ? (
              <p>클릭 수: {props.RowClickData.clickCount} 클릭</p>
            ) : null}

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
};

export default LinkDrawer;
