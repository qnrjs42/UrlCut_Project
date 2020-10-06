import React, { useState, useCallback, useEffect } from "react";
import { Form, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

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
import {
  LOAD_MY_INFO_REQUEST,
  signupRequestAction,
} from "../actions/action_user";
import { RootState } from "../reducers";
import { IUserReducerState } from "../reducers/reducer_user";
import useInput from "../hooks/useInput";

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
  const { me, signUpLoading, signUpDone } = useSelector<
    RootState,
    IUserReducerState
  >((state) => state.user);

  const [Email, onChangeEmail, setEmail] = useInput("");
  const [Nickname, onChangeNickname, setNickname] = useInput("");
  const [Password, onChangePassword, setPassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput("");

  const [Term, setTerm] = useState(false);

  useEffect(() => {
    // 로그인 한 채로 회원가입 페이지 갔을 때 뒤로가기
    if (me && me.id) {
      uRouter.push("/user");
    }
  }, [me && me.id]);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (signUpDone) {
      setEmail("");
      setNickname("");
      setPassword("");
      setPasswordCheck("");
      setTerm(false);
      uRouter.push("/");
    }
  }, [signUpDone]);

  const onSignUpSubmit = useCallback(() => {
    if (Password !== passwordCheck) {
      return;
    }

    dispatch(signupRequestAction({ data: { Email, Password, Nickname } }));
  }, [Email, Nickname, Password, Term]);

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
    },
    [Term]
  );

  return (
    <>
      {!me ? (
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
                      prefix={
                        <EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                      }
                      placeholder="닉네임"
                      value={Nickname}
                      onChange={onChangeNickname}
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
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
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
                            : Promise.reject("약관에 동의하셔야 합니다."),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <Checkbox
                      name="user-term"
                      checked={Term}
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
      ) : null}
    </>
  );
};

export default signUp;
