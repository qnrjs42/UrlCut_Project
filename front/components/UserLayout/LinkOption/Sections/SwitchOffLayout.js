import React from "react";
import { Row, Button } from "antd";
import {
  SubnodeOutlined,
  PlusOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

export const SwitchOffLeftLayout = ({ onModalDisplay, ButtonWrapper }) => {
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <SubnodeOutlined style={{ fontSize: 50 }} />
      </Row>
      <br />
      <Row gutter={[16, 16]} justify="center">
        <ButtonWrapper
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => onModalDisplay()}
        >
          멀티링크 생성
        </ButtonWrapper>
      </Row>
    </>
  );
};

export const SwitchOffRightLayout = () => {
  return (
    <>
      <Row justify="center">
        <InfoCircleTwoTone style={{ fontSize: 60 }} />
      </Row>
      <br />
      <Row justify="center">
        <h2>메뉴링크 샘플</h2>
      </Row>
      <Row justify="center">멀티링크에 소개글을 입력하실 수 있습니다.</Row>
      <br />
      <Row justify="center">
        <Button shape="round" block>
          아직 생성된 멀티링크가 없습니다.
        </Button>
      </Row>
      <br />
      <Row justify="center">
        <Button shape="round" block>
          다양한 멀티링크의 기능을 활용해 보세요.
        </Button>
      </Row>
      <br />
      <br />
      <div
        className="site-layout-background"
        style={{
          padding: 10,
          minHeight: 200,
          backgroundColor: "#A566FF",
        }}
      ></div>
      <br />
      <br />
      <Row justify="center">by Link_Project</Row>
    </>
  );
};
