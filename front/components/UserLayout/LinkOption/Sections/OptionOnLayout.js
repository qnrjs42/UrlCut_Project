import React, { useState, useCallback } from "react";

import {
  Typography,
  Row,
  Col,
  Button,
  Menu,
  Dropdown,
  Switch,
  Space,
  message,
  Table,
} from "antd";
import { MoreOutlined, MenuOutlined } from "@ant-design/icons";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import styled from "styled-components";

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "pointer", color: "#999" }} />
));

const { Text, Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Text strong>삭제</Text>
    </Menu.Item>
    <Menu.Item key="1">
      <Text strong>통계 페이지</Text>
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 250,
    className: "drag-visible",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "메뉴명을 입력하세요.",
    address: "URL을 입력하세요. (http:// OR https:// 포함)",
    index: 0,
  },
  {
    key: "2",
    name: "메뉴명을 입력하세요.",
    address: "URL을 입력하세요. (http:// OR https:// 포함)",
    index: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    address:
      "Sidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake Park",
    index: 2,
  },
];

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

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

export const OptionOnLayout = () => {
  const [Message, setMessage] = useState(false);
  const [DataSource, setDataSource] = useState(data);

  const DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const onMessageChange = useCallback(() => {
    setMessage(!Message);

    message.success(
      Message
        ? "멀티링크가 비공개로 설정되었습니다."
        : " 멀티링크가 공개로 설정되었습니다."
    );
  });

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(DataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      console.log("Sorted items: ", newData);
      setDataSource(newData);
    }
  });

  const DraggableBodyRow = useCallback(({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = DataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  });

  return (
    <>
      <Row justify="space-between">
        <Col>
          <Row>
            <Space align="start">
              <h3>테스트입니다</h3>

              <Switch
                checkedChildren="공개"
                unCheckedChildren="비공개"
                onChange={onMessageChange}
              />
            </Space>
          </Row>
        </Col>

        <Col>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MoreOutlined style={{ fontSize: "25px" }} />
            </a>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Paragraph copyable={{ text: "localhost:3000/user" }}>
          단축된 URL 표시 부분
        </Paragraph>
      </Row>

      <Row justify="space-between">
        <Col>
          <Space>
            <ButtonCardInnerWrapper type="primary">설정</ButtonCardInnerWrapper>
            <Button style={{ borderRadius: "5px" }}>링크 목록</Button>
          </Space>
        </Col>
        <Col>
          <Button style={{ borderRadius: "5px" }} type="primary" danger>
            메뉴링크 추가
          </Button>
        </Col>
      </Row>
      <br />
      <br />

      <Row>
        <Table
          pagination={false}
          dataSource={DataSource}
          columns={columns}
          rowKey="index"
          scroll={{ x: 650 }}
          components={{
            body: {
              wrapper: DraggableContainer,
              row: DraggableBodyRow,
            },
          }}
        />
      </Row>
    </>
  );
};
