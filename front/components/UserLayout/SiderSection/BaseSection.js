import React, { useState, useCallback } from "react";
import { Layout, Menu, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Router, { withRouter } from 'next/router';
import Link from 'next/link';

const {Sider } = Layout;

const userIndex = '/user';

const userList = [
  {
    key: 1,
    url: userIndex,
  },
  {
    key: 2,
    url: `${userIndex}/manage_url`,
  },
  {
    key: 3,
    url: `${userIndex}/test`,
  },
  {
    key: 4,
    url: `${userIndex}/manage_url`,
  },
  {
    key: 5,
    url: `${userIndex}/test`,
  },
  {
    key: 6,
    url: `${userIndex}/manage_url`,
  },
  {
    key: 7,
    url: `${userIndex}/test`,
  },
  {
    key: 8,
    url: `${userIndex}/manage_url`,
  },
  {
    key: 9,
    url: `${userIndex}/test`,
  },
];

const BaseSection = () => {

    const [Cllapsed, setCllapsed] = useState(false);
    const [Visible, setVisible] = useState(false);
    const [SelectedKey, setSelectedKey] = useState(0);
    const [SiderHeader, setSiderHeader] = useState("user-sider-header-open");

    const toggle = useCallback(() => {
      setCllapsed(!Cllapsed);

      if (SiderHeader === "user-sider-header-open") {
        setSiderHeader("user-sider-header-close");
      } else {
        setSiderHeader("user-sider-header-open");
      }
    }, [Cllapsed]);

    const onClickMenu = useCallback((e) => {
      for(const user of userList) {
        if(user.key === parseInt(e.key)) {
          console.log(e);
          break;
        }
      }
     }, [SelectedKey]);

    return (
      <Sider
        collapsible
        collapsed={Cllapsed}
        onCollapse={toggle}
        className="user-sider"
      >
        <div className="user_logo">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <Menu theme="dark" mode="inline">
          <span className={SiderHeader}>DASHBOARD</span>
          <Menu.Item key="1" icon={<PieChartOutlined />} onClick={onClickMenu}>
            {/* onClick={onPagination} */}
            <Link href="/user">
              <a>
                <span className="user-sider-header-menu-item">관리페이지</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} onClick={onClickMenu}>
            <Link href="/user/manage_url">
              <a>
                <span className="user-sider-header-menu-item">
                  전체 링크 관리
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>MANAGEMENT</span>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">링크 보관함</span>
          </Menu.Item>
          <Menu.Item key="4" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">설정기간 만료</span>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>TOOLS</span>
          <Menu.Item key="5" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">
              빠른 단축URL 생성
            </span>
          </Menu.Item>
          <Menu.Item key="6" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">
              전체 페이지 스크립트
            </span>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>PRIVACY</span>
          <Menu.Item key="7" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">프로필 설정</span>
          </Menu.Item>
          <Menu.Item key="8" icon={<DesktopOutlined />}>
            <span className="user-sider-header-menu-item">결제 정보</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
}

export default withRouter(BaseSection)
