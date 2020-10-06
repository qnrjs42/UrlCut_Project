import React, { useCallback, useEffect } from "react";
import { Form } from "antd";
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
  loginRequestAction,
} from "../actions/action_user";
import { IUserReducerState } from "../reducers/reducer_user";
import { RootState } from "../reducers";
import useInput from "../hooks/useInput";

const logIn = () => {
  const uRouter = useRouter();
  const dispatch = useDispatch();
  const { me, logInLoading, logInDone } = useSelector<
    RootState,
    IUserReducerState
  >((state) => state.user);

  const [Email, onChangeEmail, setEmail] = useInput("");
  const [Password, onChangePassword, setPassword] = useInput("");

  useEffect(() => {
    // 로그인 한 채로 로그인 페이지 갔을 때 뒤로가기
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
    // 폼, 인풋 초기화
    if (logInDone) {
      setEmail("");
      setPassword("");

      uRouter.push("/user");
    }
  }, [logInDone]);

  const onLogInSubmit = useCallback(() => {
    // console.log({data: {Email, Password}});
    dispatch(loginRequestAction({ data: { Email, Password } }));
  }, [Email, Password]);

  return (
    <>
      {!me ? (
        <>
          <NavBar />
          <MainLayoutWrapper className="layout">
            <MainRowPaddingWrapper justify="space-around" align="middle">
              <div className="app">
                <MainTitleWrapper level={2}>로그인</MainTitleWrapper>
                <FormWrapper
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
                        loading={logInLoading}
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
      ) : null}
    </>
  );
};

export default logIn;
