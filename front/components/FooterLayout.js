import React from 'react'
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const FooterLayout = () => {
    return (
      <Footer>
        <Row justify="center">
          <Col span={6} offset={3}>
            <div className="menu__logo">
              <a href="/">Logo</a>
            </div>
            <br />
            <br />
            <br />
            <p style={{ textAlign: "left" }}>
              대표자명: sistinafibel
              <br />
              대표자의 노예: qnrjs42
            </p>
          </Col>

          <Col span={4} offset={1}>
            <h3>INFORMATION</h3>
            <a>서비스 소개</a>
            <br />
            <a>서비스 이용약관</a>
            <br />
            <a>서비스 개인정보 처리방침</a>
            <br />
            <a>서비스 쿠키 수집정책</a>
          </Col>

          <Col span={4}>
            <h3>부가 서비스</h3>
            <a>URL 안전검사</a>
            <br />
            <a>이지북</a>
            <br />
            <a>SI & SM BIZ</a>
          </Col>

          <Col span={4}>
            <h3>Service center</h3>
            <a>채팅 상담</a>
            <br />
            <a>이메일 문의</a>
          </Col>
        </Row>
        <br />
        <br />
        <Row className="footer-terms" justify="center">
          We Are ©2020 Created by sistinafibel And qnrjs42
        </Row>
      </Footer>
    );
}

export default FooterLayout
