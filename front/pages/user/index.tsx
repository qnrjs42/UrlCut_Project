import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import UserLayout from "../../components/UserLayout";
import MainManageLayout from "../../components/UserLayout/Dashboard/MainManageLayout";

import { LOAD_MY_INFO_REQUEST } from "../../actions/action_user";
import { IUserReducerState } from "../../reducers/reducer_user";
import { RootState } from "../../reducers";

const UserIndex = () => {
  const dispatch = useDispatch();
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  // SSR 적용 필요
  useEffect(() => {
    console.log("test");
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  useEffect(() => {
    console.log(me);
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

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
