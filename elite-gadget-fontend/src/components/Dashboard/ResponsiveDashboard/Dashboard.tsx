"use client";
import { getUserInfo } from "@/services/auth.services";
import { UserRole } from "@/types";
import { getMenuItems } from "@/utils/sidebarItems";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DashboardSkeleton from "./DashboardSkelton";

const { Content, Sider } = Layout;

const ResponsiveDashboard = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [mounted, setMounted] = useState(false);
  const userInfo = getUserInfo() as { role?: UserRole };
  const menuItems = getMenuItems(userInfo?.role || "CUSTOMER"); // Default to 'customer'

  useEffect(() => {
    setTimeout(() => setMounted(true), 500); // Delay for smooth rendering
  }, []);

  if (!mounted) {
    return <DashboardSkeleton />;
  }

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" className="">
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
          {menuItems.map((item: any) =>
            item.child ? (
              <Menu.SubMenu
                key={item.key}
                icon={React.createElement(item.icon)}
                title={item.label}
              >
                {item.child.map((subItem: any) => (
                  <Menu.Item
                    key={subItem.key}
                    icon={React.createElement(subItem.icon)}
                  >
                    <Link href={subItem.path}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={React.createElement(item.icon)}>
                <Link href={item.path}>{item.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResponsiveDashboard;
