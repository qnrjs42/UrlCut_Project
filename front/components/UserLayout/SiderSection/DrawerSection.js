import React, { useState, useCallback } from "react";
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
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";

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
  const router = useRouter();
  const [Visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // 페이지가 새고로침 되어도 메뉴가 선택 됨
  const onChangeKey = useCallback(() => {
    for (const list of userList) {
      // 현재페이지가 정의된 페이지면 정의된 key 반환
      if (router.asPath === list.url || router.asPath === "/user/index") {
        return list.key;
      }
    }
    return "1";
  });

  return (
    <>
      <div className="mobile-sider-on-off">
        <MenuOutlined onClick={showDrawer} />

        <Drawer
          title="Link_Project"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={Visible}
          getContainer={false}
        >
          <Menu mode="inline" selectedKeys={`${onChangeKey()}`}>
            <span className="user-sider-header-open">DASHBOARD</span>
            <Menu.Item
              key="dashboard_main"
              icon={<AppstoreOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[0].url}/index`}>
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
              <Link href={"/user/[userPages]"} as={`${userList[1].url}`}>
                <a>
                  <span>전체 링크 관리</span>
                </a>
              </Link>
            </Menu.Item>

            <span className="user-sider-header-open">MANAGEMENT</span>
            <Menu.Item
              key="management_link_storage"
              icon={<FolderOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[2].url}`}>
                <a>
                  <span>링크 보관함</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="management_expired"
              icon={<DesktopOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[3].url}`}>
                <a>
                  <span>설정기간 만료</span>
                </a>
              </Link>
            </Menu.Item>

            <span className="user-sider-header-open">LINK OPTION</span>
            <Menu.Item
              key="link_option_multi_links"
              icon={<CarryOutOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[4].url}`}>
                <a>
                  <span>멀티링크</span>
                </a>
              </Link>
            </Menu.Item>

            <span className="user-sider-header-open">TOOLS</span>
            <Menu.Item
              key="tools_create_quick_link"
              icon={<FileAddOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[5].url}`}>
                <a>
                  <span>빠른 단축 URL 생성</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="tools_full_page_script"
              icon={<GoldOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[6].url}`}>
                <a>
                  <span>전체 페이지 스크립트</span>
                </a>
              </Link>
            </Menu.Item>

            <span className="user-sider-header-open">PRIVACY</span>
            <Menu.Item
              key="privacy_profile"
              icon={<TeamOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[7].url}`}>
                <a>
                  <span>프로필 설정</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="privacy_payment"
              icon={<CreditCardOutlined />}
              onClick={onClose}
            >
              <Link href={"/user/[userPages]"} as={`${userList[8].url}`}>
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
