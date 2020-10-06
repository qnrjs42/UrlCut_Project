import { Result } from "antd";
import Router from "next/router";
import { ButtonGreenWrapper } from "../css/overlap-styled";

export const Custom404 = () => {
  return (
    <Result
      style={{ padding: "190px 0" }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <ButtonGreenWrapper type="primary" onClick={() => Router.push("/")}>
          Back Home
        </ButtonGreenWrapper>
      }
    />
  );
};

export default Custom404;
