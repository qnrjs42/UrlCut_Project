import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const RowWrapper = styled(Row)`
  padding: 10px 25px;
  background-color: #fff;
`;

const FooterLayout = () => {
  return (
    <>
      <RowWrapper className="footer-terms" justify="space-between">
        <Col>©2020 Link_Project All rights reserved.</Col>
        <Col>Design and Developed by Link_Project</Col>
      </RowWrapper>
    </>
  );
};

export default FooterLayout;
