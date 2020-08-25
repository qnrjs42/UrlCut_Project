import React from "react";
import { Layout, Row, Col, Button, Card, Table, Tooltip } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const { Content } = Layout;

const dataSource = [
  {
    key: "url1",
    url: "kasd",
    link_option: 32,
    created: `${20} 초 이전`,
    click_count: 0,
  },
  {
    key: "url2",
    url: "kasd",
    link_option: 32,
    created: `${50} 초 이전`,
    click_count: 100,
  },
  {
    key: "url3",
    url: "kasd",
    link_option: 32,
    created: `${120} 초 이전`,
    click_count: 30,
  },
  {
    key: "url4",
    url: "kasd",
    link_option: 32,
    created: `${0} 초 이전`,
    click_count: 9,
  },
  {
    key: "url5",
    url: "kasd",
    link_option: 32,
    created: `${300} 초 이전`,
    click_count: 7,
  },
];

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
    width: 150,
  },
  {
    title: "생성일",
    dataIndex: "created",
    key: "created",
    sorter: {
      compare: (a, b) => a.created - b.created,
      multiple: 2,
    },
    width: 125,
  },
  {
    title: "클릭 수",
    dataIndex: "click_count",
    key: "click_count",
    sorter: {
      compare: (a, b) => a.click_count - b.click_count,
      multiple: 1,
    },
    width: 125,
  },
];

// 테이블 check/checked/checkedAll And changeRow
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const ExpiredLayout = () => {
  return (
    <>
      <Content style={{ margin: "20px 16px" }}>
        <Row justify="space-between">
          <Col style={{ paddingTop: 10 }}>
            <h3>만료된 URL</h3>
          </Col>
          <Col>
            <Button type="primary" icon={<LinkOutlined />} size="large">
              단축 URL 추가
            </Button>
          </Col>
        </Row>

        <Card style={{ height: "auto" }}>
          <Row gutter={[16, 16]}>
            <Col>
              <Button type="primary" size="large" danger>
                선택 삭제
              </Button>
            </Col>
            <Col>
              <Button type="primary" size="large">
                보관함 해제
              </Button>
            </Col>
            <Col>
              <Button type="primary" size="large">
                패키지 추가
              </Button>
            </Col>
          </Row>

          <Table
            className="latest_link_table"
            dataSource={dataSource}
            columns={columns}
            rowSelection={{ ...rowSelection }}
            pagination={false}
            scroll={{ x: 1000 }}
          />
        </Card>
      </Content>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 500 }}
      ></div>
    </>
  );
};

export default ExpiredLayout;
