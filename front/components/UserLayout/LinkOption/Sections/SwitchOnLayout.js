import { Typography, Row, Col, Button, Menu, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Text, Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Text strong>비공개</Text>
    </Menu.Item>
    <Menu.Item key="1">
      <Text strong>수정</Text>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Text strong>삭제</Text>
    </Menu.Item>
  </Menu>
);

const MoreOutlinedWrapper = styled(MoreOutlined)`
  font-size: 25px;
`;

export const SwitchOnLeftLayout = () => {
  return (
    <>
      <Row justify="space-between">
        <Col>
          <h3>테스트입니다</h3>
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

      <Row>
        <Col>
          <Text type="secondary">0 조회수</Text>
        </Col>
        <Col offset={1}>
          <Text type="secondary">공개</Text>
        </Col>
        <Col offset={1}>
          <Text type="secondary">20분 이전</Text>
        </Col>
      </Row>
    </>
  );
};

export const SwitchOnRightLayout = () => {
  return (
    <>
      <Row justify="center">
        <h3>테스트입니다</h3>
      </Row>

      <br />
      <br />

      <Row justify="center">
        <Button shape="round" size="large" block>
          메뉴명을 입력하세요.
        </Button>
      </Row>

      <br />

      <Row justify="center">
        <Button shape="round" size="large" block>
          메뉴명을 입력하세요.
        </Button>
      </Row>
    </>
  );
};
