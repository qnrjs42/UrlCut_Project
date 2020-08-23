import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import UserPages from "./user";

const Home = () => {
  const { me } = useSelector((state) => state.user);

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

    // if (me) {
    //   // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
    //   if (Router.pathname === "/") {
    //     Router.push("/user");
    //   }
    // }
  }, [value]);
  return (
    <>
      {!value ? (
        <AppLayout />
      ) : (
        <UserPages />
      )}
    </>
  );
}

export default Home;