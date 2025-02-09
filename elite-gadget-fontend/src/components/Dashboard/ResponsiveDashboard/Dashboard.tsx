"use client";
import { getUserInfo } from "@/services/auth.services";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { adminMenu, customerMenu } from "../Sidebar/SidebarItem";
import DashboardSkeleton from "./DashboardSkelton";

const { Header, Content, Footer, Sider } = Layout;

const ResponsiveDashboard = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [mounted, setMounted] = useState(false);
  const userInfo = getUserInfo() as any;
  const roleToLowerCase = userInfo?.role?.toLowerCase();
  const menuItems = roleToLowerCase == "admin" ? adminMenu : customerMenu;

  useEffect(() => {
    setTimeout(() => setMounted(true), 500); // Delay to ensure smooth rendering
  }, []);

  if (!mounted) {
    return <DashboardSkeleton />; // Use Skeleton component
  }

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => console.log(broken)}
        onCollapse={(collapsed, type) => console.log(collapsed, type)}
        className=""
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <a href={item.path}>{item.label}</a>,
          }))}
        />
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
