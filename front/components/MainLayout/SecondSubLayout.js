import React from "react";
import { Row, Col, Button, Layout, Badge, Card } from "antd";

const SecondSubLayout = () => {
  return (
    <Layout className="layout sub-layout-two">
      <Row justify="center">
        <Badge
          className="site-badge-count-109"
          count={`브랜딩 서비스`}
          style={{
            backgroundColor: "#52c41a",
            width: "110px",
            height: "30px",
            paddingTop: "6px",
          }}
        />
      </Row>
      <br />
      <Row justify="center">
        <h1>조금 더 특별한 서비스</h1>
      </Row>

      <Row justify="center">
        <p className="sub-layout-font-medium">
          사용자 니즈에 맞춰 기능을 개선하고, 연구 개발하고 있습니다.
          <br />
          차별화된 서비스를 통해 성공적인 마케팅을 시작하세요.
        </p>
      </Row>
      <br />
      <Row justify="center">
        <Col
          xs={{ order: 2 }}
          sm={{ order: 2 }}
          md={{ order: 1 }}
          lg={{ order: 1 }}
          xl={{ order: 1 }}
        >
          <img className="sub-layout-two-image" src={`../static/IU4.jpg`} />
        </Col>
        <Col
          offset={1}
          xs={{ order: 1 }}
          sm={{ order: 1 }}
          md={{ order: 2 }}
          lg={{ order: 2 }}
          xl={{ order: 2 }}
          style={{ textAlign: "center" }}
        >
          <br />
          <h2>
            기업의 도메인으로 사용 가능한
            <br /> '브랜딩 서비스'
          </h2>
          <br />
          <p className="sub-layout-font-medium">
            VOLA의 도메인을 사용하지 않고 회원이 보유하고 있는 도메인으로
            <br />
            사용할 수 있습니다. 단독으로 사용할 수 있어 브랜딩에 효과적입니다.
          </p>
        </Col>
      </Row>
      <br />
      <br />

      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <br />
          <h2>
            엑셀파일로 단축링크를 쉽고 빠르게!
            <br /> '대량 변환 프로그램'
          </h2>
          <br />
          <p className="sub-layout-font-medium">
            빠른 시간내에 대량으로 단축링크가 필요한 경우 엑셀파일
            <br />
            업로드만으로 매우 빠르게 대량변환이 가능한 프로그램이 유용하게
            <br />
            사용될 수 있습니다.
          </p>
        </Col>
        <Col offset={1}>
          <img className="sub-layout-two-image" src={`../static/IU5.jpg`} />
        </Col>
      </Row>
      <br />
      <br />

      <div className="site-card-wrapper">
        <Row justify="center">
          <Col span={9} xs={{ order: 1 }} className="sub-layout-two-card-col">
            <Card
              title="365 X 24 빠르고 안정적인 서비스"
              className="sub-layout-two-card"
            >
              앞선 기술력과 노하우를 바탕으로 항상 빠르고 안정적인 서비스를
              제공합니다. 언제나 최고의 서비스를 이용하실 수 있도록 최선을
              다하겠습니다.
            </Card>
          </Col>
          <Col
            span={9}
            offset={1}
            xs={{ order: 2, offset: 0 }}
            md={{ order: 2, offset: 1 }}
            className="sub-layout-two-card-col"
          >
            <Card
              title="디바이스 제한 없이 언제 어디서나"
              className="sub-layout-two-card"
            >
              PC환경은 물론 모바일, 태블릿 등 어떠한 디바이스에서도 언제
              어디서나 서비스 이용에 불편함이 없도록 UI & UX 개선 작업에 꾸준히
              노력하고 있습니다.
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <div className="site-card-wrapper">
        <Row justify="center">
          <Col span={9} xs={{ order: 1 }} className="sub-layout-two-card-col">
            <Card
              title="빠른 해결을 위한 고객센터 운영"
              className="sub-layout-two-card"
            >
              서비스 이용에 있어 불편함이 있거나 문의 내용에 대해 실시간
              채팅상담, 이메일 문의를 통해 빠른 문제해결 될 수 있도록 고객센터를
              운영하고 있습니다.
            </Card>
          </Col>
          <Col
            span={9}
            offset={1}
            xs={{ order: 2, offset: 0 }}
            md={{ order: 2, offset: 1 }}
            className="sub-layout-two-card-col"
          >
            <Card
              title="맞춤형 커스터마이징 지원"
              className="sub-layout-two-card"
            >
              사용자 요구사항을 반영한 SI 지원이 필요한 경우, 전문 상담사와의
              기능에 대한 자세한 상담을 통해, 최적화된 맞춤형 커스터마이징
              개발을 지원합니다.
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default SecondSubLayout;
