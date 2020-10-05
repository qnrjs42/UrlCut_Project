import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import UserLayout from "../../components/UserLayout";
import MainManageLayout from "../../components/UserLayout/Dashboard/MainManageLayout";

import { LOAD_MY_INFO_REQUEST } from "../../actions/action_user";
import { RootState } from "../../reducers";
import { IUserReducerState } from "../../reducers/reducer_user";

const UserIndex = () => {
  const dispatch = useDispatch();
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  // SSR 적용 필요
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      console.log("2. pages/user/index moved");
      Router.push("/");
    }
  }, [me && me.id]);

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
      ) : null}
    </>
  );
};

export default UserIndex;
