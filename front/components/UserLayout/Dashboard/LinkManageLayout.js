import React from "react";
import { Layout, Row, Col, Card, Table } from "antd";

import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";

import ShortenUrlButton from "../ShortenUrlButton";

const { Content } = Layout;

// table data
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
    sorter: {
      compare: (a, b) => a.created - b.created,
      multiple: 2,
    },
    width: "10%",
    responsive: ["lg"],
  },
  {
    title: "클릭 수",
    dataIndex: "click_count",
    key: "click_count",
    sorter: {
      compare: (a, b) => a.click_count - b.click_count,
      multiple: 1,
    },
    width: "10%",
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
  columnWidth: "5%",
};

const LinkManageLayout = () => {
  return (
    <>
      <Content>
        <Row justify="space-between">
          <ColWrapper>
            <h3>단축 URL 관리</h3>
          </ColWrapper>
          <Col>
            <ShortenUrlButton />
          </Col>
        </Row>

        <Card>
          <Row gutter={[16, 16]}>
            <Col>
              <ButtonBorderWrapper type="primary" size="large" danger>
                선택 삭제
              </ButtonBorderWrapper>
            </Col>
            <Col>
              <ButtonGreenWrapper type="primary" size="large">
                보관함 이동
              </ButtonGreenWrapper>
            </Col>
          </Row>

          <Table
            className="latest_link_table"
            dataSource={dataSource}
            columns={columns}
            rowSelection={{ ...rowSelection }}
            pagination={false}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkManageLayout;
