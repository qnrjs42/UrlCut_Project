import React from "react";
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

const ProfileLayout = () => {
  return (
    <Content style={{ margin: "20px 16px" }}>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "20px" }}>
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 16 }}
        >
          <Card style={{ height: "auto" }}>
            <h3>프로필 설정</h3>
            {/* 아바타, 이메일, 아이디 */}
            <Card style={{ height: "auto" }}>
              <Row>
                <Col>
                  <Avatar
                    className="user-header-button-icon"
                    size="large"
                    icon={<UserOutlined />}
                    style={{ backgroundColor: "rgba(94, 203, 161, 0.9)" }}
                  />
                </Col>
                <Col offset={1}>
                  <p>닉네임</p>
                  <a>아바타 바꾸기</a>
                </Col>
              </Row>
              <Divider />

              <Row>
                <Col xs={12} style={{ minWidth: 200, paddingBottom: 20 }}>
                  <Row justify="start">
                    <Col xs={6}>이메일</Col>
                  </Row>
                  <Row justify="start">
                    <Input
                      placeholder="Borderless"
                      bordered={false}
                      value="link_project@link.com"
                    />
                  </Row>
                  <br />
                  <Text type="secondary">
                    이메일을 변경하는 경우 계정을 <br />
                    다시 활성화해야 합니다.
                  </Text>
                </Col>
                <Col xs={{ span: 12, order: 2 }}>
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
            <Card style={{ height: "auto" }}>
              <Row>
                <h2>비밀번호</h2>
              </Row>
              <Divider />

              <Row>
                <Col xs={12} style={{ minWidth: 200, paddingBottom: 20 }}>
                  <Row justify="start">
                    <Col xs={6}>비밀번호</Col>
                  </Row>
                  <Row justify="start">
                    <Input placeholder="Blank" bordered={false} />
                  </Row>
                  <br />
                  <Text type="secondary">유지하려면 비워 두세요.</Text>
                </Col>
                <Col xs={{ span: 12, order: 2 }}>
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
            <Card style={{ height: "auto" }}>
              <Row>
                <Col xs={24} style={{ minWidth: 200, padding: "30px 20px" }}>
                  <Row justify="space-between" align="middle">
                    <Col>
                      프로필 공개
                      <br />
                      <Text type="secondary">
                        이메일을 변경하는 경우 계정을 <br />
                        다시 활성화해야 합니다.
                      </Text>
                    </Col>
                    <Col>
                      <Switch
                        checkedChildren="공개"
                        unCheckedChildren="비공개"
                        defaultChecked
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} style={{ minWidth: 200, padding: "30px 20px" }}>
                  <Row justify="space-between" align="middle">
                    <Col>
                      미디어 게이트웨이
                      <br />
                      <Text type="secondary">
                        활성화된 경우 미디어 URL에 대해
                        <br />
                        특수 페이지가 자동으로 <br />
                        생성됩니다 (e.g. youtube, vimeo, dailymotion...)
                      </Text>
                    </Col>
                    <Col>
                      <Switch
                        checkedChildren="사용"
                        unCheckedChildren="미사용"
                        defaultChecked
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <br />
            <br />
            <Row justify="center">
              <ButtonWrapper type="primary" size="large">
                업데이트
              </ButtonWrapper>
            </Row>
          </Card>
        </Col>

        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 8 }}
        >
          <Card style={{ height: "auto" }}>
            <h3>
              <WarningOutlined /> 회원 탈퇴
            </h3>
            <p>
              Link_Project는 회원님의 개인 정보를 존중하며 원할 경우 회원탈퇴를
              진행하고, 즉시 회원님의 모든 데이터를 삭제하고 있습니다. 회원 탈퇴
              후 취소는 불가능 하오니 신중한 결정 바랍니다.
            </p>

            <Button type="primary" danger block>
              회원 탈퇴
            </Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Card style={{ height: "auto" }}>
            <h3>최근 거래</h3>
            <br />

            <Table
              className="latest_link_table"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ x: 1000 }}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default ProfileLayout;
