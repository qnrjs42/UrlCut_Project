import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Drawer, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,

  UnorderedListOutlined,
} from "@ant-design/icons";

const { Header } = Layout;


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
        <div>
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
                  key="12"
                  icon={<PieChartOutlined />}
                  onClick={onClose}
                >
                  <span>관리페이지</span>
                </Menu.Item>
                <Menu.Item
                  key="13"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>전체 링크 관리</span>
                </Menu.Item>
                <Menu.Divider />

                <span>MANAGEMENT</span>
                <Menu.Item
                  key="14"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>링크 보관함</span>
                </Menu.Item>
                <Menu.Item
                  key="15"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>설정기간 만료</span>
                </Menu.Item>
                <Menu.Item
                  key="16"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>링크 패키지</span>
                </Menu.Item>
                <Menu.Divider />

                <span>TOOLS</span>
                <Menu.Item
                  key="17"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>빠른 단축URL 생성</span>
                </Menu.Item>
                <Menu.Item
                  key="18"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>북마클릿</span>
                </Menu.Item>
                <Menu.Item
                  key="19"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>개발용 API</span>
                </Menu.Item>
                <Menu.Item
                  key="20"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>전체 페이지 스크립트</span>
                </Menu.Item>
                <Menu.Divider />

                <span>PRIVACY</span>
                <Menu.Item
                  key="21"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>프로필 설정</span>
                </Menu.Item>
                <Menu.Item
                  key="22"
                  icon={<DesktopOutlined />}
                  onClick={onClose}
                >
                  <span>결제 정보</span>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </div>
      </>
    );
}

export default DrawerSection
