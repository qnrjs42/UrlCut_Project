import { useCallback, useEffect, useState } from "react";
import { Layout, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { LOAD_STORAGE_URLS_REQUEST } from "../../../actions/action_url";
import {
  ButtonGreenWrapper,
  ButtonBorderWrapper,
  ColWrapper,
} from "../../../css/overlap-styled";

import ShortenUrlButton from "../ShortenUrlButton";
import LinkTable from "../LinkTable";
import { RootState } from "../../../reducers";
import { IUrlReducerState } from "../../../reducers/reducer_url";
import { IurlInfo } from "../../../interface";
import useRemoveUrl from "../../../hooks/useRemoveUrl";
import useMovementUrl from "../../../hooks/useMovementUrl";

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
  } = useSelector<RootState, IUrlReducerState>((state) => state.url);

  // table - urlInfo
  const [DataSource, setDataSource] = useState<IurlInfo[]>([]);
  const [SelectedRowIds, setSelectedRowIds] = useState<string[]>([]);

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
      setSelectedRowIds([]);
    }
  }, [storageUrlInfo]);

  const getTableSelectedRows = useCallback((rowsData) => {
    setSelectedRowIds(rowsData);
  }, []);

  const removeUrl = useRemoveUrl({
    sender: "linkStorage",
    removeIds: SelectedRowIds,
  });

  const moveMentUrl = useMovementUrl({
    sender: "linkStorage",
    moveMentIds: SelectedRowIds,
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
            {/* <Col>
              <Button onClick={testCallback}>테스트용</Button>
            </Col> */}
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
            sender="linkStorage"
            getTableSelectedRows={getTableSelectedRows}
            dataSource={DataSource}
            urlInfoIds={storageUrlInfoIds.length}
          />
        </Card>
      </Content>
      <div className="user-blank-layout"></div>
    </>
  );
};

export default LinkStorageLayout;
