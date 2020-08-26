import React, { useState } from "react";
import { Layout, Row, Col, Button, Card, Progress, Table } from "antd";
import { LinkOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;

const script1 = `
<script type="text/javascript">var key = "RyazHlyM5103";</script>
<script
  type="text/javascript"
  src="https://vo.la/jShortener">
  </script>
`;

const script2 = `
<script type="text/javascript">
var key = "RyazHlyM5103";
var selector = ".mylink, .content > a, .comments a";
</script>
<script type="text/javascript" src="https://vo.la/jShortener"></script>
`;

const script3 = `
<script type="text/javascript">
var key = "RyazHlyM5103";
var exclude = ["google.com","naver.com"];
</script>
<script type="text/javascript" src="https://vo.la/jShortener"></script>
`;

const FullPageScriptLayout = () => {
  return (
    <Content style={{ margin: "20px 16px" }}>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "20px" }}>
        <Col
          span={16}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 16 }}
        >
          <Card style={{ height: "auto" }}>
            <h3>전체 페이지 스크립트</h3>
            <p>
              이 스크립트를 사용하면 웹 사이트의 URL을 모두 짧게 줄일 수 있으며,
              특정 선택자에서 URL을 타겟팅하려는 경우 선택자를 맞춤 설정할 수
              있습니다. 아래 소스코드는 회원님의 API키가 적용된 소스로 바로
              복사해 적용하시면 됩니다.
            </p>
            <div
              className="code-box"
              style={{ backgroundColor: "#EAEAEA", padding: 10 }}
            >
              <pre>{script1}</pre>
            </div>
            <br />
            <br />

            <h3>맞춤식 셀렉트 선택</h3>
            <p>
              기본적으로 이 스크립트는 페이지의 모든 URL을 짧게 만듭니다. 특정
              URL을 대상으로 하려면 선택 도구 매개 변수를 추가할 수 있습니다.
              아래에서 스크립트가 mylink라는 클래스나. contents컨테이너에 있는
              모든 직접 링크 또는 주석 컨테이너의 모든 링크를 포함하는 URL을
              단축하는 예만 볼 수 있습니다.
            </p>
            <div
              className="code-box"
              style={{ backgroundColor: "#EAEAEA", padding: 10 }}
            >
              <pre>{script2}</pre>
            </div>
            <br />
            <br />

            <h3>도메인 이름 제외</h3>
            <p>
              원하는 경우 도메인 이름을 제외할 수 있습니다. 도메인 이름을
              제외하는 제외 매개 변수를 추가할 수 있습니다. 아래의 예는
              google.com 또는 naver.com에서 URL을 제외한 모든 URL을 줄인
              것입니다.
            </p>
            <div
              className="code-box"
              style={{ backgroundColor: "#EAEAEA", padding: 10 }}
            >
              <pre>{script3}</pre>
            </div>
          </Card>
        </Col>
        <Col
          span={8}
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 8 }}
        >
          <Card style={{ height: "auto" }}>
            <h3>
              <InfoCircleOutlined /> 정보
            </h3>
            <p>
              API키가 외부에 노출이 된다면, 악용될 소지가 있으니, 회원님의
              계정은 물론 API키 보안에 주의하시길 바랍니다.
            </p>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default FullPageScriptLayout;
