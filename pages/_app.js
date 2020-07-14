import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import 'uikit/dist/css/uikit.css'



const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>App</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
