import React from "react";
import { Layout, Row, Col, Button, Card, Progress, Table } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import Link from "next/link";
import styled from "styled-components";

const { Content } = Layout;

// charts data
const data = {
  labels: ["08/04", "08/05", "08/06", "08/07", "08/08", "08/09"],
  datasets: [
    {
      label: "일별 클릭통계",
      fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(94, 203, 161, 0.3)",
      borderColor: "rgba(94, 203, 161, 0.5)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(205, 130,1 58)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

// charts options
const options = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
  legend: {
    labels: {
      color: "#050c42",
      fontFamily:
        "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
      fontSize: 16,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          color: "#050c42",
          fontFamily:
            "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
          fontSize: 13,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          color: "#050c42",
          fontFamily:
            "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
          fontSize: 13,
        },
      },
    ],
  },
};

// tables data
const dataSource = [
  {
    key: "url1",
    url: "kasd",
    link_option: 32,
    created: "20 초 이전",
    click_count: 10,
  },
  {
    key: "url2",
    url: "kasd",
    link_option: 32,
    created: "50 초 이전",
    click_count: 10,
  },
  {
    key: "url3",
    url: "kasd",
    link_option: 32,
    created: "1 분 이전",
    click_count: 10,
  },
  {
    key: "url4",
    url: "kasd",
    link_option: 32,
    created: "1 분 이전",
    click_count: 10,
  },
  {
    key: "url5",
    url: "kasd",
    link_option: 32,
    created: "1 분 이전",
    click_count: 10,
  },
];

// tables setting
const columns = [
  {
    title: "단축 URL",
    dataIndex: "url",
    key: "url",
    width: "30%",
  },
  {
    title: "링크 설정옵션",
    dataIndex: "link_option",
    key: "link_option",
    width: "10%",
    responsive: ["lg"],
  },
  {
    title: "생성일",
    dataIndex: "created",
    key: "created",
    width: "10%",
    responsive: ["lg"],
  },
  {
    title: "클릭 수",
    dataIndex: "click_count",
    key: "click_count",
    width: "10%",
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

const ButtonCardInnerWrapper = styled(Button)`
  border-radius: 5px;
  color: #f6f6f6;
  background-color: rgba(94, 203, 161, 0.9);
  border-color: rgba(94, 203, 161, 0.9);

  &:hover {
    background-color: rgba(94, 203, 161, 0.7);
    border-color: rgba(94, 203, 161, 0.7);
  }
`;

const MainManageLayout = () => {
  return (
    <Content style={{ margin: "20px 16px" }}>
      <Row justify="end">
        <ButtonWrapper
          type="primary"
          icon={<LinkOutlined className="user-button-icon" />}
          size="large"
        >
          단축 URL 추가
        </ButtonWrapper>
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "20px" }}>
        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 8 }}
        >
          <Card style={{ height: 380 }}>
            <Row justify="space-between">
              <Col style={{ paddingTop: 2 }}>
                <h3>서비스 현황</h3>
              </Col>
              <Col>
                <ButtonCardInnerWrapper>
                  <a>서비스정책</a>
                </ButtonCardInnerWrapper>
              </Col>
            </Row>
            <Row>
              <p className="fontSmall">만료일: 무제한</p>
            </Row>
            <Row>
              <p className="fontSmall">무료 회원</p>
            </Row>
            <Row justify="center">
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#5cc49f",
                  "100%": "#fa6a69",
                }}
                percent={80}
                width={150}
              />
            </Row>
            <br />
            <Row justify="center">
              <p className="fontMedium">월 / 500건 사용가능</p>
            </Row>
            <Row justify="center">
              <p className="fontSmall">
                단축 URL 생성 수는 매월 초기화 됩니다.
              </p>
            </Row>
          </Card>
        </Col>
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 16 }}
        >
          <Card style={{ height: 380 }}>
            <article className="canvas-container">
              <Line data={data} options={options} height={300} />
            </article>
          </Card>
        </Col>
      </Row>

      {/* 메인 화면에 보여줄 최근 등록된 링크는 최대 5개 나머지는 전체 리스트 통해 확인 */}
      <Row justify="center" style={{ paddingTop: "20px" }}>
        <Col span={24}>
          <Card style={{ height: "auto" }}>
            <Row justify="space-between">
              <Col>
                <h3>최근 등록된 링크</h3>
              </Col>
              <Col>
                <ButtonCardInnerWrapper>
                  <Link href="/user/[userPages]" as={`/user/manage_url`}>
                    <a>전체 리스트</a>
                  </Link>
                </ButtonCardInnerWrapper>
              </Col>
            </Row>
            <br />
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

export default MainManageLayout;
