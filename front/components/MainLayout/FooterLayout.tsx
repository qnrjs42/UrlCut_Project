import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const FooterWrapper = styled(Footer)`
  background-color: #fff;
`;

const ColMainWrapper = styled(Col)`
  min-width: 300px;
  // margin-left: 100px;
  padding-bottom: 20px;
`;

const ColSubWrapper = styled(Col)`
  min-width: 170px;
  padding-bottom: 20px;
`;

const FooterLayout = () => {
  return (
    <FooterWrapper>
      <Row>
        <ColMainWrapper
          order={1}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 8 }}
        >
          <Row>
            <Col md={{ offset: 0 }} lg={{ offset: 2 }} xl={{ offset: 6 }}>
              <div className="menu__logo_footer">
                <a href="/">Link_Project</a>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={{ offset: 0 }} lg={{ offset: 2 }} xl={{ offset: 6 }}>
              <p>
                대표자명: sistinafibel
                <br />
                대표자의 파트너: qnrjs42
              </p>
            </Col>
          </Row>
        </ColMainWrapper>

        <ColSubWrapper span={4} order={2} lg={{ offset: 2 }} xl={{ offset: 3 }}>
          <h3>INFORMATION</h3>
          <a>서비스 소개</a>
          <br />
          <a>서비스 이용약관</a>
          <br />
          <a>서비스 개인정보 처리방침</a>
          <br />
          <a>서비스 쿠키 수집정책</a>
        </ColSubWrapper>

        <ColSubWrapper span={4} order={2}>
          <h3>부가 서비스</h3>
          <a>URL 안전검사</a>
          <br />
          <a>이지북</a>
          <br />
          <a>SI & SM BIZ</a>
        </ColSubWrapper>

        <ColSubWrapper span={4} order={2}>
          <h3>Service center</h3>
          <a>채팅 상담</a>
          <br />
          <a>이메일 문의</a>
        </ColSubWrapper>
      </Row>
      <br />
      <br />
      <Row className="footer-terms" justify="center">
        We Are ©2020 Created by sistinafibel And qnrjs42
      </Row>
    </FooterWrapper>
  );
};

export default FooterLayout;
