import React, { useCallback, useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Divider,
  Input,
  Switch,
  Table,
} from "antd";
import { WarningOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  ButtonPurpleWrapper,
  ButtonBorderWrapper,
  RowWrapper,
} from "../../../css/overlap-styled";
import { IUserReducerState } from "../../../reducers/reducer_user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import useInput from "../../../hooks/useInput";
import { CHANGE_NICKNAME_REQUEST } from "../../../actions/action_user";

const { Content } = Layout;
const { Text } = Typography;

const dataSource = [
  {
    key: "payment1",
    payment: "결제 내역 없음",
  },
  //   {
  //     key: "payment1",
  //     payment: "123요금제",
  //     payment_method: "신용카드",
  //     price: "5,900원",
  //     date: "20-08-27",
  //     service_period: "20-08-26",
  //     receipt: "Blank",
  //   },
];

const columns = [
  {
    title: "요금제",
    dataIndex: "payment",
    key: "payment",
  },
  {
    title: "결제수단",
    dataIndex: "payment_method",
    key: "payment_method",
  },
  {
    title: "결제금액",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "결제일",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "서비스 신청기간",
    dataIndex: "service_period",
    key: "service_period",
  },
  {
    title: "영수증",
    dataIndex: "receipt",
    key: "receipt",
  },
];

const AvatarWrapper = styled(Avatar)`
  background-color: rgba(94, 203, 161, 0.9);
`;

const ColEmailPasswordWrapper = styled(Col)`
  min-width: 200px;
  padding-bottom: 20px;
`;

const ColProfileGatewayWrapper = styled(Col)`
  min-width: 200px;
  padding: 30px 20px;
`;

const ColPaddingBottomWrapper = styled(Col)`
  padding-bottom: 15px;
`;

const ProfileLayout = () => {
  const dispatch = useDispatch();
  const {me} = useSelector<RootState, IUserReducerState>(state => state.user);
  const [Nickname, setNickname] = useState<string>();
  const [Email, setEmail] = useState<string>();

  useEffect(() => {
    if(me) {
      setNickname(me.nickname);
      setEmail(me.email);
    }
  }, [me])

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, [])

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [])

  const onClickUpdate = useCallback(() => {
    if(me) {
      if(me.nickname !== Nickname) {
        dispatch({
          type: CHANGE_NICKNAME_REQUEST,
          data: {
            nickname: Nickname
          }
        })
      }
    }
  }, [Nickname])
  
  return (
    <Content>
      <RowWrapper gutter={[16, 16]} justify="center">
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 16 }}
        >
          <Card>
            <h3>프로필 설정</h3>
            {/* 아바타, 이메일, 아이디 */}
            <Card>
              <Row>
                <Col>
                  <AvatarWrapper
                    className="user-header-button-icon"
                    size="large"
                    icon={<UserOutlined />}
                  />
                </Col>
                <Col offset={1}>
                  <Input value={Nickname} onChange={onChangeNickname} bordered={false} />
                </Col>
              </Row>
              <Divider />

              <Row>
                <ColEmailPasswordWrapper xs={24} md={12}>
                  <Row justify="start">
                    <Col xs={6}>이메일</Col>
                  </Row>

                  <Row justify="start">
                    <Input
                      placeholder="Borderless"
                      value={Email}
                      onChange={onChangeEmail}
                      bordered={false}
                    />
                  </Row>

                  <br />
                  <Text type="secondary">
                    이메일을 변경하는 경우 계정을 <br />
                    다시 활성화해야 합니다.
                  </Text>
                </ColEmailPasswordWrapper>

                <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }}>
                  아이디
                  <Row justify="start">
                    <Input
                      placeholder="Borderless"
                      bordered={false}
                      disabled
                      value="link_project"
                    />
                  </Row>
                  <br />
                  <Text type="secondary">
                    공개 프로필은 사용자 아이디가 필요합니다.
                  </Text>
                </Col>
              </Row>
            </Card>
            <br />
            <br />
            {/* 비밀번호 */}
            <Card>
              <Row>
                <h2>비밀번호</h2>
              </Row>
              <Divider />

              <Row>
                <ColEmailPasswordWrapper xs={12}>
                  <Row justify="start">
                    <Col xs={7}>비밀번호</Col>
                  </Row>

                  <Row justify="start">
                    <Input placeholder="Blank" bordered={false} />
                  </Row>

                  <br />
                  <Text type="secondary">유지하려면 비워 두세요.</Text>
                </ColEmailPasswordWrapper>

                <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }}>
                  비밀번호 확인
                  <Row justify="start">
                    <Input placeholder="Blank" bordered={false} />
                  </Row>
                  <br />
                  <Text type="secondary">유지하려면 비워 두세요.</Text>
                </Col>
              </Row>
            </Card>
            <br />
            <br />
            {/* 프로필 공개, 미디어 게이트웨이 */}
            <Card>
              <Row>
                <ColProfileGatewayWrapper xs={24}>
                  <Row justify="space-between" align="middle">
                    <ColPaddingBottomWrapper
                      xs={{ span: 24 }}
                      md={{ span: 20 }}
                    >
                      프로필 공개
                      <br />
                      <Text type="secondary">
                        이메일을 변경하는 경우 계정을 <br />
                        다시 활성화해야 합니다.
                      </Text>
                    </ColPaddingBottomWrapper>
                    <Col>
                      <Switch
                        checkedChildren="공개"
                        unCheckedChildren="비공개"
                        defaultChecked
                      />
                    </Col>
                  </Row>
                </ColProfileGatewayWrapper>
                <ColProfileGatewayWrapper xs={24}>
                  <Row justify="space-between" align="middle">
                    <ColPaddingBottomWrapper
                      xs={{ span: 24 }}
                      md={{ span: 20 }}
                    >
                      미디어 게이트웨이
                      <br />
                      <Text type="secondary">
                        활성화된 경우 미디어 URL에 대해
                        <br />
                        특수 페이지가 자동으로 <br />
                        생성됩니다 (e.g. youtube, vimeo, dailymotion...)
                      </Text>
                    </ColPaddingBottomWrapper>
                    <Col>
                      <Switch
                        checkedChildren="사용"
                        unCheckedChildren="미사용"
                        defaultChecked
                      />
                    </Col>
                  </Row>
                </ColProfileGatewayWrapper>
              </Row>
            </Card>
            <br />
            <br />
            <Row justify="center">
              <ButtonPurpleWrapper type="primary" size="large" onClick={onClickUpdate}>
                업데이트
              </ButtonPurpleWrapper>
            </Row>
          </Card>
        </Col>

        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 8 }}
        >
          <Card>
            <h3>
              <WarningOutlined /> 회원 탈퇴
            </h3>
            <p>
              Link_Project는 회원님의 개인 정보를 존중하며 원할 경우 회원탈퇴를
              진행하고, 즉시 회원님의 모든 데이터를 삭제하고 있습니다. 회원 탈퇴
              후 취소는 불가능 하오니 신중한 결정 바랍니다.
            </p>

            <ButtonBorderWrapper type="primary" danger block>
              회원 탈퇴
            </ButtonBorderWrapper>
          </Card>
        </Col>
      </RowWrapper>

      <Row>
        <Col span={16} xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 16 }}>
          <Card>
            <h3>최근 거래</h3>
            <br />

            <Table
              className="latest_link_table"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default ProfileLayout;
