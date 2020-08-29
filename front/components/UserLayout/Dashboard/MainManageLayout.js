import React from 'react'
import {
  Layout,
  Row,
  Col,
  Button,
  Card,
  Progress,
  Table,
} from "antd";
import {
  LinkOutlined
} from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import Link from 'next/link';

const { Content } = Layout;

// charts data
const data = {
  labels: [
    "08/04/2020",
    "08/05/2020",
    "08/06/2020",
    "08/07/2020",
    "08/08/2020",
    "08/09/2020",
  ],
  datasets: [
    {
      label: "일별 클릭통계",
      data: [0, 0, 0],
      fill: true, // Don't fill area under the line
      borderColor: "green", // Line color
    },
  ],
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

// charts options
const options = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
};

// tables setting
const columns = [
  {
    title: "단축 URL",
    dataIndex: "url",
    key: "url",
    width: 600,
  },
  {
    title: "링크 설정옵션",
    dataIndex: "link_option",
    key: "link_option",
    width: 200,
  },
  {
    title: "생성일",
    dataIndex: "created",
    key: "created",
    width: 100,
  },
  {
    title: "클릭 수",
    dataIndex: "click_count",
    key: "click_count",
    width: 100,
  },
];


const MainManageLayout = () => {
    return (
      <Content style={{ margin: "20px 16px" }}>
        <Row justify="end">
          <Button type="primary" icon={<LinkOutlined />} size="large">
            단축 URL 추가
          </Button>
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
                  <Button>서비스정책</Button>
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
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={90}
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
                  <p style={{ fontSize: 18 }}>최근 등록된 링크</p>
                </Col>
                <Col>
                  <Button>
                    <Link href="/user/[userPages]" as={`/user/manage_url`}>
                      <a>전체 리스트</a>
                    </Link>
                  </Button>
                </Col>
              </Row>
              <br />
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
}

export default MainManageLayout