import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Table,
  Drawer,
  Button,
} from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import { LOAD_USER_URLS_REQUEST } from "../../../reducers/reducer_url";
import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";
import ShortenUrlButton from "../ShortenUrlButton";

dayjs.locale("ko");
dayjs.extend(relativeTime);
const dateDayjs = dayjs();
const { Content } = Layout;
const { Text } = Typography;

// tables setting
const columns = [
  {
    title: "단축 URL",
    dataIndex: "url",
    key: "url",
    width: "30%",
    ellipsis: true,
    render: (urlColData, row, index) => {
      // console.log(urlColData, row, index);
      return (
        <>
          <a>
            <Text>{urlColData}</Text>
            <br />

            <Text type="secondary">
              <LinkOutlined />
              &nbsp;
              {row.urlTitle}
            </Text>
          </a>
        </>
      );
    },
  },
  {
    title: "링크 설정옵션",
    dataIndex: "linkOption",
    key: "linkOption",
    width: "10%",
    responsive: ["lg"],
    align: "center",
  },
  {
    title: "생성일",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: {
      compare: (a, b) => {
        return a.createdAt - b.createdAt;
      },
      multiple: 2,
    },
    width: "10%",
    responsive: ["lg"],
    align: "center",
    render: (dateData, row, index) => {
      return <>{dateDayjs.to(dateData)}</>;
    },
  },
  {
    title: "클릭 수",
    dataIndex: "clickCount",
    key: "clickCount",
    width: "10%",
    align: "center",
    sorter: {
      compare: (a, b) => a.clickCount - b.clickCount,
      multiple: 1,
    },
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
    console.log("onSelect", record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log("onSelectAll", selected, selectedRows, changeRows);
  },
  columnWidth: "5%",
};

const LinkManageLayout = () => {
  const dispatch = useDispatch();
  const { urlInfo, loadUserUrlsDone } = useSelector((state) => state.url);

  // table
  const [DataSource, setDataSource] = useState([]);
  const [RowClickData, setRowClickData] = useState({});
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_URLS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (loadUserUrlsDone) {
      console.log(urlInfo);
      setDataSource(urlInfo);
    }
  }, [loadUserUrlsDone]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onRow = (record, rowIndex) => {
    return {
      onClick: (event) => {
        showDrawer();
        setRowClickData(record);
      },
    };
  };

  return (
    <>
      <Content>
        <Drawer
          title="링크 정보"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={Visible}
        >
          {console.log("RowClickData", RowClickData)}
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

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
            style={{ whiteSpace: "pre" }}
            className="latest_link_table"
            columns={columns}
            dataSource={DataSource}
            rowSelection={{ ...rowSelection }}
            onRow={onRow}
            pagination={false}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkManageLayout;
