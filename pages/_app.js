import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import wrapper from "../store";

import "antd/dist/antd.css";
import '../css/main.css'

const App = ({ Component, pagePorps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>App</title>

      </Head>
      <Component {...pagePorps} />
    </>
  );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);