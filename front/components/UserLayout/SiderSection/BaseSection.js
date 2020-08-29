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
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';

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

    const router = useRouter();
    const [Cllapsed, setCllapsed] = useState(false);
    const [Title, setTitle] = useState('Link_Project');
    const [MenuSelectedKey, setMenuSelectedKey] = useState(1);
    const [SiderHeader, setSiderHeader] = useState("user-sider-header-open");

    const toggle = useCallback(() => {
      setCllapsed(!Cllapsed);

      setTitle(Cllapsed ? 'Link_Project' : 'LP')

      if (SiderHeader === "user-sider-header-open") {
        setSiderHeader("user-sider-header-close");
      } else {
        setSiderHeader("user-sider-header-open");
      }
    }, [Cllapsed]);

    // 페이지가 새고로침 되어도 메뉴가 선택 됨
    const onChangeKey = useCallback(() => {
      for(const list of userList) {
        // 현재페이지가 정의된 페이지면 정의된 key 반환
        if(router.asPath === list.url || router.asPath === '/user/index') {
          return list.key;
        }
      }
      return '1';
    })

    return (
      <Sider
        collapsible
        collapsed={Cllapsed}
        onCollapse={toggle}
        className="user-sider"
      >
        <div className="user_logo">
          <Link href="/">
            {/* 새로고침한다고 보면 됨 */}
            <a>{Title}</a>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={`${onChangeKey()}`}>
          <span className={SiderHeader}>DASHBOARD</span>
          <Menu.Item key="dashboard_main" icon={<AppstoreOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[0].url}/index`}>
              <a>
                <span className="user-sider-header-menu-item">관리페이지</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="dashboard_link" icon={<ApartmentOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[1].url}`}>
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
            <Link href="/user/[userPages]" as={`${userList[2].url}`}>
              <a>
                <span className="user-sider-header-menu-item">링크 보관함</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="management_expired" icon={<DesktopOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[3].url}`}>
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
            <Link href="/user/[userPages]" as={`${userList[4].url}`}>
              <a>
                <span className="user-sider-header-menu-item">멀티링크</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Divider />

          <span className={SiderHeader}>TOOLS</span>
          <Menu.Item key="tools_create_quick_link" icon={<FileAddOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[5].url}`}>
              <a>
                <span className="user-sider-header-menu-item">
                  빠른 단축 URL 생성
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="tools_full_page_script" icon={<GoldOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[6].url}`}>
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
            <Link href="/user/[userPages]" as={`${userList[7].url}`}>
              <a>
                <span className="user-sider-header-menu-item">프로필 설정</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="privacy_payment" icon={<CreditCardOutlined />}>
            <Link href="/user/[userPages]" as={`${userList[8].url}`}>
              <a>
                <span className="user-sider-header-menu-item">결제 정보</span>
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
}

export default withRouter(BaseSection);
