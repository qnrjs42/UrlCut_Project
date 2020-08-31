import React, { useState, useCallback } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Card,
  Switch,
  Modal,
  Input,
  Radio,
} from "antd";
import { SubnodeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";

import useInput from "../../../hooks/useInput";
import {
  SwitchOffLeftLayout,
  SwitchOffRightLayout,
} from "./Sections/SwitchOffLayout";
import {
  SwitchOnLeftLayout,
  SwitchOnRightLayout,
} from "./Sections/SwitchOnLayout";
import { OptionOnLayout } from "./Sections/OptionOnLayout";

const { Content } = Layout;
const { Title, Text } = Typography;

const ButtonWrapper = styled(Button)`
  border-radius: 5px;
  background-color: rgba(113, 117, 216, 0.9);
  border-color: rgba(113, 117, 216, 0.9);

  &:hover {
    background-color: rgba(113, 117, 216, 0.7);
    border-color: rgba(113, 117, 216, 0.7);
  }

  span {
    color: #f6f6f6;
  }
`;

const MultiLinkLayout = () => {
  const [MultiLinkCreateOnOff, setMultiLinkCreateOnOff] = useState(false); // 멀티링크 생성 유무
  const [OptionOnOff, setOptionOnOff] = useState(false); // 멀티링크 - 옵션 클릭 유무
  const [CreateModal, setCreateModal] = useState(false); // 멀티링크 생성 버튼 모달
  const [RadioPublicPrivate, onRadioChange, setRadioPublicPrivate] = useInput(
    1
  ); // 모달 - 라디오 버튼

  const onSwitchChange = useCallback(() => {
    setMultiLinkCreateOnOff(!MultiLinkCreateOnOff);
  });

  const onOptionChange = useCallback(() => {
    setOptionOnOff(!OptionOnOff);
  });

  const onModalDisplay = useCallback(() => {
    setCreateModal(true);
  });

  const onMultiLinkCreateOk = useCallback(() => {
    setCreateModal(false);
  });

  // 모달 밖, 화면을 클릭해도 Cancel
  const onMultiLinkCreateCancel = useCallback(() => {
    setCreateModal(false);
  });

  // 멀티링크 없을 때
  let SwitchOptionLeftLayout = (
    <SwitchOffLeftLayout
      onModalDisplay={onModalDisplay}
      ButtonWrapper={ButtonWrapper}
    />
  );

  // 멀티링크는 생겨났지만 옵션은 클릭 안 했을 때
  if (MultiLinkCreateOnOff && !OptionOnOff) {
    SwitchOptionLeftLayout = <SwitchOnLeftLayout />;

    // 멀티링크 만들었고, 옵션 눌렀을 때
  } else if (MultiLinkCreateOnOff && OptionOnOff) {
    SwitchOptionLeftLayout = <OptionOnLayout />;

    // 멀티링크 없을 때
  } else {
    SwitchOptionLeftLayout = (
      <SwitchOffLeftLayout
        onModalDisplay={onModalDisplay}
        ButtonWrapper={ButtonWrapper}
      />
    );
  }

  return (
    <>
      <Content style={{ margin: "20px 16px" }}>
        <Modal
          title={<h3>멀티링크 생성</h3>}
          visible={CreateModal}
          onOk={onMultiLinkCreateOk}
          onCancel={onMultiLinkCreateCancel}
          footer={[
            <Button key="back" onClick={onMultiLinkCreateCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={onMultiLinkCreateOk}>
              Submit
            </Button>,
          ]}
        >
          <Title level={4}>멀티링크 제목</Title>
          <Input placeholder="멀티링크 제목을 입력하세요" bordered={false} />
          <br />
          <br />
          <br />

          <Title level={5}>
            아래 옵션이 비공개로 설정된 경우 멀티링크가 비활성화됩니다.
          </Title>
          <Radio.Group onChange={onRadioChange} value={RadioPublicPrivate}>
            <Radio value={1}>공개</Radio>
            <Radio value={2}>비공개</Radio>
          </Radio.Group>
        </Modal>

        <Row justify="space-between">
          <Col style={{ paddingTop: 10 }}>
            <h3>멀티링크</h3>
          </Col>
          <Col>
            멀티링크 유무 <ArrowRightOutlined />
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onSwitchChange}
            />
            {MultiLinkCreateOnOff ? (
              <>
                멀티링크 있고, 설정 유무 <ArrowRightOutlined />
                <Switch
                  checkedChildren="On"
                  unCheckedChildren="Off"
                  onChange={onOptionChange}
                />
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col>
            {MultiLinkCreateOnOff && OptionOnOff ? (
              <></>
            ) : (
              <>
                <ButtonWrapper
                  type="primary"
                  icon={<SubnodeOutlined />}
                  size="large"
                  onClick={onModalDisplay}
                >
                  멀티링크 생성
                </ButtonWrapper>
              </>
            )}
          </Col>
        </Row>

        <Row justify="space-between">
          <Col
            span={13}
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            lg={{ span: 13 }}
          >
            <Card style={{ height: "auto" }}>{SwitchOptionLeftLayout}</Card>
          </Col>
          <br />
          <br />

          <Col
            span={10}
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            lg={{ span: 10 }}
          >
            <Card style={{ height: "auto" }}>
              <Row gutter={[16, 16]} justify="center">
                <Card
                  style={{
                    width: 400,
                    height: 700,
                    backgroundColor: "#C1F3FF",
                  }}
                >
                  <div>
                    {MultiLinkCreateOnOff ? (
                      <>
                        <SwitchOnRightLayout />
                      </>
                    ) : (
                      <>
                        <SwitchOffRightLayout />
                      </>
                    )}
                  </div>
                </Card>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 500 }}
      ></div>
    </>
  );
};

MultiLinkLayout.propTypes = {
  onModalDisplay: PropTypes.func,
};

export default MultiLinkLayout;
