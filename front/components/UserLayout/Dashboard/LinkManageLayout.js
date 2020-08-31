import React from "react";
import { Layout, Row, Col, Button, Card, Table, Tooltip } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

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

const LinkManageLayout = () => {
  return (
    <>
      <Content style={{ margin: "20px 16px" }}>
        <Row justify="space-between">
          <Col style={{ paddingTop: 10 }}>
            <h3>단축 URL 관리</h3>
          </Col>
          <Col>
            <ButtonWrapper type="primary" icon={<LinkOutlined />} size="large">
              단축 URL 추가
            </ButtonWrapper>
          </Col>
        </Row>

        <Card style={{ height: "auto" }}>
          <Row gutter={[16, 16]}>
            <Col>
              <Button
                type="primary"
                size="large"
                danger
                style={{ borderRadius: "5px" }}
              >
                선택 삭제
              </Button>
            </Col>
            <Col>
              <ButtonCardInnerWrapper type="primary" size="large">
                보관함 이동
              </ButtonCardInnerWrapper>
            </Col>
            <Col>
              <ButtonCardInnerWrapper type="primary" size="large">
                패키지 추가
              </ButtonCardInnerWrapper>
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

export default LinkManageLayout;
