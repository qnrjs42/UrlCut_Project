import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import wrapper from "../store";

import "antd/dist/antd.css";
import '../css/main.css';
import "../css/user.css";
import '../css/Navbar.css';
import "../css/S-Core-Dream-light/s-core-dream.css";


const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <title>App</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);