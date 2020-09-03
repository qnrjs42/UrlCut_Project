import React from "react";
import { Layout, Typography, Row, Col, Button, Card, Table } from "antd";
import { WarningOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  ButtonPurpleWrapper,
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  RowWrapper,
} from "../../../css/overlap-styled";

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

const PaymentLayout = () => {
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
            <Row justify="space-around" align="middle">
              <Col>
                <h3>회원등급</h3>
              </Col>
              <Col>
                <Text type="secondary">무료 회원</Text>
              </Col>
              <Col>
                <h3>만료일</h3>
              </Col>
              <Col>
                <Text type="secondary">무제한</Text>
              </Col>
            </Row>
            <br />
            <Row justify="end">
              <ButtonPurpleWrapper type="primary" size="large">
                서비스 기간연장
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
              <WarningOutlined /> 유료서비스 만료일이 지나면 어떻게 되나요?
            </h3>
            <p>
              유료서비스 만료일이 지나면 무료회원으로 변경됩니다. 무료 회원은
              단축URL 건수, 기능등에 제한이 있으므로, 계속 유료등급의 기능이
              필요하신 경우 만료일 이전에 연장 결제를 진행해 주세요.
            </p>
          </Card>
        </Col>
      </RowWrapper>

      <Row gutter={[16, 16]} justify="center">
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 16 }}
        >
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
        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 8 }}
        >
          <Card>
            <h3>
              <ExclamationCircleOutlined /> 세금계산서 발행 신청방법
            </h3>
            <p>
              무통장 결제방식으로 서비스 결제를 진행하신 경우 세금계산서 신청이
              가능합니다. 아래 링크를 확인하시어 요청바랍니다. (PG결제는
              세금계산서 발행 불가)
            </p>
            <br />

            <ButtonGreenWrapper type="primary">더 알아보기</ButtonGreenWrapper>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default PaymentLayout;
