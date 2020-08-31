import React from "react";
import { Row, Col } from "antd";

const FooterLayout = () => {
  return (
    <>
      <Row
        className="footer-terms"
        justify="space-between"
        style={{
          padding: "20px",
          backgroundColor: "rgba(94, 203, 161, 0.9)",
        }}
      >
        <Col>©2020 Link_Project All rights reserved.</Col>
        <Col>Design and Developed by Link_Project</Col>
      </Row>
    </>
  );
};

export default FooterLayout;
