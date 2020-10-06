import React from "react";
import { Row, Button } from "antd";
import {
  SubnodeOutlined,
  PlusOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import styled from "styled-components";

const SubnodeOutlinedWrapper = styled(SubnodeOutlined)`
  font-size: 50px;
`;

const InfoCircleTwoToneWrapper = styled(InfoCircleTwoTone)`
  font-size: 60px;
`;

export const SwitchOffLeftLayout = ({
  onModalDisplay,
  ButtonPurpleWrapper,
}) => {
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <SubnodeOutlinedWrapper />
      </Row>
      <br />
      <Row gutter={[16, 16]} justify="center">
        <ButtonPurpleWrapper
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => onModalDisplay()}
        >
          멀티링크 생성
        </ButtonPurpleWrapper>
      </Row>
    </>
  );
};

export const SwitchOffRightLayout = () => {
  return (
    <>
      <Row justify="center">
        <InfoCircleTwoToneWrapper />
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
        style={{ padding: 10, minHeight: 200, backgroundColor: "#a566ff" }}
      ></div>
      <br />
      <br />
      <Row justify="center">by Link_Project</Row>
    </>
  );
};
