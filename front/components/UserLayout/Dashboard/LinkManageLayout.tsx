import React, { useCallback, useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  LOAD_USER_URLS_REQUEST,
  TABLE_PAGINATION_REQUEST,
  RESET_SEARCH_URLS_REQUEST,
} from "../../../actions/action_url";
import {
  ButtonGreenWrapper,
  ButtonPurpleWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";
import ShortenUrlButton from "../ShortenUrlButton";
import LinkTable from "../LinkTable";
import useRemoveUrl from '../../../hooks/useRemoveUrl';
import useMovementUrl from '../../../hooks/useMovementUrl';
import { RootState } from "../../../reducers";
import { IUrlReducerState } from "../../../reducers/reducer_url";
import { TurlInfo } from "../../../interface";
import useChangePagination from "../../../hooks/useChangePagination";

const { Content } = Layout;
const { Text } = Typography;

const LinkManageLayout = () => {
  const dispatch = useDispatch();
  const {
    urlInfo,
    urlInfoIds,
    loadUserUrlsDone,
    urlCutDone,
    removeUrlsDone,
    moveMentUrlsDone,
    tablePaginationDone,
    searchUrlsDone,
    searchUrlInfo,
  } = useSelector<RootState, IUrlReducerState>((state) => state.url);

  // table - urlInfo
  const [DataSource, setDataSource] = useState<TurlInfo[]>([]);
  const [SelectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  useEffect(() => {
    // 맨 처음 전체 링크 관리 페이지 들어왔을 때 1번부터 15번까지 데이터만 로드
    if (!searchUrlsDone) {
      dispatch({
        type: LOAD_USER_URLS_REQUEST,
        data: {
          page: 1,
          limit: 15,
        },
      });
    }
  }, []);

  // 검색했을 때의 테이블의 데이터
  useEffect(() => {
    // searchUrlsDone true이고 삭제, 보관함 이동, 페이지네이션
    if (searchUrlsDone) {
      // if (removeUrlsDone || moveMentUrlsDone || tablePaginationDone) {
      setDataSource(searchUrlInfo);
      // }
    }
  }, [searchUrlInfo]);

  // 일반적일 때의 테이블의 데이터
  useEffect(() => {
    if (
      (loadUserUrlsDone ||
        urlCutDone ||
        removeUrlsDone ||
        moveMentUrlsDone ||
        tablePaginationDone) &&
      !searchUrlsDone
    ) {
      setDataSource(urlInfo);
    }
  }, [urlInfo]);

  // const changePagination = useCallback(
  //   (e) => {
  //     dispatch({
  //       type: TABLE_PAGINATION_REQUEST,
  //       data: {
  //         sender: "linkManage",
  //         page: e.page,
  //         limit: e.limit,
  //         urlInfoIdsLength: urlInfoIds.length,
  //         // lastId: urlInfo[urlInfo.length - 1].id,
  //       },
  //     });
  //   },
  //   [urlInfoIds]
  // );

  const resetSearch = useCallback(() => {
    dispatch({
      type: RESET_SEARCH_URLS_REQUEST,
    });

    dispatch({
      type: LOAD_USER_URLS_REQUEST,
      data: {
        page: 1,
        limit: 15,
      },
    });
  }, []);

  const getTableSelectedRows = useCallback((rowsData) => {
    console.log(rowsData);
    const ids: string[] = rowsData.map((row: TurlInfo) => {
      if (row !== undefined) return row.id;
    });
    console.log(ids);
    setSelectedRowIds(ids);
  }, []);

  const removeUrl = useRemoveUrl({
    sender: 'linkManage', 
    removeIds: SelectedRowIds,
    searchUrlInfo,
    searchUrlsDone
  });

  const moveMnetUrl = useMovementUrl({
    sender: 'linkManage',
    moveMentIds: SelectedRowIds,
    searchUrlInfo,
    searchUrlsDone
  });

  return (
    <>
      <Content>
        <Row justify="space-between">
          <ColWrapper>
            {searchUrlsDone ? (
              <h3>
                단축 URL 관리 |{" "}
                <Text mark>검색결과 총 {searchUrlInfo.length} 건</Text>
              </h3>
            ) : (
              <h3>단축 URL 관리</h3>
            )}
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
            {searchUrlsDone ? (
                <Col>
                  <ButtonPurpleWrapper
                    type="primary"
                    size="large"
                    onClick={resetSearch}
                  >
                    검색 지우기
                  </ButtonPurpleWrapper>
                </Col>
            ) : null}
            <Col>
              <ButtonGreenWrapper
                type="primary"
                size="large"
                onClick={moveMnetUrl}
              >
                보관함 이동
              </ButtonGreenWrapper>
            </Col>
          </Row>

          <LinkTable
          sender="linkManage"
            getTableSelectedRows={(rows: TurlInfo[]) =>
              getTableSelectedRows(rows)
            }
            dataSource={DataSource}
            urlInfoIds={!searchUrlsDone ? urlInfoIds.length : searchUrlInfo.length}
            // changePagination={changePagination}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkManageLayout;
