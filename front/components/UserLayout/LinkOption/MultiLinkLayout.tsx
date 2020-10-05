import React, { useState, useCallback } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Switch,
  Modal,
  Input,
  Radio,
} from "antd";
import { SubnodeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  SwitchOffLeftLayout,
  SwitchOffRightLayout,
} from "./Sections/SwitchOffLayout";
import {
  SwitchOnLeftLayout,
  SwitchOnRightLayout,
} from "./Sections/SwitchOnLayout";
import { OptionOnLayout } from "./Sections/OptionOnLayout";

import {
  ButtonPurpleWrapper,
  ButtonDefaultBorderWrapper,
} from "../../../css/overlap-styled";

const { Content } = Layout;
const { Title } = Typography;

const CardWrapper = styled(Card)`
  width: 400px;
  height: 700px;
  background-color: #c1f3ff;
`;

const MultiLinkLayout = () => {
  const [MultiLinkCreateOnOff, setMultiLinkCreateOnOff] = useState(false); // 멀티링크 생성 유무
  const [OptionOnOff, setOptionOnOff] = useState(false); // 멀티링크 - 옵션 클릭 유무
  const [CreateModal, setCreateModal] = useState(false); // 멀티링크 생성 버튼 모달
  const [RadioPublicPrivate, setRadioPublicPrivate] = useState(1); // 모달 - 라디오 버튼

  const onSwitchChange = useCallback(() => {
    setMultiLinkCreateOnOff(!MultiLinkCreateOnOff);
  }, []);

  const onOptionChange = useCallback(() => {
    setOptionOnOff(!OptionOnOff);
  }, []);

  const onModalDisplay = useCallback(() => {
    setCreateModal(true);
  }, []);

  const onMultiLinkCreateOk = useCallback(() => {
    setCreateModal(false);
  }, []);

  // 모달 밖, 화면을 클릭해도 Cancel
  const onMultiLinkCreateCancel = useCallback(() => {
    setCreateModal(false);
  }, []);

  const onRadioChange = useCallback((e) => {
    setRadioPublicPrivate(e.target.value);
  }, []);

  // 멀티링크 없을 때
  let SwitchOptionLeftLayout = (
    <SwitchOffLeftLayout onModalDisplay={onModalDisplay} />
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
      <SwitchOffLeftLayout onModalDisplay={onModalDisplay} />
    );
  }

  return (
    <>
      <Content>
        <Modal
          title={<h3>멀티링크 생성</h3>}
          visible={CreateModal}
          onOk={onMultiLinkCreateOk}
          onCancel={onMultiLinkCreateCancel}
          footer={[
            <ButtonDefaultBorderWrapper
              key="back"
              onClick={onMultiLinkCreateCancel}
            >
              Return
            </ButtonDefaultBorderWrapper>,
            <ButtonPurpleWrapper
              key="submit"
              type="primary"
              onClick={onMultiLinkCreateOk}
            >
              Submit
            </ButtonPurpleWrapper>,
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
                <ButtonPurpleWrapper
                  type="primary"
                  icon={<SubnodeOutlined />}
                  size="large"
                  onClick={onModalDisplay}
                >
                  멀티링크 생성
                </ButtonPurpleWrapper>
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
            <Card>{SwitchOptionLeftLayout}</Card>
          </Col>
          <br />
          <br />

          <Col
            span={10}
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            lg={{ span: 10 }}
          >
            <Card>
              <Row gutter={[16, 16]} justify="center">
                <CardWrapper>
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
                </CardWrapper>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

MultiLinkLayout.propTypes = {
  onModalDisplay: PropTypes.func,
  ButtonPurpleWrapper: PropTypes.object,
};

export default MultiLinkLayout;
