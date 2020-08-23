import React, { useState, useEffect } from 'react'

import AppLayout from '../components/AppLayout';
import UserPages from "./user";
import { useSelector } from 'react-redux';

const Home = () => {
  const { me } = useSelector((state) => state.user);

  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const stickyValue = window.localStorage.getItem("me");
      console.log('value: ', value);
      console.log("stickyValue: ", typeof stickyValue);
      console.log("me: ", me);
      return stickyValue !== null ? JSON.parse(stickyValue) : null;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // window.localStorage.setItem("me", JSON.stringify(value));
      window.localStorage.setItem("me", value);
    }

    // if(value) { // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
    //   if (Router.pathname === "/") {
    //     Router.push("/user");
    //   }
    // }

    if (me) {
      // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
      if (Router.pathname === "/") {
        Router.push("/user");
      }
    }
  }, [value]);
  return (
    <>
      {!me ? (
        <AppLayout />
      ) : (
        <UserPages />
      )}
    </>
  );
}

export default Home;