import Head from "next/head";
import wrapper from "../store";

import "antd/dist/antd.css";
import "../css/antd-overriding.css";
import "../css/main.css";
import "../css/user.css";
import "../css/Navbar.css";
import { AppProps } from "next/app";

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        ></meta>
        <title>App</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
