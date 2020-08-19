import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import styled from 'styled-components';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = () => {

    const [Cllapsed, setCllapsed] = useState(false);
    const [SiderHeader, setSiderHeader] = useState("user-sider-header-open");
    const [SiderHeaderIcon, setSSiderHeaderIcon] = useState("user-sider-header-open");

    const toggle = () => {
      setCllapsed(!Cllapsed);

      if (SiderHeader === "user-sider-header-open") {
        setSiderHeader("user-sider-header-close");
      } else {
        setSiderHeader("user-sider-header-open");
      }
    };


    return (
      <>
        <Sider collapsible collapsed={Cllapsed} onCollapse={toggle}>
          <div className="user_logo">
            <a href="/">Logo</a>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">

            <span className={SiderHeader}>DASHBOARD</span>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <span className="user-sider-header-menu-item">관리페이지</span>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">
                전체 링크 관리
              </span>
            </Menu.Item>
            <Menu.Divider />

            <span className={SiderHeader}>MANAGEMENT</span>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">링크 보관함</span>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">설정기간 만료</span>
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">링크 패키지</span>
            </Menu.Item>
            <Menu.Divider /> 

            <span className={SiderHeader}>TOOLS</span>
            <Menu.Item key="6" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">
                빠른 단축URL 생성
              </span>
            </Menu.Item>
            <Menu.Item key="7" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">북마클릿</span>
            </Menu.Item>
            <Menu.Item key="8" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">개발용 API</span>
            </Menu.Item>
            <Menu.Item key="9" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">
                전체 페이지 스크립트
              </span>
            </Menu.Item>
            <Menu.Divider />

            <span className={SiderHeader}>PRIVACY</span>
            <Menu.Item key="10" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">프로필 설정</span>
            </Menu.Item>
            <Menu.Item key="11" icon={<DesktopOutlined />}>
              <span className="user-sider-header-menu-item">결제 정보</span>
            </Menu.Item>
            
          </Menu>
        </Sider>
      </>
    );
}

export default SiderMenu
