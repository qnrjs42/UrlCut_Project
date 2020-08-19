import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Router from 'next/router';

import wrapper from "../store";
import NavBar from '../components/./MainLayout/NavBar';
import PagesUser from './user';

import "antd/dist/antd.css";
import '../css/main.css';
import '../css/Navbar.css';
import "../css/S-Core-Dream-light/s-core-dream.css";


const App = ({ Component }) => {

  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const stickyValue = window.localStorage.getItem("me");
      return stickyValue !== null ? JSON.parse(stickyValue) : null;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("me", JSON.stringify(value));
    }

    if(value) { // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
      if (Router.pathname === "/") {
        Router.push("/user");
      }
    }
  }, [value]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <title>App</title>
      </Head>
      {!value ? (
        <>
        <NavBar />
        <Component />
        </>
      ) : (
        <>
        <PagesUser />
        </>
      )}
      
    </>
  );
      
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);