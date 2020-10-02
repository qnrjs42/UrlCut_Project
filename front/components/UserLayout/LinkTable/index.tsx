import React, { useCallback, useState } from "react";
import { Typography, Table } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";

import TableDrawer from "./TableDrawer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import { TurlInfo } from "../../../interface";
// hooks
import useChangePagination from "../../../hooks/useChangePagination";

dayjs.locale("ko");
dayjs.extend(relativeTime);
const dateDayjs = dayjs();
const { Text } = Typography;

interface IColumns extends TurlInfo {
  title?: string;
  dataIndex?: string;
  key: string;
}

// tables setting
const columns: ColumnsType<IColumns> = [
  {
    title: "단축 URL",
    dataIndex: "shortenUrl",
    key: "shortenUrl",
    width: "30%",
    ellipsis: true,
    render: (urlColData: string, row: TurlInfo, index: number) => {
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
    render: (linkOptionData: Array<string>, row: TurlInfo, index: number) => {
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
    onFilter: (value: string | number | boolean, record: TurlInfo) =>
      record.linkOption[0] === value,
    // sorter: (a, b) => a.linkOption.length - b.linkOption.length,
    // sortDirections: ["descend", "ascend"],
  },
  {
    title: "생성일",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: {
      compare: (a: TurlInfo, b: TurlInfo) => {
        // 이 부분을 어떻게 any를 대체해야할지 모르겠음
        const left = dayjs(a.createdAt);
        const right = dayjs(b.createdAt);
        return left.diff(right);
      },
      multiple: 2,
    },
    width: "10%",
    responsive: ["lg"],
    align: "center",
    render: (dateData: Date, row: TurlInfo, index: number) => {
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
      compare: (a: TurlInfo, b: TurlInfo) => a.clickCount - b.clickCount,
      multiple: 1,
    },
  },
];

type LinkTableTypes = {
  sender: string;
  getTableSelectedRows?(ids: string[]): void;
  dataSource: TurlInfo[];
  urlInfoIds?: number; // object면 아무것도 없음
};

// Dashboard - LinkManageLayout
// Management - LinkStorageLayout, ExpiredLayout
const LinkTable = (props: LinkTableTypes) => {
  // table
  const [RowClickData, setRowClickData] = useState<TurlInfo | null>(null);
  const changePagination = useChangePagination();

  // 테이블 check/checked/checkedAll And changeRow
  const rowSelection = {
    onChange: (
      selectedRowKeys: (string | number)[],
      selectedRows: TurlInfo[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      // 선택한 row의 id 추출
      const ids: string[] = selectedRows.map((row: TurlInfo) => row.id);
      props.getTableSelectedRows ? props.getTableSelectedRows(ids) : null;
    },
    // onSelect: (record, selected, selectedRows) => {
    //   console.log("onSelect", record, selected, selectedRows);
    // },
    // onSelectAll: (selected, selectedRows, changeRows) => {
    //   console.log("onSelectAll", selected, selectedRows, changeRows);
    // },
    columnWidth: "5%",
  };

  // Table Row 선택되었을 때 Drawer 열기, 날짜 포맷 설정
  const onRow = useCallback(
    (record: TurlInfo, rowIndex: number | undefined) => {
      return {
        onClick: () => {
          const newRecord = { ...record };
          newRecord.createdAt = dayjs(newRecord.createdAt).format(
            "YYYY년 MM월 DD일"
          );
          setRowClickData(newRecord);
        },
      };
    },
    []
  );

  return (
    <>
      <TableDrawer RowClickData={RowClickData} />
      {/* MainManageLayout일 때 rowSelection 없음 */}
      {props.sender === "main" ? (
        <>
          <Table
            style={{ whiteSpace: "pre" }}
            className="latest_link_table"
            columns={columns}
            dataSource={props.dataSource}
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
            dataSource={props.dataSource}
            rowSelection={{ ...rowSelection }}
            pagination={{
              total: props.urlInfoIds,
              defaultPageSize: 15,
              showSizeChanger: true,
              pageSizeOptions: ["15", "30", "50", "100"],
              position: ["topLeft", "bottomRight"],
              onChange: (page, pageSize) => {
                changePagination({
                  sender: props.sender,
                  page,
                  limit: pageSize,
                  urlInfoIdsLength: props.urlInfoIds,
                });
              },
            }}
            onRow={onRow}
          />
        </>
      )}
    </>
  );
};

export default LinkTable;
