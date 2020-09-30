import React, { useCallback, useEffect, useState, useRef } from "react";
import { Layout, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  LOAD_EXPIRED_URLS_REQUEST,
  REMOVE_URLS_REQUEST,
  MOVEMENT_URLS_REQUEST,
  TABLE_PAGINATION_REQUEST,
} from "../../../actions/action_url";
import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";
import ShortenUrlButton from "../ShortenUrlButton";
import LinkTable from "../LinkTable";

const { Content } = Layout;

const ExpiredLayout = () => {
  const dispatch = useDispatch();
  const {
    expiredUrlInfo,
    expiredUrlInfoIds,
    loadExpiredUrlsDone,
    urlCutDone,
    removeUrlsDone,
    moveMentUrlsDone,
    tablePaginationDone,
  } = useSelector((state) => state.url);
  const childRef = useRef();

  // table - urlInfo
  const [DataSource, setDataSource] = useState([]);

  useEffect(() => {
    // 맨 처음 전체 링크 관리 페이지 들어왔을 때 1번부터 15번까지 데이터만 로드
    dispatch({
      type: LOAD_EXPIRED_URLS_REQUEST,
      data: {
        page: 1,
        limit: 15,
      },
    });
  }, []);

  useEffect(() => {
    if (
      loadExpiredUrlsDone ||
      urlCutDone ||
      removeUrlsDone ||
      moveMentUrlsDone ||
      tablePaginationDone
    ) {
      // console.log(urlInfo);
      setDataSource(expiredUrlInfo);
    }
  }, [expiredUrlInfo]);

  const changePagination = useCallback((e) => {
    console.log("expiredUrlInfoIds.length", expiredUrlInfoIds.length);

    dispatch({
      type: TABLE_PAGINATION_REQUEST,
      data: {
        sender: "linkExpired",
        page: e.page,
        limit: e.limit,
        urlInfoIdsLength: expiredUrlInfoIds.length,
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
        sender: "linkExpired",
        removeIds,
      },
    });
  });

  const moveMentUrl = useCallback(() => {
    const moveMentIds = getTableRowIds();

    console.log(moveMentIds);

    dispatch({
      type: MOVEMENT_URLS_REQUEST,
      data: {
        sender: "linkExpired",
        moveMentIds,
      },
    });
  });

  return (
    <>
      <Content>
        <Row justify="space-between">
          <ColWrapper>
            <h3>만료된 URL</h3>
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
                danger
                onClick={removeUrl}
              >
                선택 삭제
              </ButtonBorderWrapper>
            </Col>
            <Col>
              <ButtonGreenWrapper
                type="primary"
                size="large"
                onClick={moveMentUrl}
              >
                보관함 이동
              </ButtonGreenWrapper>
            </Col>
          </Row>

          <LinkTable
            DataSource={DataSource}
            urlInfoIds={expiredUrlInfoIds}
            changePagination={changePagination}
            ref={childRef}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default ExpiredLayout;
