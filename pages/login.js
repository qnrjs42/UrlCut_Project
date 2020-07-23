import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox, Typography, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";

const { Title } = Typography;
const { Content } = Layout;

const logIn = () => {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [UserName, onChangeUserName] = useInput("");
  const [Password, onChangePassword] = useInput("");

    const onLogInSubmit = useCallback(() => {
        console.log(UserName, Password)
    }, [UserName, Password]);

  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: "0 50px", margin: "16px 0" }}>
          <div className="app">
            <Title level={2}>Log In</Title>
            <Form onFinish={onLogInSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="userName"
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Enter your userName"
                  type="id"
                  value={UserName}
                  onChange={onChangeUserName}
                />
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    onSubmit={onLogInSubmit}
                  >
                    Log in
                  </Button>
                </div>
                {/* Or <a href="/register">register now!</a> */}
              </Form.Item>
            </Form>
          </div>
          {/* <Row justify="center">
            xs: <576, sm: >=576 md: >=768, lg: >=992, xl: >=1200
            <Col
              xs={32}
              sm={14}
              md={12}
              lg={10}
              xl={7}

            >
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ width: '90%' }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row> */}
        </Content>
      </Layout>
    </>
  );
};

export default logIn;
