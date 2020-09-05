import React, { useCallback, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequestAction } from "../../reducers/reducer_user";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";

const NavBar = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <nav
        className="menu"
        style={{ position: "absolute", zIndex: 5, width: "97%", left: "3%" }}
      >
        <div className="menu__logo">
          <a href="/">LP</a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <UnorderedListOutlined />
          </Button>
          <Drawer
            title="&nbsp; Link_Project"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
