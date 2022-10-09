import React, { memo } from "react";
import Header from "../Header/Header";
import { Col, Divider, Row } from "antd";
import Experience from "../Experience/Experience";

const Content = memo(() => {
  return (
    <div
      style={{
        padding: 24,
        minHeight: "100vh",
      }}
    >
      <Header />
      <Divider></Divider>
      <Experience />
    </div>
  );
});
Content.displayName = "Content";
export default Content;
