import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit'
import "uikit/dist/js/uikit-icons";

import '../css/marketing.css'



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

export default App;
