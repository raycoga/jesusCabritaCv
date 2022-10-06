import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import "./CvTemplate.scss";
const CvTemplate = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">{children}</Layout>
    </Layout>
  );
};
CvTemplate.displayname = "CvTemplate";
export default CvTemplate;
