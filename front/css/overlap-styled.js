import { Button, Row, Col, Card } from "antd";
import styled from "styled-components";

// 2군데 이상 똑같은 코드 중복 방지

export const ButtonPurpleWrapper = styled(Button)`
  border-radius: 5px;
  background-color: rgba(113, 117, 216, 0.9);
  border-color: rgba(113, 117, 216, 0.9);

  &:hover {
    background-color: rgba(113, 117, 216, 0.7);
    border-color: rgba(113, 117, 216, 0.7);
  }

  &:focus {
    background-color: rgba(113, 117, 216, 0.7);
    border-color: rgba(113, 117, 216, 0.7);
  }

  span {
    color: #f6f6f6;
  }
`;

export const ButtonGreenWrapper = styled(Button)`
  border-radius: 5px;
  color: #fff;
  background-color: rgba(94, 203, 161, 0.9);
  border-color: rgba(94, 203, 161, 0.9);

  &:hover {
    background-color: rgba(94, 203, 161, 0.7);
    border-color: rgba(94, 203, 161, 0.7);
    color: #fff;
  }

  &:focus {
    background-color: rgba(94, 203, 161, 0.7);
    border-color: rgba(94, 203, 161, 0.7);
    color: #fff;
  }
`;

export const ButtonBorderWrapper = styled(Button)`
  border-radius: 5px;
`;

export const RowWrapper = styled(Row)`
  padding-top: 20px;
`;

export const ColWrapper = styled(Col)`
  padding-top: 10px;
`;

export const CodeBox = styled.div`
  background-color: #eaeaea;
  padding: 10px;
`;
