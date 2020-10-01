import React, { useEffect, useState, useRef } from "react";
import { Layout, Row, Col, Card, Progress } from "antd";
import {} from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { ButtonGreenWrapper, RowWrapper } from "../../../css/overlap-styled";
import { LOAD_USER_URLS_REQUEST } from "../../../actions/action_url";
import ShortenUrlButton from "../ShortenUrlButton";
import MainChart from "./MainSection/MainChart";
import LinkTable from "../LinkTable";
import { RootState } from '../../../reducers';
import { IUrlReducerState } from "../../../reducers/reducer_url";
import { IUserReducerState } from "../../../reducers/reducer_user";
import { TurlInfo } from "../../../interface";

const { Content } = Layout;

const CardWrapper = styled(Card)`
  height: 380px;
`;

const MainManageLayout = () => {
  const dispatch = useDispatch();
  const { urlInfo, loadUserUrlsDone, urlCutDone } = useSelector<RootState, IUrlReducerState>(
    (state) => state.url
  );
  const { me } = useSelector<RootState, IUserReducerState>((state) => state.user);

  // table
  const [DataSource, setDataSource] = useState<TurlInfo[]>([]);

  useEffect(() => {
    // 맨 처음 전체 링크 관리 페이지 들어왔을 때 1번부터 5번까지 데이터만 로드
    dispatch({
      type: LOAD_USER_URLS_REQUEST,
      data: {
        page: 1,
        limit: 5,
      },
    });
  }, []);

  useEffect(() => {
    // console.log(loadUserUrlsDone, urlCutDone);
    if (loadUserUrlsDone || urlCutDone) {
      setDataSource(urlInfo);
    }
  }, [urlInfo]);

  return (
    <Content>
      <Row justify="end">
        <ShortenUrlButton />
      </Row>

      <RowWrapper gutter={[16, 16]} justify="center">
        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 8 }}
        >
          <CardWrapper>
            <Row justify="space-between">
              <Col>
                <h3>서비스 현황</h3>
              </Col>
              <Col>
                <ButtonGreenWrapper>
                  <a>서비스정책</a>
                </ButtonGreenWrapper>
              </Col>
            </Row>
            <Row>
              <p className="fontSmall">만료일: 무제한</p>
            </Row>
            <Row>
              <p className="fontSmall">무료 회원</p>
            </Row>
            <Row justify="center">
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#5cc49f",
                  "100%": "#fa6a69",
                }}
                width={150}
                percent={ me ? ((me.service.usedUrl / 500) * 100) : 0}
                format={() => {
                  return (
                    <>
                      사용 건수 <br />
                      {me ? (me.service.usedUrl) : null} 건
                    </>
                  );
                }}
              />
            </Row>
            <br />
            <Row justify="center">
              <p className="fontMedium">월 / 500건 사용가능</p>
            </Row>
            <Row justify="center">
              <p className="fontSmall">
                단축 URL 생성 수는 매월 초기화 됩니다.
              </p>
            </Row>
          </CardWrapper>
        </Col>
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 16 }}
        >
          <CardWrapper>
            <MainChart clickCount={ me ?  (me.clickCount) : null} />
          </CardWrapper>
        </Col>
      </RowWrapper>

      {/* 메인 화면에 보여줄 최근 등록된 링크는 최대 5개 나머지는 전체 리스트 통해 확인 */}
      <RowWrapper justify="center">
        <Col span={24}>
          <Card>
            <Row justify="space-between">
              <Col>
                <h3>최근 등록된 링크</h3>
              </Col>
              <Col>
                <ButtonGreenWrapper>
                  <Link href={"/user/[userPages]"} as={`/user/manage_url`}>
                    <a>전체 리스트</a>
                  </Link>
                </ButtonGreenWrapper>
              </Col>
            </Row>
            <br />
            <br />

            <LinkTable layout={"main"} dataSource={DataSource} />
          </Card>
        </Col>
      </RowWrapper>
    </Content>
  );
};

export default MainManageLayout;
