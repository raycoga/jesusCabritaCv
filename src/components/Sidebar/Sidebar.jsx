import React, { memo, useState } from "react";
import { Layout } from "antd";
import "./Sidebar.scss";
import Avatar from "../Avatar/Avatar";
const { Sider } = Layout;
const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      className="custom-sider"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Avatar collapsed={collapsed} />
      12
    </Sider>
  );
});
Sidebar.displayName = "Sidebar";
export default Sidebar;
