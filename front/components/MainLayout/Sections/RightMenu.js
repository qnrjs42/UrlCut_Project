/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { logoutRequestAction } from "../../../reducers/reducer_user";

function RightMenu(props) {
  const dispatch = useDispatch();
  // const { me } = useSelector((state) => state.user);
  // const [Me, SetMe] = useLocalStorage('me', null);
  const [value, setValue] = useState(() => {
    if(typeof window !== 'undefined') {
      const stickyValue = window.localStorage.getItem("me");
      return stickyValue !== null ? JSON.parse(stickyValue) : null;
    }
    
  });

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem("me", JSON.stringify(value));
    }

  }, [value]);
  

  const onLogOutSubmit = useCallback(() => {
    dispatch(logoutRequestAction());

    setValue(null);
    localStorage.removeItem('me');
  }, []);

  return (
    <>
      {value ? (
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
          <Menu.Item key="signUp">
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