import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import UserLayout from "../../components/UserLayout";
import MainManageLayout from "../../components/UserLayout/Dashboard/MainManageLayout";

import { LOAD_MY_INFO_REQUEST } from "../../actions/action_user";

const UserIndex = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  // SSR 적용 필요
  useEffect(() => {
    console.log("pages/user");
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     console.log("2. pages/user/index moved");
  //     Router.push("/");
  //   }
  // }, [me && me.id]);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     console.log("pages/user/index moved");
  //     Router.push("/");
  //   }
  // }, [me && me.id]);

  // useEffect(() => {
  //   // me && me.id
  //   console.log("pages/user/index Router:", Router);
  //   if (me && me.id && Router.pathname === "/") {
  //     Router.push("/user");
  //   } else {
  //     Router.push("/");
  //   }
  // }, [me && me.id, Router]);

  return (
    <>
      {me ? (
        <>
          <UserLayout>
            <MainManageLayout />
          </UserLayout>
        </>
      ) : (
        <h1>로그인 안 했어!!</h1>
      )}
    </>
  );
};

export default UserIndex;
