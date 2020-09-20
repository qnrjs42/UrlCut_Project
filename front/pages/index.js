import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import AppLayout from "../components/AppLayout";
import UserLayout from "../components/UserLayout";

import MainManageLayout from "../components/UserLayout/Dashboard/MainManageLayout";
import { LOAD_MY_INFO_REQUEST } from "../reducers/reducer_user";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("1. pages/index");
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  // useEffect(() => {
  //   if (me && me.id && Router.pathname === "/") {
  //     console.log("pages/index moved /user");
  //     Router.push("/user");
  //   } else {
  //     console.log("pages/index moved /");
  //     Router.push("/");
  //   }
  // }, [me && me.id]);

  // const [value, setValue] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     const stickyValue = window.localStorage.getItem("me");
  //     return stickyValue !== null ? JSON.parse(stickyValue) : null;
  //   }
  // });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.localStorage.setItem("me", c);
  //   }

  //   if (value) {
  //     // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
  //     if (Router.pathname === "/") {
  //       Router.push("/user");
  //     }
  //   }

  //   // if (me) {
  //   //   // me 정보가 있는 상태에서 루트로 이동 시 /user로 리다이렉션
  //   //   if (Router.pathname === "/") {
  //   //     Router.push("/user");
  //   //   }
  //   // }
  // }, [value]);
  return (
    <>
      {/* {!me ? (
        <AppLayout />
      ) : (
        <UserLayout>
          <MainManageLayout />
        </UserLayout>
      )} */}

      {me ? (
        <>
          <UserLayout>
            <MainManageLayout />
          </UserLayout>
        </>
      ) : (
        <AppLayout />
      )}
    </>
  );
};

export default Home;
