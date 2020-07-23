import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import wrapper from "../store";
import NavBar from '../components/NavBar';

import "antd/dist/antd.css";
import '../css/main.css'


const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <title>App</title>
      </Head>
      <NavBar />
      <Component />
    </>
  );
      
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);