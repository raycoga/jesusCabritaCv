import React, { memo, useState } from "react";
import { Layout } from "antd";
import "./Sidebar.scss";
const { Sider } = Layout;
const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    ></Sider>
  );
});
Sidebar.displayName = "Sidebar";
export default Sidebar;
