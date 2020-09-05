import React, { useCallback } from "react";
import { Form, Checkbox, Row } from "antd";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/reducer_user";
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

const logIn = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [Email, onChangeEmail, setEmail] = useInput("");
  const [Password, onChangePassword, setPassword] = useInput("");

  const uRouter = useRouter();
  const { register, handleSubmit } = useForm();

  const onLogInSubmit = useCallback(() => {
    console.log(Email, Password);

    dispatch(loginRequestAction(Email, Password));

    // 폼, 인풋 초기화
    form.resetFields();
    setEmail(null);
    setPassword(null);

    uRouter.push("/user");
  }, [Email, Password]);

  return (
    <>
      <NavBar />
      <MainLayoutWrapper className="layout">
        <MainRowPaddingWrapper justify="space-around" align="middle">
          <div className="app">
            <MainTitleWrapper level={2}>로그인</MainTitleWrapper>
            <FormWrapper
              form={form}
              // onFinish={handleSubmit(onLogInSubmit)}
              onFinish={onLogInSubmit}
            >
              <Form.Item required>
                <MainInputWrapper
                  name="email"
                  id="email"
                  size="large"
                  prefix={<MainUserOutlinedWrapper />}
                  placeholder="이메일"
                  type="id"
                  value={Email}
                  onChange={onChangeEmail}
                  // ref={register({ required: true })}
                />
              </Form.Item>

              <Form.Item required>
                <MainInputWrapper
                  name="password"
                  id="password"
                  size="large"
                  prefix={<MainLockOutlinedWrapper />}
                  placeholder="패스워드"
                  type="password"
                  value={Password}
                  onChange={onChangePassword}
                  // ref={register({ required: true })}
                />
              </Form.Item>

              <Form.Item valuePropName="checked">
                <Checkbox id="rememberMe">Remember me</Checkbox>
                <a
                  className="login-form-forgot"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  forgot password
                </a>
                <div>
                  <br />
                  <MainButtonWrapper
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    size="large"
                    onSubmit={onLogInSubmit}
                  >
                    로그인
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

export default logIn;
