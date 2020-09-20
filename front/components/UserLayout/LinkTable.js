import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";
import { Typography, Table, Button } from "antd";
import PropTypes from "prop-types";
import { LinkOutlined } from "@ant-design/icons";
import LinkDrawer from "./LinkDrawer";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);
const dateDayjs = dayjs();
const { Text } = Typography;

// tables setting
const columns = [
  {
    title: "단축 URL",
    dataIndex: "shortenUrl",
    key: "shortenUrl",
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
    render: (linkOptionData, row, index) => {
      let newData = "-";
      if (linkOptionData[0] === "lock") {
        newData = "비밀번호 설정";
        return <>{newData}</>;
      }
      return <>{newData}</>;
    },
    filters: [
      {
        text: "비밀번호 설정",
        value: "lock",
      },
      {
        text: "설정 없음",
        value: "none",
      },
    ],
    // filterMultiple: false,
    onFilter: (value, record) => record.linkOption[0] === value,
    // sorter: (a, b) => a.linkOption.length - b.linkOption.length,
    // sortDirections: ["descend", "ascend"],
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

// Dashboard - LinkManageLayout
// Management - LinkStorageLayout, ExpiredLayout
const LinkTable = forwardRef((props, ref) => {
  const childRef = useRef();
  // table
  const [RowClickData, setRowClickData] = useState({});
  const [RowId, setRowId] = useState({});
  const [CurrentPage, setCurrentPage] = useState(1);
  const [CurrentLimit, setCurrentLimit] = useState(15);

  // 테이블 check/checked/checkedAll And changeRow
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setRowId(selectedRows);
    },
    // onSelect: (record, selected, selectedRows) => {
    //   console.log("onSelect", record, selected, selectedRows);
    // },
    // onSelectAll: (selected, selectedRows, changeRows) => {
    //   console.log("onSelectAll", selected, selectedRows, changeRows);
    // },
    columnWidth: "5%",
  };

  useImperativeHandle(ref, () => ({
    selectedRowId: () => RowId,
    currentPage: () => CurrentPage,
    currentLimit: () => CurrentLimit,
  }));

  const onRow = (record, rowIndex) => {
    return {
      onClick: () => {
        const newRecord = { ...record };
        newRecord.createdAt = dayjs(newRecord.createdAt).format(
          "YYYY년 MM월 DD일"
        );
        setRowClickData(newRecord);
        childRef.current.showDrawer();
      },
    };
  };

  const onChangeTest = (data) => {
    console.log("test", data);
  };

  return (
    <>
      <LinkDrawer RowClickData={RowClickData} ref={childRef} />

      <button
        onClick={() => {
          console.log("현재 상태: ", CurrentPage, CurrentLimit);
          console.log("total", props.urlInfoIds.length);
          console.log("datasource", props.DataSource.length);
        }}
      >
        Click
      </button>
      {/* MainManageLayout일 때 rowSelection 없음 */}
      {props.layout === "main" ? (
        <>
          <Table
            style={{ whiteSpace: "pre" }}
            className="latest_link_table"
            columns={columns}
            dataSource={props.DataSource}
            onRow={onRow}
            pagination={{ total: 5, pageSize: 5, hideOnSinglePage: true }}
          />
        </>
      ) : (
        <>
          <Table
            style={{ whiteSpace: "pre" }}
            className="latest_link_table"
            columns={columns}
            dataSource={props.DataSource}
            rowSelection={{ ...rowSelection }}
            pagination={{
              total: props.urlInfoIds.length,
              defaultPageSize: 15,
              showSizeChanger: true,
              pageSizeOptions: ["15", "30", "50", "100"],
              position: ["topLeft", "bottomRight"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                // console.log("onChange", page, pageSize);
                props.changePagination({
                  page,
                  limit: pageSize,
                });
              },
              // onShowSizeChange: (_, limit) => {
              //   setCurrentLimit(limit);
              //   if (CurrentLimit !== limit) {
              //     props.changePagination({
              //       event: "limitEvent",
              //       page: 1,
              //       limit,
              //     });
              //   }
              // },
            }}
            onRow={onRow}
          />
        </>
      )}
    </>
  );
});

LinkTable.propTypes = {
  props: PropTypes.shape({
    DataSource: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        key: PropTypes.string,
        url: PropTypes.string,
        originalUrl: PropTypes.string,
        urlTitle: PropTypes.string,
        linkOption: PropTypes.array,
        createdAt: PropTypes.any,
        clickCount: PropTypes.number,
        urlPassword: PropTypes.string,
      }).isRequired
    ),
  }),
};

export default LinkTable;
