import React, { useState, useCallback } from "react";
import { Layout, Menu, Button } from "antd";
import {
  AppstoreOutlined,
  ApartmentOutlined,
  FolderOutlined,
  DesktopOutlined,
  CarryOutOutlined,
  FileAddOutlined,
  GoldOutlined,
  TeamOutlined,
  CreditCardOutlined
} from "@ant-design/icons";
import Router, { withRouter } from 'next/router';
import Link from 'next/link';

const {Sider } = Layout;

const userIndex = '/user';

const userList = [
  {
    key: "dashboard_main",
    url: userIndex,
  },
  {
    key: "dashboard_link",
    url: `${userIndex}/manage_url`,
  },
  {
    key: "management_link_storage",
    url: `${userIndex}/link_storage`,
  },
  {
    key: "management_expired",
    url: `${userIndex}/expired`,
  },
  {
    key: "link_option_multi_links",
    url: `${userIndex}/multi_links`,
  },
  {
    key: "tools_create_quick_link",
    url: `${userIndex}/create_quick_link`,
  },
  {
    key: "tools_full_page_script",
    url: `${userIndex}/full_page_script`,
  },
  {
    key: "privacy_profile",
    url: `${userIndex}/profile`,
  },
  {
    key: "privacy_payment",
    url: `${userIndex}/payment`,
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
          <Menu.Item
            key="dashboard_main"
            icon={<AppstoreOutlined />}
            onClick={onClickMenu}
          >
            <Link href="/user">
              <a>
                <span className="user-sider-header-menu-item">관리페이지</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="dashboard_link"
            icon={<ApartmentOutlined />}
            onClick={onClickMenu}
          >
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
          <Menu.Item key="management_link_storage" icon={<FolderOutlined />}>
            <Link href="/user/link_storage">
              <a>
                <span className="user-sider-header-menu-item">링크 보관함</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="management_expired" icon={<DesktopOutlined />}>
            <Link href="/user/expired">
              <a>
                <span className="user-sider-header-menu-item">
                  설정기간 만료
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>LINK OPTION</span>
          <Menu.Item key="link_option_multi_links" icon={<CarryOutOutlined />}>
            <Link href="/user/multi_links">
              <a>
                <span className="user-sider-header-menu-item">멀티링크</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>TOOLS</span>
          <Menu.Item key="tools_create_quick_link" icon={<FileAddOutlined />}>
            <Link href="/user/create_quick_link">
              <a>
                <span className="user-sider-header-menu-item">
                  빠른 단축 URL 생성
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="tools_full_page_script" icon={<GoldOutlined />}>
            <Link href="/user/full_page_script">
              <a>
                <span className="user-sider-header-menu-item">
                  전체 페이지 스크립트
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>PRIVACY</span>
          <Menu.Item key="privacy_profile" icon={<TeamOutlined />}>
            <Link href="/user/profile">
              <a>
                <span className="user-sider-header-menu-item">프로필 설정</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="privacy_payment" icon={<CreditCardOutlined />}>
            <Link href="/user/payment">
              <a>
                <span className="user-sider-header-menu-item">결제 정보</span>
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
}

export default withRouter(BaseSection)
