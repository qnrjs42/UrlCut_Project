import { Typography, Button, Row, Col, Card, Layout, Input, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

// 2군데 이상 똑같은 코드 중복 방지

/*
    ----- MainLayout -----
*/
export const MainLayoutWrapper = styled(Layout)`
  height: 100vh;
`;

export const MainRowPaddingWrapper = styled(Row)`
  padding: 15% 0px;
`;

export const MainTitleWrapper = styled(Title)`
  text-align: center;
`;

export const FormWrapper = styled(Form)`
  width: 330px;
`;

export const MainInputWrapper = styled(Input)`
  border-radius: 15px;
`;

export const MainButtonWrapper = styled(Button)`
  min-width: 100%;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: rgba(113, 117, 216, 0.8);
  border-color: rgba(113, 117, 216, 0.8);

  &:hover {
    background-color: rgba(113, 117, 216, 0.3);
    border-color: rgba(113, 117, 216, 0.3);
  }

  &:focus {
    background-color: rgba(113, 117, 216, 0.8);
    border-color: rgba(113, 117, 216, 0.8);
  }

  span {
    color: #f6f6f6;
  }
`;

export const MainUserOutlinedWrapper = styled(UserOutlined)`
  color: rgba(0, 0, 0, 0.25);
`;

export const MainLockOutlinedWrapper = styled(LockOutlined)`
  color: rgba(0, 0, 0, 0.25);
`;

/*
    ----- UserLayout -----
*/
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

  // 버튼안에 텍스트
  span {
    color: #f6f6f6;

    // 버튼안에 아이콘
    svg {
      path {
        color: #f6f6f6;
      }
    }
  }
`;

// Green이 배경색일 때 #f6f6f6 는 회색처럼 보인다
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

  span {
    color: #fff;
  }
`;

export const ButtonBorderWrapper = styled(Button)`
  border-radius: 5px;
  span {
    color: #f6f6f6;
  }
`;

export const ButtonDefaultBorderWrapper = styled(Button)`
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
