import React, { useCallback, useEffect, useState, useRef } from "react";
import { Layout, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  LOAD_STORAGE_URLS_REQUEST,
  REMOVE_URLS_REQUEST,
  MOVEMENT_URLS_REQUEST,
  TABLE_PAGINATION_REQUEST,
} from "../../../reducers/reducer_url";
import {
  ButtonPurpleWrapper,
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";

import ShortenUrlButton from "../ShortenUrlButton";
import LinkTable from "../LinkTable";

const { Content } = Layout;

const LinkStorageLayout = () => {
  const dispatch = useDispatch();
  const {
    storageUrlInfo,
    storageUrlInfoIds,
    loadStorageUrlsDone,
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
      type: LOAD_STORAGE_URLS_REQUEST,
      data: {
        page: 1,
        limit: 15,
      },
    });
  }, []);

  useEffect(() => {
    if (
      loadStorageUrlsDone ||
      urlCutDone ||
      removeUrlsDone ||
      moveMentUrlsDone ||
      tablePaginationDone
    ) {
      setDataSource(storageUrlInfo);
    }
  }, [storageUrlInfo]);

  const changePagination = useCallback((e) => {
    console.log(storageUrlInfoIds.length);

    dispatch({
      type: TABLE_PAGINATION_REQUEST,
      data: {
        sender: "linkStorage",
        page: e.page,
        limit: e.limit,
        urlInfoIdsLength: storageUrlInfoIds.length,
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
        sender: "linkStorage",
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
        sender: "linkStorage",
        moveMentIds,
      },
    });
  });

  return (
    <>
      <Content>
        <Row justify="space-between">
          <ColWrapper>
            <h3>보관된 URL</h3>
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
                보관함 해제
              </ButtonGreenWrapper>
            </Col>
          </Row>

          <LinkTable
            DataSource={DataSource}
            urlInfoIds={storageUrlInfoIds}
            changePagination={changePagination}
            ref={childRef}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkStorageLayout;
