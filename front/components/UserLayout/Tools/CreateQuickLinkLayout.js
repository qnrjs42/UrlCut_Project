import React from "react";
import { Layout, Row, Col, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { RowWrapper, CodeBox } from "../../../css/overlap-styled";

const { Content } = Layout;

const CreateQuickLinkLayout = () => {
  return (
    <Content>
      <RowWrapper gutter={[16, 16]} justify="center">
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 16 }}
        >
          <Card>
            <h3>빠른 단축 URL</h3>
            <p>
              이 방법을 사용하면 VOLA 서비스에 방문하지 않고도 단축URL을 빠르게
              생성할 수 있습니다. 단, 해당 브라우저를 통해 VOLA사이트에
              마지막으로 로그인한 계정과 연동됩니다. (쿠키데이터 활용됩니다.)
              사용방법은 단축하고자 하는 웹페이지로 이동한 후 브라우저 주소창에
              표기된 URL앞에 https://link_project/q/?u= 를 추가하면 회원님의
              대시보드에 단축URL이 생성됩니다.
            </p>
            <CodeBox>https://link_project/q/?u=URL_OF_SITE</CodeBox>

            <br />
            <br />

            <p>예제들</p>
            <CodeBox>
              https://link_project/q/?u=https://www.google.com
              <br />
              https://link_project/q/?u=naver.com
              <br />
              https://link_project/q/?u=http://www.apple.com/iphone-7/
              <br />
            </CodeBox>

            <br />
            <br />
            <p>메모</p>
            <p>
              이 방법은 해당 웹페이지에서 다른 링크로 이동 되지 않습니다. 단순히
              마지막에 로그인한 VOLA계정에 변환된 단축URL이 회원 관리페이지에
              저장됩니다.
            </p>
          </Card>
        </Col>
        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 8 }}
        >
          <Card>
            <h3>
              <InfoCircleOutlined /> 정보
            </h3>
            <p>
              API키가 외부에 노출이 된다면, 악용될 소지가 있으니, 회원님의
              계정은 물론 API키 보안에 주의하시길 바랍니다.
            </p>
          </Card>
        </Col>
      </RowWrapper>
    </Content>
  );
};

export default CreateQuickLinkLayout;
