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
import { useChangeKey, userList } from "./UserList";

const DrawerSection = () => {
  const [Visible, setVisible] = useState(false);
  const currentKey = useChangeKey();

  const showDrawer = useCallback(() => {
    setVisible(true);
  }, [Visible]);

  const onClose = useCallback(() => {
    setVisible(false);
  }, [Visible]);

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
          <Menu mode="inline" selectedKeys={currentKey()}>
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
              key="link_option_multi_link"
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
