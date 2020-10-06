import React, { useState, useCallback } from "react";

import {
  Typography,
  Row,
  Col,
  Menu,
  Dropdown,
  Switch,
  Space,
  message,
  Table,
} from "antd";
import { MoreOutlined, MenuOutlined } from "@ant-design/icons";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import styled from "styled-components";

import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ButtonDefaultBorderWrapper,
} from "../../../../css/overlap-styled";

const DragHandle = SortableHandle(() => (
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

interface Idata {
  key: string;
  name: string;
  address: string;
  index: number;
}
const data: Idata[] = [
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

const SortableItem = SortableElement((props: { props: string }) => (
  <tr>{props}</tr>
));
const SortableContainerComponent = SortableContainer(
  (props: { props: string }) => <tbody>{props}</tbody>
);

const MoreOutlinedWrapper = styled(MoreOutlined)`
  font-size: 25px;
`;

export const OptionOnLayout = () => {
  const [Message, setMessage] = useState(false);
  const [DataSource, setDataSource] = useState<Idata[]>(data);

  const DraggableContainer = (props: { props: string }) => (
    <SortableContainerComponent
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const onMessageChange = useCallback(() => {
    setMessage((prev) => !prev);

    Message
      ? message.error("멀티링크가 비공개로 설정되었습니다.")
      : message.success("멀티링크가 공개로 설정되었습니다.");
  }, [Message]);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(DataSource, oldIndex, newIndex).filter(
        (el) => !!el
      );
      console.log("Sorted items: ", newData);
      setDataSource(newData);
    }
  }, []);

  const DraggableBodyRow = useCallback(({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = DataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  }, []);

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
              <MoreOutlinedWrapper />
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
            <ButtonGreenWrapper type="primary">설정</ButtonGreenWrapper>
            <ButtonDefaultBorderWrapper>링크 목록</ButtonDefaultBorderWrapper>
          </Space>
        </Col>
        <Col>
          <ButtonBorderWrapper type="primary" danger>
            메뉴링크 추가
          </ButtonBorderWrapper>
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