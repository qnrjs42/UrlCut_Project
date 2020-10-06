import React, { useState, useCallback } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  ApartmentOutlined,
  FolderOutlined,
  DesktopOutlined,
  CarryOutOutlined,
  FileAddOutlined,
  GoldOutlined,
  TeamOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { userList, useChangeKey } from "./UserList";

const { Sider } = Layout;

const SiderMenu = () => {
  const [Cllapsed, setCllapsed] = useState(false);
  const [Title, setTitle] = useState("Link_Project");
  const [SiderHeader, setSiderHeader] = useState("user-sider-header-open");
  const currentKey = useChangeKey();

  const toggle = useCallback(() => {
    setCllapsed(!Cllapsed);

    setTitle(Cllapsed ? "Link_Project" : "LP");

    if (SiderHeader === "user-sider-header-open") {
      setSiderHeader("user-sider-header-close");
    } else {
      setSiderHeader("user-sider-header-open");
    }
  }, [Cllapsed]);

  return (
    <Sider
      collapsible
      collapsed={Cllapsed}
      onCollapse={toggle}
      className="user-sider"
    >
      <div className="user_logo">
        <Link href={`${userList[0].url}/index`}>
          {/* 새로고침한다고 보면 됨 */}
          <a>{Title}</a>
        </Link>
      </div>
      <Menu mode="inline" selectedKeys={currentKey()}>
        <span className={SiderHeader}>DASHBOARD</span>
        <Menu.Item key="dashboard_main" icon={<AppstoreOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[0].url}/index`}>
            <a>
              <span>관리페이지</span>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="dashboard_link" icon={<ApartmentOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[1].url}`}>
            <a>
              <span>전체 링크 관리</span>
            </a>
          </Link>
        </Menu.Item>

        <span className={SiderHeader}>MANAGEMENT</span>
        <Menu.Item key="management_link_storage" icon={<FolderOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[2].url}`}>
            <a>
              <span>링크 보관함</span>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="management_expired" icon={<DesktopOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[3].url}`}>
            <a>
              <span>설정기간 만료</span>
            </a>
          </Link>
        </Menu.Item>

        <span className={SiderHeader}>LINK OPTION</span>
        <Menu.Item key="link_option_multi_link" icon={<CarryOutOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[4].url}`}>
            <a>
              <span>멀티링크</span>
            </a>
          </Link>
        </Menu.Item>

        <span className={SiderHeader}>TOOLS</span>
        <Menu.Item key="tools_create_quick_link" icon={<FileAddOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[5].url}`}>
            <a>
              <span>빠른 단축 URL 생성</span>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="tools_full_page_script" icon={<GoldOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[6].url}`}>
            <a>
              <span>전체 페이지 스크립트</span>
            </a>
          </Link>
        </Menu.Item>

        <span className={SiderHeader}>PRIVACY</span>
        <Menu.Item key="privacy_profile" icon={<TeamOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[7].url}`}>
            <a>
              <span>프로필 설정</span>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="privacy_payment" icon={<CreditCardOutlined />}>
          <Link href={"/user/[userPages]"} as={`${userList[8].url}`}>
            <a>
              <span>결제 정보</span>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
