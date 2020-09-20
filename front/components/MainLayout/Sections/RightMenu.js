import React, { useCallback } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { logoutRequestAction } from "../../../reducers/reducer_user";

function RightMenu(props) {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onLogOutSubmit = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  return (
    <>
      {me ? (
        <Menu mode={props.mode}>
          <Menu.Item key="logout">
            <a onClick={onLogOutSubmit}>Logout</a>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode={props.mode}>
          <Menu.Item key="login">
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
}

export default RightMenu;
