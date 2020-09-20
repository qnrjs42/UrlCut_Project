import React, { useCallback, useEffect, useState, useRef } from "react";
import { Layout, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  LOAD_USER_URLS_REQUEST,
  REMOVE_URLS_REQUEST,
  STORAGE_MOVE_URLS_REQUEST,
  TABLE_PAGINATION_REQUEST,
} from "../../../reducers/reducer_url";
import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";
import ShortenUrlButton from "../ShortenUrlButton";
import LinkTable from "../LinkTable";

const { Content } = Layout;

const LinkManageLayout = () => {
  const dispatch = useDispatch();
  const {
    urlInfo,
    urlInfoIds,
    loadUserUrlsDone,
    urlCutDone,
    removeUrlsDone,
    storageMoveUrlsDone,
    tablePaginationDone,
  } = useSelector((state) => state.url);
  const childRef = useRef();

  // table - urlInfo
  const [DataSource, setDataSource] = useState([]);

  useEffect(() => {
    // 맨 처음 전체 링크 관리 페이지 들어왔을 때 1번부터 15번까지 데이터만 로드
    dispatch({
      type: LOAD_USER_URLS_REQUEST,
      data: {
        page: 1,
        limit: 15,
      },
    });
  }, []);

  useEffect(() => {
    if (
      loadUserUrlsDone ||
      urlCutDone ||
      removeUrlsDone ||
      storageMoveUrlsDone ||
      tablePaginationDone
    ) {
      // console.log(urlInfo);
      setDataSource(urlInfo);
    }
  }, [urlInfo]);

  const changePagination = useCallback((e) => {
    console.log(urlInfoIds.length);

    dispatch({
      type: TABLE_PAGINATION_REQUEST,
      data: {
        sender: "linkManage",
        page: e.page,
        limit: e.limit,
        urlInfoIdsLength: urlInfoIds.length,
        // lastId: urlInfo[urlInfo.length - 1].id,
      },
    });
  });

  const getTableRowIds = () => {
    const selectedRowIds = [...childRef.current.selectedRowId()];

    return selectedRowIds.map((rowData) => {
      return rowData.id;
    });
  };

  const removeUrl = useCallback(() => {
    const removeIds = getTableRowIds();

    console.log(removeIds);

    dispatch({
      type: REMOVE_URLS_REQUEST,
      data: {
        sender: "linkManage",
        removeIds,
      },
    });
  });

  const storageMoveUrl = useCallback(() => {
    const storageMoveIds = getTableRowIds();

    console.log(storageMoveIds);

    dispatch({
      type: STORAGE_MOVE_URLS_REQUEST,
      data: storageMoveIds,
    });
  });

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
              <ButtonBorderWrapper
                type="primary"
                size="large"
                onClick={removeUrl}
                danger
              >
                선택 삭제
              </ButtonBorderWrapper>
            </Col>
            <Col>
              <ButtonGreenWrapper
                type="primary"
                size="large"
                onClick={storageMoveUrl}
              >
                보관함 이동
              </ButtonGreenWrapper>
            </Col>
          </Row>

          <LinkTable
            DataSource={DataSource}
            urlInfoIds={urlInfoIds}
            changePagination={changePagination}
            ref={childRef}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkManageLayout;
