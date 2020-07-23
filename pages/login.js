import React, { useState, useCallback } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Layout,
  Row,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import Router from "next/router";

import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/reducer_user";

const { Title } = Typography;

const logIn = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [Email, onChangeEmail, setEmail] = useInput("");
    const [Password, onChangePassword, setPassword] = useInput("");

    const onLogInSubmit = useCallback(() => {
        console.log(Email, Password)

        dispatch(loginRequestAction(Email, Password));

        // 폼, 인풋 초기화
        form.resetFields();
        setEmail(null);
        setPassword(null);

        Router.push("/");
    }, [Email, Password]);

  return (
    <>
      <Layout className="layout" style={{ height: "100vh" }}>
        <Row justify="space-around" align="middle" style={{ padding: "15% 0" }}>
            <div className="app">
              <Title level={2} style={{ textAlign: "center" }}>
                로그인
              </Title>
              <Form form={form} onFinish={onLogInSubmit} style={{ width: "350px" }}>
                <Form.Item required>
                  <Input
                    id="email"
                    prefix={
                      <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter your Email"
                    type="id"
                    value={Email}
                    onChange={onChangeEmail}
                  />
                </Form.Item>

                <Form.Item required>
                  <Input
                    id="password"
                    prefix={
                      <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter your password"
                    type="password"
                    value={Password}
                    onChange={onChangePassword}
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ minWidth: "100%" }}
                      onSubmit={onLogInSubmit}
                    >
                      로그인
                    </Button>
                  </div>
                  {/* Or <a href="/register">register now!</a> */}
                </Form.Item>
              </Form>
            </div>
        </Row>
      </Layout>
    </>
  );
};

export default logIn;
