import React, { useState } from "react";
import { Menu, Drawer } from "antd";
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
  UnorderedListOutlined
} from "@ant-design/icons";
import Link from 'next/link';

const userIndex = "/user";

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

const DrawerSection = () => {
  const [Visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="mobile-sider-on-off">
        <UnorderedListOutlined onClick={showDrawer} />

        <Drawer
          title="Link_Project"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={Visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Menu>
            <span style={{ padding: "10px 0 10px 0" }}>DASHBOARD</span>
            <Menu.Item
              key="dashboard_main"
              icon={<AppstoreOutlined />}
              onClick={onClose}
            >
              <Link href="/user">
                <a>
                  <span>관리페이지</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="dashboard_link"
              icon={<ApartmentOutlined />}
              onClick={onClose}
            >
              <Link href="/user/manage_url">
                <a>
                  <span>전체 링크 관리</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Divider />

            <span>MANAGEMENT</span>
            <Menu.Item
              key="management_link_storage"
              icon={<FolderOutlined />}
              onClick={onClose}
            >
              <Link href="/user/link_storage">
                <a>
                  <span>
                    링크 보관함
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="management_expired"
              icon={<DesktopOutlined />}
              onClick={onClose}
            >
              <Link href="/user/expired">
                <a>
                  <span>
                    설정기간 만료
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Divider />

            <span>LINK OPTION</span>
            <Menu.Item
              key="link_option_multi_links"
              icon={<CarryOutOutlined />}
              onClick={onClose}
            >
              <Link href="/user/multi_links">
                <a>
                  <span>멀티링크</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Divider />

            <span>TOOLS</span>
            <Menu.Item
              key="tools_create_quick_link"
              icon={<FileAddOutlined />}
              onClick={onClose}
            >
              <Link href="/user/create_quick_link">
                <a>
                  <span>
                    빠른 단축 URL 생성
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="tools_full_page_script"
              icon={<GoldOutlined />}
              onClick={onClose}
            >
              <Link href="/user/full_page_script">
                <a>
                  <span>
                    전체 페이지 스크립트
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Divider />

            <span>PRIVACY</span>
            <Menu.Item
              key="privacy_profile"
              icon={<TeamOutlined />}
              onClick={onClose}
            >
              <Link href="/user/profile">
                <a>
                  <span>
                    프로필 설정
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="privacy_payment"
              icon={<CreditCardOutlined />}
              onClick={onClose}
            >
              <Link href="/user/payment">
                <a>
                  <span>결제 정보</span>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerSection;
