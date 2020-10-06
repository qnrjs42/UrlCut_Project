import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav
        className="menu"
        style={{ position: "absolute", zIndex: 5, width: "98%", left: "1%" }}
      >
        <div className="menu__logo">
          <a href="/">Link_Project</a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <MenuOutlined className="menu__mobile-button" onClick={showDrawer} />
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
    </>
  );
};

export default NavBar;
