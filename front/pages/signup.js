import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox, Typography, Layout, Row } from "antd";
import { UserOutlined, LockOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";

import useInput from "../hooks/useInput";
import { signupRequestAction } from "../reducers/reducer_user";
import NavBar from "../components/MainLayout/NavBar";
import {
  MainLayoutWrapper,
  MainRowPaddingWrapper,
  MainTitleWrapper,
  MainInputWrapper,
  MainButtonWrapper,
  MainUserOutlinedWrapper,
  MainLockOutlinedWrapper,
  FormWrapper,
} from "../css/overlap-styled";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const signUp = () => {
  const uRouter = useRouter();
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);

  const [Email, onChangeEmail, setEmail] = useInput("");
  const [NickName, onChangeNickName, setNickName] = useInput("");
  const [Password, onChangePassword, setPassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== Password);
    },
    [Password]
  );

  const onSignUpSubmit = useCallback(() => {
    if (Password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch(signupRequestAction({ Email, NickName, Password }));

    uRouter.push("/");
  }, [Email, NickName, Password, term]);

  return (
    <>
      <NavBar />
      <MainLayoutWrapper className="layout">
        <MainRowPaddingWrapper justify="space-around" align="middle">
          <div className="app">
            <MainTitleWrapper level={2}>회원가입</MainTitleWrapper>
            <FormWrapper onFinish={onSignUpSubmit}>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "이메일 주소 양식으로 입력하세요",
                  },
                  {
                    required: true,
                    message: "이메일 주소를 입력하세요",
                  },
                ]}
              >
                <MainInputWrapper
                  id="email"
                  size="large"
                  prefix={<MainUserOutlinedWrapper />}
                  placeholder="이메일 주소"
                  value={Email}
                  onChange={onChangeEmail}
                />
              </Form.Item>

              <Form.Item
                name="nickName"
                rules={[
                  {
                    required: true,
                    message: "닉네임을 입력하세요",
                  },
                ]}
              >
                <MainInputWrapper
                  id="id"
                  size="large"
                  prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="닉네임"
                  value={NickName}
                  onChange={onChangeNickName}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 입력하세요",
                  },
                ]}
                hasFeedback
              >
                <MainInputWrapper
                  id="passwordCheck"
                  size="large"
                  prefix={<MainLockOutlinedWrapper />}
                  placeholder="비밀번호"
                  type="password"
                  value={Password}
                  onChange={onChangePassword}
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 입력해주세요",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        setPasswordError(false);
                        return Promise.resolve();
                      }
                      setPasswordError(true);
                      return Promise.reject(
                        "입력한 비밀번호와 동일한지 확인하세요"
                      );
                    },
                  }),
                ]}
              >
                <MainInputWrapper
                  id="password"
                  size="large"
                  prefix={<MainLockOutlinedWrapper />}
                  placeholder="비밀번호 확인"
                  type="password"
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
                />
              </Form.Item>

              <Form.Item
                style={{ textAlign: "right" }}
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Should accept agreement"),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox
                  name="user-term"
                  checked={term}
                  onChange={onChangeTerm}
                >
                  약관에 동의합니다. <a href="">(이용약관)</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <div>
                  <MainButtonWrapper
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    size="large"
                    loading={signUpLoading}
                    onSubmit={onSignUpSubmit}
                  >
                    회원가입하기
                  </MainButtonWrapper>
                </div>
                {/* Or <a href="/register">register now!</a> */}
              </Form.Item>
            </FormWrapper>
          </div>
        </MainRowPaddingWrapper>
      </MainLayoutWrapper>
    </>
  );
};

export default signUp;
