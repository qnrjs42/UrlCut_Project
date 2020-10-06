import React, { FunctionComponent, useCallback } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { logoutRequestAction } from "../../../actions/action_user";
import { RootState } from "../../../reducers";
import { IUserReducerState } from "../../../reducers/reducer_user";
import { ImainMenuProps } from "../../../interface";

const RightMenu: FunctionComponent<ImainMenuProps> = (props) => {
  const dispatch = useDispatch();
  const { me } = useSelector<RootState, IUserReducerState>(
    (state) => state.user
  );

  const onLogOutSubmit = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

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
};

export default RightMenu;
